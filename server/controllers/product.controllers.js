const products = {}

products.pruebaProducts = (req, res) => {
    // Creamos un JSON
    const products = {
        1: "manga",
        2: "marvel",
        3: "cosplay"
    }

    return res.json(products);
}

module.exports = products;