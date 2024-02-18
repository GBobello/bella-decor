import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";

export function Headboards(){
  return(
    <>
      <Navbar />
      <div className="flex flex-row items-start p-4 text-xl font-bold" >Cabeceiras</div>
      <Footer />
    </>
  )
}