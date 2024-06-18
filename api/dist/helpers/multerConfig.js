"use strict";
// multerConfig.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.upload = void 0;
const multer_1 = __importDefault(require("multer"));
const storage = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Carpeta donde se guardarán las imágenes
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname); // Nombre de archivo único
    },
});
const upload = (0, multer_1.default)({
    storage,
    limits: { files: 10 } // Limita a un máximo de 5 archivos
});
exports.upload = upload;
// Puedes exportar otras cosas si es necesario
