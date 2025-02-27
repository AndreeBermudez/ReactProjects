import { Plus, Minus, Trash } from 'lucide-react'
import { Product } from '../../../../interfaces'

interface ProductRowProps{
	product: Product
}

export const ProductRow: React.FC<ProductRowProps> = ({ product }) => {
	return (
		<tr className='hover:bg-gray-50'>
			<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-900'>
				<div className='flex items-center gap-2'>
					<div className='w-10 h-10 bg-gray-200 rounded flex items-center justify-center'>
						<svg className='w-6 h-6 text-white' viewBox='0 0 24 24' fill='currentColor'>
							<path d='M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z' />
						</svg>
					</div>
					<div className='flex flex-col'>
						<span>{product?.name}</span>
						<span className='text-xs text-gray-500'>{product?.description}</span>
					</div>
				</div>
			</td>
			<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-900'>
				S/. {product?.price.toFixed(2)}
			</td>
			<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-900'>
				<div className='flex items-center gap-2'>
					<button className='p-1 bg-green-500 hover:bg-green-600 text-white rounded-full'>
						<Plus size={16} />
					</button>
					<input
						type='text'
						className='w-10 text-center border border-gray-300 rounded-md p-1'
						value={0}
						onChange={() => {}}
					/>
					<button className='p-1 bg-red-500 hover:bg-red-600 text-white rounded-full'>
						<Minus size={16} />
					</button>
				</div>
			</td>
			<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-900'>
				S/. 1000.00
			</td>
			<td className='px-6 py-4 whitespace-nowrap text-sm'>
				<button className='text-red-600 p-1 hover:text-red-900 rounded-full border-1 border-gray-300'>
					<Trash size={16} />
				</button>
			</td>
		</tr>
	)
}