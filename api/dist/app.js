"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({});
const iniciativas_1 = require("./routes/iniciativas");
const auth_1 = require("./routes/auth");
const multer_1 = require("./routes/multer");
const user_1 = require("./routes/user");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// app.use(express.raw({ty}))
app.use(express_1.default.static('public'));
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.static('uploads'));
app.use('/iniciativa', iniciativas_1.router);
app.use('/iniciativa/:identificador', iniciativas_1.router);
app.use('/iniciativa/:identificador/', iniciativas_1.router);
app.use('iniciativa/provincia/:nombre_provincia', iniciativas_1.router);
app.use('iniciativa/municipio/:nombre_municipio', iniciativas_1.router);
app.use('/auth', auth_1.router);
app.use('/uploads', multer_1.router); // Servir archivos estáticos de la carpeta de carga
app.use(auth_1.router);
app.use(user_1.router);
exports.default = app;
