import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";
import cabeceira from "../assets/cabeceira.jpg"

export function Home() {
  return(
    <>
      <div className="flex flex-col w-full">
        <Navbar /> 
        <div className="flex flex-col items-center bg-slate-100 w-full lg:h-720">
          <div className="h-full w-full items-center justify-center" >
            <img className="w-full object-cover h-full" src={cabeceira} alt="" />
          </div>
        </div>

        <div className="flex w-full h-10"></div>

          <div className="flex items-center justify-center flex-col md:flex lg:flex-row w-full h-738 p-6">
            <div className="">
              <h2 className="text-2xl ml-7" >Sobre nós</h2>
              <div className="p-7 mt-5 items-center justify-center lg:w-520" >
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
              </div>
            </div>

            <div className="flex portrait:hidden h-2/3 w-520 bg-slate-200 justify-center items-center" >
              <img className="w-full h-full object-cover" src={cabeceira} alt="" />
            </div>      
          </div>
      </div>

      <Footer />
    </>
  )
}