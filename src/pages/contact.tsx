import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";
import { Input } from "../components/input";
import { MdSend } from "react-icons/md";
import { MediaButton } from "../components/media-button";

export function Contact() {
  function handleSubmit() {
    alert("Mensagem enviada com sucesso!");
  }

  return (
    <div className="flex flex-col w-full overflow-x-auto">
      <Navbar />
      <span className="w-full p-4 mt-10 text-center text-2xl lg:text-4xl font-bold mb-10">
        Fale conosco
      </span>

      <div className=" grid grid-cols-1 md:grid-cols-2 w-full auto-rows-[500px]">
        <div className="flex flex-col p-4 w-full h-full">
          <h1 className="text-lg font-semibold">Localização</h1>
          <span>Rua tal com a esquina aquela, 893</span>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.4504622421437!2d-49.126594687939466!3d-26.920930376544845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94df1c0044e3cebd%3A0xdfa5171f4c866a3d!2sR.%20Mar%20Vermelho%2C%20283%20-%20Velha%20Central%2C%20Blumenau%20-%20SC%2C%2089040-490!5e0!3m2!1spt-BR!2sbr!4v1709255668493!5m2!1spt-BR!2sbr"
            className="w-full h-full pt-6 pb-6 border-0"
            loading="lazy"
          ></iframe>

          <h1 className="text-lg font-semibold">Siga-nos</h1>
          <div className="flex p-2 justify-between w-48">
            <MediaButton href="tel:+5547999950797" type="phone" />
            <MediaButton
              href="https://api.whatsapp.com/send?phone=5547999950797"
              type="whatsapp"
            />
            <MediaButton
              href="https://www.instagram.com/bobello.dev"
              type="instagram"
            />
            <MediaButton href="mailto:bobello.gabriel@gmail.com" type="email" />
          </div>
        </div>

        <div className="flex flex-col p-4 w-full h-full">
          <h1 className="text-lg font-semibold ml-2">Envie-nos uma mensagem</h1>
          <form className="flex flex-col pt-8 w-full h-full" action="submit">
            <Input
              name="name"
              type="name"
              placeholder="Digite seu nome completo"
            />
            <Input name="email" type="email" placeholder="Digite seu e-mail" />
            <textarea
              className="bg-slate-200 p-2 m-2 rounded-md leading-6 resize-none outline-none shadow-lg text-start h-48"
              name="message"
              id="message"
              placeholder="Digite sua mensagem"
            ></textarea>
            <button
              type="button"
              className="flex shadow-lg items-center justify-center border-2 h-10 w-40 ml-2 mt-10"
              onClick={handleSubmit}
            >
              Enviar <MdSend className="ml-2" />
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}
