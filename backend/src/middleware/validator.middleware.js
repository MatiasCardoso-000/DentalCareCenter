"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateSchema = void 0;
var validateSchema = function (schema) { return function (req, res, next) {
    try {
        schema.parse(req.body);
        next();
    }
    catch (error) {
        console.log(error.errors.map(function (error) { return error.message; }));
        res.status(400).json({ error: error.errors.map(function (error) { return error.message; }) });
    }
}; };
exports.validateSchema = validateSchema;
