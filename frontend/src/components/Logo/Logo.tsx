import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <Link to={'/'}>
      <img
        src="../../../public/logo.png"
        alt="logo image"
        className="w-[190px] cursor-pointer"
      />
    </Link>
  );
};
