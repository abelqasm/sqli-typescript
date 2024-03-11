interface Todo {
    title: string;
    description: string;
}

let todo: Partial<Todo> = {
    title: 'title'
}

interface User {
    readonly username: string;
}

let user: User = {username: 'name'}