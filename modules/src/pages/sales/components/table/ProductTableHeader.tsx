export const ProductTableHeader: React.FC = () => {
	const styleHeader = 'px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
	return (
		<thead className='bg-gray-50'>
			<tr>
				<th className={styleHeader}>Producto</th>
				<th className={styleHeader}>Costo</th>
				<th className={styleHeader}>Cantidad</th>
				<th className={styleHeader}>Subtotal</th>
				<th className={styleHeader}/>
			</tr>
		</thead>
	)
}