import { Link } from "react-router-dom";
import { NavBarMobileItems } from "./navbar-mobile-items";

export function NavBarMobile() {
  return(
    <div className="w-full h-[calc(100vh-81px)] fixed top-20 bg-white"> 
    <div className="flex flex-col items-stretch justify-center" >
      <Link className="text-slate-950" to='/'>
        <NavBarMobileItems>Home</NavBarMobileItems>
      </Link>
      <Link className="text-slate-950" to='/cabeceiras'>
        <NavBarMobileItems>Cabeceiras</NavBarMobileItems>
      </Link>
      <Link className="text-slate-950" to='/poltronas'>
        <NavBarMobileItems>Poltronas</NavBarMobileItems>
      </Link>
      <Link className="text-slate-950" to='/contato'>
        <NavBarMobileItems>Contato</NavBarMobileItems>
      </Link>
    </div>
  </div>
  )
}