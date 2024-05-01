import express from "express";
import cors from "cors";
import 'dotenv/config';
// Importamos la conexion a la DB
import db from "./database/db.js";
// Importamos nuestro enrutador
import blogRoutes from "./routes/routes.js";

const app = express();

app.use(cors())
app.use(express.json())
app.use('/blogs', blogRoutes)

try {
    await db.authenticate()
    console.log('Conexión exitosa a la DB');
} catch (error) {
    console.log(`El error de conexión es: ${error}`);
}

// app.get("/", (req, res) => {
//   res.send("HOLA MUNDO");
// });

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server UP running in http://localhost:${PORT}`);
});