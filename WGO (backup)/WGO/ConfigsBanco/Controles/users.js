import express from 'express';
import { getUsers, addUser, getEvent, getSeach, getSeachbyCat, getEventoById, getPerfil, updatePerfil, salvarEvento, getEventosSalvos } from './user.js';
const router = express.Router();

router.get('/', getUsers);

router.post('/', addUser);

router.get('/eventos', getEvent)

router.post('/eventos/search', getSeach);

router.get("/buscar", getSeachbyCat);

router.get('/eventos/:id', getEventoById);

router.get('/search/:id', getPerfil);

router.put('/update/:id', updatePerfil);

router.post('/salvarEvento', salvarEvento);

router.get('/eventosSalvos/:usuarioId', getEventosSalvos);
export default router;