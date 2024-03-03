import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";
import { CardProducts } from "../components/card-products";
import { POLTRONAS } from "../data/products";

export function ArmChairs() {
  return (
    <div className="flex flex-col w-full">
      <Navbar />
      <span className="w-full p-4 mt-10 text-center text-4xl font-bold mb-10">
        Poltronas
      </span>
      <div className="grid grid-cols-1 outline-none md:grid-cols-2 lg:grid-cols-3 auto-rows-[500px]">
        {POLTRONAS.map((item) => {
          return <CardProducts key={item.id} product={item} />;
        })}
      </div>

      <Footer />
    </div>
  );
}
