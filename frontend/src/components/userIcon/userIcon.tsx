import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export const UserIcon = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout, isAuthenticated } = useAuth();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  return (
    <>
      <div className="w-full flex justify-end items-center gap-4 absolute top-4 right-4">
        {isAuthenticated && (
          <div className="flex ">
            <p className="font-semibold text-zinc-800">
              Bienvenido {user.username}!
            </p>
          </div>
        )}
        <div className=" cursor-pointer" onClick={toggleMenu}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            alt="user-icon"
            className="w-[30px]"
          />
        </div>
      </div>

      <div
        className={`${isOpen ? "block" : "hidden"} absolute top-16 right-4 `}
      >
        <ul className="w-full md:w-[200px]  bg-[#03B4C1] text-white rounded-lg shadow-lg p-4 text-center">
          {!isAuthenticated ? (
            <div>
              <Link to={"/register"}>
                <li className="hover:underline">Register</li>
              </Link>
              <Link to={"/login"}>
                <li className="hover:underline">Log in</li>
              </Link>
            </div>
          ) : (
            <div>
              <Link to={"/profile"}>
                <li className="hover:underline">Profile</li>
              </Link>
              <Link to={"/"}>
                <li className="hover:underline" onClick={logout}>Log out</li>
              </Link>
            </div>
          )}
        </ul>
      </div>
    </>
  );
};
