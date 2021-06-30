const express = require('express');
const router = express.Router();

router.get('/product', (req, res) => {
    // Creamos un JSON
    const products = {
        1: "manga",
        2: "marvel",
        3: "cosplay"
    }

    return res.json(products);
})

module.exports = router;