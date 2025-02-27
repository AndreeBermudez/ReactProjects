import { Button } from '../../../../components/ui/Button' 
import { Input } from '../../../../components/ui/Input'
import { InvoiceTypeSection } from './InvoiceTypeSection' 
import { PaymentSection } from './PaymentSection'

export const SaleForm = () => {
	return (
		<div className='flex flex-col border-1 border-gray-300 rounded-lg p-4 space-y-4'>
			<h3 className='text-base font-semibold'>Información de Venta</h3>
			<InvoiceTypeSection />
			<Input label='Cliente' placeholder='Nombre del cliente o empresa' />
			<PaymentSection />
			<div className='space-y-2'>
				<label className='text-sm text-gray-600'>Observaciones</label>
				<textarea
					className='w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gray-400'
					rows={3}
					placeholder='Ingrese observaciones'
				/>
			</div>
			<div className='flex gap-2'>
				<Button>Registrar Venta</Button>
				<Button variant='success'>Calcular cambio</Button>
			</div>
		</div>
	)
}
