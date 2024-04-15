// Shorthand call signature
type Log = (message: string, userId?: string) => void;
// Full call signature

type Log2 = {
	(message: string, userId?: string): void;
};

// Overloaded function (uma função com várias assinaturas de chamada)

type Reservation = string;

type Reserve = {
	(from: Date, to: Date, destination: string): Reservation;
	(from: Date, destination: string): Reservation;
};

/**
 * Como a reserva pode ser chamada de duas maneiras, quando você implementa a reserva,
 * você precisa provar ao
 * TypeScript que verificou como ela foi chamada
 */

let reserve: Reserve = (
	from: Date,
	toOrDestination: Date | string,
	destination?: string
) => {
	if (toOrDestination instanceof Date && destination !== undefined) {
		console.log('Ida é volta');
	} else if (typeof toOrDestination === 'string') {
		console.log('só de ida');
	}
	return '';
};

console.log(reserve(new Date(2023, 0, 1), new Date(2025, 0, 1), 'EUA')); // <- overload function
reserve(new Date(), 'Brazil'); // <- overload function
