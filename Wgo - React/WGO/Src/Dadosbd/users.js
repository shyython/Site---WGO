import express from 'express';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';
const router = express.router();

router.get('/', getUsers);

export default router;