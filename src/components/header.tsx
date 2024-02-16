import { Link } from "react-router-dom";
import logo from '../assets/logo.svg'
import { Menu, X } from "lucide-react";
import { NavBarMobile } from "./navbar-mobile";
import { useState } from "react";

export function Header(){

  const [isVisible, setIsVisible] = useState(false) 

  return(
    <nav className="w-full bg-transparent h-20" >
      <div className="w-full h-full max-w-7xl m-auto flex items-center justify-between px-4" >
        <img src={logo} alt="Bella Decor" width={150} height={150} className="mr-16" />

        <div className='hidden lg:flex items-center gap-4' >
          <Link className="text-slate-950 font-normal" to='/'>Home</Link>
          <Link className="text-slate-950 font-normal" to='/cabeceiras'>Cabeceiras</Link>
          <Link className="text-slate-950 font-normal" to='/poltronas'>Poltronas</Link>
          <Link className="text-slate-950 font-normal" to='/contato'>Contato</Link> 
        </div>
        
        <div>
          <button onClick={() => {}} >
            {isVisible ? 
              <X size={35} className="flex lg:hidden" onClick={() => setIsVisible(!isVisible)} />
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