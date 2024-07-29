import { 
  selectProfessores,
  selectProfessoresByNome,
  selectProfessoresById,
  insertProfessor,
  updateProfessor,
  deleteProfessor
} from '../dao/professores.dao.js';

export const getProfessores = async (request, response) => {
  const page = request.query.page || 1;
  const limit = request.query.limit || 10;

  const professores = await selectProfessores(page, limit);

  response.status(200).json(professores);
};

export const getProfessoresByNome = async (request,response) => {
  const page = request.query.page || 1;
  const limit = request.query.limit || 10;
  const nome = request.query.nome || '';

  const professor = await selectProfessoresByNome(nome, page, limit);

  response.status(201).json(professor);
};

export const getProfessorById = async (request, response) => {
  const id = request.params.id;
  const professor = await selectProfessoresById(id);

  response.status(200).json(professor);
};

export const postProfessor = async (request, response) => {
  const professor = request.body;

  await insertProfessor(professor);

  response.status(200).json(professor);
};

export const putProfessor = async (request, response) => { 
  const id = request.params.id;
  const professor = request.body;

  await updateProfessor(id, professor);

  response.status(200).json(professor);
};

export const deleteProfessorById = async (request, response) => {
  const id = request.params.id;

  await deleteProfessor(id);

  response.status(200).json({message: `Professor ${id} deletado com sucesso`});
};