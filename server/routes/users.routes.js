const { Router } = require('express')
const User = require('../models/User')
const { 
    registerController,
    logIn
    } = require('../controllers/users.controllers')

const router = Router()

router.get('/', (req, res) => {
    res.send('Funciona!')
})

router.post('/', registerController)

router.get('/logIn', logIn)

module.exports = router;