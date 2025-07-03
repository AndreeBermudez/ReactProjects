import { Request, Response } from 'express';
import { HistorialService } from '../services/historial.service';

export class HistorialController {
    private service = new HistorialService();

    async getAll(req: Request, res: Response): Promise<void> {
        try {
            const historial = await this.service.findAll();
            res.json(historial);
        } catch (error) {
            res.status(500).json({ message: 'Error al obtener el historial', error });
        }
    }

    async create(req: Request, res: Response): Promise<void> {
        try {
            const fraseHistorial = await this.service.create(req.body);
            res.status(201).json(fraseHistorial);
        } catch (error) {
            res.status(500).json({ message: 'Error al generar un nuevo historial', error });
        }
    }

    async delete(req: Request, res: Response): Promise<void> {
        try {
            const deleted = await this.service.deleteAll();

            if (deleted) {
                res.status(204).send();
            } else {
                res.status(404).json({ message: 'Frases no encontradas en el historial' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error al eliminar el historial', error });
        }
    }
}
