function logged(constructor: any) {
    const originalConstructor = constructor;
 
    const newConstructor: any = function (...args: any[]) {
      const instance = new originalConstructor(...args);
 
      console.log('instance created');
 
      return instance;
    };
 
    newConstructor.prototype = originalConstructor.prototype;
 
    return newConstructor;
}

 function format(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log(target());
        console.log(propertyKey);
        console.log(descriptor);
};

@logged
class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    @format
    greet() {
        return "Hello, " + this.greeting;
    }
}

let a = new Greeter('test')
let b = new Greeter('testou')
let c = new Greeter('testa')