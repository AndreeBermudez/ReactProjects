interface ProductItemProps {
	name: string
	category: string
	price: number
}

export const ProductItem = ({ name, category, price }: ProductItemProps) => {
	return (
		<article className='flex items-center rounded-lg p-2 hover:bg-gray-50 cursor-pointer'>
			<span className='flex h-8 w-8 items-center justify-center rounded-full bg-red-100 mr-3'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='16'
					height='16'
					viewBox='0 0 24 24'
					fill='none'
					stroke='currentColor'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
					className='text-red-500'>
					<path d='M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z' />
				</svg>
			</span>
			<div>
				<h3 className='text-sm text-gray-900'>{name}</h3>
				<div className='flex items-center gap-2'>
					<span className='text-xs text-red-600'>• {category}</span>
					<span className='text-xs text-gray-500'>costo: S/. {price.toFixed(2)}</span>
				</div>
			</div>
		</article>
	)
}
