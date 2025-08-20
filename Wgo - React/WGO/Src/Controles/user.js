import db from '../Dadosbd/db.js';

export const getUsers = (_, res) => {
const q = 'SELECT * FROM users';

  db.query(q, (err, results) => {
    if (err) {
      return res.status(err).json(err);
    }
    return
  });
}