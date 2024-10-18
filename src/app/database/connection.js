import mysql from "mysql";
import dotenv from "dotenv";

dotenv.config();
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

connection.connect();

/**
 * Execulta um codigo sql com ou sem valores
 * @param {string} sql instução sql a ser execultada
 * @param {string=id | [selection, id]} valores a serem passados para o sql
 * @param {string} messageReject menssagem a ser exibida
 * @returns objeto da Promisse
 * ]
 *
 */
export const consult = (sql, value = "", messageReject) => {
  return new Promise((resolve, reject) => {
    connection.query(sql, value, (error, result) => {
      if (error) return reject(messageReject);
      const row = JSON.parse(JSON.stringify(result));
      return resolve(row);
    });
  });
};

export default connection;
