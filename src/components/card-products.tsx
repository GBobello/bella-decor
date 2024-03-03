import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { CarouselProduct } from "./carousel-product";

interface CardProductsProps {
  product: {
    id: string;
    title: string;
    price: number;
    image_1: string;
    image_2: string;
    image_3: string;
    description: string;
  };
}

export function CardProducts({ product }: CardProductsProps) {

  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <button type="button" className="hover:font-bold ">
          <div className="w-full flex flex-col justify-center items-center text-center">
            <div className="shadow-2xl aspect-square h-64 rounded-2xl overflow-hidden flex justify-center items-center">
              <img
                className="w-full object-cover h-full"
                src={product.image_1}
                alt={product.title}
              />
            </div>
            <span className="p-4">{product.title}</span>
          </div>
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="inset-0 fixed bg-black/50" />
        <Dialog.Content className="fixed inset-0 md:inset-auto  md:left-1/2 md:top-1/2 overflow-hidden md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-[640px] w-full md:h-[60vh] bg-white md:rounded-md flex flex-col outline-none">
          <Dialog.DialogClose className="absolute right-0 top-0 p-1.5 text-slate-950">
            <X className="size-5" />
          </Dialog.DialogClose>

          <div className="w-full h-full flex flex-col justify-center items-center">
            <div>
              <h1 className="font-medium text-5xl mb-2">{product.title}</h1>
              <div className="bg-red-500 w-96 h-96">
                <CarouselProduct slides={[product.image_1, product.image_2, product.image_3]}/>
              </div>
              <h2 className="text-2xl mt-10">{product.description}</h2>
              <h2>R${product.price}</h2>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
