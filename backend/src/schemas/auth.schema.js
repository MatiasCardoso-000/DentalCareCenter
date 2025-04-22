"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginSchema = exports.registerSchema = void 0;
var zod_1 = require("zod");
exports.registerSchema = zod_1.default
    .object({
    username: zod_1.default.string({
        required_error: "Username is required",
    }),
    email: zod_1.default
        .string({
        required_error: "Email is required",
    })
        .email({
        message: "Invalid email",
    }),
    password: zod_1.default
        .string({
        required_error: "Password is required",
    })
        .min(6, {
        message: "Password must be at least 6 characters",
    }),
    confirmPassword: zod_1.default
        .string({
        required_error: "Confirm password is required",
    })
        .min(6, { message: "Confirm password must be at leats 6 characters" }),
})
    .superRefine(function (_a, ctx) {
    var confirmPassword = _a.confirmPassword, password = _a.password;
    if (confirmPassword !== password) {
        ctx.addIssue({
            code: "custom",
            message: "The password did not match",
            path: ["confirmPassword"],
        });
    }
});
exports.loginSchema = zod_1.default.object({
    email: zod_1.default
        .string()
        .email(),
    password: zod_1.default
        .string()
        .min(6),
});
