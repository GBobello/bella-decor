import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";

export function Contact(){
  return(
    <>
      <Navbar />
      <div className="flex flex-row items-start p-4 text-xl font-bold" >Contato</div>
      <Footer />
    </>
  )
}