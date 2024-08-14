import { NavigationMenuDemo } from "./navbar";
import Aipng from "../assets/inquireAi2.png";
const NavHeader = () => {
  return (
    <nav className="flex items-center w-full gap-5 px-5 py-4 place-self-start">
      <img className="w-16" loading="lazy" src={Aipng} alt="ai" />
      <div className="flex-1 ">
        <NavigationMenuDemo />
      </div>
      <div className="hidden md:block">
        <p className="p-3 transition border rounded-lg cursor-pointer hover:bg-primary hover:text-primary-foreground">
          FeedBack
        </p>
      </div>
    </nav>
  );
};

export default NavHeader;
