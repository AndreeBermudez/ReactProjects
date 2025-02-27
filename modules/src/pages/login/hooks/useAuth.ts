import { useState } from "react";
import { useAuthStore } from "../../../store/authStore";
import { useNavigate } from "react-router-dom";

const initialForm = {
	username: '',
	contrasenia: '',
};

export const useAuth = () => {
	const [formData, setFormData] = useState(initialForm);
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
	const {login} = useAuthStore()
    const navigate = useNavigate()

	const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        try {
            setError('');
            setLoading(true);
            e.preventDefault();
            const isAuthorized = await login(formData);
            if (!isAuthorized) {
                setError('Usuario o contraseña incorrectos');
                return;
            }
            setFormData(initialForm);
            navigate('/ventas');
        } catch (error) {
            console.error(error);
            setError('Ocurrió un error durante el inicio de sesión');
    };
}

    return {
        error,
        formData,
        handleInput,
        handleSubmit
    }
}
