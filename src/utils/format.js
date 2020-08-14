
const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geogradia",
    "História",
    "Matematica",
    "Português",
    "Química",
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Querta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado"
]

function getSubject(subjectNumber) {
    const position = +subjectNumber - 1
    return subjects[position]
}

function converHoursToMinutes(time) {
    // converter horar em minutos 
    const [hour, minutes] = time.split(":")
    return Number((hour * 60) + minutes)
}


module.exports = {
    subjects,
    weekdays,
    getSubject,
    converHoursToMinutes
}