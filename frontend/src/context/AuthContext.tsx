import { createContext } from "react";
import { User } from "../types/User.interface";

export const AuthContext = createContext({
  user: {} as User,
  isAuthenticated: false,
  errors: [],
  signUp: async (user:User): Promise<void> => {},
});
