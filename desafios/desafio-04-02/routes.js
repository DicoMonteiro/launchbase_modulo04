const express = require('express')
const routes = express.Router()

routes.get("/", function(req, res) {
    // return res.send("Hi! How's going?")
    return res.redirect("/teachers")
})

routes.get("/teachers", function(req, res) {
    return res.render("teachers/index")
})

routes.get("/students", function(req, res) {
    return res.send("students")
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