
//Number, String, and Boolean
let temperature: number = 50;
let welcomeMessage: string = 'welcome';
let isLoggedIn: boolean = true;

//Arrays and Tuples
let colors: string[] = ['blue','red']
let userInfo: [string, number] = ['user', 1];

//Enum, Any, Void, Null, and Undefined
enum Season  {Spring, Summer, Autumn, Winter};
let s: Season = Season.Spring;
let logValue: any = 'just anything';
console.log(logValue);

function noReturn() : void {
    console.log('No return');
}