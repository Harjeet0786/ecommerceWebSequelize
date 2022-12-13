const Product = require("../../db.js").Product
const router = require("express").Router()

router.get("/", (req, res) => {
    // we want to send an array of all users
    //from our database here
    Product.findAll()
        .then((users) => {
            req.status(200).send(users)
        }).catch((err) => {
            res.status(500).send({
                error: "could not retrive product"
            })
        })
})

router.post("/create", (req, res) => {
    // we want to send an array of all users
    //from our database here
    Product.create({ name: req.body.name })
        .then((users) => {
            req.status(200).send(users)
        }).catch((err) => {
            res.status(500).send({
                error: "could not retrive products"
            })
        })
})


exports = module.exports = router;