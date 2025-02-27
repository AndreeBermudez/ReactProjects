import {useState } from 'react'
import { Product } from '../../interfaces'
import {
	ProductModal,
	ProductTable,
	SaleForm,
	SalesSummary,
	SearchBar,
} from './components'
import { Layout } from '../layout'

const products: Product[] = [
	{
		id: 1,
		name: 'Paquete Romántico Premium',
		price: 299.99,
		description: 'Paquete especial para parejas ',
		detail:
			'Incluye: habitación deluxe, cena para dos, acceso al spa, masajes y desayuno buffet',
		unit: 'paquete',
		stock: 5,
	},
	{
		id: 2,
		name: 'Habitación Ejecutiva',
		price: 159.99,
		description: 'Habitación individual con vista a la ciudad',
		detail: 'Cama king size, escritorio de trabajo, wifi de alta velocidad, minibar',
		unit: 'noche',
		stock: 10,
	},
	{
		id: 3,
		name: 'Servicio de Spa Completo',
		price: 89.99,
		description: 'Sesión completa de spa con diversos tratamientos',
		detail: 'Incluye: masaje relajante, facial, sauna y acceso a la piscina termal',
		unit: 'sesión',
		stock: 8,
	},
]

export const SalesPage:React.FC = () => {
	const [isOpen, setIsOpen] = useState(false)
	return (
		<>
			<Layout>
				<main className='relative flex flex-col bg-white p-4 w-full'>
					<h1 className='text-2xl p-4 font-bold'>Registrar Compra</h1>
					<section className='grid lg:grid-cols-[70%_30%]'>
						<div className='w-full p-4 overflow-auto'>
							<SearchBar onOpen={() => setIsOpen(true)} />
							<ProductTable products={products} />
							<SalesSummary />
						</div>
						<div className='w-full p-4'>
							<SaleForm />
						</div>
					</section>
					<ProductModal isOpen={isOpen} setIsOpen={() => setIsOpen(false)} />
				</main>
			</Layout>
		</>
	)
}
