//Q1. Basic function creation: calculateproduct.

function calculateproduct(Quantity:number, price:number) {
	return Quantity * price;
    }
    let totalAmount = calculateproduct(5, 250);
    console.log(`PKR ${ totalAmount }`);

//Q2. Using default parameter

function greet(name1: string, greeting: string = "Hello"): string {
    return `${greeting}, Sir ${name1}`;
}

const name1 = "Qasim";
const greeting = "Hi";
const response = greet(name1, greeting);
console.log(response);

//Q3. Arrow function conversion

let add = (a:number, b:number) => {
 return a + b;
}
let result= add(5, 6);
console.log(result);

//Q4. Implement rest operator 

function sumAll(item: number=2, ...numbers: number[]): number {
    return(item)
}
let result1= sumAll(1+5+6+8);
console.log(result1);

//Q5. Function returning another Function

function multiplier(number1: number) {
    return function (number2: number): number {
        return number1 * number2;
    };
}

const triple = multiplier(3);

console.log(triple(2)); 
console.log(triple(4));  
console.log(triple(10)); 
