import mongoose from "mongoose";

// Función para conectar a la base de datos

export const connectDB = async () => {
  try {
    if (!process.env.MONGO_URI || !process.env.MONGO_DB_NAME) {
      throw new Error(
        "Environment variables MONGO_URI or MONG_DB_NAME are not defined"
      );
    }

    console.log(mongoose.connection.readyState);
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: process.env.MONGO_DB_NAME,
    });
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
