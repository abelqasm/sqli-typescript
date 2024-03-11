//Classes and Inheritance
class Animal {
    name: string;
    constructor(theName: string) { this.name = theName; }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class Dog extends Animal {
    constructor(name: string) {super(name)}
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved at a distance of ${distanceInMeters}m.`);
    }
}

let dog: Dog = new Dog('pekin');

dog.move(5);

//Public, Private, and Protected Modifiers

class Person {
    private name: string;
    constructor(name: string) { this.name = name; }
    get getName() {
        return this.name;
    }
}

let person: Person = new Person('me');

person.getName;