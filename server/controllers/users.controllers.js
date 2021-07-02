const User = require('../models/User')

const users = {}


users.registerController = async (req, res) => {
    console.log(req.body)
    const { email, username, name, surname, password, nickname } = req.body
    const newUser = await new User({ email, username, name, surname, password, nickname })
    await newUser.save()
    res.send('Anda!')
}

users.logIn = async (req, res) => {
    res.send('Bienvenido!')
}

module.exports = users