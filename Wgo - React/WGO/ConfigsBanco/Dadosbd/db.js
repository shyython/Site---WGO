import express from 'express';
import bodyParser from 'body-parser';
import mysql from 'mysql';

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'wgo'
});
export default connection;