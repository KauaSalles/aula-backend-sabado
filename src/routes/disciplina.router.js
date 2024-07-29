import { Router } from 'express';

import { 
  getDisciplinas
} from '../controllers/disciplinas.controller.js';

const router = Router();

router.get('/disciplinas', getDisciplinas);


export default router;