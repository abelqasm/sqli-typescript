//Defining Interfaces
interface Vehicle {
    make: string;
    model: string;
    year?: number;
}

function createVehicle(vehicule: Vehicle) : Vehicle {
    return vehicule;
}

//Optional Properties
interface Person {
    firstName: string;
    lastName: string;
    age?: number; 
    email?: string; 
}

function updatePerson(person: Person, updates: Person ) : Person {
    let newPerson: Person = person;
    if (updates.age) person.age = updates.age;
    if (updates.email) person.email = updates.email;
    return newPerson;
}

// Readonly Properties
interface Circle {
    centerX: number;
    centerY: number;
    readonly radius: number;
}

function moveCircle() {
    let circle: Circle = { centerX: 10, centerY: 20, radius: 5 };

    circle.centerX = 5;
    circle.centerY = 5;
}
