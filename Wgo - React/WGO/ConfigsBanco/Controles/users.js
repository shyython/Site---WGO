import express from 'express';
import cors from 'cors';
import { getUsers, addUser } from './user.js';

const router = express.Router();

router.get('/', getUsers);

router.post('/', addUser);

app.listen(8800, () => {
  console.log("Servidor rodando na porta 8800");
});

export default router;