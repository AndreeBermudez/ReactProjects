import { Router } from "express";
import { HistorialController } from "../controllers/historial.controller";
const router = Router();
const controller = new HistorialController();

router.get("/historial", controller.getAll.bind(controller));
router.post("/create-historial", controller.create.bind(controller));
router.delete("/historial/all", controller.delete.bind(controller));

export default router;