import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";

export function Headboards(){
  return(
      <div className="flex flex-col w-full">
        <Navbar />

        <span className="w-full p-4 mt-10 text-center text-2xl font-bold mb-10" >Cabeceiras</span>

        <div className="flex flex-col justify-center mb-96">

          <div className="flex flex-row p-5">
            <div className="bg-red-500 w-64 h-24">
              teste
            </div>
            <div className="bg-lime-500 h-24 ml-5">
              <h2>MODELO</h2>
              <p className="text-sm " >The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.</p>
            </div>
          </div>    

        </div>



        <Footer />
      </div>
  )
}