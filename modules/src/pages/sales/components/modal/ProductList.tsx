import { ProductItem } from './ProductItem'

export const ProductList = () => {
	return (
		<section className='max-h-[calc(80vh-64px)] overflow-y-auto p-2'>
			<h2 className='mb-2 px-2 py-1 text-sm text-gray-500'>Productos</h2>
			<ProductItem name='Paquete Romántico Premium' category='Deluxe' price={299.99} />
		</section>
	)
}
