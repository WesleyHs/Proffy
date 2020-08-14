const database = require('./db')
const createProffy = require('./createProffy')

database.then(async (db) => {
    proffyValue = {
        name: "Diego Fernandes",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&v=4",
        whatsapp: "99999-5682",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",

    }

    classValue = {
        subject: 1,
        cost: "20",

    }

    classScheduleValues = [{
        weekday: 1,
        time_from: 720,
        time_to: 1220
    },
    {
        weekday: 3,
        time_from: 720,
        time_to: 1220
    }
    ]

    // await createProffy(db, {proffyValue, classValue,  classScheduleValues}) 

    //consultar dados

    //todos os proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")
    // console.log(selectedProffys)

    //consultar as clases de um determinado professor
    //e trazer junto os dados
    const selectedClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.* 
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    // console.log(selectedClassesAndProffys)

    //o horario que a pessoa trabalha, por ex, das 8h - 18h
    //o horario do time_from (8), precisa ser antes ou igual ao horario solicitado
    //o time_to precisa ser acima

    const selectedClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = 1
        AND class_schedule.weekday = 3
        AND class_schedule.time_from <= "520"
        AND class_schedule.time_to >= "720"

    `)

    console.log(selectedClassesSchedules)


})