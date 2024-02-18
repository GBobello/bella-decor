import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";

export function ArmChairs(){
  return(
    <>
      <Navbar />
      <div className="flex flex-row items-start p-4 text-xl font-bold" >Poltronas</div>
      <Footer />
    </>
  )
}