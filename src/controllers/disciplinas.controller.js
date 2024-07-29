import { 
 selectDisciplinas
} from '../dao/disciplina.dao.js';

export const getDisciplinas = async (request, response) => {
  const page = request.query.page || 1;
  const limit = request.query.limit || 10;

  const disciplinas = await selectDisciplinas(page, limit);

  response.status(200).json(disciplinas);
};