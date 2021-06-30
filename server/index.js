const express = require('express');
const next = require('next');
require('./db')
require('dotenv').config()

const port = process.env.PORT || 3000;
const dev  = process.env.NODE_ENV !== 'production';
const app =  next({ dev });
const handle = app.getRequestHandler();

app
    .prepare()
    .then(() => {
        const server = express();
        const productRoutes = require('./routes/product'); 
        
        server.use(express.json());
        
        server.use('/api', productRoutes);

        server.get('/api/users', (req, res) => {
            const  users = {
                1: 'sugus',
                2: 'dani',
                3: 'jere',
                4: 'jorge'
            }

            return res.json(users);
        })

        server.get('*', (req, res) => {
            return handle(req, res);
        })

        server.listen(port, err => {
            if(err) throw err;
            console.log(`Now listening at port ${port}`)
        })
    })
    .catch(ex => {
        console.error(ex.stack);
        process.exit(1);
    })