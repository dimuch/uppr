"use strict";
const mysql = require("mysql2");

const ITP_MYSQL_USER = process.env.ITP_MYSQL_USER;
const ITP_MYSQL_PASSWORD = process.env.ITP_MYSQL_PASSWORD;
const ITP_MYSQL_DATABASE = process.env.ITP_MYSQL_DATABASE;
const ITP_MYSQL_URL = process.env.ITP_MYSQL_URL;
const ITP_MYSQL_PORT = process.env.ITP_MYSQL_PORT;

const TIME_OUT_DB_PING = 1000 * 15; //30sec

const db_pool = mysql.createPool({
  host: ITP_MYSQL_URL,
  port: ITP_MYSQL_PORT,
  user: ITP_MYSQL_USER,
  password: ITP_MYSQL_PASSWORD,
  database: ITP_MYSQL_DATABASE,
  multipleStatements: true,
  waitForConnections: true,
  connectionLimit: 10,
});

module.exports = {
  getDBPoolData,
  shutDownDB,
};

let init = true;

function getDBPoolData() {
  if (init) {
    setInterval(makeConnectionDB, TIME_OUT_DB_PING);
  }

  return db_pool;
}

function makeConnectionDB() {
  console.log("update", new Date());
  return new Promise((resolve, reject) => {
    db_pool.getConnection(function (err, connection) {
      if (err) {
        console.log("DB HAS BEEN DISCONNECTED\n", err);
        reject(`DB HAS BEEN DISCONNECTED\n ${err}`);
        return;
      }
      connection.ping();
      connection.release();
      init = false;
      resolve("DB CONNECTION IS READY");
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
