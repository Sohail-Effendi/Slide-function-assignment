//Q1. Basic function creation: calculateproduct.
function calculateproduct(Quantity, price) {
    return Quantity * price;
}
var totalAmount = calculateproduct(5, 250);
console.log("PKR ".concat(totalAmount));
//Q2. Using default parameter
function greet(name1, greeting) {
    if (greeting === void 0) { greeting = "Hello"; }
    return "".concat(greeting, ", Sir ").concat(name1);
}
var name1 = "Qasim";
var greeting = "Hi";
var response = greet(name1, greeting);
console.log(response);
//Q3. Arrow function conversion
var add = function (a, b) {
    return a + b;
};
var result = add(5, 6);
console.log(result);
//Q4. Implement rest operator 
function sumAll(item) {
    if (item === void 0) { item = 2; }
    var numbers = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        numbers[_i - 1] = arguments[_i];
    }
    return (item);
}
var result1 = sumAll(1 + 5 + 6 + 8);
console.log(result1);
//Q5. Function returning another Function
function multiplier(number1) {
    return function (number2) {
        return number1 * number2;
    };
}
var triple = multiplier(3);
console.log(triple(2));
console.log(triple(4));
console.log(triple(10));
