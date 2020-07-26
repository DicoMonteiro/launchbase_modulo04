// uma função do node para escrever um arquivo e entre outras funções
const fs = require("fs")

const data = require("./data.json")
const { time } = require("console")

const { age, date } = require("./utils")

// show - retornar os dados de um instrutor
exports.show =function(req, res) {
    // req.query.id
    // req.body
    // req.params.id = /:id

    const { id } = req.params

    const foundInstructor = data.instructors.find(function(instructor){
        return instructor.id == id
    })

    if (!foundInstructor) return res.send("Instructor not found!")

    const instructor = {
        // Spread Operator (espalhando o ojeto)
        ...foundInstructor,
        age: age(foundInstructor.birth),
        services: foundInstructor.services.split(","),
        created_at: new Intl.DateTimeFormat("pt-BR").format(foundInstructor.created_at)
    }

    // return res.send(foundInstructor)
    return res.render("instructors/show", { instructor: instructor })
}

// create
exports.post = function(req, res) {

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
    // Convertendo o formato da data de nascimento
    req.body.birth = Date.parse(req.body.birth)
    // Definindo a data de criação do registro Instructor
    req.body.created_at = Date.now()
    // Criando o id para ser um dado único no registro
    req.body.id = Number(data.instructors.length + 1)

    // Inserindo um dado no array
    // data.instructors.push(req.body)

    // Desestruturando o req.body
    const { avatar_url, birth, created_at, id, gender, services, name } = req.body

    data.instructors.push({
        id,
        avatar_url,
        name,
        birth,
        gender,
        services,
        created_at
    })

    // No stringify podemos formatar como será registrado os dados
    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
        if (err) return res.send("Write File error!")

        return res.redirect("/instructors")
    })

    // return res.send(req.body)
}

// update
exports.edit = function(req, res) {
    const { id } = req.params

    const foundInstructor = data.instructors.find(function(instructor){
        return instructor.id == id
    })

    if (!foundInstructor) return res.send("Instructor not found!")

    const instructor = {
        ...foundInstructor,
        birth: date(foundInstructor.birth) // yyyy-mm-dd
    }

    return res.render('instructors/edit', { instructor })
}

// delete