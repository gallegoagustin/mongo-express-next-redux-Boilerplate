const { Router } = require('express')
const {
    addToDo,
    getToDos
} = require('../controllers/ToDos.controllers')

const ToDos = Router()

ToDos.post('/', addToDo)

ToDos.get('/', getToDos)

module.exports = ToDos