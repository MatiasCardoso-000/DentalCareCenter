import { NavLink } from "react-router-dom"


export const NavBar = () => {
  return (
    <nav className="absolute  left-[45%] right-[45%] w-full bg-white">
      <ul className="flex gap-6 w-full text-center">
        <li className="font-semibold cursor-pointer hover:text-[#03B4C1] hover:border-b hover:border-[#03B4C1]">
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li className="font-semibold cursor-pointer hover:text-[#03B4C1] hover:border-b hover:border-[#03B4C1]">
          <NavLink to={"/services"}>Services</NavLink>
        </li>
        <li className="font-semibold cursor-pointer hover:text-[#03B4C1] hover:border-b hover:border-[#03B4C1]">
          <NavLink to={"/about"}>About</NavLink>
        </li>
        <li className="font-semibold cursor-pointer hover:text-[#03B4C1] hover:border-b hover:border-[#03B4C1]">
          <NavLink to={"/contact"}>Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}