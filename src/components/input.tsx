interface InputProps {
  placeholder: string;
  name: string;
  type: string;
}

export function Input({ placeholder, name, type }: InputProps) {
  return (
    <input
      className='bg-slate-200 p-2 m-2 rounded-md leading-6 resize-none outline-none shadow-lg text-start'
      placeholder={placeholder}
      name={name}
      type={type}
    />
  );
}
