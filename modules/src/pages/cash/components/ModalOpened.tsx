import { Button } from "../../../components/ui/Button";
import { Input } from "../../../components/ui/Input";

type ModalOpenedProps = {
    isOpen: boolean
    closeModal: () => void
  }
export const ModalOpened = ({isOpen,closeModal}:ModalOpenedProps) => {
	return (
		<>
            {isOpen && (
                        <div className='fixed inset-0 z-50 flex items-start justify-center sm:items-center'>
                            <div className='fixed inset-0 bg-black/30' onClick={closeModal} />
                            <div className='z-50 w-full max-w-lg max-h-[80vh] bg-white p-6 shadow-lg sm:rounded-lg overflow-hidden'>
                                   <h2 className="text-center text-2xl font-bold my-3">Aperturar Caja</h2>
                                   <Input type="number" label="Monto inicial" className="mt-1 mb-4"/>
                                     <div className='flex justify-end gap-4'>
                                          <Button onClick={closeModal} className='bg-gray-300 hover:bg-gray-400'>Cancelar</Button>
                                          <Button onClick={closeModal} className='bg-cyan-600 hover:bg-cyan-800'>Aperturar Caja</Button>
                                    </div>
                            </div>
                        </div>
                    )}
        </>
	);
};



