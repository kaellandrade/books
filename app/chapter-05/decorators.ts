// Utilizando decorators
/*
type ClassConstructor<T> = new (...args: any[]) => T;

function serializable<
	T extends ClassConstructor<{
		getValue(): Payload;
	}>,
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
*/

// ---
/*
4.a)
Garanta em tempo de compilação que alguém não pode chamar .send antes de definir pelo menos uma URL e um método.
Seria mais fácil fazer essa garantia se você também forçasse o usuário a chamar métodos em uma ordem específica?
(Dica: o que você pode retornar em vez do this?)
*/

// Estudar ese código e tentar entender o que ele faz

class RequestBuilder {
	protected data: object | null = null;
	protected method: 'get' | 'post' | null = null;
	protected url: string | null = null;

	setMethod(method: 'get' | 'post'): RequestBuilderWithMethod {
		return new RequestBuilderWithMethod().setMethod(method).setData(this.data);
	}

	setData(data: object | null): this {
		this.data = data;
		return this;
	}
}

class RequestBuilderWithMethod extends RequestBuilder {
	override setMethod(method: 'get' | 'post' | null): this {
		this.method = method;
		return this;
	}

	setURL(url: string): RequestBuilderWithMethodAndURL {
		return new RequestBuilderWithMethodAndURL()
			.setMethod(this.method)
			.setURL(url)
			.setData(this.data);
	}
}

class RequestBuilderWithMethodAndURL extends RequestBuilderWithMethod {
	override setURL(url: string): this {
		this.url = url;
		return this;
	}

	send() {
		console.warn(this.method, this.url);
	}
}

const builder = new RequestBuilder();
builder.setMethod('get').setURL('kaellandrade').send();

/**
 * Como você mudaria seu design se quisesse fazer essa garantia, mas ainda deixar as pessoas chamarem métodos em qualquer ordem?
 * (Dica: qual recurso do Type-Script você pode usar para fazer com que o tipo de retorno de cada método
 * “adicione” ao tipo this após cada chamada de método?)
 */
interface BuildableRequest {
	data?: object;
	method: 'get' | 'post';
	url: string;
}

class RequestBuilder2 {
	data?: object;
	method?: 'get' | 'post';
	url?: string;

	setData(data: object): this & Pick<BuildableRequest, 'data'> {
		return Object.assign(this, { data });
	}

	setMethod(method: 'get' | 'post'): this & Pick<BuildableRequest, 'method'> {
		return Object.assign(this, { method });
	}

	setURL(url: string): this & Pick<BuildableRequest, 'url'> {
		return Object.assign(this, { url });
	}

	build(this: BuildableRequest) {
		return this;
	}
	send(){
		console.log(this.data, this.method, this.url);
		return this;
	}
}

const builderAntOrder = new RequestBuilder2()
	.setData({})
	.setMethod('post')
	.setURL('bar')
	.send()
	.build();
