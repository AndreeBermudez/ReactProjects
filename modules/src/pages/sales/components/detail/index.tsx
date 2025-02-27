export const SalesSummary = () => {
	return (
		<div className='border-gray-300 border-1 rounded-lg p-4 mt-6'>
			<h3 className='text-lg font-semibold mb-4'>Resumen de Venta</h3>
			<div className='space-y-3'>
				<div className='flex justify-between'>
					<span className='text-sm text-gray-600'>Subtotal</span>
					<span className='text-sm font-medium'>S/. 1000.00</span>
				</div>
				<div className='flex justify-between'>
					<span className='text-sm text-gray-600'>IGV (18%)</span>
					<span className='text-sm font-medium'>S/. 180.00</span>
				</div>
				<div className='flex justify-between'>
					<span className='text-sm text-gray-600'>Descuento</span>
					<span className='text-sm font-medium text-red-600'>- S/. 0.00</span>
				</div>
				<div className='pt-3 border-t border-gray-200'>
					<div className='flex justify-between'>
						<span className='text-base font-semibold'>Total</span>
						<span className='text-base font-semibold'>S/. 1180.00</span>
					</div>
				</div>
			</div>
		</div>
	)
}
