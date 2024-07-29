import db from '../database/db.js';

export const selectProfessores = async (page, limit) => { 
  const offset = (page - 1) * limit;
  const result = await db.query`SELECT * FROM Professores ORDER BY ID OFFSET ${Number(offset)} ROWS
    FETCH NEXT ${Number(limit)} ROWS ONLY`;
  
  return result.recordset;
};

export const selectProfessoresByNome = async (nome, page, limit) => {
  const offset = (page - 1) * limit;
  const result = await db.query`SELECT * FROM Professores WHERE UPPER(Nome) 
  LIKE UPPER(${`%${nome}%`}) ORDER BY ID OFFSET ${Number(offset)} ROWS
    FETCH NEXT ${Number(limit)} ROWS ONLY`;
    return result.recordset;
};

export const selectProfessoresById = async (id) => {
  const result = await db.query`SELECT * FROM Professores WHERE ID = ${id}`;
  return result.recordset;
};

export const insertProfessor = async (professor) => {
  const result = await db.query`
    INSERT INTO Professores (Nome, Email) VALUES (${professor.nome}, ${professor.email})
  `;
  return result.recordset;
};

export const updateProfessor = async (id, professor) => {
  const result = await db.query`
    UPDATE Professores SET Nome = ${professor.nome}, Email = ${professor.email} WHERE ID = ${id}
  `;

  return result.recordset;
};

export const deleteProfessor = async (id) => {
  const result = await db.query`
  DELETE FROM Professores WHERE ID = ${id}`;

  return result.recordset;
};