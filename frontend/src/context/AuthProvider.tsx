import { useState } from "react";
import { User } from "../types/User.interface";
import { registerRequest } from "../../../backend/src/api/auth";
import { AuthContext } from "./AuthContext";

interface Params {
  children: React.ReactNode;
}


export const AuthProvider = ({ children }: Params) => {
  const [user, setUser] = useState<User>({} as User);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errors, setErrors] = useState([]);

  const signUp = async (user: User): Promise<void> => {
    try {
      const res = await registerRequest(user);
      setUser(res.data);
      setIsAuthenticated(true);
      console.log("Este es el usuario que se ha registrado: ", res.data);
    } catch (err:any) {
      setErrors(err.response.data);
    }
  };

  return (
    <AuthContext.Provider value={{ user, signUp, isAuthenticated,errors }}>
      {children}
    </AuthContext.Provider>
  );
};
