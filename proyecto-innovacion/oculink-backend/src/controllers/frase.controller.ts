import { Request, Response } from 'express';
import { FraseService } from '../services/frase.service';

export class FraseController {
	private service = new FraseService();

	async getAll(req: Request, res: Response): Promise<void> {
		try {
			const frases = await this.service.findAll();
			res.json(frases);
		} catch (error) {
			res.status(500).json({ message: 'Error al obtener frases', error });
		}
	}

	async create(req: Request, res: Response): Promise<void> {
		try {
			const frase = await this.service.create(req.body);
			res.status(201).json(frase);
		} catch (error) {
			res.status(500).json({ message: 'Error al crear frase', error });
		}
	}

	async delete(req: Request, res: Response): Promise<void> {
		try {
			const id = parseInt(req.params.id);
			const deleted = await this.service.delete(id);

			if (deleted) {
				res.status(204).send();
			} else {
				res.status(404).json({ message: 'Frase no encontrada' });
			}
		} catch (error) {
			res.status(500).json({ message: 'Error al eliminar frase', error });
		}
	}
}
