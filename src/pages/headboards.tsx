import { useEffect, useState } from "react";
import { CardProducts } from "../components/card-products";
import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";
import axios from 'axios';

interface CardProductsProps {
  product: {
    id: string;
    title: string;
    price: number;
    images: Array<string>;
    description: string;
  };
}

export const Headboards = () => {
  const [cabeceiras, setCabeceiras] = useState<CardProductsProps[]>([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://bella-decor-api.vercel.app/cabeceiras')
        setCabeceiras(response.data)
      } catch (error) {
        console.error('Erro ao buscar os dados da API: ', error)
      }
    }

    fetchData()
  }, [])

  return (
    <div className="flex flex-col h-full w-full">
      <Navbar />
      <span className="w-full p-4 mt-10 text-center text-4xl font-bold mb-10">
        Cabeceiras
      </span>

      <div className="grid grid-cols-1 outline-none md:grid-cols-2 lg:grid-cols-3 auto-rows-[500px]">
        {cabeceiras.map((item) => {
          return <CardProducts key={item.id} product={item} />;
        })}
      </div>

      <Footer />
    </div>
  );
}
