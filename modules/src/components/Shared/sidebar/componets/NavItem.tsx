import { Link } from "react-router-dom" 
import type { LucideIcon } from "lucide-react"
import { useSidebar } from "../context/useSidebar" 

interface NavItemProps {
  icon: LucideIcon
  label: string
  href: string
  isActive?: boolean
  forceExpanded?: boolean
}

export function NavItem({ icon: Icon, label, href, isActive, forceExpanded }: NavItemProps) {
  const { isCollapsed } = useSidebar()

  return (
    <Link
      to={href}
      className={`
        flex items-center gap-3 px-3 py-2 rounded-lg transition-all
        hover:bg-blue-100 hover:text-blue-600
        ${isActive ? "bg-blue-100 text-blue-600" : "text-gray-700"}
        ${isCollapsed && !forceExpanded ? "justify-center" : ""}
      `}
    >
      <Icon className="w-5 h-5" />
      {(!isCollapsed || forceExpanded) && <span className="font-medium">{label}</span>}
    </Link>
  )
}

