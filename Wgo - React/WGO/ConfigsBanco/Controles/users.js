import express from 'express';
import { getUsers } from './user.js';
const router = express.Router();

router.get('/', getUsers);

export default router;