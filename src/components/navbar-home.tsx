import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { Menu, X } from "lucide-react";
import { NavBarMobile } from "./navbar-mobile";
import { useState } from "react";
import { NavbarItems } from "./navbar-items";
import { MediaButton } from "./media-button";

export function NavbarHome() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <nav className="lg:absolute w-full bg-transparent h-20">
      <div className="flex justify-between  w-full h-full max-w-7xl m-auto items-center px-4">
        <Link to="/">
          <img
            src={logo}
            alt="Bella Decor"
            width={150}
            height={150}
            className=""
          />
        </Link>

        <div className="hidden lg:flex h-full items-center gap-4">
          <NavbarItems title="Home" route="/" />
          <NavbarItems title="Cabeceiras" route="/cabeceiras" />
          <NavbarItems title="Poltronas" route="/poltronas" />
          <NavbarItems title="Contato" route="/contato" />
        </div>

        <div className="hidden lg:flex lg:w-20 lg:justify-between lg:items-center">
          <MediaButton
            href="https://api.whatsapp.com/send?phone=5547999950797"
            type="whatsapp"
          />
          <MediaButton
            href="https://www.instagram.com/bobello.dev"
            type="instagram"
          />
        </div>

        <div className="lg:hidden">
          <button onClick={() => {}}>
            {isVisible ? (
              <X
                size={35}
                className="flex lg:hidden "
                onClick={() => setIsVisible(!isVisible)}
              />
            ) : (
              <Menu
                size={35}
                className="flex lg:hidden"
                onClick={() => setIsVisible(!isVisible)}
              />
            )}
          </button>
        </div>
      </div>

      {isVisible && <NavBarMobile />}
    </nav>
  );
}
