const { Router } = require('express')

//Initializations 
const router = Router()

//Middlewares
//Routes

const productRoutes = require('./product.routes'); 
router.use('/product', productRoutes);
const ToDos = require('./ToDos.routes')
router.use('/ToDo', ToDos);
const Users = require('./users.routes')
router.use('/users', Users);


module.exports = router;