const express = require('express');
const mysql = require('mysql');

const app = express();

const conexion = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'reactmendoza',
});

app.get('/usuarios', (req, res) => {
  conexion.connect((err) => {
    if (err) {
      console.log('Error al conectarse a la bd');
    } else {
      console.log('Conectado a la BD');

      const sql = 'SELECT * FROM usuarios';

      //Ejecuta la consulta SQL. Si trae error, lo veo en el parametro error, sino en el parametro
      //resultado esta efectivamente los datos de la bd
      conexion.query(sql, (error, result) => {
        if (error) {
          console.log('Error al obtener los datos');
        } else {
          res.json(result);
        }
      });
    }
  });
});

app.listen(8000, () => {
  console.log('Escuchando en el puerto 8000');
});
