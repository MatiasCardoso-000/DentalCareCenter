"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRequired = void 0;
var jsonwebtoken_1 = require("jsonwebtoken");
var authRequired = function (req, res, next) {
    var token = req.cookies.token;
    if (!token) {
        res.status(401).json({
            message: "No token, authorization denied",
        });
        return;
    }
    jsonwebtoken_1.default.verify(token, "secret", function (err, user) {
        if (err)
            return res.status(403).json({ message: "Invalid token" });
        req.user = user;
        next();
    });
};
exports.authRequired = authRequired;
