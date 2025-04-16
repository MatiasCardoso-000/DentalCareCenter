import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { RegisterPage } from "./pages/RegisterPage/RegisterPage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { ResetPasswordForm } from "./components/ResetPasswordForm/ResetPassordForm";
import { Home } from "./components/Home/Home";


export const AppRouter = () => {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/register" element={<RegisterPage />}/>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/reset" element={<ResetPasswordForm />}/>
      </Routes>
    </Router>
  )
}