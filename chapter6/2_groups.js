class Group {
    constructor() {
        this.grupo = [];
    }

    /**
     * Permite ser chamado sem criar uma instância da classe;
     */
    static from(values = []) {
        const group = new Group();
        values.forEach(x => {
            group.add(x);
        });
        return group;
    }

    add(value) {
        if (!this.has(value))
            this.grupo.push(value);
    }

    delete(value) {
        this.grupo = this.grupo
            .filter((x) => x !== value);
    }

    has(value) {
        return this.grupo.indexOf(value) != -1;
    }

}

class GroupIterator {
    constructor(group) {
        this.group = group;
        this.len = 0;
    }

    next() {
        let res = { value: this.group.grupo[this.len], done: false };
        
        if (this.len == this.group.grupo.length)
            return { done: true };

        this.len++;
        return res;
    }
}
/**
 * Atrelando o iterador para Group
 */
Group.prototype[Symbol.iterator] = function () {
    return new GroupIterator(this);
}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
group.add(30);
group.add(40);
group.add(10);
console.log(group)

for (let value of group) {
    console.log(value);
}