import { Request, Response } from "express"
import { Iniciativa } from "../entities/iniciativa";
import API_BASE_URL_API from "../helpers/apiHelper"

export const createIniciativa = async (req: Request, res: Response) => {
  try {
    const {
      nombre_iniciativa,
      tematica,
      propietario,
      hectareas,
      direccion,
      nombre_provincia,
      nombre_municipio,
      latitud,
      longitud,
      contacto,
      telefonos,
      correo,
      facebook,
      instagram,
      twitter,
      destacada,
      imagenes, // Agregado el campo imagenes
    } = req.body;

    const iniciativa = new Iniciativa();
    iniciativa.nombre_iniciativa = nombre_iniciativa;
    iniciativa.tematica = tematica;
    iniciativa.propietario = propietario;
    iniciativa.hectareas = hectareas;
    iniciativa.direccion = direccion;
    iniciativa.nombre_provincia = nombre_provincia;
    iniciativa.nombre_municipio = nombre_municipio;
    iniciativa.latitud = latitud;
    iniciativa.longitud = longitud;
    iniciativa.contacto = contacto;
    iniciativa.telefonos = telefonos;
    iniciativa.correo = correo;
    iniciativa.facebook = facebook;
    iniciativa.instagram = instagram;
    iniciativa.twitter = twitter;
    iniciativa.destacada = destacada;


    await iniciativa.save();

    console.log(iniciativa);

    return res.json(iniciativa);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const getIniciativa = async (req: Request, res: Response) => {
  try {
    const iniciativas = await Iniciativa.find();
    return res.json(iniciativas);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }

  }
}
export const putIniciativa = async (req: Request, res: Response) => {
  try {
    const { identificador } = req.params;
    const iniciativa = await Iniciativa.findOneBy({ identificador: parseInt(identificador) });
   console.log("Request files");
   console.log(req?.files);

   const files = req?.files as Express.Multer.File[] || []

   
   console.log("Body");
   console.log(req.body);
   
    if (!iniciativa) return res.status(404).json({ message: 'Iniciativa does not exist' });
    

    const images = files.map((file) => `${API_BASE_URL_API}/${file.filename}`);
    console.log('AFTER THIS');
    

    // Actualiza solo las propiedades proporcionadas en el cuerpo de la solicitud
    await Iniciativa.update({ identificador: parseInt(identificador) }, {
      ...req.body,
      imagenes: images|| [], // Asegúrate de que imagenes sea un array
    });   
    
    return res.sendStatus(204);
  } catch (error) {
    console.log(error);
    
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const deleteIniciativa = async (req: Request, res: Response) => {
  try {
    const { identificador } = req.params
    const resultado = await Iniciativa.delete({ identificador: parseInt(identificador) })

    if (resultado.affected === 0) {
      return res.status(404).json({ message: 'Iniciativa not found' })
    }
    return res.sendStatus(204)
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
}
export const getOneiniciativas = async (req: Request, res: Response) => {
  try {
    const { identificador } = req.params;
    const iniciativa = await Iniciativa.findOneBy({ identificador: parseInt(identificador) });
    return res.json(iniciativa);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const getnombreProvincia = async (req: Request, res: Response) => {
  try {
    const { nombre_provincia } = req.params;
    const iniciativa = await Iniciativa.findBy({ nombre_provincia: nombre_provincia });
    return res.json(iniciativa);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};
export const getnombreMunicipio = async (req: Request, res: Response) => {
  try {
    const { nombre_municipio } = req.params;
    const iniciativa = await Iniciativa.findBy({ nombre_municipio: nombre_municipio });
    return res.json(iniciativa);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};
export const toggleDestacada = async (req: Request, res: Response) => {
  try {
    const { identificador } = req.params;

    // Encuentra la iniciativa por su identificador
    const iniciativa = await Iniciativa.findOneBy({ identificador: parseInt(identificador) });

    // Verifica si la iniciativa existe
    if (!iniciativa) {
      return res.status(404).json({ error: 'Iniciativa no encontrada' });
    }

    // Cambia el estado de "destacada"
    iniciativa.destacada = !iniciativa.destacada;

    // Guarda los cambios en la base de datos
    await iniciativa.save();

    // Devuelve la iniciativa actualizada como respuesta
    return res.json(iniciativa);
  } catch (error) {
    console.error(error);
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    } else {
      return res.status(500).json({ message: 'Error interno del servidor' });
    }
  }
};