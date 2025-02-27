import { Home, DollarSign, ShoppingCart, Package, BarChart2, Menu, ChevronLeft, Receipt } from "lucide-react"
import { useSidebar } from "./context/useSidebar" 
import { NavItem } from "./componets/NavItem" 

const navigation = [
  { icon: Home, label: "Inicio", href: "/inicio" },
  { icon: DollarSign, label: "Caja", href: "/caja" },
  { icon: ShoppingCart, label: "Ventas", href: "/ventas" },
  { icon: Receipt, label: "Gastos", href: "/gastos" },
  { icon: Package, label: "Productos", href: "/productos" },
  { icon: BarChart2, label: "Reportes", href: "/reportes" },
]

export function Sidebar() {
  const { isCollapsed, isMobileOpen, toggleCollapse, toggleMobile } = useSidebar()

  return (
    <>
      {isMobileOpen && <div className="fixed inset-0 bg-black/50 md:hidden z-40" onClick={toggleMobile} />}
      <button onClick={toggleMobile} className="fixed top-4 left-4 z-50 p-2 rounded-lg bg-white shadow-lg md:hidden">
        <Menu className="w-5 h-5" />
      </button>
      <aside
        className={`
          fixed top-0 left-0 z-40 h-screen bg-white transition-all duration-300
          flex flex-col gap-2 p-4 border-r border-gray-300
          ${isCollapsed && !isMobileOpen ? "w-[4.5rem]" : "w-64"}
          ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
          md:sticky md:top-0
        `}
      >
        {/* Header */}
        <div className={`flex items-center h-14 
                        ${isCollapsed && !isMobileOpen ? "justify-center" : "justify-between"}`}>
          {(!isCollapsed || isMobileOpen) && <h1 className="text-xl font-bold text-blue-600">SANTORINI</h1>}
          <button onClick={toggleCollapse} className="p-2 rounded-lg hover:bg-gray-100 hidden lg:block">
            <ChevronLeft className={`w-5 h-5 transition-transform ${isCollapsed ? "rotate-180" : ""}`} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-1 flex-grow">
          {navigation.map((item) => (
            <NavItem key={item.href} {...item} isActive={item.href === "/productos"} forceExpanded={isMobileOpen} />
          ))}
        </nav>
      </aside>
    </>
  )
}

