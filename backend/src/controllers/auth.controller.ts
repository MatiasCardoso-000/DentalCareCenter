import { Request, Response } from "express";
import User from "../models/user.model";
import bcrypt from "bcrypt";
import { createToken } from "../libs/jwt";

export const register = async (req: Request, res: Response): Promise<any> => {
  const { username, password, email } = req.body;
  const userFound = await User.findOne({ email });

  if (userFound) {
    return res.status(400).json(["The email is already in use"]);
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const newUser = new User({
      username,
      password: hashedPassword,
      email,
    });

    const userSaved = await newUser.save();

    const token = createToken({ id: userSaved._id });
    res.cookie("token", token);

    return res.json(userSaved);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const userFound = await User.findOne({ email });

  if (!email || !password) {
    throw new Error("Todos los campos son obligatorios");
  }

  try {
    if (!userFound) {
      res.status(400).json({error:["El usuario no existe"]})
      throw new Error("Usuario no encontrado");
    }

    const passwordMatch =
      userFound.password &&
      (await bcrypt.compare(password, userFound.password));

    if (!passwordMatch) {
      res.status(400).json({error:["Contraseña incorrecta"]})
      throw new Error("Contraseña incorrecta");
    }

    const token = createToken({ id: userFound._id });
    res.cookie("token", token);

    res.json(userFound);
  } catch (error: any) {
    console.error(error);
  }
};

export const logout = async (req: Request, res: Response) => {
  res.clearCookie("token");
  res.json("User logged out");
};

export const getProfile = async (
  req: Request,
  res: Response
): Promise<void> => {
  const userID = req.user.payload.id;
  const userFound = await User.findById(userID);

  if (!userFound) {
    throw new Error("User not found");
  }

  try {
    res.json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
    });
  } catch (err: any) {
    res.status(404).json({ message: err.message });
  }
};
