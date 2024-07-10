// Utilizando Mixins

/**
 * Classe que teremos os Mixins aplicados.
 */
class Sprite {
	x = 0;
	y = 0;

	constructor(private name: string) {
	}
}

/**
 * Precisamos de um tipo que usaremos para estender outras classes.
 * A principal responsabilidade é declarar que o tipo que está sendo passado é uma classe.
 */

type Constructor<T> = new (...args: any[]) => T;


/**
 * Esse mixin adiciona uma propriedade de escala, com getters e setters
 * para alterá-la com uma propriedade privada encapsulada.
 */
function Scala<Tbase extends Constructor<object>>(Base: Tbase) {
	// tslint:disable-next-line:max-classes-per-file
	return class Scaling extends Base {
		// Em mixins não podemos utilizar operadores private/protected
		_scale = 1;

		setScale(scale: number) {
			this._scale = scale;
		}

		get scale(): number {
			return this._scale;
		}
	};
}

/**
 * Agora podemos criar uma classe que representa a classe base com mixins
 * aplicados.
 */
const EightBitSprinte = Scala(Sprite);
const flappySprite = new EightBitSprinte('Bird');
flappySprite.setScale(0.6);
console.log(flappySprite);

// Bruxaria pesada!

/**
 * Além disso, podemos criar um mixin para classes que tem método particulares, veja:
 */

type GConstructor<T = {}> = new (...args: any[]) => T;

type Positionable = GConstructor<{ setPos: (x: number, y: number) => void }>;
type Spritable = GConstructor<Sprite>;
type Loggable = GConstructor<{ print: () => void }>;

function Jumpable<TBase extends Positionable>(Base: TBase) {
	// tslint:disable-next-line:max-classes-per-file
	return class Jumpable extends Base {
		jump() {
			// Este mixin só funciona se a classe base possuir setPos
			this.setPos(0, 20);
		}
	};
}