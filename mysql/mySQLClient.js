'use strict';
const mysql = require('mysql2');

const ITP_MYSQL_USER = process.env.ITP_MYSQL_USER;
const ITP_MYSQL_PASSWORD = process.env.ITP_MYSQL_PASSWORD;
const ITP_MYSQL_DATABASE = process.env.ITP_MYSQL_DATABASE;
const ITP_MYSQL_URL = process.env.ITP_MYSQL_URL;
const ITP_MYSQL_PORT = process.env.ITP_MYSQL_PORT;

const TIME_OUT_DB_PING = 1000 * 60 * 30; // 30 minutes

const db_pool = mysql.createPool({
  host: ITP_MYSQL_URL,
  port: ITP_MYSQL_PORT,
  user: ITP_MYSQL_USER,
  password: ITP_MYSQL_PASSWORD,
  database: ITP_MYSQL_DATABASE,
  // Security: Disable multiple statements to prevent stacked query attacks
  multipleStatements: false,
  waitForConnections: true,
  connectionLimit: 50, // Increased from 10 to 50 for App Router parallel fetches
  queueLimit: 0,
  // Connection timeout configurations
  connectTimeout: 10000, // 10 seconds to establish connection
  acquireTimeout: 10000, // 10 seconds to acquire connection from pool
  timeout: 10000, // 10 seconds query timeout
});

// Use a more robust initialization flag to prevent race conditions
let initInterval = null;
let isInitialized = false;

function getDBPoolData() {
  // Use atomic check-and-set to prevent race conditions
  if (!isInitialized && initInterval === null) {
    // Set flag immediately to prevent multiple intervals
    isInitialized = true;
    
    // Start connection health check interval
    initInterval = setInterval(() => {
      makeConnectionDB().catch(err => {
        console.error('Connection health check failed:', err);
        // Don't reset isInitialized on error - allow retries
      });
    }, TIME_OUT_DB_PING);
    
    // Perform initial connection check
    makeConnectionDB().catch(err => {
      console.error('Initial connection check failed:', err);
      // Reset flag on initial failure to allow retry
      isInitialized = false;
      initInterval = null;
    });
  }

  return db_pool;
}

function makeConnectionDB() {
  return new Promise((resolve, reject) => {
    db_pool.getConnection(function (err, connection) {
      if (err) {
        console.error('DB HAS BEEN DISCONNECTED\n', err);
        reject(new Error(`DB HAS BEEN DISCONNECTED: ${err.message}`));
        return;
      }
      
      // Ping the connection to check if it's alive
      connection.ping((pingErr) => {
        // Always release the connection back to the pool
        connection.release();
        
        if (pingErr) {
          console.error('Connection ping failed:', pingErr);
          reject(new Error(`Connection ping failed: ${pingErr.message}`));
          return;
        }
        
        resolve('DB CONNECTION IS READY');
      });
    });
  });
}

async function dbCallWrapper(query, mapper, params = []) {
  return new Promise((resolve, reject) => {
    db_pool.query(query, params, (err, rows, fields) => {
      if (err) {
        console.log('ERROR dbCallWrapper', err);
        reject(err);
        return;
      }

      try {
        let result = rows || [];

        if (mapper) {
          result = mapper(rows);
        }

        resolve(result);
      } catch (err) {
        console.log('ERROR dbCallWrapper', err);
        reject(err);
      }
    });
  });
}

function shutDownDB() {
  return new Promise((resolve, reject) => {
    // Clear the health check interval
    if (initInterval) {
      clearInterval(initInterval);
      initInterval = null;
    }
    
    // Reset initialization flag
    isInitialized = false;
    
    // Gracefully close all connections in the pool
    db_pool.end(function (err) {
      if (err) {
        console.error('Error shutting down database pool:', err);
        reject(new Error(`DB CANT DISCONNECT: ${err.message}`));
        return;
      }
      
      console.log('Database pool closed gracefully');
      resolve();
    });
  });
}

export { getDBPoolData, dbCallWrapper, shutDownDB };
