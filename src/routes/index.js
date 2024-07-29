import { Router } from 'express';

import professoresRouter from './professores.router.js';
import disciplinaRouter from './disciplina.router.js';

const router = Router();

router.use(professoresRouter);
router.use(disciplinaRouter);

export default router;