import type { LucideIcon } from "lucide-react"

interface Props {
    Icon: LucideIcon,
    color: string,
    bgColor: string,
    onClick?: () => void
}

export const ButtonCircle = ({Icon, color, bgColor, onClick}: Props) => {
  return (
    <button 
      className="rounded-full border-3 p-4 w-42 h-42 flex items-center justify-center cursor-pointer hover:contrast-80"
      style={{ 
        borderColor: color,
        color: color,
        backgroundColor: bgColor
      }}
      onClick={onClick}
    >
      <Icon size={64} strokeWidth={1}/>
    </button>
  )
}