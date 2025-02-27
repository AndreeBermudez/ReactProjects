import { Search, X } from "lucide-react"

interface SearchBarProps {
	setIsOpen: () => void
}

export const SearchBarProduct = ({setIsOpen}:SearchBarProps) => {
	return(
		<div className='flex items-center gap-2 border-b border-gray-200 p-4'>
			<Search className='text-gray-400 h-5 w-5' />
			<input
				type='text'
				placeholder='Buscar producto...'
				className='flex-grow bg-transparent text-sm text-gray-900 focus:outline-none'
			/>
			<button
				className='text-gray-400 hover:text-gray-600'
				onClick={setIsOpen}>
				<X className='h-5 w-5' />
			</button>
		</div>
	)
}
