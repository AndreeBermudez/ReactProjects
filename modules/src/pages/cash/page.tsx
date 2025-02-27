import { ArrowDownIcon, CreditCard, DollarSignIcon, Monitor, MonitorOff, ReceiptIcon, Wallet } from 'lucide-react';
import { Layout } from '../layout';
import { Button } from '../../components/ui/Button';
import { useModal } from '../../hooks/useModal';
import { CloseCashRegisterModal } from './components/CloseCashRegisterModal';

export const CashPage: React.FC = () => {
	const {isOpen,openModal,closeModal} = useModal();
	return (
		<Layout>
			<main className='relative flex flex-col bg-white p-4 gap-4 w-full'>
				<h1 className='text-2xl p-4 font-bold'>Apertura de Caja</h1>
				{/* <NotOpened /> */}
				{/*  */}
				<section className='flex justify-between items-start mb-4'>
					<div className='flex p-2 gap-4 items-center text-sm'>
						<Monitor size={64} />
						<div className='flex flex-col space-y-1'>
							<div className='flex items-center gap-2'>
								<h3 className='font-semibold text-base'>Caja 01</h3>
								<span className='bg-green-200 text-green-700 px-2 py-1 rounded-lg'>Aperturado</span>
							</div>
							<span><span className="font-semibold">Responsable:</span> Andree Bermudez</span>
							<span><span className="font-semibold">Apertura:</span> 26 febrero de 2025, 01:39pm </span>
						</div>
					</div>
					<Button className='flex gap-2 items-center' onClick={openModal}>
						<MonitorOff size={20} />
						Cerrar Caja
					</Button>
				</section>
				<section className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
					<div className='bg-white rounded-b-lg p-6 shadow-md flex justify-between items-center'>
						<div className='flex flex-col gap-2'>
							<span className='text-base text-gray-600'>Monto Inicial</span>
							<span className='text-2xl font-semibold'>S/ 1,000.00</span>
						</div>
						<div>
							<span className='bg-blue-200 rounded-full w-12 h-12 flex items-center justify-center'>
								<DollarSignIcon />
							</span>
						</div>
					</div>
					<div className='bg-white rounded-b-lg p-6 shadow-md flex justify-between items-center'>
						<div className='flex flex-col gap-2'>
							<span className='text-base text-gray-600'>Total Ventas</span>
							<span className='text-2xl font-semibold'>S/ 3,500.00</span>
						</div>
						<div>
							<span className='bg-green-200 rounded-full w-12 h-12 flex items-center justify-center'>
								<ReceiptIcon />
							</span>
						</div>
					</div>
					<div className='bg-white rounded-b-lg p-6 shadow-md flex justify-between items-center'>
						<div className='flex flex-col gap-2'>
							<span className='text-base text-gray-600'>Total Gastos</span>
							<span className='text-2xl font-semibold'>S/ 500.00</span>
						</div>
						<div>
							<span className='bg-red-200 rounded-full w-12 h-12 flex items-center justify-center'>
								<ArrowDownIcon />
							</span>
						</div>
					</div>
					<div className='bg-white rounded-b-lg p-6 shadow-md flex justify-between items-center'>
						<div className='flex flex-col gap-2'>
							<span className='text-base text-gray-600'>Total a rendir</span>
							<span className='text-2xl font-semibold'>S/ 4,000.00</span>
						</div>
						<div>
							<span className='bg-purple-200 rounded-full w-12 h-12 flex items-center justify-center'>
								<DollarSignIcon />
							</span>
						</div>
					</div>
				</section>
				{/*  */}
				{/* Tabla */}
				<section className="rounded-xl bg-white p-6 shadow-sm">
					<h2 className="mb-4 text-lg font-semibold text-gray-900">Métodos de Pago</h2>
					<ul className="space-y-4">
						<li className="flex items-center justify-between border-b border-gray-300 pb-4 last:border-0">
							<article className="flex items-center gap-3">
								<span className="rounded-full bg-yellow-100 p-2">
									<DollarSignIcon className="h-4 w-4 text-yellow-600" />
								</span>
								<header>
									<h3 className="font-medium text-gray-900">Efectivo</h3>
									<time className="text-sm text-gray-500">10 ventas realizadas en efectivo</time>
								</header>
							</article>
							<strong className="font-medium text-gray-900">
								S/ 100.00
							</strong>
						</li>
						<li className="flex items-center justify-between border-b border-gray-300 pb-4 last:border-0">
							<article className="flex items-center gap-3">
								<span className="rounded-full bg-green-100 p-2">
									<CreditCard className="h-4 w-4 text-green-600" />
								</span>
								<header>
									<h3 className="font-medium text-gray-900">Transferencia</h3>
									<time className="text-sm text-gray-500">10 ventas realizadas mediante transferencia</time>
								</header>
							</article>
							<strong className="font-medium text-gray-900">
								S/ 1000.00
							</strong>
						</li>
						<li className="flex items-center justify-between border-b pb-4 last:border-0">
							<article className="flex items-center gap-3">
								<span className="rounded-full bg-purple-100 p-2">
									<Wallet className="h-4 w-4 text-purple-600" />
								</span>
								<header>
									<h3 className="font-medium text-gray-900">Billetera digital</h3>
									<time className="text-sm text-gray-500">10 ventas realizadas en yape/plin</time>
								</header>
							</article>
							<strong className="font-medium text-gray-900">
								S/ 100.00
							</strong>
						</li>
					</ul>
				</section>
			</main>
			{isOpen && (
				<CloseCashRegisterModal isOpen={isOpen} closeModal={closeModal} />
			)}
		</Layout>
	);
};
