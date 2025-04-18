"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
// Función para conectar a la base de datos
const connectDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const MONGODB_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/turnodentista';
    try {
        if (!MONGODB_URI) {
            throw new Error("Environment variables MONGO_URI or MONG_DB_NAME are not defined");
        }
        console.log(mongoose_1.default.connection.readyState);
        yield mongoose_1.default.connect(MONGODB_URI);
        console.log(mongoose_1.default.connection.readyState);
    }
    catch (err) {
        console.error(err);
        process.exit(1);
    }
});
exports.connectDB = connectDB;
const db = mongoose_1.default.connection;
db.on("error", () => {
    console.error("Error en la conexión a la base de datos");
});
db.on("open", () => {
    console.log("Conexión a la base de datos exitosa");
});
