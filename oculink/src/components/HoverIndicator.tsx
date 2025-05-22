export const HoverIndicator = ({ progress, color }: { progress: number; color: string }) => {
	return (
		<div className='absolute inset-0 flex items-center justify-center pointer-events-none'>
			<svg className='w-32 h-32' viewBox='0 0 100 100'>
				<circle
					cx='50'
					cy='50'
					r='40'
					stroke={color}
					strokeWidth='4'
					fill='transparent'
					strokeDasharray={`${progress * 2.51} 251`}
					transform='rotate(-90 50 50)'
				/>
			</svg>
		</div>
	);
};
