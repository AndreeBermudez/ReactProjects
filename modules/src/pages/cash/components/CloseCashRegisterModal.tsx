import { Button } from '../../../components/ui/Button';
import { CircleAlert } from 'lucide-react';

type CloseCashRegisterModalProps = {
	isOpen: boolean;
	closeModal: () => void;
};
export const CloseCashRegisterModal = ({ isOpen, closeModal }: CloseCashRegisterModalProps) => {
	return (
		<>
			{isOpen && (
				<div className='fixed inset-0 z-50 flex items-start justify-center sm:items-center'>
					<div className='fixed inset-0 bg-black/30' onClick={closeModal} />
					<div className='z-50 w-full max-w-lg max-h-[80vh] bg-white p-6 shadow-lg sm:rounded-lg overflow-hidden'>
						<h2 className=' text-2xl font-bold my-4 px-10'>Cerrar Caja</h2>
						<div className='flex items-start gap-4 mb-4'>
							<CircleAlert size={30} className='text-gray-400' />
							<span>¿Esta seguro que desea cerrar la caja? Esta accion no se puede deshacer.</span>
						</div>
						<div className='flex justify-end gap-4'>
							<Button onClick={closeModal} variant='secondary'>
								Cancelar
							</Button>
							<Button>Cerrar Caja</Button>
						</div>
					</div>
				</div>
			)}
		</>
	);
};
