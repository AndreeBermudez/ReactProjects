import { Search } from "lucide-react";

type SearchBarProps = {
  onOpen: () => void;
}

export const SearchBar = ({onOpen}: SearchBarProps) => {
  return (
    <div className='flex rounded-3xl py-2 px-4 gap-2 bg-gray-100 mb-6' onClick={onOpen}>
							<Search color='#6a7282' />
							<span className='text-gray-500'>Buscar producto...</span>
		</div>
  )
}