const weekDay = _ => {
    const namesDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

    return {
        name(number) { return namesDays[number] },
        number(name) { return namesDays.indexOf(name) }
    }
};

const WEEK = weekDay();

console.log(WEEK.name(WEEK.number("Sábado")));