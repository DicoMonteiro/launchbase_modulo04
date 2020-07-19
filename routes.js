const express = require('express')
const routes = express.Router()

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

routes.post("/instructors", function(req, res) {

    // req.body
    // {
    //     "avatar_url": "http://www.google.com",
    //     "name": "Adriano",
    //     "birth": "1984-12-22",
    //     "gender": "M",
    //     "services": "musculação, crossfit"
    //   }

    // Validar a obrigatoriedade de preencher os campos
    // [
    //     "avatar_url",
    //     "name",
    //     "birth",
    //     "gender",
    //     "services"
    //   ]
    const keys = Object.keys(req.body)

    for (key of keys) {
        if (req.body[key] == "")
            return res.send("Please, fill all fields!!")
    }
    return res.send(req.body)
})

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