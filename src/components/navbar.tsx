import logo from '../assets/logo.svg'
import { Menu, X } from "lucide-react";
import { NavBarMobile } from "./navbar-mobile";
import { useState } from "react";
import { NavbarItems } from "./navbar-items";

export function Navbar(){

  const [isVisible, setIsVisible] = useState(false) 

  return(
    <nav className="w-full bg-transparent h-20" >
      <div className="flex w-full h-full max-w-7xl m-auto items-center justify-between px-4" >
        <img src={logo} alt="Bella Decor" width={150} height={150} className="mr-16" />

        <div className='hidden lg:flex items-center gap-4' >
          <NavbarItems title="Home" route="/" />
          <NavbarItems title="Cabeceiras" route="/cabeceiras" />
          <NavbarItems title="Poltronas" route="/poltronas" />
          <NavbarItems title="Contato" route="/contato" />
        </div>
        
        <div>
          <button onClick={() => {}} >
            {isVisible ? 
              <X size={35} className="flex lg:hidden " onClick={() => setIsVisible(!isVisible)} />
              :
              <Menu size={35} className="flex lg:hidden" onClick={() => setIsVisible(!isVisible)} /> 
            }
          </button>
        </div>
      </div>
      
      {isVisible && <NavBarMobile />}

    </nav>
  )
}