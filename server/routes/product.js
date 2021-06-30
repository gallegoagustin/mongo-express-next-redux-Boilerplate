const express = require('express');
const router = express.Router();

router.get('/product', (req, res) => {
    const products = {
        1: "manga",
        2: "marvel",
        3: "cosplay"
    }

    return res.json(products);
})

module.exports = router;