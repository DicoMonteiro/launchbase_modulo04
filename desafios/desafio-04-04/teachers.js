const fs = require("fs")
const data = require("./data.json")
const { age, date, graduation } = require("./utils")

exports.show = function(req, res) {
    
    const { id } = req.params

    const foundTeacher = data.teachers.find(function(teacher) {
        return teacher.id == id
    })

    if (!foundTeacher) return res.send("Teacher not found!")

    const teacher = {
        ...foundTeacher,
        age: age(foundTeacher.birth),
        disciplinas: foundTeacher.disciplinas.split(","),
        escolaridade: graduation(foundTeacher.escolaridade),
        created_at: new Intl.DateTimeFormat("pt-BR").format(foundTeacher.created_at)
    }

    return res.render("teachers/show", { teacher: teacher })
}
exports.post = function(req, res) {

    const keys = Object.keys(req.body)

    for (key of keys) {
        if (req.body[key] == "")
            return res.send("Please, fill all fields!!")
    }

    let { avatar_url, birth, escolaridade, class_type, disciplinas, name } = req.body

    birth = Date.parse(birth)
    const created_at = Date.now()
    const id = Number(data.teachers.length + 1)

    

    data.teachers.push({
        id,
        avatar_url,
        name,
        birth,
        escolaridade,
        class_type,
        disciplinas,
        created_at
    })

    // No stringify podemos formatar como será registrado os dados
    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
        if (err) return res.send("Write File error!")

        return res.redirect("/teachers")
    })

}

// update
exports.edit = function(req, res) {
    const { id } = req.params

    const foundTeacher = data.teachers.find(function(teacher) {
        return teacher.id == id
    })

    if (!foundTeacher) return res.send("Teacher not found!")

    const teacher = {
        ...foundTeacher,
        birth: date(foundTeacher.birth), // yyyy-mm-dd
        disciplinas: foundTeacher.disciplinas.split(",")
    }

    return res.render("teachers/edit", { teacher: teacher })
}

// delete