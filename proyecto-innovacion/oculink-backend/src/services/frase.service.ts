import { AppDataSource } from '../database/data-source';
import { Frase } from '../models/frase.model';

export class FraseService {
	private repository = AppDataSource.getRepository(Frase);

	async findAll(): Promise<Frase[]> {
		return await this.repository.find();
	}

	async create(frase: Partial<Frase>): Promise<Frase> {
		const nuevaFrase = this.repository.create(frase);
		return await this.repository.save(nuevaFrase);
	}

	async delete(id: number): Promise<boolean> {
		const result = await this.repository.delete(id);
		return (result.affected ?? 0) > 0;
	}
}
