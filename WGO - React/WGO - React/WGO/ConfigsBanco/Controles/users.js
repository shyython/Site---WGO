import express from 'express';
import { getUsers, addUser, getEvent, getSeach, getEventoById } from './user.js';
const router = express.Router();

router.get('/', getUsers);

router.post('/', addUser);

router.get('/eventos', getEvent)

router.post('/eventos/search', getSeach);

router.get('/eventos/:id', getEventoById);

export default router;