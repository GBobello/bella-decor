interface NavBarMobileItemsProps {
  children: React.ReactNode;
}

export function NavBarMobileItems({ children }: NavBarMobileItemsProps) {
  return (
    <div className="w-full p-4 border-b border-gray-100 hover:bg-gray-50 hover:font-semibold hover:text-blue-950 active:bg-gray-200 transition-all">
      {children}
    </div>
  );
}
