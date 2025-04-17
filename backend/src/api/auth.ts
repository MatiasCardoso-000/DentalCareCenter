import axios from "axios";
import { User } from "../types/User.interface";

const API = "http://localhost:3000/auth"

export const registerRequest = (user :User) => axios.post(`${API}/register`, user)