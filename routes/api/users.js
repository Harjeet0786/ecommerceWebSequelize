const User = require("../../db").User
const router = require("express").Router()

router.get("/", (req, res) => {
    // we want to send an array of all users
    //from our database here
    User.findAll()
        .then((users) => {
            req.status(200).send(users)
        }).catch((err) => {
            res.status(500).send({
                error: "could not retrive users"
            })
        })
})

router.post("/create", (req, res) => {
    // we want to send an array of all users
    //from our database here
    User.create({ name: req.body.name })
        .then((users) => {
            req.status(200).send(users)
        }).catch((err) => {
            res.status(500).send({
                error: "could not retrive users"
            })
        })
})

exports = module.exports = router;