// db.js
import mysql from "mysql2";

export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",  // déjalo vacío si no pusiste contraseña
  database: "auto_ofertas"
});

db.connect((err) => {
  if (err) {
    console.error(" Error al conectar con la base de datos:", err);
  } else {
    console.log(" Conexión exitosa a la base de datos MySQL");
  }
});
