"use strict";
// controller.ts
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
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const multerConfig_1 = require("../helpers/multerConfig");
const iniciativa_1 = require("../entities/iniciativa");
const apiHelper_1 = __importDefault(require("../helpers/apiHelper"));
exports.router = express_1.default.Router();
exports.router.post('/upload', multerConfig_1.upload.array('images', 10), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
        const images = req.files.map((file) => `${apiHelper_1.default}/${file.filename}`);
        console.log("OHHHHHHHHHHHHHHHHHHH!");
        console.log(images);
        const iniciativa = yield iniciativa_1.Iniciativa.findOneBy({ identificador });
        console.log("INC");
        console.log(iniciativa);
        if (!iniciativa) {
            return res.status(404).json({ error: 'Iniciativa no encontrada' });
        }
        iniciativa.imagenes = images;
        const nueva = yield iniciativa.save();
        console.log("Nueva");
        console.log(nueva);
        return res.json({ message: 'Imagen subida correctamente' });
    }
    catch (error) {
        console.error('Error al subir la imagen:', error);
        return res.status(500).json({ error: 'Error al subir la imagen' });
    }
}));
