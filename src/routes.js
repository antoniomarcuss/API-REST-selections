import { Router } from "express";
import SelectionController from "./app/controllers/SelectionController.js";

const router = Router();

//ROTAS
router.get("/selections", SelectionController.index);
router.get(`/selection/:id`, SelectionController.show);
router.post("/selection", SelectionController.store);
router.put("/selection/:id", SelectionController.update);
router.delete("/selection/:id", SelectionController.delete);

export default router;
