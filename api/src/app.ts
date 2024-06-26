import "reflect-metadata";
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv'
dotenv.config({})
import {router as iniciativasRouter} from './routes/iniciativas';
import {router as authRouter } from'./routes/auth'
import {router as multerRouter} from './routes/multer'
import {router as userRoutes} from './routes/user'
const app = express();
app.use(cors());
app.use(express.json());
// app.use(express.raw({ty}))
app.use(express.static('public'))
app.use(morgan('dev'));
app.use(express.static('uploads'))

app.use('/iniciativa', iniciativasRouter);
app.use('/iniciativa/:identificador',iniciativasRouter)
app.use('/iniciativa/:identificador/',iniciativasRouter)
app.use('iniciativa/provincia/:nombre_provincia',iniciativasRouter)
app.use('iniciativa/municipio/:nombre_municipio',iniciativasRouter)
app.use('/auth',authRouter);
app.use('/uploads', multerRouter); // Servir archivos estáticos de la carpeta de carga
app.use(authRouter)
app.use(userRoutes)
export default app;
