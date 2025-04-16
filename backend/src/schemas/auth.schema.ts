import zod from "zod";

export const registerSchema = zod
  .object({
    username: zod.string({
      required_error: "Username is required",
    }),
    email: zod
      .string({
        required_error: "Email is required",
      })
      .email({
        message: "Invalid email",
      }),
    password: zod
      .string({
        required_error: "Password is required",
      })
      .min(6, {
        message: "Password must be at least 6 characters",
      }),
    confirmPassword: zod
      .string({
        required_error: "Confirm password is required",
      })
      .min(6, { message: "Confirm password must be at leats 6 characters" }),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: "custom",
        message: "The password did not match",
        path: ["confirmPassword"],
      });
    }
  });

export const loginSchema = zod.object({
  email: zod
    .string()
    .email(),
  password: zod
    .string()
    .min(6),
});
