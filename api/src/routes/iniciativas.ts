import { Router } from "express";
import { createIniciativa, getIniciativa, putIniciativa, deleteIniciativa, getOneiniciativas, getnombreProvincia, getnombreMunicipio, toggleDestacada } from "../controllers/iniciativa";

import { upload } from "../helpers/multerConfig";
export const router = Router();
// router.get('/hello',(req,res)=> res.send('hello word'));
router.post('/', createIniciativa);
router.get('/:identificador', [], getOneiniciativas);
router.get('/', getIniciativa);
router.put('/:identificador', [upload.array('images', 5)], putIniciativa)
router.delete('/:identificador', deleteIniciativa)
router.get('/provincia/:nombre_provincia', [], getnombreProvincia)
router.get('/municipio/:nombre_municipio', [], getnombreMunicipio)
router.put('/:identificador/:destacada', [], toggleDestacada)

