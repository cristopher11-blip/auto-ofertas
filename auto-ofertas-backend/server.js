import express from "express";
import cors from "cors";
import mysql from "mysql2";

// 1. Conexión a la base de datos
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "auto_ofertas",
});

db.connect((err) => {
  if (err) {
    console.error(" ❌ Error al conectar con la base de datos:", err);
  } else {
    console.log(" ✅ Conexión exitosa a la base de datos MySQL");
  }
});

// 2. Configuración de Express
const app = express();
app.use(cors());
app.use(express.json());

// 3. Ruta para listar vehículos con filtro opcional por tipo
app.get("/vehiculos", (req, res) => {
  console.log(" 📥 Petición recibida en /vehiculos");
  console.log(" Tipo recibido en la URL:", req.query.tipo);

  const tipo = parseInt(req.query.tipo, 10);

  let sql = `
    SELECT v.*, t.nombre_tipo
    FROM vehiculos v
    JOIN vehiculos_tipo t ON v.id_tipo = t.id_tipo
  `;

  const params = [];

  if (!isNaN(tipo)) {
    sql += ` WHERE v.id_tipo = ?`;
    params.push(tipo);
  }

  sql += ` ORDER BY v.marca ASC`;

  db.query(sql, params, (err, rows) => {
    if (err) {
      console.error(" ❌ Error en la consulta:", err);
      return res.status(500).json({ error: "Error en la base de datos" });
    }
    console.log(` ✅ Enviando datos de vehículos${!isNaN(tipo) ? ' filtrados por tipo ' + tipo : ''}`);
    res.json(rows);
  });
});

console.log(" 📄 Archivo server.js cargado correctamente ");

// 4. Iniciar el servidor
app.listen(5000, () => {
  console.log(" 🚀 Servidor backend corriendo en http://localhost:5000");
});
