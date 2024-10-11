// console.log("Hello js");
// 2.// Write a program to take three variables to store your birth date, 
//birth month, and birth year, respectively, and then print them one by one in a 
//specified order.
// Test Case1:
// Explanation:
// If the birth date is 22, the birth  is May and the birth year is 2001 then
// Output:
// 22
// May
// 200

 const prompt = require("prompt-sync")();
// let BirthDate=parseInt(prompt("Enter the birth date: "));
// let Month=(prompt("Enter the month: "));
// let Year=parseInt(prompt("Enter the Year: "));
// console.log(BirthDate);
// console.log(Month);
// console.log(Year);

//3// Write a program to take input from the user, and then print it to the output.

// Test Case1:
// Input:
// 12
// Output:
// 12

// let a=parseInt(prompt("Enter the number"));
// console.log(a);


// 4.// Imagine you and your friend have brought different snacks for lunch. 
//However, you want to exchange your snacks with each other. To do this, you 
//decide to enlist the help of a friend who can hold one snack box while 
//you exchange with your other friend. Similarly, in programming, we can use a
// third variable to help us swap the values of two variables.
// Write a program to take two values from the user and swap them. 
// Hint: You can use a third variable.
// Tips:
// 1. Think about how you would exchange snack boxes with your friend and the helper.
// 2. Pay attention to the role of the helper in facilitating the swap.
// 3. Understand why the helper variable is necessary for the swap operation.
// Test Case1:
// Input:
// 12
// 4
// 4
// 12


// let a=parseInt(prompt("Enter the number"));
// let b=parseInt(prompt("Enter the number"));
// c=a
// a=b
// b=c
// console.log("a",a);
// console.log("b",b);

// 5.// Write a program to take two numbers from the user and perform Six
// basic operations (addition, subtraction, multiplication, division, integer 
 //   division and modulus) on those two numbers.
// Note: Print the output in the order as mentioned in the question.
// Test Case1:
// Input: 
// 12 
// 5
// Output: 
// 17
// 7
// 60
// 2.4
//2
// 2

// let a=parseInt(prompt("Enter the number"));
// let b=parseInt(prompt("Enter the number"));
// v=a+b
// w=a-b
// x=a*b
// y=a/b
// z=a%b
// console.log(v);
// console.log(w);
// console.log(x);
// console.log(y);
// console.log(parseInt(y));
// console.log(z);

// 6.// Write a program to take two numbers A and B from the user and calculate the quotient and remainder when number A is divided by number B.
// Note: Print the output in the order as mentioned in the question.
// Test Case2:
// Input: 
// 15
// 6
// Output:
// 2
// 3

// let a=parseInt(prompt("Enter the number"));
// let b=parseInt(prompt("Enter the numbver"));
// x=ab
// y=a%b
// console.log(x);
// console.log(y);

// 7.// Write a program to take a positive number from the user and then display the last digit of that number.
// Test Case1:
// Input:
// 843
// Output:
// 3

// let a=parseInt(prompt("Enter the number"));
// c=a%10
// console.log(c);

// 8.// Write a program to convert a temperature from Celsius to Fahrenheit using the formula  C/5 = (F-32)/9
// Test Case1:
// Input: 
// 30 
// Output:
// 86

// let c=parseInt(prompt("Enter the number"));
// F =(c*9/5)+32
// console.log(F);

// 9.// Write a program to take two inputs from the user and swap them without using a temporary or third variable.
// Test Case1:
// Input:
// 2
// 3
// Output:
// 3
// 2

// let a=parseInt(prompt("Enter the number"));
// let b=parseInt(prompt("Enter the number"));
// a=a+b
// b=a-b
// a=a-b
// console.log("a",a);
// console.log("b",b);

// 10.// Write a program to take two numbers, A and B from the user. Your task is to find the largest number that is less than A and can be divided evenly by B. Can you figure out that number?
// Test Case1:
// Input:
// 15
// 4
// Output:
// 12

// let a=parseInt(prompt("Enter the number"));
// let b=parseInt(prompt("Enter the number"));
// x=a%b
// y=a-x
// console.log(y);

// 11.// Write a program to take two numbers from the user and determine the greater of those two given numbers.
// Test Case1:
// Input:
// 20
// 3
// Output:
// 20

// let a=parseInt(prompt("Enter the number"));
// let b=parseInt(prompt("Enter the number"));
// if(a>b){
//     console.log("a",a);
// }
// else{
//     console.log("b",b);
// }

// 12.// Write a program to take a number from the user and print that number as Odd or Even.
// Test Case1:
// Input:
// 56
// Output:
// Even

// let a=parseInt(prompt("Enter the number"));
// if(a%2==0){
//     console.log("Even");
// }
//     else{ 
//         console.log("odd");
//     }

// 13.// Write a program to take a number from the user and output whether that number is negative, positive or zero.
// Test Case1:
// Input:
// 6
// Output:
// Positive

// let a=parseInt(prompt("Enter the number"));
// if(a>0){
//     console.log("positive");
// }
//   else  if(a<0){
//         console.log("Negative");
//     }
//         else{
//             console.log("Zero");
//         }

// 14.// Write a program to take an integer as input and print the smallest positive integer that is a multiple of both 2 and n.
// Test Case:
// Input:
// 5
// Output:
// 10

let n=parseInt(prompt("Enter the value of n"));
let i =2;
while ( i%n !==0 ){
    i+=2;
}
console.log("the smallest positive integer that is amultiple of both 2 and n",i)

// 15.// Write a program to take three numbers from the user and print the greater number of the three numbers. (Assume all three numbers are distinct)
// Test Case1:
// Input:
// 20
// 3
// 43

// let a=parseInt(prompt("Enter the number"));
// let b=parseInt(prompt("Enter the number"));
// let c=parseInt(prompt("Enter the number"));
// if(a>b && a>c){
//     console.log("a",a);
// }
// else if(b>a && b>c){
//     console.log("b",b);

// }
// else{
//     console.log("c",c);
// }

// 16.// Write a program to take four numbers from the user and print the greater number of the four numbers. (assume all the numbers are distinct).
// Test Case1:
// Input:
// 98
// 13
// 29
// 58
// Output:
// 98

// let a=parseInt(prompt("Enter the number"));
// let b=parseInt(prompt("Enter the number"));
// let c=parseInt(prompt("Enter the number"));
// let d=parseInt(prompt("Enter the number"));
// let max, max1;
// if(a>b){
//     max=a;
// }
// else {
//     max=b;
// }
// if(c>d){
//     max1=c;
// }
// else {
//     max1=d;
// }
// if(max>max1){
//     console.log("the maximum number is:" + max);

// }
// else {
//       console.log("the maximum number is:" + max1);
// }

// 17.// Imagine you and your friends are exploring the concept of leap years. A leap year is a year that is evenly divisible by 4, except for years that are divisible by 100 but not divisible by 400. In simpler terms, it's a special year with an extra day in February (February 29th). You're curious to know whether a particular year is a leap year or not.
// Write a program to take a year from the user and output whether a given year is a leap year or not.
// Note: A year is said to be a leap year if it is either divisible by 400 or it should be divisible by 4 and not by 100.
// Tips:
// 1. Remember, a leap year occurs every 4 years, except for years that are divisible by 100 but not by 400.
// 2. Pay attention to the conditions for determining a leap year.
// 3. Understand the significance of leap years in adjusting the calendar.
// Test Case1:
// Input:
// 1800
// Output:
// No
// Test Case2:
// Input:
// 2000
// Output:
// Yes

// let Y=parseInt(prompt("Enter the Year"));
// if(Y%4==0 && Y%100!=0 || Y%400==0){
//     console.log("Yes");
// }
// else{
//     console.log("No");
// }

// 18.// Write a program to take 3 numbers from the user and output the second max of 3 numbers.
// (First, do it in the normal way then do it by using 3 comparisons)
// Test Case1:
// Input:
// 5
// 4
// 6
// Output:
// 5

// let a=parseInt(prompt("Enter the number"));
// let b=parseInt(prompt("Enter the number"));
// let c=parseInt(prompt("Enter the number"));
// let max, Secondmax;
// if(a>b){
//     max=a;
//     Secondmax=b;
// }
// else {
//     max=b;
//     Secondmax=a;
// }
// if(c>max){
//     Secondmax=max;
//     max=c;
// }
// else if (c>Secondmax){
//       Secondmax=c;
// }
// console.log("The Second maximum number is:" + Secondmax);

// 19.// Imagine you're working as a payroll manager in a company, and your job is to calculate the gross salary of employees based on their basic salary and certain allowances. The gross salary includes the basic salary along with House Rent Allowance (HRA) and Dearness Allowance (DA), which vary based on the employee's basic salary range.
// Write a program to take the basic salary of an employee and calculate its Gross salary according to the following: (Gross salary is the sum of basic salary, HRA, and DRA)
// Basic Salary <= 10000 : HRA = 20%, DA = 80%
// Basic Salary <= 20000 : HRA = 25%, DA = 90%
// Basic Salary > 20000 : HRA = 30%, DA = 95%
// Tips:
// 1. Understand the different allowance percentages based on the employee's basic salary range.
// 2. Pay attention to how the gross salary is calculated by adding the basic salary, HRA, and DA.
// 3. Ensure accuracy in calculations and handle different basic salary scenarios effectively.
// Test Case1:
// Input:
// 17000
// Output:
// 36550
// Explanation:
// Since the basic salary lies in the bracket 10000 <= basic salary <= 20000, the HRA equals 25% of the salary = 4250, and the DRA equals 90% of the basic salary = 15300. Hence the total salary is 17000+15300+4250 = 36550

// let S=parseInt(prompt("Enter the Salary"));
// let HRA,DA;
// if(S<=10000){
//     HRA=(20/100)*S;
//     DA=(80/100)*S;
// }
// else if(S<=20000){
//     HRA=(25/100)*S;
//     DA=(90/100)*S;
// }
// else{
//     HRA=(30/100)*S;
//     DA=(95/100)*S;
// }
// let Gross_salary=S+HRA+DA;
// console.log("Gross Salary",Gross_salary);

// 20.// Imagine you're responsible for calculating electricity bills for households. Each household consumes electricity, and the bill varies based on the number of units consumed. The bill calculation involves different rates for different ranges of units consumed, along with an additional surcharge.
// Write a program  to input electricity unit charges and calculate the total electricity bill according to the given condition:
// For the first 50 units Rs. 0.50/unit
// For the next 100 units Rs. 0.75/unit
// For the next 100 units Rs. 1.20/unit
// For units above 250 Rs. 1.50/unit
// An additional surcharge of 20% is added to the bill
// Tips:
// 1. Understand how the bill amount varies for different ranges of units consumed.
// 2. Pay attention to adding the surcharge correctly to the total bill amount.
// 3. Ensure accuracy in calculations and handle different scenarios effectively.
// Test Case1:
// Input:
// 200
// Output:
// 192

// let Unit=parseInt(prompt("Enter the Unit"));
// if (Unit<=50){ 
//      Charge=Unit*0.50
// }
// else if (Unit<=150){
//     Charge=(50*0.50)+(Unit-50)*0.75
// }
// else if (Unit<=250){
//     Charge=(50*0.50)+100*0.75+(Unit-150)*1.20
// }
// else{
//     Charge=(50*0.50)+(100*0.75)+(100*1.20)+(Unit-250)*1.50
// }
// Total_Charge=Charge+20/100
// console.log("Total_Charge",Total_Charge)

// 21.// Write a program to take 4 numbers from the user and output the third max of these 4 numbers.
// Test Case1:
// Input:
// 5
// 4
// 6
// 7
// Output:
// 5

// let a=parseInt(prompt("Enter the number"));
// let b=parseInt(prompt("Enter the number"));
// let c=parseInt(prompt("Enter the number"));
// let d=parseInt(prompt("Enter the number"));
// let min, Smin,min1,Smin1;
// if(a<b){
//     min=a;
//     Smin=b;
// }
// else{
//     min=b;
//     Smin=a;
// }

// if(c<d){
//     min1=c;
//     Smin1=d;
// }
// else{
//     min1=d;
//     Smin1=c;
// }                                
// if(min<min1){
//     if(Smin<min1){
//     Smin=Smin;
    
//     }
//     else{
//     Smin=min1;
//     }
// }
// else if (Smin1<min){
//     Smin=Smin1;    
// }
// else{
//     Smin=min;
// }
//  console.log("the third maximum number is" + Smin);

// 22.// Write a program to take 5 numbers from the user and print the frequency of every number.
// Test Case1:
// Input:
// 3
// 4
// 6
// 3
// 6
// Output:
// 3 = 2
// 4 = 1 
// 6 = 2


// let n=parseInt(prompt("Enter the value of n"));
// let arr = [];
// for(let i=0; i<n; i++){
//     let a=parseInt(prompt("Enter the "+ i +" index value: "));
//     arr.push(a);
// }
// for(let i=0 ; i <n ; i++){

//     let count=0;
//     for(let j=0; j<i ; j++) {
    
//          if(arr[i]===arr[j]){
//             count++;
//         }
//     }
//     if(count>0){
//         continue;
//     }
//     for(let j=0;j<n;j++){
//         if(arr[i]==arr[j]){
//             count++;
//         }
//     }
//     console.log(arr[i] + "=" + count);
// }

//  23.// Take the number N and the name from the user as inputs, and print the name N times.
// Test Case1:
// Input:2
// Bedanti
// Output:
// Bedanti 
// Bedanti

// let n =parseInt(prompt("Enter the number"));
// let name=parseInt(prompt("Enter the name"));

// for (let i = 1; i<=n; i++){
//     console.log("Nikki");
// }

// 24.// Imagine you're on a fun journey of exploring numbers! You're interested in finding out all the even numbers up to a certain value. Even numbers are those that are divisible by 2 without leaving a remainder. Your task is to print all the even numbers from 1 up to the number you choose.
// Take a number N from the user as input, and print even numbers up to N.
// Tips:
// 1. Remember, even numbers are those that are divisible by 2 without leaving a remainder.
// 2. Pay attention to printing the numbers in the correct format.
// 3. Ensure accuracy in the range of numbers displayed.
// Test Case1:
// Input:
// 10
// Output:
// 2  4 6 8 

// let n=parseInt(prompt("Enter the number"));
// for (let i=1; i<n; i++){
//     if(i%2==0){
//         console.log("i",i);
//     }
// }

// 25.// Imagine you're on an adventurous quest to unravel the mysteries of numbers! Today, your quest involves exploring the realm of odd numbers. Odd numbers are those that are not divisible by 2, leaving a remainder of 1. Your task is to calculate the sum of all the odd numbers up to a certain value chosen by you.
// Write a program to print the sum of odd numbers up to N.
// Tips:
// 1. Remember, odd numbers are those that are not divisible by 2, leaving a remainder of 1.
// 2. Pay attention to calculating the sum accurately.
// 3. Ensure the correctness of the range of numbers included in the sum.
// Test Case1:
// Input:
// 20
// Output:
// 100

// let n=parseInt(prompt("Enter the number"));
// let sum = 0;
// for (i=1; i<=n; i++){
// if(i % 2!==0){
//     sum = sum += i;
//   }
// }
// console.log(sum);

// 26.// Write a program to take two integers M, and N and print the sum of numbers in the range M to N.
// Test Case1:
// Input:
// 2
// 7
// Output:
// 27
// Explanation:
// Output should be 27 as the sum of numbers (2+3+4+5+6+7=27)

// let N=parseInt(prompt("Enter the value of N"));
// let M=parseInt(prompt("Enter the value of M"));
// let sum=0;
// for (i=N; i <= M; i++){
//     sum += i;
// }
// console.log(sum);

// 27.// Write a program to calculate the sum of the following series where N is input from the user. 1 + 1/2 + 1/3 + 1/4 + 1/5 +…………1/N
// Test Case1:
// Input:
// 4
// Output:
// 2.08

// let n=parseInt(prompt("Enter the number"));
// let sum=0;
// for (i=1; i<=n; i++){
//     sum = sum+=1/i;
// }
// console.log(sum);

// 28.// Write a program to take a number from the user and print the number of digits in the given number. (can you do it without  loop O(1) )
// Test Case1:
// Input:
// 456
// Output:
// 3

// let n=parseInt(prompt("Enter the number"));
// let count=0;
// while (n>0){
//     count++;
//     n = Math.floor (n/10);
// }
// console.log(count);

// 29.// Write a program to take a number from the user and print the sum of the digits of the given number.
// Test Case1:
// Input:
// 456
// Output:
// 15
// Explanation:
// 4+5+6 = 15

// let n=parseInt(prompt("Enter the number"));
// let sum=0;
// while (n>0){
//     sum = sum+=n%10;
//     n = Math.floor (n/10)
// }   
// console.log(sum);

// 30.// Write a program that takes a number from the user and prints the number that is formed by reversing the digits of the number.
// Test Case1:
// Input:
// 123
// Output:
// 321

// let n=parseInt(prompt("Enter the number"));
// let sum=0;
// while (n>0){
//     sum = sum*10+n%10;
//     n = Math.floor (n/10)
// }
// console.log(sum);

// 31.// Factors question

// let n=parseInt(prompt("Enter the number"));
// let arr=[];
// let i=0;
// for (j=1; j<=n; j++){
//    if (n%j==0){
//     arr[i]=j;
//     i++;
//     }
// }
// let m=0;
// while(arr[m]!=undefined){
//     m++;
    
// }
//  for (i=0; i<m; i++){
//    console.log(arr[i]);
// }
   

// 32.// For example, the number 7 is a prime number because it can only be divided by 1 and 7 without leaving a remainder. However, the number 12 is not a prime number because it has other factors, such as 2, 3, 4, and 6, in addition to 1 and 12. (Take the number from the user)? Learn sieve algorithm
// Test Case1:
// Input:
// 97
// Output:
// Yes 
// Test Case2:
// Input:
// 49
// Output:
// No

// let n=parseInt(prompt("Enter the number"));
// let count=0;
// for (i=1; i<=n; i++) {
//     if( n% i == 0) {
//         count++;
//     }
// }
// if(count==2){
//         console.log("Prime number");
//      }
// else{
//     console.log("Not a prime number");
// }

// 33.// Write a program to take a number from the user and then determine if that number is a special type of number called a 'perfect number'.
//  A perfect number is a number where the sum of all its factors (excluding the number itself) is equal to the number itself. Print Yes if the number is a perfect number else print No. 
// Test Case1:
// Input:
// 6
// Output:
// Yes
// Explanation:
// The program takes the number 6 as input. It then calculates the factors of 6, which are 1, 2, and 3. The sum of these factors (1 + 2 + 3) is equal to 6, so 6 is a perfect number.
// Test Case2:
// Input:
// 12
// Output:
// No
// Explanation:
// The program takes the number 12 as input. It calculates the factors of 12, which are 1, 2, 3, 4, and 6. The sum of these factors (1 + 2 + 3 + 4 + 6) 
// is equal to 16, which is not equal to 12. Therefore, 12 is not a perfect number.

// let n=parseInt(prompt("Enter the number"));
// let sum = 0;
// for (let i = 1; i < n; i++) {
//     if (n % i==0){
//          sum += i;
//     }
// }
//  if (sum==n){
//     console.log("yes");
// }
// else{
//     console.log("No");
// }

// 34.// Write a program to print all the numbers from the given array using a loop. 
// L = {23, 45, 32, 25, 46,33, 71, 90}
// Output:
// 23
// 45
// 32
// 25
// 46
// 33
// 71
// 90
// let n=parseInt(prompt("Enter the number"));
// let arr=[];
// for(let i=0; i<n;i++){
//      let a=parseInt(prompt("Enter the number"));
//      arr.push(a);
// }
// for(i=0; i<arr.length; i++){
//     console.log(arr[i]);
// }


// 35.Write a program to create an array of natural numbers till 20 and print it.

// let arr=[];
// let n=parseInt(prompt("Enter the number"));
// let j=1;
// for(let i=0; i<n; i++){
//     arr[i]=j;
//     j=j+1;
// }
// for(i=0; i<n; i++){
//     console.log(arr[i]);
// }

// 36.// Write a program to reverse the array and print the reversed array.
// Test Case1:
// Input:
// 23 45 32 25 46 33 71 90
// Output:
// 90
// 71
// 33
// 46
// 25
// 32
// 45
// 23
 


// 37.// Write a program to take size of array, array and target as input from the user and check whether the target exists in this array or not.
// Test Case1:
// Input:
// 7
// 1 2 3 4 5 6 7
// 3
// Output:
// Yes
// Test Case2:
// Input:
// 8
// Output:
// No

// let n=parseInt(prompt("Enter the value of n: "));

// let arr=[];
// for (let i=0; i<n; i++){
//     let a=parseInt(prompt("enter the "+i+" indext element: "));
//     arr.push(a);
// }
// let m=parseInt(prompt("Enter the Target element: "));
// let ass=false;
// for (i = 0; i<n; i++){
//     if(arr[i]==m){
//        ass=true;
//        break;
//     }
// }
// if(ass==true){
//     console.log("yes");
// }
// else{
//     console.log("No");
// }

// 38.// Write a program to print the sum of all the odd numbers and even numbers in the given array.
// Note: In the output, you should print odd numbers sum and even numbers sum in this order only.
// Test Case1:
// Input:
// 23 45 32 25 46 33 71 90                  
// Output:
// 197
// 168

// let n=parseInt(prompt("Enter the value of n"));
// let arr=[];
// let sum=0;
// let sum1=0;
// for (i=0; i<n; i++){
//   let a=parseInt(prompt("Enter the "+i+"index element"));
//   arr.push(a);
// }
// for (i=0; i<n; i++){

//     if (arr[i]%2==0){
//         sum=sum+arr[i];
//     }
//     else{
//         sum1=sum1+arr[i];
        
//     }
// }
//     console.log("sum of even number",sum);
//     console.log("sum1 of odd number",sum1);

// 39.// Write a program to take N numbers from a user as input and then print the duplicates in those N numbers. Also, take N as an input from the user.
// Test Case 1:
// Input:
// 5
// 2 4 2 6 3
// Output:
// 2
// Test Case 2:
// Input:
// 6
// 2 4 6 3 3 2
// Output:
// 3 2

// let n=parseInt(prompt("Enter the value of n"))
// let arr=[];

// for (i=0; i<n; i++){
//     let a=parseInt(prompt("Enter the "+i+" index element"));
//     arr.push(a);
// }
// let ass=false;
// for(i=0; i<n-1; i++){
//     for(j=i+1; j<n; j++){
//         if (arr[i]==arr[j]){
//             ass=true;
//         console.log(arr[j]);
//         }
//     }
        
// }
//     if (ass==false){
//     console.log("there is no duplicate element");
    
//      }

// 40.// Write a program to take N numbers from the user and print the frequency of every number.
// Test Case 1:
// Input:
// 6
// 2 4 2 6 3 6
// Output:
// 2 - 2
// 4 - 1
// 6 - 2
// 3 - 1

// let n=parseInt(prompt("Enter the value of n"));
// let arr=[];
// for (let i=0; i<n; i++){
//     let a=parseInt(prompt("Enter the "+ i +"index value"));
//     arr.push(a);
// }
//     for (let i=0; i<n; i++){
//         let count=0;
//     for(let j=0; j<i; j++){
//         if(arr[i]==arr[j]){
//            count++;
//         }
//     }
// if(count>0){
//     continue;
// }
// for(let j=0; j<n; j++){
//   if(arr[i]==arr[j]){
//     count++;
//   }
// }
//      console.log(arr[i] + "=" + count);
// }

// 41.// Write a program to take two sorted arrays of size M, N from the user as input and merge them into a single sorted array of size M+N (Do not use sorting)
// Test Case1:
// Input:
// 1 2 5 6
// 3 4 7 9
// Output:
// 1 2 3 4 5 6 7 9

// let n=parseInt(prompt("Enter the value of n"));
// let m=parseInt(prompt("Enter the value of m"));
// let arrA=[];
// let arrB=[];
// for (let i=0; i<n; i++){
//     let a=parseInt(prompt("Enter the "+i+" 1index"));
//     arrA.push(a);
// }
// for (let j=0; j<n; j++){
//     let b=parseInt(prompt("Enter the "+j+" 2index"));
//     arrB.push(b);
// }
// let mergedArray=[];
// let i=0; j=0;  k=0;
// while (i<n && j<m){
//     if (arrA[i]<arrB[j]){
//         mergedArray[k] = arrA[i];
//         i++;
//      }
//      else{
//         mergedArray[k] = arrB[j];
//         j++;
//      }
//      k++;
// }
// while (i<n){
//     mergedArray[k]=arrA[i];
//     i++;
//     k++;
// }
// while (j<m){
//     mergedArray[k]=arrB[j];
//     j++;
//     k++;
// }
// console.log("Merged and sorted array", mergedArray);

// 42.// Write a program to take value N from the user and print the following pattern based on the user input.
//array = [2, 3, 5, 2, 1]
// >>                        
// >>>                
// >>>>>
// >>                        
// >  

// let n=parseInt(prompt("Enter the number"));
// let arr=[];
// for (i=0; i<n; i++){
//     let a=parseInt(prompt("Enter the "+i+" index"));
//     arr.push(a);
// }
// for (i=0; i<n; i++){
//     let c=' ';
//      for (j=0; j<arr[i]; j++){
//         c+='>';
//     }
//      console.log(c);
// }





    


























            
    




    
    
    
    
    




    
    


    






















    















    








    

    















