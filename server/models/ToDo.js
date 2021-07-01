const { Schema, model } = require("mongoose");

const ToDoSchema = new Schema ({
    string: {
        type: String,
        required: true
    },
    number: {
        type: String,
        required: true
    }
})

module.exports = model('ToDo', ToDoSchema)


