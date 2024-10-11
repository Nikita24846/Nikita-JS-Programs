// function greet(user)
// {
//     return`Hello ${user}`
// }
// let user = `Shivraj`;
// let str = greet(user);
// console.log(str);


// function SayHello(name){
//     return "Hello"+" " +name
// }
// console.log(SayHello("Nikki"))


// function sayBye(userName){
//        return "Bye"+" "+userName
// }
// console.log(sayBye("Problem"))


//ADD TWO NUMBERS
// function addtonumbers(a, b){
//     return a + b;
// }
// console.log(addtonumbers(4, 11));



//SUBSTRACT TWO NUMBERS
// function substractTwonumbers(a,b){
//     return a - b;
// }
// console.log(substractTwonumbers(10, 1));


//MULTIPLICATION OF TWO NUMBERS
// function multiplyTwonumbers(a, b){
//     return a * b;
// }
// console.log(multiplyTwonumbers(5, 5));


//AVERAGE
// function average(a, b){
//     return (a + b)/2;
// }
// console.log(average(56, 56));



// Area of a triangle
// const prompt=require("prompt-sync")();
//  function areaofatriangle(b, h){
// let area=(1/2)*(b*h);
//     return area;
// }
// let b=parseInt(prompt("Enter "));
// let h=parseInt(prompt("Enter ")); 
// console.log(areaofatriangle(b, h));



// Simple Interest
// function SimpleInterest(P, R, T){
//     return ((P*R*T)/100);
// }
// console.log(SimpleInterest(2336, 2.5, 4));


//Interchange the value of two variable
// function Interchangethevalueoftwovariables(a, b){
//     let c = a;
//     a = b;
//     b = c;
//     return [a, b];
// }
// console.log(Interchangethevalueoftwovariables(20, 30));


// function Interchangethevalueoftwovariables(a, b){
//     a = a + b;
//     b = a - b;
//     a = a - b;
//     return [a, b];
// }
// console.log(Interchangethevalueoftwovariables(45, 67));



//Print welcome messege
// function Saywelcome(){
//     return "Welcome";
// }
// console.log(Saywelcome());


// function addsubmultidiv(a, b){
// return [a + b, a - b, a * b, a / b];
// }
// console.log(addsubmultidiv(4, 8));



//Who is greater
// function greater(a, b){
//     if (a>b){
//         return a;
//     }
//     else {
//         return b;
//     }
// }
// console.log(greater(10, 5));




//Square of the array
// let nums = [14, 15, 4, 30, 78];
// nums.forEach((num) => {
//     console.log(num*num);
// });



//To store new array
// let nums = [2, 3, 4, 5];
// let newArr = nums.map((val) => {
//     return val;
// });
// console.log(newArr);



//print even array
// let arr = [2, 3, 4, 5, 6, 7, 8];
// let EvenArr = arr.filter((val) => {
//     return val % 2 === 0;
// });
// console.log(EvenArr);

// const prompt = require("prompt-sync")();
// let a=parseInt(prompt("Enter the value of a"));
// let b=parseInt(prompt("Enter the value of b"));
// console.log("++a = ", ++a);
// console.log("a++ = ", a++);
// console.log("--a = ", --a);
// console.log("a-- = ", a--);
// console.log("a = ", a);
// console.log("a-- = ", a--);


const prompt=require("prompt-sync")();
function reverseString(str) {
    let result = "";
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    return result;
}

let str = prompt("Enter the string");
let reversed = reverseString(str);
console.log(reversed);

// function reverseString(str){
//     let reversed="";
//     for (let i=str.length-1; i>=0;){
//         reversed+=str[i];
//     }
//     return reversed;
// }
// console.log(reverseString("nikita"));