"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
var auth_controller_1 = require("../controllers/auth.controller");
var validateToken_1 = require("../middleware/validateToken");
var validator_middleware_1 = require("../middleware/validator.middleware");
var auth_schema_1 = require("../schemas/auth.schema");
exports.router = express_1.default.Router();
exports.router.post("/register", (0, validator_middleware_1.validateSchema)(auth_schema_1.registerSchema), auth_controller_1.register);
exports.router.post("/login", (0, validator_middleware_1.validateSchema)(auth_schema_1.loginSchema), auth_controller_1.login);
exports.router.post("/logout", auth_controller_1.logout);
exports.router.get("/profile", validateToken_1.authRequired, auth_controller_1.getProfile);
