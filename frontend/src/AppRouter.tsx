import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { RegisterPage } from "./pages/RegisterPage/RegisterPage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { ResetPasswordForm } from "./components/ResetPasswordForm/ResetPassordForm";
import { Home } from "./components/Home/Home";
import { ServicesPage } from "./pages/ServicesPage/ServicesPage";
import { AppointmentPage } from "./pages/AppointmentPage/AppointmentPage";
import { ContactPage } from "./pages/ContactPage/ContactPage";

export const AppRouter = () => {
  return (
    <main className="overflow-x-hidden">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registro" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/reset" element={<ResetPasswordForm />} />
          <Route path="/perfil" element={<ResetPasswordForm />} />
          <Route path="/servicios" element={<ServicesPage />} />
          <Route path="/contacto" element={<ContactPage />} />
          <Route path="/citas" element={<AppointmentPage />} />
        </Routes>
      </Router>
    </main>
  );
};
