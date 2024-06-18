// controller.ts

import express, { Request, Response } from 'express';
import { upload } from '../helpers/multerConfig';
import { Iniciativa } from '../entities/iniciativa';
import app from 'app';
import API_BASE_URL_API from '../helpers/apiHelper';

export const router = express.Router();

router.post('/upload', upload.array('images', 10), async (req: Request, res: Response) => {
  try {
    console.log("Body");
    console.log(req.body);
    
    
    console.log("Upload endpoint");
    console.log(req.files);
    if (!req.files || !Array.isArray(req.files)) {
      return res.status(400).json({ error: 'No se ha seleccionado ninguna imagen' });
    }
    const identificador = req.body.iniciativaId;
    console.log('Identificador recibido:', identificador); // Agrega esta línea
    // TODO: Get the server url dinamically 

    if (!identificador) {
      return res.status(400).json({ error: 'ID de iniciativa no proporcionado' });
    }

  
    
    const images = (req.files as Express.Multer.File[]).map((file) => `${API_BASE_URL_API}/${file.filename}`);
    console.log("OHHHHHHHHHHHHHHHHHHH!");
    console.log(images);


    const iniciativa = await Iniciativa.findOneBy({identificador});
    console.log("INC");
    console.log(iniciativa);


    if (!iniciativa) {
      return res.status(404).json({ error: 'Iniciativa no encontrada' });
    }

    iniciativa.imagenes = images;
    const nueva = await iniciativa.save();
    console.log("Nueva");
    console.log(nueva);
    
    

    return res.json({ message: 'Imagen subida correctamente' });
  } catch (error) {
    console.error('Error al subir la imagen:', error);
    return res.status(500).json({ error: 'Error al subir la imagen' });
  }
});
