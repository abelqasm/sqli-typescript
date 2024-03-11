//Generic Functions
function identity<T>(arg: T): T {
    return arg;
}

console.log(typeof identity('test'))
console.log(typeof identity(150))

// Generic Interfaces
interface GenericIdentityFn<T> {
    fn(arg: T): T;
}

interface GenericArray<T> {
    arr: T[];
}