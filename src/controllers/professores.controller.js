import { selectProfessores } from '../dao/professores.dao.js';

export const getProfessores = async (request, response) => {
  const page = request.query.page || 1;
  const limit = request.query.limit || 10;

  const professores = await selectProfessores(page, limit);

  response.status(200).json(professores);
};