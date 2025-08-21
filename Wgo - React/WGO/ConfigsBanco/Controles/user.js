import db from '../Dadosbd/db.js';

export const getUsers = (req, res) => {
const q = 'SELECT * FROM Dados_Usuarios';

  db.query(q, (err, results) => {
    if (err) {
      return res.status(500).json(err);
    }
    console.log(results);
    return res.status(200).json(results); 
  });
}