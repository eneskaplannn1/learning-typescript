const username: string = "deneme2";

let a: number = 5;
let b: string = "5";
let c: number = 12;
let cd: number = 12;

// console.log(c / b);

let name2: string;
let isLoading: boolean;
let secretNumber: number;
let hero: any;
let mixed: boolean | number;

name2 = "Enes";
isLoading = true;
name2 = "Kaplan";
secretNumber = 19;
hero = "hello world";
hero = 21;

mixed = true;

function accumulator(a: number, b: number) {
  if (mixed) return a + b;
  return a;
}
