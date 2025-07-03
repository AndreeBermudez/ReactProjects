import { DataSource } from 'typeorm';
import { Frase } from '../models/frase.model';
import { Historial } from '../models/historial.model';

export const AppDataSource = new DataSource({
	type: 'mysql',
	host: 'localhost',
	port: 3306,
	username: 'root',
	password: 'Andreev@1408',
	database: 'oculink',
	synchronize: true,
	entities: [Frase, Historial],
	migrations: ['src/migrations/**/*.ts'],
	subscribers: [],
});
