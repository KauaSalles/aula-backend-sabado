import { Router } from 'express';

import { getProfessores } from '../controllers/professores.controller.js';

const router = Router();

router.get('/professores', getProfessores);

export default router;