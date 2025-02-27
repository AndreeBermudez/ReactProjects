import { CircleAlert, MonitorCheck } from 'lucide-react';
import { Button } from '../../../components/ui/Button';
import { useModal } from '../../../hooks/useModal';
import { ModalOpened } from './ModalOpened';

export const NotOpened = () => {
	const {isOpen,openModal,closeModal} = useModal();
	return (
		<div className='flex flex-col items-center justify-center py-10'>
			<span className='flex text-orange-500 gap-2 text-sm items-center'>
				<CircleAlert size={16} /> Para iniciar las ventas primero debes aperturar la caja
			</span>
			<Button 
				onClick={openModal}
				className='flex items-center gap-2 mt-4 bg-cyan-600 hover:bg-cyan-800'>
				<MonitorCheck size={20} />
				Aperturar Caja
			</Button>
			<ModalOpened isOpen={isOpen} closeModal={closeModal} />
		</div>
	);
};
