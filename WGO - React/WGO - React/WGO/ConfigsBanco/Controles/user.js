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
  const q = "INSERT INTO Dados_Usuarios (Nome, Email, Data_Nasc, Senha, Telefone) VALUES (?, ?, ?, ?, ?)";
  const values = [
    req.body.Nome,
    req.body.Email,
    req.body.Data_Nasc,
    req.body.Senha,
    req.body.Telefone,
  ];

  console.log(values); 

  db.query(q, values, (err, data) => {
    if (err) {
      console.log("Erro INSERT:", err);
      return res.status(500).json(err);
    }
    console.log("Resultado INSERT:", data);
    return res.status(200).json("Usuário adicionado com sucesso");
  });
};
export const getEvent = (req,res) =>{
  const q = 'SELECT * FROM eventos';

  db.query(q, (err,data) =>{
    if (err) {
      return res.status(500).json(err);
    }
    console.log(data);
    return res.status(200).json(data); 
  });
}
export const getSeach = (req, res) => {
  console.log("req.query:", req.query);
  console.log("req.url:", req.url);
  console.log("req.path:", req.path);

  const search = req.query.procurar || "";
  const q = "SELECT * FROM eventos WHERE Nome_Evento LIKE ?";

  db.query(q, [`%${search}%`], (err, data) => {
    if (err) {
      console.error("Erro MySQL:", err);
      return res.status(500).json(err);
    }
    return res.status(200).json(data);
  });
};