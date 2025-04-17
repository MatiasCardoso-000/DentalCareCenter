import { Logo } from "../Logo/Logo";
import { NavBar } from "../NavBar/NavBar";
import { UserIcon } from "../userIcon/userIcon";

export const Header = () => {

  return (
    <header className="flex items-center w-full  m-auto relative">
      <Logo />
      <NavBar />
      <UserIcon />
    </header>
  );
};
