import sql from 'mssql';

const config = {
  user: "",  
  password: "", 
  server: "", 
  database: "", 
  options: {
    encrypt: false, 
  },
}

const db = sql.connect(config, (error) => {
  if (error) {
    throw error;
  }

  console.log('Conectado ao banco de dados');
});

export default db;