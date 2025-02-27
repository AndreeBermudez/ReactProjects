import { useAuth } from '../hooks/useAuth';
import { Button } from '../../../components/ui/Button';
import { Input } from '../../../components/ui/Input';

export const LoginForm = () => {
	const { formData, handleInput, handleSubmit, error } = useAuth();
	const { username, contrasenia } = formData;
	return (
		<>
			<div className='w-full max-w-md space-y-8 px-12'>
				<div className='text-center space-y-2'>
					<h2 className='font-bold text-3xl text-cyan-600'>Welcome Back</h2>
					<p className='text-gray-500'>Por favor ingrese sus credenciales</p>
				</div>

				<form onSubmit={handleSubmit} className='space-y-6'>
					<div className='space-y-4'>
						<div>
							<Input type='text' name='username' id='username' label={`Usuario`} value={username} onChange={handleInput} required/>
						</div>
						<div>
							<Input type='password' name='contrasenia' id='password' label={`Contraseña`} value={contrasenia} onChange={handleInput} required/>
						</div>
					</div>

					<div>
						<Button
							type='submit'
							className='w-full px-4 py-2 text-white bg-cyan-600 hover:bg-cyan-700 rounded-md transition-colors duration-200'>
							Iniciar Sesión
						</Button>
                        <span className='mt-6 text-red-600 text-xs font-semibold'>{error}</span>
					</div>
				</form>
			</div>
		</>
	);
};
