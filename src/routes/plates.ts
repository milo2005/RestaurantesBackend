import { Router } from 'express';
import {
    all, allByIngredients, addIngredient, deleteIngredients,
    deletePlate, insert, update
} from '../controllers/plates/index';

const router: Router = Router();

router.get("/:id", all);
router.get("/", allByIngredients);
router.post("/", insert);
router.post("/:id/ingredient", addIngredient);
router.put("/:id", update);
router.delete("/:id", deletePlate);
router.delete("/:id/ingredients", deleteIngredients);

export default router;