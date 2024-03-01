import { FaInstagram, FaPhone, FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

interface MediaButtonProps {
  type: string;
  href: string;
}

export function MediaButton({ type, href }: MediaButtonProps) {
  return (
    <div className="flex justify-center items-center hover:bg-gray-400 hover:font-semibold hover:text-blue-950 active:bg-gray-500 transition-all bg-slate-300 h-8 w-8 rounded-full">
      <a href={href} target="_blank" rel="noopener noreferrer">
        {type === "phone" ? (
          <FaPhone size={20} />
        ) : type === "whatsapp" ? (
          <FaWhatsapp size={20} />
        ) : type === "instagram" ? (
          <FaInstagram size={20} />
        ) : type === "email" ? (
          <MdOutlineEmail size={20} />
        ) : undefined}
      </a>
    </div>
  );
}
