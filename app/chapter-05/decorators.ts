// Utilizando decorators

type ClassConstructor<T> = new(...args: any[]) => T;

// wrap
@serializable
class APIPayload {
	getvalue(): string {
		return '';
	}
}

function serializable<T extends ClassConstructor<{
	getValue(): string
}>
>(Constructor: T) {
	// tslint:disable-next-line:max-classes-per-file
	return class extends Constructor {
		serialize() {
			return this.getValue().toString();
		}
	};
}