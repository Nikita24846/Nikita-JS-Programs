const prompt = require("prompt-sync")();

//1. Perfect number
// function perfectnumber(n){
//      let s=0;
//      for (i=1; i<n; i++){
//          if (n%i==0){
//             s=s+i;
//          }
//         }
//           if (n==s){
//             rturn=s;
//          }
//          else {
//             return false;
//          }
//      }
// let n=parseInt(prompt("Enter the value of n: "));
// let result = perfectnumber(n);
// if (result !==false){
//     console.log(`${n} is a perfect number.`);
// } 
// else {
//     console.log(`${n} is not a perfect number.`);
// }



//2.Second maximum number
// function smax(n, x) {
//     let max = x;
//     let smax = 0;
//     for (let i = 1; i < n; i++) {
//         let a = parseInt(prompt(`Enter the ${i + 1} num: `));
//         if (a > max) {
//             smax = max;
//             max = a;

//         }
//         else if (a > smax) {
//             smax = a;
//         }
//     }
//     return { max, smax };
// }
// let n = parseInt(prompt("Enter the numbers: "));
// let x = parseInt(prompt("Enter the first num "));
// result = smax(n, x);
// console.log(result);


//3.Second minimum of n numbers
// function smin(n,x) {
//     let min=x;
//     let smin=y;
// if (smin<min){
//     t=min;
//     min=smin;
//     smin=t;
// }
// for (let i=1; i<n-1; i++){
//     let a=parseInt(prompt(`Enter the ${i+1}num: `));
//     if (a<min){
//         smin=min;
//         min=a;
//     }
//     else if (a<smin){
//         smin=a;
//     }
//   }
//   return { min,smin };
// }
// let n=parseInt(prompt("Enter the numbers: "));
// let x=parseInt(prompt("Enter the first value: "));
// let y=parseInt(prompt("Enter the second value: "));
// let result = smin(n,x,y);
// console.log(result);



//4.Prime factors of a given number n
// function primefactors(n) {
//     for (let i = 1; i <= n; i++) {
//         if (n % i == 0) {
//             let c = 0;
//             for (let j = 1; j <= i; j++) {
//                 if (i % j == 0) {
//                     c++;
//                 }

//             }
//             if (c == 2) {
//                 return i;
//             }
//         }
//     }
// }
// let n = parseInt(prompt("Enter the number: "));
// let result = primefactors(n);
// console.log(result);



//5.Prime number
// function primenumber(n) {
//     let prime=[];
//     for (let i = 2; i <= n; i++) {
//         let c = 0;
//         for (let j = 1; j <= i; j++) {
//             if (i % j == 0) {
//                 c++;
//             }
//         }
//         if (c == 2) {
//             prime.push(i);
//         }
//     }
//     return prime;
// }
// let n = parseInt(prompt("Enter the number:  "));
// result = primenumber(n);
// console.log(result);



//6.Palindrome number
// function Palindrome(n){
//     let s=0;
//     let N=n;
//     while(n>0){
//         r=n%10;
//         s=s*10+r;
//         n=Math.floor(n/10);
//     }
//     if (s==N){
//         return "Yes";
//     }
//     else {
//         return "No";
//     }
// }
// let n=parseInt(prompt("Enter the number: "));
// result = Palindrome(n);
// console.log(result);


//7.Some three digit number show the property that the sum of the factorials of the 
//digits equals the number fopr example 145=1!+4!+5!
// function factorials(n){
//     let N=n;
//     let s=0;
//     while (n>0){
//         d=n%10;
//         let f=1;
//         for (let m=1; m<=d; m++){
//             f=f*m;
//         }
//         s=s+f;
//         n=Math.floor(n/10);
//     }
//     if (s==N){
//         return "Yes";
//     }
//     else{
//         return "No";
//     }
// }
// let n=parseInt(prompt("Enter the number: "));
// result = factorials(n);
// console.log(result);



//8.Find the some of a given number
// function reverse(n){
//     let sum=0;
//     while(n>0){
//        let r=n%10;
//         sum += r;
//         n=Math.floor(n/10);
//     }
//     return sum;
// }
// let n=parseInt(prompt("Enter the number: "));
// result =reverse(n);
// console.log(result);



//9.Pattern question
// function pattern(n) {
//     let result = "";
//     for (let i = 1; i <= n; i++) {
//         line = "";
//         let k = i;
//         for (let j = 1; j <= n - i + 1; j++) {
//             line += k + " ";
//             k = k + i;
//         }
//         result += line + "\n";
//     }
//     return result;
// }
// let n = parseInt(prompt("Enter the number: "));
// result = pattern(n);
// console.log(result);


//10.pattern question
// function pattern(n) {
//     let result = "";
//     for (let i = 1; i <= n; i++) {
//         line = "";
//         for (let j = 1; j <= n; j++) {
//             if (i == 1 && j == 1) {
//                 p = n * n - 1;
//                 line += p + " ";
//             }
//             else if (i % 2 == 0) {
//                 line += p + " ";
//                 p++;
//             }
//             else {
//                 line += p + " ";
//                 p--;
//             }
//         }
//         if (i%2==0){
//             p=p-(n+1);
//         }
//         else {
//             p=p-(n-1);
//         }
//         result += line + "\n";
//     }
//     return result;
// }
// let n=parseInt(prompt("Enter the number: "));
// result = pattern(n);
// console.log(result);



//Arrow pattern
// let n=parseInt(prompt("Enter the value of n: "));
// let a=[];
// for (let i=0; i<n; i++){
//     let num=parseInt(prompt(`Enter the ${i+1} index value`));
//     a.push(num);
// }
// for (let i=0; i<n; i++){
//     c='';
//     for (j=0; j<a[i]; j++){
//         c=c+'>';
//     }
//     console.log(c);
// }



// frequency
// let n = parseInt(prompt("Enter the value of n: "));
// let a = [];
// for (let i = 0; i < n; i++) {
//     let num = parseInt(prompt(`Enter the ${i + 1} index value`));
//     a.push(num);
// }
// for (let i = 0; i < n; i++) {
//     let c = 1;
//     for (j = i + 1; j < n; j++) {
//         if (a[i] == a[j]) {
//             c++;
//             a[j] = "x";
//         }
//     }
//     if (a[i] == "x") {
//         continue;
//     }
//     else {
//         console.log(`Element ${a[i]}  ${c} times`);
//     }
// }





//function sumOfDigits(N) {
//     while (N >= 10) {  
//       let s = 0;
//       while (N > 0) {  
//         let r = N % 10;
//         s += r;
//         N = Math.floor(N / 10);
//       }
//       N = s;  
//     }
//     return N;  
//   }
  
//   console.log(sumOfDigits(898));


