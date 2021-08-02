class Vec {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    /**
     * Recebe um vetor e retorna outro vetor com a soma
     */
    plus(vec) {
        return new Vec(vec.x + this.x, vec.y + this.y);
    }

    /**
     * Recebe um vetor e retorna outro vetor com adiferença
     */
    minus(vec) {
        return new Vec(this.x - vec.x, this.y - vec.y);
    }

    get length() {
        return Math.sqrt((this.x ** 2) + (this.y ** 2))

    }
}
const v1 = new Vec(1, 2);
const v2 = new Vec(2, 3);

console.log(v1.plus(v2));
console.log(v1.minus(v2));
console.log(new Vec(3, 4).length);

