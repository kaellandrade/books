import JOURNAL from './Journal.js'
/**
 * Recebe um array de eventos, e se houve tranformação ;
 */
const addEntry = (events, squirrel) => journal.push({ events, squirrel });

/**
 * Esta função calcula o coefiente ϕ de um determinado array
 * ϕ = 	n11*n00 − n10*n01 / √ n1•n0•n•1n•0 
 * cada indice do array será  interpreatdo como um valor binário
 * [00, 01, 10, 11]
 */

const phi = ([n00, n01, n10, n11]) => (
    (n11 * n00 - n10 * n01) /
    Math.sqrt((n10 + n11) *
        (n00 + n01) *
        (n01 + n11) *
        (n00 + n10))
);


/**
 * Retorna uma matriz 2X2 para um determinado evento específico de JOURNAL,
 * será contada quantas vezes o evento squirrel occoreu parar esse determinado evento
 * EX: tableFor("brushed teeth", JOURNAL) → [76, 9, 4, 1]
 */
const tableFor = (event, journal) => {
    let table = [0, 0, 0, 0];
    journal.reduce(function (acumulador, valorAtual) { // TODO: usar arrow funcion
        acumulador = 0;
        if (valorAtual.events.includes(event)) acumulador += 1;
        if (valorAtual.squirrel) acumulador += 2;
        table[acumulador] += 1;
    }, table);
    return table;
}

/**
 * Retorna uma coleção de todos os eventos sem repetições.
 * ex: → ["carrot", "exercise", "weekend", "bread", …]
 */
const journalEvents = (journal) => {
    let events = [];
    journal.reduce((acumulador, valorAtual) => {
        valorAtual.events.filter((x) => { if (!events.includes(x)) events.push(x) })
    });
    return events;
}
/**
 * Calcula as correções de todos os eventos em um array de objetos
 * com o seguinte modelo [{carrot : 0.0140970969}, ...]
 */
const calcCorrelations = (journalEvents) => {
    return journalEvents.map((event) => {
        return { [event]: phi(tableFor(event, JOURNAL)) }
    })
}
/**
 * Filtra correlações a cima de 0.1 e ou abaixo de -0.1
 */
const filterCorrelations = (correlation) => {
    return correlation.filter(event => {
        let value = Object.values(event)[0];
        return value > 0.1 || value < -0.1;
    })
}

const CORRELATION = calcCorrelations(journalEvents(JOURNAL));

console.log(filterCorrelations(CORRELATION));

/*
for (let entry of JOURNAL) {
    if (entry.events.includes("peanuts") &&
        !entry.events.includes("brushed teeth")) {
        entry.events.push("peanut teeth");
    }
}
console.log(phi(tableFor("peanut teeth", JOURNAL)));
*/