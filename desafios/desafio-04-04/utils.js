module.exports = {

    age: function(timestamp) {
        const today = new Date()
        const birthDate = new Date(timestamp)

        let age = today.getFullYear() - birthDate.getFullYear()
        const month = today.getMonth() - birthDate.getMonth()

        if (month < 0 || month == 0 && today.getDate() <= birthDate.getDate()) {
            age = age -1
        }

        return age
    },
    date: function(timestamp) {
        const date = new Date(timestamp)

        // yyyy
        const year = date.getUTCFullYear()
        // mm
        // slice usado para pegar determinados dados do elemento, no caso, pegando os dois ultimos dados
        const month = `0${date.getUTCMonth() + 1}`.slice(-2)
        // dd
        const day = `0${date.getUTCDate()}`.slice(-2)

        // yyyy/mm/dd
        // console.log(`${year}-${month}-${day}`)
        return `${year}-${month}-${day}`
    },
    graduation: function(escolaridade) {
        switch (escolaridade) {
            case 'doutorado':
                return 'Doutorado'
            case 'mestrado':
                return 'Mestrado'
            case 'mba':
                return 'Especialização'
            case 'superior':
                return 'Ensino Superior Completo'
            default:
                return 'Ensino Médio Completo'
        }
    }
}