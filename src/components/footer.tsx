// import logo from '../assets/logo.svg'
import logo from "../assets/logo_white.svg";
import { FooterItems } from "./footer-items";

export function Footer() {
  return (
    <footer className="w-full">
      <div className="w-full bg-slate-400 h-80 flex flex-col lg:flex-row">
        <FooterItems logo={logo} />
        <FooterItems title="Telefone" description="(47) 99999-0000" />
        <FooterItems title="E-mail" description="teste@gmail.com" />
        <FooterItems
          title="Endereço"
          description="Rua tal com a esquina aquela"
        />
      </div>
      <div className="w-full bg-slate-800 h-full text-center">
        <p className="text-sm text-slate-100 p-3">
          Copyright 2024 &copy; Bella Decor | Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
