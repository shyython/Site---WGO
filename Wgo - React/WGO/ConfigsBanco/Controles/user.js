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
export const addUser = (req, res) => {
  const q = 'INSERT INTO Dados_Usuarios (Nome, Email, Telefone, Senha) VALUES (?)';
  const values = [
    req.body.Nome,
    req.body.Email,
    req.body.Telefone,
    req.body.Senha,
  ];
  db.query(q, [values], (err, data) => {
    if (err) {
      return res.status(500).json(err);
    }
    return res.status(200).json('Usuário adicionado com sucesso');
  });
}