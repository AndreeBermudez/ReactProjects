interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
	label?: string
	options: { value: string; label: string }[]
}

export const Select = ({ label, options, ...props }: SelectProps) => {
	return (
		<div className='space-y-2'>
			{label && <label className='text-sm text-gray-600'>{label}</label>}
			<select
				className='w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gray-400'
				{...props}>
				{options.map((option) => (
					<option key={option.value} value={option.value}>
						{option.label}
					</option>
				))}
			</select>
		</div>
	)
}
