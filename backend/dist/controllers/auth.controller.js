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
exports.getProfile = exports.logout = exports.login = exports.register = void 0;
const user_model_1 = __importDefault(require("../models/user.model"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jwt_1 = require("../libs/jwt");
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password, email } = req.body;
    const userFound = yield user_model_1.default.findOne({ email });
    if (userFound) {
        return res.status(400).json(["The email is already in use"]);
    }
    const hashedPassword = yield bcrypt_1.default.hash(password, 10);
    try {
        const newUser = new user_model_1.default({
            username,
            password: hashedPassword,
            email,
        });
        const userSaved = yield newUser.save();
        const token = (0, jwt_1.createToken)({ id: userSaved._id });
        res.cookie("token", token);
        return res.json(userSaved);
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
});
exports.register = register;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const userFound = yield user_model_1.default.findOne({ email });
    if (!email || !password) {
        throw new Error("Todos los campos son obligatorios");
    }
    try {
        if (!userFound) {
            res.status(400).json({ error: ["El usuario no existe"] });
            throw new Error("Usuario no encontrado");
        }
        const passwordMatch = userFound.password &&
            (yield bcrypt_1.default.compare(password, userFound.password));
        if (!passwordMatch) {
            res.status(400).json({ error: ["Contraseña incorrecta"] });
            throw new Error("Contraseña incorrecta");
        }
        const token = (0, jwt_1.createToken)({ id: userFound._id });
        res.cookie("token", token);
        res.json(userFound);
    }
    catch (error) {
        console.error(error);
    }
});
exports.login = login;
const logout = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.clearCookie("token");
    res.json("User logged out");
});
exports.logout = logout;
const getProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userID = req.user.payload.id;
    const userFound = yield user_model_1.default.findById(userID);
    if (!userFound) {
        throw new Error("User not found");
    }
    try {
        res.json({
            id: userFound._id,
            username: userFound.username,
            email: userFound.email,
        });
    }
    catch (err) {
        res.status(404).json({ message: err.message });
    }
});
exports.getProfile = getProfile;
