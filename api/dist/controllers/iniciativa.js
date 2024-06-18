"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.toggleDestacada = exports.getnombreMunicipio = exports.getnombreProvincia = exports.getOneiniciativas = exports.deleteIniciativa = exports.putIniciativa = exports.getIniciativa = exports.createIniciativa = void 0;
const iniciativa_1 = require("../entities/iniciativa");
const apiHelper_1 = __importDefault(require("../helpers/apiHelper"));
const createIniciativa = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { nombre_iniciativa, tematica, propietario, hectareas, direccion, nombre_provincia, nombre_municipio, latitud, longitud, contacto, telefonos, correo, facebook, instagram, twitter, destacada, imagenes, // Agregado el campo imagenes
         } = req.body;
        const iniciativa = new iniciativa_1.Iniciativa();
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
        yield iniciativa.save();
        console.log(iniciativa);
        return res.json(iniciativa);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.createIniciativa = createIniciativa;
const getIniciativa = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const iniciativas = yield iniciativa_1.Iniciativa.find();
        return res.json(iniciativas);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.getIniciativa = getIniciativa;
const putIniciativa = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { identificador } = req.params;
        const iniciativa = yield iniciativa_1.Iniciativa.findOneBy({ identificador: parseInt(identificador) });
        console.log("Request files");
        console.log(req === null || req === void 0 ? void 0 : req.files);
        const files = (req === null || req === void 0 ? void 0 : req.files) || [];
        console.log("Body");
        console.log(req.body);
        if (!iniciativa)
            return res.status(404).json({ message: 'Iniciativa does not exist' });
        const images = files.map((file) => `${apiHelper_1.default}/${file.filename}`);
        console.log('AFTER THIS');
        // Actualiza solo las propiedades proporcionadas en el cuerpo de la solicitud
        yield iniciativa_1.Iniciativa.update({ identificador: parseInt(identificador) }, Object.assign(Object.assign({}, req.body), { imagenes: images || [] }));
        return res.sendStatus(204);
    }
    catch (error) {
        console.log(error);
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.putIniciativa = putIniciativa;
const deleteIniciativa = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { identificador } = req.params;
        const resultado = yield iniciativa_1.Iniciativa.delete({ identificador: parseInt(identificador) });
        if (resultado.affected === 0) {
            return res.status(404).json({ message: 'Iniciativa not found' });
        }
        return res.sendStatus(204);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.deleteIniciativa = deleteIniciativa;
const getOneiniciativas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { identificador } = req.params;
        const iniciativa = yield iniciativa_1.Iniciativa.findOneBy({ identificador: parseInt(identificador) });
        return res.json(iniciativa);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.getOneiniciativas = getOneiniciativas;
const getnombreProvincia = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { nombre_provincia } = req.params;
        const iniciativa = yield iniciativa_1.Iniciativa.findBy({ nombre_provincia: nombre_provincia });
        return res.json(iniciativa);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.getnombreProvincia = getnombreProvincia;
const getnombreMunicipio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { nombre_municipio } = req.params;
        const iniciativa = yield iniciativa_1.Iniciativa.findBy({ nombre_municipio: nombre_municipio });
        return res.json(iniciativa);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.getnombreMunicipio = getnombreMunicipio;
const toggleDestacada = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { identificador } = req.params;
        // Encuentra la iniciativa por su identificador
        const iniciativa = yield iniciativa_1.Iniciativa.findOneBy({ identificador: parseInt(identificador) });
        // Verifica si la iniciativa existe
        if (!iniciativa) {
            return res.status(404).json({ error: 'Iniciativa no encontrada' });
        }
        // Cambia el estado de "destacada"
        iniciativa.destacada = !iniciativa.destacada;
        // Guarda los cambios en la base de datos
        yield iniciativa.save();
        // Devuelve la iniciativa actualizada como respuesta
        return res.json(iniciativa);
    }
    catch (error) {
        console.error(error);
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
        else {
            return res.status(500).json({ message: 'Error interno del servidor' });
        }
    }
});
exports.toggleDestacada = toggleDestacada;
