import 'reflect-metadata';
import express, { Request, Response } from 'express';
import cors from 'cors';
import { AppDataSource } from './database/data-source';
import frasesRoutes from './routes/frase.route';
import historialRoutes from './routes/historial.route';

AppDataSource.initialize()
	.then(() => {
		console.log('Conexión a la base de datos establecida');
	})
	.catch((error) => {
		console.error('Error al conectar a la base de datos:', error);
	});

const PORT = 3000;
const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', frasesRoutes);
app.use('/api', historialRoutes);
app.listen(PORT, () => {
	console.log(`Servidor Oculink funcionando en el puerto ${PORT}`);
});
