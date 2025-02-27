import { ProductList } from "./ProductList"
import { SearchBarProduct } from "./SearchBarProduct"

type ModalProductsProps = {
  isOpen: boolean
  setIsOpen: () => void
}

export const ProductModal = ({isOpen,setIsOpen}: ModalProductsProps) => {
	return (
		<>
			{isOpen && (
				<div className='fixed inset-0 z-50 flex items-start justify-center sm:items-center'>
					<div className='fixed inset-0 bg-black/30' onClick={setIsOpen} />
					<div className='z-50 w-full max-w-lg max-h-[80vh] bg-white p-2 shadow-lg sm:rounded-lg overflow-hidden'>
						<SearchBarProduct setIsOpen={setIsOpen} />
						<ProductList/>
					</div>
				</div>
			)}
		</>
	)
}
