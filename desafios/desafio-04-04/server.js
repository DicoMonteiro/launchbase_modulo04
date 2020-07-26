const express = require('express')
const nunjucks = require('nunjucks')
const routes = require("./routes")

const server = express()

// Essa linha serve para conseguir interpretar o req.body, no POST
server.use(express.urlencoded({ extended: true }))
server.use(express.static('public'))
server.use(routes)

server.set("view engine", "njk")

nunjucks.configure("views", {
    express:server,
    autoescape: false,
    noCache: true
})

// Usando o package 'nodemon' para manter o servidor em execução e atualizar automaticamente
server.listen(5000, function () {
    console.log("server is running.")
})