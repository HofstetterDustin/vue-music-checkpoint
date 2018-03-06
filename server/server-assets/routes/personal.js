// var router = require('express').Router()         //todo: add later//
// var User = require('../models/user')
// // var itunes = require('../models/itunes')

// router.post("/users", (req, res, next) => {
//     console.log("posting user")
//     Users.find({ username: req.body })
//         .then(user => {
//         if (user) {
//             return res.send(user)
//         } else {
//             return res.status(404).send({ error: "user not found!" })
//         }
//     })
//     .catch(next)
// User.create(req.body)
//     .then(user => {
//         res.send(user);
//     })
//     .catch(next);
// });

// module.exports = { router }