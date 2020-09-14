// uma função do node para escrever um arquivo e entre outras funções
const fs = require("fs")

const data = require("./data.json")
const { time } = require("console")

const { age, date } = require("./utils")

// Index
exports.index = function (req, res) {
    const foundInstructor = data.instructors
    let instructors = []
    if (!foundInstructor) return res.send("Instructor not found!")

    for (let instructor in foundInstructor) {
        instructors[instructor] = {
            ...foundInstructor[instructor],
            services: foundInstructor[instructor].services.split(",")
        }
    }
    return res.render("instructors/index", { instructors: instructors })
}

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

// edit
// Página para edição
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

// put
// Lógica para persistir a alteração feita
exports.put = function(req, res) {
    const { id } = req.body

    let index = 0

    const foundInstructor = data.instructors.find(function(instructor, foundIndex){
        if (id == instructor.id) {
            index = foundIndex
            return true
        }
    })

    if (!foundInstructor) return res.send("Instructor not found!")

    const instructor = {
        ...foundInstructor,
        ...req.body,
        birth: Date.parse(req.body.birth),
        id: Number(req.body.id)
    }

    data.instructors[index] = instructor

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
        if(err) return res.send("Write error!")

        return res.redirect(`/instructors/${id}`)
    })

}

// delete

exports.delete = function(req, res) {
    const { id } = req.body

    const filteredInstructors = data.instructors.filter(function(instructor) {
        // Se retornar false, ele retira do elemento filteredInstrutor e se for true ele colocar dentro
        return instructor.id != id
    })

    data.instructors = filteredInstructors

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
        if (err) return res.send("Write file error!")

        return res.redirect("/instructors")
    })
}