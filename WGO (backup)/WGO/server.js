import express from 'express';
import cors from 'cors';
import userrouter from './ConfigsBanco/Controles/users.js';

const app = express();
app.use(express.json());
app.use(cors());
app.use('/usuarios', userrouter);
app.listen(8800, () => console.log('API rodando na porta 8800'));