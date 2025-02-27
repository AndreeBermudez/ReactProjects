import { Product } from '../../../../interfaces'
import { ProductRow } from './ProductRow'
import { ProductTableHeader } from './ProductTableHeader'

interface ProductTableProps{
	products: Product[]
}

export const ProductTable= ({products}: ProductTableProps ) => {
	return (
		<div className='overflow-x-auto rounded-lg shadow'>
			<div className='inline-block min-w-full align-middle'>
				<table className='min-w-full divide-y divide-gray-200'>
					<ProductTableHeader />
					<tbody className='bg-white divide-y divide-gray-200'>
						{products.map((product: Product) => (
							<ProductRow key={product.id} product={product} />
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}
