// Utilizando decorators

type ClassConstructor<T> = new(...args: any[]) => T;

function serializable<T extends ClassConstructor<{
	getValue(): Payload
}>
>(Constructor: T) {
	// tslint:disable-next-line:max-classes-per-file
	return class extends Constructor {
		serialize() {
			return this.getValue().toString();
		}
	};
}

// wrap
@serializable
class APIPayload {
	getvalue(): string {
		return '';
	}
}


let DecoratedAPIPayload = serializable(APIPayload);
let payload = new DecoratedAPIPayload();
payload.serialize();
