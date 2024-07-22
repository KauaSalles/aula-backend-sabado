import db from '../database/db.js';

export const selectProfessores = async (page, limit) => { 
  const offset = (page - 1) * limit;
  const result = await db.query`SELECT * FROM Professores ORDER BY ID OFFSET ${offset} ROWS
    FETCH NEXT ${limit} ROWS ONLY`;
  
  return result.recordset;
};