"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const createToken = (payload) => {
    return jsonwebtoken_1.default.sign({ payload, exp: Math.floor(Date.now() / 1000) + 60 * 60 }, "secret");
};
exports.createToken = createToken;
