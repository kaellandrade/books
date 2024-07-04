
/*
1) Which parts of a function’s type signature does TypeScript infer: the parameters,
the return type, or both?

R- Para o retorno sempre será inferido.


2) Is JavaScript’s arguments object typesafe? If not, what can you use instead?

R- Pode ser utilizado o rest params.

antes: function f() { console.log(arguments) }
depois: function f(...args: unknown[]) { console.log(args) }

3) You want the ability to book a vacation that starts immediately. Update the over‐
loaded reserve function from earlier in this chapter (“Overloaded Function
Types” on page 58) with a third call signature that takes just a destination,
without an explicit start date. Update reserve’s implementation to support this
new overloaded signature.



// Overloaded function (uma função com várias assinaturas de chamada)

type Reservation = unknown;

type Reserve = {
    (from: Date, to: Date, destination: string): Reservation;
    (from: Date, destination: string): Reservation;
    (destination: string): Reservation;
};


// Como a reserva pode ser chamada de duas maneiras, quando você implementa a reserva,
// você precisa provar ao
// TypeScript que verificou como ela foi chamada


let reserve: Reserve = (
    from: Date | string,
    toOrDestination?: Date | string,
    destination?: string
) => {
    if (
        from instanceof Date &&
        toOrDestination instanceof Date &&
        destination !== undefined
    ) {
        // Book a one-way trip
    } else if (
        from instanceof Date &&
        typeof toOrDestination === 'string'
    ) {
        // Book a round trip
    } else if (typeof from === 'string') {
        // Book a trip right away
    }
}

console.log(reserve(new Date(2023, 0, 1), new Date(2025, 0, 1), 'EUA')); // <- overload function
reserve(new Date(), 'Brazil'); // <- overload function
reserve('Brazil'); // <- overload function

*/

/*
4) [Hard] Update our call implementation from earlier in the chapter (“Using
bounded polymorphism to model arity” on page 77) to only work for functions
whose second argument is a string. For all other functions, your implementa‐
tion should fail at compile time.


function call<T extends [unknown, string, ...unknown[]], R>(
    f: (...args: T) => R,
    ...args: T
): R {
    return f(...args)
}

function fill(length: number, value: string): string[] {
    return Array.from({ length }, () => value)
}

call(fill, 10, '2') // evaluates to an array of 10 'a's

*/

/*
5) Implement a small typesafe assertion library, is. Start by sketching out your
types. When you’re done, you should be able to use it like this:
*/

function is<T>(value1: T, ...value2: [T, ...T[]]): boolean {
    return value2.every(_ => _ === value1)

}

console.log(is('string', 'string'))
console.log(is(true, true, true, true, true))
console.log(is(42, 423))
console.log(is(10, 10))

let listA: number[] = [1, 23, 4]
let listB: number[] = listA
let listC: number[] = listB



console.log(is(listA, listB, listC))