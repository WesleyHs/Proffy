module.exports = async function (db, { proffyValue, classValue, classScheduleValues }) {
    //inserir dados tabela proffys
    const insertedProffy = await db.run(`
        INSERT INTO proffys (
            name, 
            avatar,
            whatsapp,
            bio
        )VALUES (
            "${proffyValue.name}",
            "${proffyValue.avatar}",
            "${proffyValue.whatsapp}",
            "${proffyValue.bio}"

        );
   `)

    const proffy_id = insertedProffy.lastID


    //    inserir dados na tabela classes 

    const insertedClass = await db.run(`
        INSERT INTO classes(
            subject,
            cost,
            proffy_id
        )VALUES(
            "${classValue.sucject}",
            "${classValue.cost}",
            "${proffy_id}"
        );
    `)

    const class_id = insertedClass.lastID 

    // inserir dados na tabela class_schedule 

    const insertedAllClassSchedule = classScheduleValues.map((classScheduleValue) => {
        return db.run(`
            INSERT INTO class_schedule(
                class_id,
                weekday,
                time_from,
                time_to
            )VALUES(
                "${class_id}",
                "${classScheduleValue.weekday}",
                "${classScheduleValue.time_from}",
                "${classScheduleValue.time_to}"

            );
        `)
    })

    // aqui vou executar 
    await Promise.all(insertedAllClassSchedule)
}