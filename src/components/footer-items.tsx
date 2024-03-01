interface FooterItemsProps {
  title?: string;
  description?: string;
  logo?: string;
}

export function FooterItems({ title, description, logo }: FooterItemsProps) {
  console.log(description);
  console.log(title);
  console.log(logo);
  return (
    <div className="px-4 h-1/4 lg:h-full lg:w-1/4 flex flex-col items-center justify-center text-white">
      {title !== "" && <p className="font-semibold text-lg p-1">{title}</p>}
      {description !== "" && (
        <p className="font-thin text-sm p-1">{description}</p>
      )}
      {logo !== undefined && (
        <img src={logo} alt="Bella Decor" width={150} height={150} />
      )}
    </div>
  );
}
