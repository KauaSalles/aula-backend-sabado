import { Router } from 'express';

import { 
  getProfessores,
  getProfessoresByNome,
  getProfessorById,
  postProfessor,
  putProfessor,
  deleteProfessorById
} from '../controllers/professores.controller.js';

const router = Router();

router.get('/professores', getProfessores);
router.get('/professores/nome', getProfessoresByNome);
router.get('/professores/:id', getProfessorById);
router.post('/professores', postProfessor);
router.put('/professores/:id', putProfessor);
router.delete('/professores/:id', deleteProfessorById);

export default router;