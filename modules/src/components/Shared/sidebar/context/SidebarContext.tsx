import { createContext } from "react"

type SidebarContextType = {
  isCollapsed: boolean
  isMobileOpen: boolean
  toggleCollapse: () => void
  toggleMobile: () => void
}

export const SidebarContext = createContext<SidebarContextType | undefined>(undefined)