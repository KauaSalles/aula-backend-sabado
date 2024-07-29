import db from '../database/db.js';

export const selectDisciplinas = async (page, limit) => { 
  const offset = (page - 1) * limit;
  const result = await db.query`SELECT * FROM Disciplinas ORDER BY ID OFFSET ${Number(offset)} ROWS
    FETCH NEXT ${Number(limit)} ROWS ONLY`;
  
  return result.recordset;
};