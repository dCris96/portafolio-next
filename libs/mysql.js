import mysql from "mysql2/promise";

export const myConexion = await mysql.createConnection({
  host: "sql312.infinityfree.com",
  user: "if0_37674013",
  password: "smL1wdA6D0Ee",
  database: "if0_37674013_portafolio",
});
