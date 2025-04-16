import { useState } from "react";
import { Link } from "react-router-dom";

export const UserIcon = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className="absolute top-4 right-4 cursor-pointer"
        onClick={toggleMenu}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
          alt="user-icon"
          className="w-[30px]"
        />
      </div>

      <div
        className={`${isOpen ? "block" : "hidden"} absolute top-16 right-4 `}
      >
        <ul className="w-full md:w-[200px]  bg-[#03B4C1] text-white rounded-lg shadow-lg p-4 text-center">
          <Link to={"/register"}>
            <li className="hover:underline">Register</li>
          </Link>
          <Link to={"/login"}>
            <li className="hover:underline">Log in</li>
          </Link>
        </ul>
      </div>
    </>
  );
};
