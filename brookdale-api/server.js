const express = require('express')
const knex = require('knex')
var cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())

const database = knex({
  client: 'mssql',
  connection: {
    user: 'richie',
    password: 'TheTaxChain1',
    server: 'dev-rs.database.windows.net',
    port: 1433,
    database: 'DevTest',
  },
})

app.get('/equipment', (req, res) => {
  database
    .select('*')
    .table('equipment')
    .then((data) => {
      res.json({
        data: data,
      })
    })
})

app.put('/update', (req, res) => {
  /**
   * [{ id: 1, quantity: 100}, ...]
   */
  try {
    req.body.forEach(({ id, quantity }) => {
      database
        .table('equipment')
        .where('id', id)
        .update('quantity_needed', quantity)
        .then((data) => {})
    })
  } catch {
    return res.status(500).send('Something went wrong')
  }
  return res.send('OK')
})

app.post('/login', async (req, res) => {
  try {
    console.log(req.body)
    const data = await database
      .table('login')
      .select('*')
      .where('email', req.body.email)
      .where('password', req.body.password)
    console.log(data)
    if (data.length == 1) {
      return res.send('OK')
    }
    return res.status(401).send('Wrong Email or Password')
  } catch (e) {
    console.error(e)
    return res.status(500).send('something went wrong')
  }
})

app.listen(3001, () => {
  console.log('listening at 3001')
})
