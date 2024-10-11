const prompt = require("prompt-sync")();
//count vowels

function countVowels(string){
    let c = 0;
    for (const char of string){
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
            c++;
        }
    }
    // return c;

// let str = parseInt(prompt("Enter the str"));
// let c = countVowels(str);
console.log(c);
}
// countVowels("apnacollege");
// console.log(c);


const countVow = (str) => {
    let c = 0;
    for (const char of string){
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
            c++;
        }
    }
  return c;
};



//print an array using for each function
// let arr = ["pune", "delhi", "mumbai"];
// arr.forEach((val) => {
//     console.log(val);
// });


// print the square of each value
// let nums = [2, 3, 4, 5, 6];

// nums.forEach((num) => {
//     console.log(num**2);
// });


//map method
// let nums = [4, 7, 8];
// nums.map((val) => {
//     console.log(val);
// });


//map method is also use for print newarray
// let nums = [4, 7, 8];
// let newArr = nums.map((val) => {
//     return val * 2;
// });

// console.log(newArr);


// filter method
// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// let evenArr = arr.filter((val) => {
//     return val % 2 === 0;
// });
// console.log(evenArr);


// Reduce method in array
// let arr = [1, 2, 3, 4];
// const output = arr.reduce((res, curr) => {
//     return res + curr;
// });
// console.log(output);

// find the marks greater then 90 using filter
// let marks = [87, 93, 64, 99, 86];
// let toppers = marks.filter((val) => {
//     return val > 90;
// });
// console.log(toppers);







