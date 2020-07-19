const express = require('express')
const routes = express.Router()

const instructors =require('./instructors')

routes.get("/", function(req, res) {
    // return res.send("Hi! How's going?")
    return res.redirect("/instructors")
})

routes.get("/instructors", function(req, res) {
    return res.render("instructors/index")
})

routes.get('/instructors/create', function(req, res) {
    return res.render('instructors/create')
})

routes.get('/instructors/:id', instructors.show)

routes.get('/instructors/:id/edit', function(req, res) {
    return res.render('instructors/edit')
})

routes.post("/instructors", instructors.post)

routes.get("/members", function(req, res) {
    return res.send("members")
})




// routes.get("/video", function(req, res) {
//     // Pegar o Id da requisição solicitada
//     const id = req.query.id

//     // Filtando do array do arquivo data.js
//     const video = videos.find(function(video) {
//         // if (video.id == id){
//         //     return true
//         // }
//         return video.id == id
//     })

//     if (!video) {
//         return res.send("Video not found!")
//     }

//     return res.render("video", { item: video })
// })


module.exports = routes