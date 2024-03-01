import { CardProducts } from "../components/card-products";
import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";

export function Headboards() {
  return (
    <div className="flex flex-col w-full overflow-x-auto">
      <Navbar />
      <span className="w-full p-4 mt-10 text-center text-4xl font-bold mb-10">
        Cabeceiras
      </span>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[500px]">
        <CardProducts title="Cabeceiras" image="./src/assets/cabeceira.jpg" />
        <CardProducts title="Cabeceiras" image="./src/assets/cabeceira.jpg" />
        <CardProducts title="Cabeceiras" image="./src/assets/cabeceira.jpg" />
        <CardProducts title="Cabeceiras" image="./src/assets/cabeceira.jpg" />
        <CardProducts title="Cabeceiras" image="./src/assets/cabeceira.jpg" />
        <CardProducts title="Cabeceiras" image="./src/assets/cabeceira.jpg" />
      </div>
      <Footer />
    </div>
  );
}
