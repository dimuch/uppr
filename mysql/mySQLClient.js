'use strict';
const mysql = require('mysql2');

const ITP_MYSQL_USER = process.env.ITP_MYSQL_USER;
const ITP_MYSQL_PASSWORD = process.env.ITP_MYSQL_PASSWORD;
const ITP_MYSQL_DATABASE = process.env.ITP_MYSQL_DATABASE;
const ITP_MYSQL_URL = process.env.ITP_MYSQL_URL;
const ITP_MYSQL_PORT = process.env.ITP_MYSQL_PORT;

const TIME_OUT_DB_PING = 1000 * 60 * 30; //30sec

const db_pool = mysql.createPool({
  host: ITP_MYSQL_URL,
  port: ITP_MYSQL_PORT,
  user: ITP_MYSQL_USER,
  password: ITP_MYSQL_PASSWORD,
  database: ITP_MYSQL_DATABASE,
  multipleStatements: true,
  waitForConnections: true,
  connectionLimit: 50, // Increased from 10 to 50 for App Router parallel fetches
  queueLimit: 0,
});

let init = true;

function getDBPoolData() {
  if (init) {
    setInterval(makeConnectionDB, TIME_OUT_DB_PING);
  }

  return db_pool;
}

function makeConnectionDB() {
  return new Promise((resolve, reject) => {
    db_pool.getConnection(function (err, connection) {
      if (err) {
        console.log('DB HAS BEEN DISCONNECTED\n', err);
        reject(`DB HAS BEEN DISCONNECTED\n ${err}`);
        return;
      }
      connection.ping();
      connection.release();
      init = false;
      resolve('DB CONNECTION IS READY');
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
    db_pool.end(function (err) {
      if (err) {
        reject(`DB CANT DISCONNECT\n ${err}`);
      }
      resolve();
    });
  });
}

export { getDBPoolData, dbCallWrapper, shutDownDB };
