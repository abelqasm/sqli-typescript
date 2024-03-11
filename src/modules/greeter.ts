export default function greet(name: string): string {
    return `Hello, ${name}!`;
}

export function other(name: string) : string {
    return `Hello, ${name} this is a named export`
}