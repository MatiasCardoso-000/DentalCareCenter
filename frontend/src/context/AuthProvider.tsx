import { useEffect, useState } from "react";
import { User } from "../types/User.interface";
import { registerRequest, loginRequest } from "../../../backend/src/api/auth";
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
      console.log("Este es el usuario que se ha registrado: ", res.data);
    } catch (err: any) {
      setErrors(err.response.data.error);
    }
  };

  const signIn = async (user: User): Promise<void> => {
    try {
      const res = await loginRequest(user);
      if (res.status !== 200) {
        throw new Error("Hubo un error al iniciar sesion");
      }
      setUser(res.data);
      setIsAuthenticated(true);
      console.log("Este es el usuario que se ha logeado : ", res.data);
    } catch (err: any) {
      setErrors(err.response.data.error);
      console.log(err.response.data);
    }
  };


  const logout = ()=> {
    setUser({} as User)
    setIsAuthenticated(false)
  }

  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  return (
    <AuthContext.Provider
      value={{ user, signUp, signIn,logout, isAuthenticated, errors }}
    >
      {children}
    </AuthContext.Provider>
  );
};
