import { Router } from "express";
import { authenticateUser } from "../controllers/auth";
export const router=Router();
router.post('/auth',authenticateUser)
export default router;