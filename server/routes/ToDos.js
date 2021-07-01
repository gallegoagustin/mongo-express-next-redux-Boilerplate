const { Router } = require('express')
const ToDo = require('../models/ToDo')

const ToDos = Router()

ToDos.post('/', async (req, res) => {
    console.log(req.body.ToDo)
    const { string, number } = req.body.ToDo
    const newToDo = await new ToDo({string, number})
    await newToDo.save()
    res.send('Chau!')
})

ToDos.get('/', async (req, res) => {
    const AllToDos = await ToDo.find()
    res.json(AllToDos)
})

module.exports = ToDos