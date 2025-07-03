import { Router } from "express";
import { FraseController } from "../controllers/frase.controller";

const router = Router();
const controller = new FraseController();

router.get("/frases", controller.getAll.bind(controller));
router.post("/create-frase", controller.create.bind(controller));
router.delete("/frases/:id", controller.delete.bind(controller));

export default router;