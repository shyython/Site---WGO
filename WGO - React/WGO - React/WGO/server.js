import express from 'express';
import cors from 'cors';
import userrouter from './ConfigsBanco/Controles/user.js';

const app = express();
app.use(express.json());
console.log("Rotas registradas:", app._router.stack.map(r => r.route && r.route.path).filter(Boolean));
app.use(cors());
app.use('/usuarios', userrouter);
app.listen(8800, () => console.log('API rodando na porta 8800'));