import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";
import { CardProducts } from "../components/card-products";
import axios from 'axios';
import { useEffect, useState } from "react";

interface CardProductsProps {
  product: {
    id: string;
    title: string;
    price: number;
    images: Array<string>;
    description: string;
  };
}

export const ArmChairs = () => {
  const [poltronas, setPoltronas] = useState<CardProductsProps[]>([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://bella-decor-api.vercel.app/poltronas')
        setPoltronas(response.data)
      } catch (error) {
        console.error('Erro ao buscar os dados da API: ', error)
      }
    }

    fetchData()
  }, [])
  return (
    <div className="flex flex-col w-full">
      <Navbar />
      <span className="w-full p-4 mt-10 text-center text-4xl font-bold mb-10">
        Poltronas
      </span>
      <div className="grid grid-cols-1 outline-none md:grid-cols-2 lg:grid-cols-3 auto-rows-[500px]">
        {poltronas.map((item) => {
          return <CardProducts key={item.id} product={item} />;
        })}
      </div>

      <Footer />
    </div>
  );
}
