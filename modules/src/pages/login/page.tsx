import { LoginForm } from './components/LoginForm';
import Flores from '../../assets/flores.avif'

export const LoginPage = () => {
	return (
		<>
			<section className='grid md:grid-cols-2 h-screen w-full bg-white'>
				<div className='flex items-center justify-center px-8 py-12'>
					<LoginForm />
				</div>
				<div className='hidden md:block bg-cyan-100 relative'>
					<img src={Flores} alt="Arreglo floral" className='w-full h-screen object-cover'/>
				</div>
			</section>
		</>
	);
};
