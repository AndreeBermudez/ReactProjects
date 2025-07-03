import { AppDataSource } from '../database/data-source';
import { Historial } from '../models/historial.model';

export class HistorialService {
	private repository = AppDataSource.getRepository(Historial);

	async findAll(): Promise<Historial[]> {
		return await this.repository.find();
	}

	async create(historial: Partial<Historial>): Promise<Historial> {
		const newHistorial = this.repository.create(historial);
		return await this.repository.save(newHistorial);
	}

	async deleteAll(): Promise<boolean> {
		const result = await this.repository.deleteAll();
        return (result.affected ?? 0) > 0;
	}
}
