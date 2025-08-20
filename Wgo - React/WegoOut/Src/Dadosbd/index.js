import React from "react";

const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const connection = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'WGO'
});

const app = express();
app.get('/dadosbd', (req, res) => {
  connection.query('SELECT * FROM dadosbd', (error, results) => {
    if (error) {
      console.error('Error fetching data:', error);
      res.status(500).send('Error fetching data');
    } else {
      res.json(results);
    }
  });
});
app.listen(3000, () => {
 console.log('Vai no navegador e entra em http://localhost:3000/users pra ver os usuários cadastrados.');
});
   