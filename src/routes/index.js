import { Router } from 'express';

import professoresRouter from './professores.router.js';

const router = Router();

router.use(professoresRouter);

export default router;