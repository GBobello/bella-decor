import { CardProducts } from "../components/card-products";
import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";
import { CABECEIRAS } from "../data/products";

export function Headboards() {
  return (
    <div className="flex flex-col h-full w-full">
      <Navbar />
      <span className="w-full p-4 mt-10 text-center text-4xl font-bold mb-10">
        Cabeceiras
      </span>

      <div className="grid grid-cols-1 outline-none md:grid-cols-2 lg:grid-cols-3 auto-rows-[500px]">
        {CABECEIRAS.map((item) => {
          return <CardProducts key={item.id} product={item} />;
        })}
      </div>

      <Footer />
    </div>
  );
}
