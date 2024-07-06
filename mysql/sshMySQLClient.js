const mysql = require('mysql2');
const fs = require('fs');

const { Client } = require('ssh2');

const sshClient = new Client();

const dbServer = {
  user: process.env.ITP_MYSQL_USER,
  password: process.env.ITP_MYSQL_PASSWORD,
  database: process.env.ITP_MYSQL_DATABASE,
  host: process.env.ITP_MYSQL_URL,
  port: process.env.ITP_MYSQL_PORT,
};

const fileContent = fs.readFileSync('/Users/dmytro/.ssh/id_rsa_digit_ocean', 'utf-8');
const tunnelConfig = {
  host: process.env.DB_SSH_HOST,
  port: 22,
  username: process.env.DB_SSH_USER,
  privateKey: fileContent,
};
const forwardConfig = {
  srcHost: '127.0.0.1',
  srcPort: 3306,
  dstHost: dbServer.host,
  dstPort: dbServer.port,
};

let connection = null;

function dbSSHConnection() {
  return new Promise((resolve, reject) => {
    sshClient
      .on('ready', () => {
        sshClient.forwardOut(
          forwardConfig.srcHost,
          forwardConfig.srcPort,
          forwardConfig.dstHost,
          forwardConfig.dstPort,
          (err, stream) => {
            if (err) {
              return reject(err);
            }
            const updatedDbServer = {
              ...dbServer,
              stream,
            };
            connection = mysql.createConnection(updatedDbServer);
            connection.connect(function (err) {
              if (err) {
                console.log('DB HAS BEEN DISCONNECTED\n', err);
                reject(`DB HAS BEEN DISCONNECTED\n ${err}`);
                return;
              }
              resolve();
            });
          },
        );
      })
      .connect(tunnelConfig);
  });
}

async function getConnection() {
  if (!connection) {
    await dbSSHConnection();
  }

  return connection;
}

module.exports = {
  getConnection,
};
