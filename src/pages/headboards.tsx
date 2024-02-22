import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";

export function Headboards(){
  return(
      <div className="flex flex-col w-full">
        <Navbar />

        <span className="w-full p-4 mt-10 text-center text-2xl font-bold mb-10" >Cabeceiras</span>

        <div className="flex justify-center items-center bg-gray-100 p-4">
          <div className="w-full">
            <div className="bg-red-400 md:aspect-square h-64 flex justify-center items-center">
              <span className="text-white text-xl">Imagem do Produto</span>
            </div>
          </div>
          <div className="w-full p-4 md:justify-start">
            <div className="bg-green-300 h-64 flex justify-center items-center">
              <span className="text-white text-xl">Descrição do produto</span>
            </div>
          </div>
        </div>          

        <Footer />
      </div>
  )
}