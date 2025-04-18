"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createToken = void 0;
var jsonwebtoken_1 = require("jsonwebtoken");
var createToken = function (payload) {
    return jsonwebtoken_1.default.sign({ payload: payload, exp: Math.floor(Date.now() / 1000) + 60 * 60 }, "secret");
};
exports.createToken = createToken;
