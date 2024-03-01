import { Link } from "react-router-dom";
import { NavBarMobileItems } from "./navbar-mobile-items";
import { MediaButton } from "./media-button";

export function NavBarMobile() {
  return (
    <div className="w-full h-[calc(100vh-81px)] fixed top-20 bg-white">
      <div className="flex flex-col items-stretch justify-center">
        <Link className="text-slate-950" to="/">
          <NavBarMobileItems>Home</NavBarMobileItems>
        </Link>
        <Link className="text-slate-950" to="/cabeceiras">
          <NavBarMobileItems>Cabeceiras</NavBarMobileItems>
        </Link>
        <Link className="text-slate-950" to="/poltronas">
          <NavBarMobileItems>Poltronas</NavBarMobileItems>
        </Link>
        <Link className="text-slate-950" to="/contato">
          <NavBarMobileItems>Contato</NavBarMobileItems>
        </Link>
        <div className="flex w-48 text-slate-950 p-4 justify-between border-gray-100 ">
          <MediaButton href="tel:+5547999950797" type="phone" />
          <MediaButton href="https://api.whatsapp.com/send?phone=5547999950797" type="whatsapp" />
          <MediaButton href="https://www.instagram.com/bobello.dev" type="instagram" />
          <MediaButton href="mailto:bobello.gabriel@gmail.com" type="email" />
        </div>
      </div>
    </div>
  );
}
