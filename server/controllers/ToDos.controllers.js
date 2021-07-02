const ToDo = require('../models/ToDo')
const ToDos = {}

ToDos.addToDo = async (req, res) => {
    console.log(req.body.ToDo)
    const { string, number } = req.body.ToDo
    const newToDo = await new ToDo({string, number})
    await newToDo.save()
    res.send('Chau!')
}

ToDos.getToDos = async (req, res) => {
    const AllToDos = await ToDo.find()
    res.json(AllToDos)
}

module.exports = ToDos;