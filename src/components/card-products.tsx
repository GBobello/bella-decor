interface CardProductsProps {
  image: string;
  title: string;
}

export function CardProducts({ image, title }: CardProductsProps) {
  return (
    <button type="button" className="hover:font-bold">
      <div className="w-full flex flex-col justify-center items-center text-center">
        <div className="shadow-2xl aspect-square h-64 rounded-2xl overflow-hidden flex justify-center items-center">
          <img className="w-full object-cover h-full" src={image} alt={title} />
        </div>
        <span className="p-4">{title}</span>
      </div>
    </button>
  );
}
