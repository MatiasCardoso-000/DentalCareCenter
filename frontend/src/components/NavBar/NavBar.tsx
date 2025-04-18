import { NavLink } from "react-router-dom"


export const NavBar = () => {
  return (
    <nav className=" w-full bg-white">
      <ul className="flex gap-6 w-full justify-center">
        <li className="font-semibold cursor-pointer hover:text-[#03B4C1] hover:border-b hover:border-[#03B4C1]">
          <NavLink to={"/"}>Inicio</NavLink>
        </li>
        <li className="font-semibold cursor-pointer hover:text-[#03B4C1] hover:border-b hover:border-[#03B4C1]">
          <NavLink to={"/servicios"}>Servicios</NavLink>
        </li>
        <li className="font-semibold cursor-pointer hover:text-[#03B4C1] hover:border-b hover:border-[#03B4C1]">
          <NavLink to={"/nosotros"}>Sobre Nosotros</NavLink>
        </li>
        <li className="font-semibold cursor-pointer hover:text-[#03B4C1] hover:border-b hover:border-[#03B4C1]">
          <NavLink to={"/contacto"}>Contacto</NavLink>
        </li>
      </ul>
    </nav>
  );
}