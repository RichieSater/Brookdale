const express = require('express');
const knex = require('knex');
var cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

const database = knex({
  client: 'mssql',
  connection: {
    user: 'richie',
    password: 'TheTaxChain1',
    server: 'dev-rs.database.windows.net',
    port: 1433,
    database: 'DevTest',
  },
});

app.get('/equipment', (req, res) => {
  database
    .select('*')
    .table('equipment')
    .then((data) => {
      res.json({
        data: data,
      });
    });
});

app.listen(3001, () => {
  console.log('listening at 3001');
});
