import mongoose from "mongoose";
import {  MONGODB_URI } from "./config/config";

// Función para conectar a la base de datos


export const connectDB = async () => {
  
  try {
    if (!MONGODB_URI ) {
      throw new Error(
        "Environment variables MONGO_URI or MONG_DB_NAME are not defined"
      );
    }

    console.log(mongoose.connection.readyState);
    await mongoose.connect(MONGODB_URI);
    console.log(mongoose.connection.readyState);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

const db = mongoose.connection;
db.on("error", () => {
  console.error("Error en la conexión a la base de datos");
});

db.on("open", () => {
  console.log("Conexión a la base de datos exitosa");
});
