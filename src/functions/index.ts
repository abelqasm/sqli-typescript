//Function Types
function greet(s: string): string {
    return 'hello' + s
}

function multiply(a: number, b: number) : number {
    return a * b;
}

//ptional and Default Parameters

function createEmail(to: string, subject = 'No Subject'): void {
}

function add(x: number, y:number, z?: number) : number {
    if (z) return x + y + z;
    return x+y
}

//Rest Parameters
function concatenateStrings(...rest: string[]): string {
    return rest.reduce((acc, curr) => acc + curr , '');
}

function maxNumber(...rest: number[]) : number {
    rest.sort((a,b) => a - b);
    return rest[rest.length - 1]
}