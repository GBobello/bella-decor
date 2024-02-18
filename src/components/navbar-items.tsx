import { Link } from "react-router-dom"

interface NavbarItemsProps {
  title: string
  route: string
}

export function NavbarItems({ title, route }: NavbarItemsProps) {
  return <Link className="text-slate-950 font-normal hover:font-semibold hover:text-blue-950 hover:border-b hover:border-blue-950" to={route}>{title}</Link>
}