const express = require('express');
const initModels = require('./models/initModels');
const Tasks = require('./models/task.models');
const db = require('./utils/database');

const PORT = 8000;

const app = express();

app.use(express.json());

initModels();

db.authenticate()
  .then(() => console.log('autenticación exitosa'))
  .catch(error => console.log(error))

db.sync({ force: false })
  .then(() => console.log('Sincronización correctamente'))
  .catch((error) => console.log(error));


app.get('/', (req, res)=>{
  res.status(200).json({ message: 'bienvenido al servidor' });
});


app.get('/api/v1/task', async (req, res) => {
  try {
    const result = await Tasks.findAll();
    res.status(200).json(result);
  } catch (error) {
    console.log(error)
  }
})


app.get('/api/v1/task/:id', async (req, res) => {
  try {
    const {id} = req.params;
    const result = await Tasks.findByPk(id)
    res.status(200).json(result)
  } catch (error) {
    console.log(error)
  }
})


app.post('/api/v1/task', async (req, res)=>{
  try {
    const task = req.body;
    const result = await Tasks.create(task)
    res.status(201).json(result); 
  } catch {
    console.log(error)
  }
})

app.put('/api/v1/task/:id', async (req, res)=>{
  try {
    const {id} = req.params;
    const change = req.body;
    const result = await Tasks.update(change, {where: {id}})
    res.json(result); 
  } catch {
    console.log(error)
  }
})

app.delete('/api/v1/task/:id', async (req, res)=>{
  try {
    const {id} = req.params;
    const result = await Tasks.destroy({where: {id}})
    res.json(result);
  } catch {
    console.log(error)
  }
})


app.listen(PORT, ()=>{
  console.log(`servidor corriendo en el puerto ${PORT}`)
})

