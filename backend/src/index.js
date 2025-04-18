"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var authRoutes_1 = require("./routes/authRoutes");
var db_1 = require("./db");
var dotenv_1 = require("dotenv");
var cors_1 = require("cors");
var cookie_parser_1 = require("cookie-parser");
(0, dotenv_1.config)();
var app = (0, express_1.default)();
var PORT = process.env.PORT || 4000;
app.use((0, cors_1.default)({
    origin: "http://localhost:5173"
}));
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use("/auth", authRoutes_1.router);
app.listen(PORT, function () {
    console.log("Server is running on port ".concat(PORT));
});
(0, db_1.connectDB)();
