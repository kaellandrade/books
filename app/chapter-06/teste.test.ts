// Refinamento de tipo refina apenas no escopo que você está !
/*

function isString(a: unknown): a is string {
    return typeof a === 'string'
}
console.log(isString('a')) // evaluates to true
console.log(isString([7])) // evaluates to false

function parseInput(input: string | number) {
    let formattedInput: string
    if (isString(input)) {
        formattedInput = input.toUpperCase()
    }
}
 */

interface IdLabel {
    id: number /* some fields */;
}
interface NameLabel {
    name: string /* other fields */;
}

// Condiditional type (poderoso com generics)
type NameOrId<T extends number | string> = T extends number
        ? IdLabel
        : NameLabel;

function createLabel<T extends number | string>(idOrName: T): NameOrId<T> {
    if (typeof idOrName === "number") {
        return { id: idOrName } as NameOrId<T>;
    } else {
        return { name: idOrName } as NameOrId<T>;
    }
}

let label = createLabel(5555);
console.log(label)
