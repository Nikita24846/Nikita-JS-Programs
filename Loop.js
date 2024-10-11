// Develop a flowchart to show how to find all the perfect numbers under 10,000.

const prompt = require("prompt-sync")();

// let n=parseInt(prompt("Enter the value of n"));
// for (i=1; i<n; i++){
// let sum=0;
// for (j=1; j<i; j++){
//     if (i%j==0){
//         sum=sum+j;
//     }
// }

// if(sum==i){
//     console.log(i);
// }
// }

// Write a program to check given number is perfect number or not.

// let n=parseInt(prompt("Enter tne value of n"));
// let sum=0;
// for (let i=1; i<n; i++){
//     if (n%i==0){
//         sum+=i;
// }
// }
// if (sum==n){
//     console.log("yes");
// }
// else{
//     console.log("no")
// }

// 1.//
// Draw a flowchart to find the sum of the first natural Number, where n is any given integer.
// let n=parseInt(prompt("Enter the value of n"))
// let sum=0;
// for (i=1; i<=n; i++){
//     sum=sum+i;
// }
// console.log(sum);

// 2.//
// Draw a flowchart to find the sum of the first 15 even natural numbers.
// let n=parseInt(prompt("Enter the value of n"));
// let sum=0;
// for (i=2; i<=n; i+=2){
//     sum=sum+i;
// }
// console.log(sum);

// 7.//
// Write a program to find the sum of the squares of the first 9 natural that are divisible by 3

// let n=parseInt(prompt("Enter the value of n"));
// let sum=0;
// for (i=1; i<=n; i++){
//     if (i%3==0){
//         let c=i*i
//         sum=sum+c
//    }
   
// }
// console.log(sum);

// 3.// 
//let n=parseInt(prompt("Enter the value of n"));
// let sum=0;
// let c=0;
// for (i=2; i<=n; i+=2){
//      sum=sum+i;
// }
// console.log(sum);

// 4.//
// let n=parseInt(prompt("Enter the value of n "));
// for (i=0; i<=n; i++){
//     if (i%7==0){
//         console.log(i);
//     }
// }

// 5.//
// let n=parseInt(prompt("Enter the number"));
// let p=1;
// for (i=1; i<n; i++){
//     p=p*i;
// }
// console.log(p);

// 6.//
// let n=parseInt(prompt("Enter the value of n"));
// for (i=2; i<=n; i+=2){
//     if (i%7==0){
//         console.log(i);
//     }
// }

// 9.//
// let n=parseInt(prompt("Enter the value of n"));
// let p=parseInt(prompt("Enter the value of p"));
// let q=parseInt(prompt("Enter the value of q"));
// let sum=0;
// for (i=1; i<=n; i++){
//     if(i%p==0){
//         if(i%q!=0){
//         sum=sum+i;
//         }
//     }
// }
// }
// console.log(sum);

// 11.//
// let n=parseInt(prompt("Enter the value of n"));
// let sum=0;
// while(n!=0){
//     R=n%10;
//     sum=sum+R;
//     n=Math.floor(n/10);
// }
// console.log(sum);

// 16.a//
// let n=parseInt(prompt("Enter the value of n"));
// let x=parseInt(prompt("Enter the value of x"));
// let sum=0;

// for (i=1; i<=n; i++){
//     let p = 1;
//     for (j=1; j<=i; j++){
//        p=p*x;
    
//     }
//     sum=sum+p/i;
//     }
//     console.log(sum)

// 16.b// 
//let n=parseInt(prompt("Enter the value of n"));
// let x=parseInt(prompt("Enter the value of x"));
// let sum=0;
// let k=1;
// for (i=1; i<=n; i++){
//     let p = 1;
//     for (j=1; j<=k; j++){
//         p=p*x;
//     }
//     if (i%2==0){
//         sum=sum-p/k;
//         k+=2;
//     }
//     else{
//         sum=sum+p/k;
//         k+=2;
//     }
// }
// console.log(sum);

// 17.// 
//let n=parseInt(prompt("Enter the number of n"));
// let N=parseInt(prompt("Enter the number of N"));
// let sum=0;
// for (i=5; i<=N; i=i*10+5){
//     sum=sum+i;
// }
// console.log(sum);

// 20.//
// let n=parseInt(prompt("Enter the value of n"));
// let N = n;
// let c=0;
// let sum=0;
// while(N>0){
//      r= N%10;
//     c=c+1;
//     N = Math.floor (N/10);
// }
// N=n;
// while(N>0){
//     d=N%10;
// let p=1;
// for (j=1; j<=c; j++){
//     p=p*d;
// }
// sum=sum+p;
// N = Math.floor (N/10);
// }
// if (sum==n){
//     console.log("Armstrong number");
// }
// else {
//     console.log("Not");
// }

// 21.//
// let N=parseInt(prompt("Enter the value of N"));
// let sum=0;
// let c=N;
// while(N>0){
// let d=N%10;
// let f=1;
// for (m=1; m<=d; m++){
//     f=f*m;
// }
// sum=sum+f;
// N= Math.floor(N/10);
// }
// if (sum==c){
//     console.log("yes");
// }
// else{
//     console.log("No");
// }

// 24.//
// let n=parseInt(prompt("Enter the value of n"));
// let sum=0;
// let M=1;
// if(n>0){
//     if(n%2==0){
//         while(n>0){
//             R=n%10;
//             sum = sum + R;
//             n=Math.floor (n/10);
//         }
//         console.log(sum);
//     }
//     else{
//         while(n>0){
//             R=n%10;
//             M=M*R;
//             n=Math.floor (n/10);
//         }
//         console.log(M);
//     }
// }

// 25.// 
//let n=parseInt(prompt("Enter the value of n"));
// let a=parseInt(prompt("Enter the first value "))
// let m=a;
// for (i=1; i<n; i++){
// let b=parseInt(prompt("Enter the "+ (i+1) +" value")); 
// let n=b;
// while(n>0){
//     let r=m%n;
//     m=n;
//     n=r;
// }
// }
// console.log("HCF",m);

// 26.//
// let n=parseInt(prompt("Enter the value"));
// let a=parseInt(prompt("Enter the first value"));
// let max=a;
// let min=a;
// for (i=1; i<n; i++){
// let b=parseInt(prompt("Enter the "+ (i+1) +" value"));
// if (b>max){
//     max=b;
// }
// else if (b<min){
//     min=b;
// }
// }
// console.log("maximum value",max);
// console.log("minimum value",min);

// smax method 1// 27.// 
// let n=parseInt(prompt("Enter the value of n"));
// let a=parseInt(prompt("Enter the first num: "));
// let max =a;
// let smax =0;
// for (i=1; i<n; i++){
// let b=parseInt(prompt("Enter the "+ (i+1)+" num: "));
// if(b>max){
//     smax=max;
//     max=b;
// }
// else if(b>smax){
//     smax=b;
// }
// }
// console.log(smax);

//smax method 2//
// let n=parseInt(prompt("Enter the value of n"));
// let a=parseInt(prompt("Enter the first value"));
// let b=parseInt(prompt("Enter the second value"));
// let i=1;
// max=a;
// smax=b;
// if (smax>max){
//     Temp=max;
//     max=smax;
//     smax=Temp;
// }
// for (i=1; i<n-1; i++){
//     let c=parseInt(prompt("Enter the "+ (i+2) +" num: "));
//     if (c>max){
//         smax=max;
//         max=c;
//     }
//     else if (c>smax){
//         smax=c
//     }
// }
// console.log(smax);


// smin// 
// let n=parseInt(prompt("Enter the value of n"));
// let a=parseInt(prompt("Enter the first value"));
// let b=parseInt(prompt("Enter the second value"));
// let i=1;
// min=a;
// smin=b;
// if (smin<min){
//     Temp=min;
//     min=smin;
//     smin=Temp;
// }
// for (i=1; i<n-1; i++ ){
// let c=parseInt(prompt("Enter the "+ (i+1) +" num: "));
// if(c<min){
//     smin=min;
//     min=c;
// }
// else if(c<smin){
//     smin=c;
// }
// }
// console.log("sminimum",smin);

//28.//third max of n numbers//
// let n=parseInt(prompt("Enter the value "));
// let a=parseInt(prompt("Enter the first "));
// let max=a;
// let smax=0;
// let thmax=0;
// for (i=1; i<n; i++){
//     let c=parseInt(prompt("Enter the "+ (i+1) +" value "));
//     if (c>max){
//         thmax=smax;
//         smax=max;
//         max=c;
//     }
// else if (c>smax){
//     thmax=smax;
//     smax=c;
// }
// else if (c>thmax){
//       thmax=c;
// }
// }
// console.log(thmax);

//29.//first N prime numbers
// let n=parseInt(prompt("Enter the value of n"));
// for (i=1; i<=n; i++){
//     let c=0;
//     for (j=1; j<=i; j++){
//         if (i%j==0){
//             c++;
//         }
//      }
//         if (c==2){
//             console.log(i);
//         }
//     }

//30.//sum of N prime numbers
// let n=parseInt(prompt("Enter the number"));
// let sum=0;
// for (i=1; i<=n; i++){
//     let c=0;
//     for (j=1; j<=i; j++){
//         if (i%j==0){
//             c++;
//         }
//     }
//     if (c==2){
//         sum=sum+i;
//     }
// }
// console.log(sum);

//31.//prime factor of a given number n
// let n=parseInt(prompt("Enter the value of n"));
// for (i=1; i<=n; i++){
//     if (n%i==0){
//         let c=0;
//         for (j=1; j<=i; j++){
//             if (i%j==0){
//                 c++;
//             }
//         }
//         if (c==2){
//             console.log(i);
//         }
//     }
// }

//32.//Fibonacci numbers
// let n=parseInt(prompt("Enter the number "));
// let a=0;
// let b=1;
// let sum=0;
// console.log(a);
// console.log(b);
// for (i=1; i<n-1; i++){
//     sum=a+b;
//     a=b;
//     b=sum;
//     console.log(sum);
// }

//33.//Write a program to find a series of five consecutive numbers.The sum of the square of the first 
// three of which is equal to the sum of the square of last two Number.

// let n=parseInt(prompt("Enter the number"));
// let a=parseInt(prompt("Enter the value of a"));
// let sum=0;
// let sum1=0;
// for (i=1; i<=(n+1)/2; i++){
//     sq=a*a;
//     sum=sum+sq;
//     a=a+1;
// }
// for (i=4; i<=n; i++){
//     sq=a*a;
//     sum1=sum1+sq;
//     a=a+1;
// }
// if (sum==sum1){
//    console.log("equal");
// }else{
//     console.log("not");
// }

//34.//
// let n=parseInt(prompt("Enter the number"));
// let sum=0;
// let sum1=0;
// for (i=1; i<=n; i++){
//     let a=parseInt(prompt("Enter the value of a "));
//     if (a>=10 && a<=99){
//             let sq=a*a;
//             sum=sum+sq;
//             let r=0;
//             let temp=a;
//       while (temp>0){
//          r=r*10+temp%10;
//          temp=Math.floor(temp/10);
//         }
//       sq=r*r;
//       sum1=sum1+sq;
//     }  else{
//     console.log("Not two digit number")
//     }
// }
//     if (sum==sum1){
//      console.log("equal");
//         }    
//      else{
//         console.log("not");
// }

// perfect square of a number//
// let n=parseInt(prompt("Enter the number"));
// let isperfectsquare=false;
// for (i=1; i<=n; i++ ){
//     if (i*i==n){
//         isperfectsquare=true;
//         break;
//     }
// }
//     if (isperfectsquare){
//     console.log("yes");
//     }else{
// console.log("no");
// }

//perfect square of m to n//
// let m=parseInt(prompt("Enter the value of m"));
// let n=parseInt(prompt("Enter the value of n"));
// let i=1;
// while (m<=n){
//   if(i<=m){
//     k=i*i;
//     if (k>=m){
//         if (k<=n){
//             console.log(k);
//             i++;
//             }
//         }
//           else{
//             i++;
//         }
//     }
//        else{
//     m++;
//  }
//}

//Palindrome//
// let n=parseInt(prompt("Enter the value of n"));
// let sum=0;
// let N=n;
// while (n>0){
//     r=n%10;
//     sum=sum*10+r;
//     n=Math.floor(n/10);
// }
// if (sum==N){
//     console.log("yes");
// }
// else{
// console.log("no");
// }

//Binary to Decimal//
// let D=parseInt(prompt("Enter the value of D"));
// let B=0;
// let b=1;
// let k;
// while (D>0){
//     k=D%10;
//     B=B+b*k;
//     D=Math.floor (D/10);
//     b=b*2;
// }
// console.log(B);

//Decimal to binary//
// let D=parseInt(prompt("Enter the value of D"));
// let B=0;
// let b=1;
// while (D>0){
//     k=D%2;
//     B=B+b*k;
//     D=Math.floor (D/2);
//     b=b*10;
// }
// console.log(B);

//smin and smax//
// let n=parseInt(prompt("Enter the value of n"));
// let a=parseInt(prompt("Enter the first value"));
// let b=parseInt(prompt("Enter the second value"));
// let max=a;
// let smax=b;
// let min=a;
// let smin=b;
// if (smax>max){
//    let Temp=max;
//     max=smax;
//     smax=Temp;
// }
// if (smin<min){
//     let Temp=min;
//     min=smin;
//     smin=Temp;
// }
// for (let i=0; i<n-2; i++){
//     let c=parseInt(prompt("Enter the "+ (i+3)+" num: "));
//     if (c>max){
//         smax=max;
//         max=c;
//     }
//       else if(c>smax){   
//         smax=c;
//       if (c<min){
//         smin=min;
//         min=c;
//       }
//     }
//      else if (c<smin){
//         smin=c;
//     }
// }
// console.log("sminimum number",smin);
// console.log("smaximum number",smax);

//Jumble number//
// let N=parseInt(prompt("Enter the value of n"));
// let R=N%10;
// N=Math.floor(N/10);
// while(N>0){
// let R1=N%10;
// if (R==R1+1 ||R==R1-1){
//     p=1;
//     R=R1;
//     N=Math.floor(N/10);
// }
// else{
//      p=0;
//      R=R1;
//      N=Math.floor(N/10);
// }
// }
//  if(p==1){
 
//     console.log("Jumble number");
//  }
// else {/     console.log("Not Jumble number");
// }


//Star pattern question//
// ****
// ****
// ****
// let n=parseInt(prompt("Enter the value of n"));
// for (i=1; i<=n; i++){
//     line = '';
//     for (j=0; j<=n; j++){
//         line += '*';
//     }
//     console.log(line);
// }


// *
// * *
// * * *
// * * * *
// let n=parseInt(prompt("Enter the value of n"));
// for (let i=1; i<=n; i++){
//     line = '';
//     for (let j=1; j<=i; j++){
//         line += '* '
//     }
//     console.log(line);
// }


// * * * *
// * * *
// * *
// *
// let n=parseInt(prompt("Enter the value of n"));
// for (let i=n; i>=1; i--){
//     let line = '';
//     for (let j=1; j<=i; j++){
//         line += '* '
//     }
//     console.log(line);
// }

//       *
//      **
//     ***
//    ****
// let n=parseInt(prompt("Enter the value of n"));
// for (i=1; i<=n; i++){
//     line = '';
//          for (j=i; j<n; j++){
//             line += ' ';
//          }
//     for (j=1; j<=i; j++){
//         line += '*'
//     }
//     console.log(line);
// }


//         *
//        ***
//       *****
//      *******
// let n=parseInt(prompt("Enter the value of n"));
// let k=1;
// for (i=1; i<=n; i++){
//     line = '';
//     for (j=i; j<n; j++){
//        line += ' '; 
//     }
//     for (j=1; j<=k; j++){
//         line += '*';
//     }
//         k=k+2;
    
//     console.log(line);
// }


//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
// let n=parseInt(prompt("Enter the value of n"));
// let  k=1;
// for (let i=1; i<=n; i++){
//     let line = '';
//     for (let j=i; j<n; j++){
//         line += ' ';
//     }
//     for (let j=1; j<=k; j++){
//         line += '*';
//     }
//     k=k+2;
//     console.log(line);
// }
// k-=4;
// for (let i=1; i<=n-1; i++){
//    let line = '';
//     for (let j=1; j<=i; j++){
//         line += ' ';
//     }
//     for (let j=1; j<=k; j++){
//         line += '*';
//     }
//       k=k-2;
//  console.log(line);
// }


// *      *
// **    **
// ***  ***
// ********
// ***  ***
// **    **
// *      *
// let n=parseInt(prompt("Enter the value of n"));
// let k=1;
// for (i=1; i<=n; i++){
//     let line = '';
//     for (j=1; j<=i; j++){
//         line += '*';
//     }
//     for (j=i; j<n; j++){
//         line += ' ';
//     }
//     for (j=i; j<n; j++){
//         line += ' ';
//     }
//     for (j=1; j<=i; j++){
//         line += '*';
//     }
// console.log (line);
// }
// for (i=1; i<=n-1; i++){
//     let line = '';
//     for (j=i; j<n; j++){
//         line += '*';
//     }
//     for (j=1; j<=i; j++){
//         line += ' ';
//     }
//     for (j=1; j<=i; j++){
//         line += ' ' ;
//     }
//     for (j=i; j<n; j++){
//         line += '*';
//     }
// console.log(line);
// }


//    *
//   * *
//  *   *
// *******
// let n=parseInt(prompt("Enter the value of n"));
// let k=1;
// for (let i=1; i<=n; i++){
//    let line = '';
//   for (let j=1; j<=n-i; j++){
//   line += ' ';
//   }
//   for (let j=1; j<=k; j++){
//     if (j==1 || j==k || i==n){
//         line += '*';
//     }
//     else {
//         line += ' ';
//     }
// }
// k += 2;
// console.log(line);
// }



//    *
//   * *
//  *   *
// *     *
//  *   *
//   * *
//    *
// let n = parseInt(prompt("Enter the value of n"));
// let k = 1;
// for (let i = 1; i <= n; i++) {
//     let line = '';
//     for (let j = 1; j <= n - i; j++) {
//         line += ' ';
//     }
//     for (let j = 1; j <= k; j++) {
//         if (j === 1 || j === k) {
//             line += '*';
//         } else {
//             line += ' ';
//         }
//     }
//     k += 2;
//     console.log(line);
// }
// k -= 4; 
// for (let i = n - 1; i >= 1; i--) {
//     let line = '';
//     for (let j = 1; j <= n - i; j++) {
//         line += ' ';
//     }
//     for (let j = 1; j <= k; j++) {
//         if (j === 1 || j === k) {
//             line += '*';
//         } else {
//             line += ' ';
//         }
//     }
//     k -= 2;
//     console.log(line);
// }

  //doubt//let n=parseInt(prompt("Enter the number"));
// for (let i=1; i<=n; i++){
//     let line = '';
//     for (let j=1; j<=n-i; j++){
//         line += ' ';
//     }
// for (let k=1; k<2*i; k++){
//     if (k===i || k === 2 * i - 1 || i===n){
//         line += '*';
//     }
//     else {
//         line += ' ';
//     }
// }
// console.log(line);
// }
// for (let i=n-1; i>=1; i--){
//     let line = '';
//     for (let j=1; j<=n-i; j++){
//         line += ' ';
//     }
//     for (let k=i; k<2*i; k++){
//         if (k===i || k === 2 * i - 1 || i===n){
//         line += '*';
//         }
//         else {
//             line += ' ';
//         }
//     }
// console.log(line);
// }

 //doubt//let n=parseInt(prompt("Enter the value of n"));
// for (let i=1; i<=n; i++){
//     let line = '';
//     for (let j=1; j<=n; j++){
//         if (i==1 || i==n || j==1 || j==n){
//             line += '*';
//         }
//         else {
//             line += '';
//         }
//     }
//  console.log(line);                                                  
 
// }


//Number patterns
// 1
// 2 3
// 4 5 6
// 7 8 9 10
// let n=parseInt(prompt("Enter the value of n"));
// let k = 1;
// for (let i = 1; i <= n; i++){
//     let line = '';
//     for (let j = 1; j <= i; j++){
//     line += ' ';
//         line += k;
//         k++;
//     }
//     console.log(line);
// }
 

// 1
// 1 2 1
// 1 2 3 2 1
// 1 2 3 4 3 2 1
// 1 2 3 4 5 4 3 2 1
// let n=parseInt(prompt("Enter the value of n"));
// for (i=1; i<=n; i++){
//     line = '';
//     for (j=1; j<=i; j++){
//     line += ' ';
//         line += j;
//     }
// console.log(line);
//     for (k=1; k<i; k++){
//         line += ' ';
//         line += i-k;
//     }
//     console.log(line);
// }

// 0
// 2 4
// 4 8 8
// 8 16 16 16
// let n=parseInt(prompt("Enter the value of n"));
// console.log(' 0');
// let a=2;
// for (i=2; i<=n; i++){
//     line = '';
//     for (j=1; j<=i; j++){
//       line += ' ';
//         if (j==1){
//           line += a;
//           b = a*2;
//         }
//         else{
//             line += b;
//             b = a*2;
//         }
//     }
//     a = b;
//     console.log(line);
// }

//doubt//
//      4
//     434
//    43234
//   4321234
//    43234
//     434
//      4
// let n=parseInt(prompt("Enter the value of n"));
// for (let i=1; i<=n; i++){
//     line = '';
//     for (let j=1; j<=n-i; j++){
//         line += ' ';
//     }
//     let k=n;
//     for (j=1; j<=i; j++){
//     line += ' ';
//         line += k;
//         k--;
//     }
//    for (j=n-i+2; j<=n; j++){
//     line += ' ';
//      line += j;
//    }
//    console.log(line);
// }
// for (i=1; i<=n-1; i++){
//     line = '';
//     for (j=1; j<=i; j++){
//         line += ' ';
//     }
//     let k=n;
//     for (j=i; j<n; j++){
//     line += ' ';
//         line += k;
//        k--;
//    }
//    for (j=i+2; j<=n; j++){
//     line += ' ';
//     line += j;
//    }
// console.log(line);
// }


// 25 24 23 22 21
// 16 17 18 19 20
// 15 14 13 12 12
// 6 7 8 9 10
// 5 4 3 2 1
// let n=parseInt(prompt("Enter the value of n"));
// let k=n*n;
// for (i=1; i<=n; i++){
//     line = '';
//     for (j=1; j<=n; j++){
//         if (j > 1){
//             line += ' ';
//         }
//         if (i%2==0){
//             line += k ;
//             k++;
//         }
//         else {
//             line += k ;
//             k--;
//         }
//     }
//     if (i%2==0){
//         k=k-(n +  1);
//     }
//     else{
//         k=k-(n - 1);
//     }
//     console.log( line );
// }


// 13 14 15 16 
// 12 11 10 9
// 5 6 7 8 
// 4 3 2 1
// let n=parseInt(prompt("Enter the value of n"));
// let a=n*n-(n-1);
// for (i=1; i<=n; i++){
//     line = '';
//     for (j=1; j<=n; j++){
//         if (i%2==0){
//             line += ' ';
//             line += a;
//             a--;
//         }
//         else {
//             line += ' ';
//             line += a;
//             a++;
//         }
//     }
//     if (i%2==0){
//         a=a-(n-1);
//     }
//     else {
//         a=a-(n+1);
//     }
//     console.log(line);
// }

// 4 5 4 3 2
// 3 4 5 4 3
// 2 3 4 5 4
// 1 2 3 4 5 
// let n=parseInt(prompt("Enter the value of n"));
// for (i=1; i<=n; i++){
//     let line = ' ';
//     for (j=(n-i)+1; j<=n; j++){
//         line += ' ';
//         line += j;
//     }
//     for (j=(n-1)+2; j>i; j--){
//         line += ' ';
//         line += j;
//     }
//     console.log(line);
// }


// 5 4 3 2 1
// 4 5 4 3 2
// 3 4 5 4 3
// 2 3 4 5 4
// 1 2 3 4 5
// let n=parseInt(prompt("Enter the value of n"));
// for (let i = 1; i <= n; i++){
//     let line = ' ';
//     for (let j = n-i+1; j <= n; j++){
//         line += ' ';
//         line += j;
//     }
//     for (let j = n - 1; j >= i; j--){
//         line += ' ';
//         line += j;
//     }
//    console.log(line);
// }


// 1 2 3 4 5 
// 2 4 6 8 
// 3 6 9 
// 4 8
// 5
// let n=parseInt(prompt("Enter the value of n"));
// for (i=1; i<=n; i++){
//     line = '';
//      let k=i;
//     for (j=1; j<=n-i+1; j++){
//         line += ' ';       
//         line += k;
//     k=k+i;
//     }
//     console.log(line);
// }


// 24 24 23 22 21
// 16 17 18 19 20
// 15 14 13 12 11
// 6 7 8 9 10
// 5 4 3 2 1
// let n=parseInt(prompt("Enter the value of n"));
// for (i=1; i<=n; i++){
//     line = '';
//     for (j=1; j<=n; j++){
//         if (i==1 && j==1){
//             p=n*n-1;
//             line += ' ';
//             line += p;
//         }
//         else if(i%2==0){
//             line += ' ';
//             line += p;
//             p++;
//         }
//         else {
//             line += ' ';
//             line += p;
//             p--;
//         }
//     }
//     if (i%2==0){
//         p=p-(n+1);
//     }
//     else {
//         p=p-(n-1);
//     }
//     console.log(line);
// }


// 64 65 66 67
// 16 15 14 13 
// 4 5 6 7 
// let n=parseInt(prompt("Enter the value of n"));
// let a=4;
// for (i=1; i<=n; i++){
//     line = '';
//     let p=1;
//     for (j=i; j<=n; j++){
//         p=p*a;
//        // line += p;
//     }
//     for (j=1; j<=n+1; j++){
//         if (i%2==0){
//             line += ' ';
//             line += p;
//             p--;
//         }
//         else {
//             line += ' ';
//             line += p;
//            p++;
//         }
//     }
//     console.log(line);
// }


// 4 16 64 256
// 3 9 27 
// 2 4
// 1
// let n=parseInt(prompt("Enter the value of n"));
// for (i=n; i>0; i--){
//   line = '';
//   let p=1;
//   for (j=1; j<=i; j++){
//    p=p*i;
//    line += ' ';
//    line += ' ' + p;
//   }
//   console.log(line);
// }


// 4 4 3 2
//  3 4 3
//   2 4
//    1
//   2 4
//  3 4 3
// 4 4 3 2
// let n=parseInt(prompt("Enter the value of n"));
// for (i=1; i<=n; i++){
//     line = '';
//     for (j=1; j<i; j++){
//         line += ' ';
//     }
//     let k=n-i+1;
//     for (j=n; j<=n; j++){
//         line += k; 
//         line += ' ';
//     }

//     for (j=n; j>i; j--){
//         line += j; 
//         line += ' ';
//     }

//     console.log(line);
// }
// for (i=1; i<=n-1; i++){
//     line = '';
//     for (j=n; j>i+1; j--){
//         line += ' ';
//     }
//     let k=i+1;
//     for (j=i; j<=i; j++){
//         line += k;
//         line += ' ';
//     }
//      k=n;
//     for (j=1; j<=i; j++){
//         line += k;
//         line += ' ';
//         k--;
//     }
//     console.log(line);
// }

//     1
//    121
//   12321
//  1234321
//   12321
//    121
//     1
// let n=parseInt(prompt("Enter the value of n"));
// for (i=1; i<=n; i++){
//     line = '';
//     for (j=i; j<n; j++){
//         line += ' ';
//     }
//     for (j=1; j<=i; j++){
//        line += j;
//     }
//     for (j=1; j<i; j++){
//        line += i-j;
//     }
//     console.log(line);
// }
// for (i=1; i<=n-1; i++){
//     line = '';
//     for (j=1; j<=i; j++){
//         line += ' ';
//     }
// for (j=1; j<n-i+1; j++){
//    line += j;
// }
// k=n-i-1;
// for (j=1; j<n-i; j++){
//    line += k;
//     k--;
// }
// console.log(line);    
// }

// 1 2 3 4 5
// 10 9 8 7 6
// 11 12 13 14 15 
// 20 19 18 17 16
// 21 22 23 24 25
// let n = parseInt(prompt("Enter the value of n"));
// let a = 1;
// for (let i = 1; i <= n; i++) {
//     let line = '';
//     for (let j = 1; j <= n; j++) {
//             line += ' ';
//              line += a+' ';
//              if (i % 2 === 0) {
//             a--;
//         } else {
//             a++;
//         }
//     }
//     if (i%2==0){
//     a += n + 1;
// }
// else {
//     a += n -1;
// }
//  console.log(line);
// }


// 1 2 3 4 5
// 6 7 8 9 10
// 11 12 13 14 15 
// 16 17 18 19 20
// 21 22 23 24 25
// let n=parseInt(prompt("Enter the value of n"));
// let k=1;
// for (i=1; i<=n; i++){
//     line = '';
//     for (j=1; j<=n; j++){
//         line += ' ';
//         line += k;
//         k++;
//     }
//     console.log(line);
// } 


//series//
// let n=parseInt(prompt("Enter the value of n"));
// let x=parseInt(prompt("Enter the value of n"));
// let sum=0;
// let k=1;
// for (i=1; i<=n; i++){
//     let f=1;
//     let p=1;
//     for (j=1; j<=k; j++){
//         p=p*x;
//         f=f*j;
//     }
//     if (i%2==0){
//         sum=sum-(p/f);
//     }
//     else {
//         sum=sum+(p/f);
//     }
//     k=k+2;
//     console.log(sum);
// }

// let n=parseInt(prompt("Enter the value of n"));
// let x=parseInt(prompt("Enter the value of x"));
// let y=parseInt(prompt("Enter the value of y"));
// let sum=0;
// for (i=1; i<=n; i++){
//    let p=1;
//    let f=1; 
// for (j=1; j<=i; j++){
//     p=p*x;
//     f=f*j;
// }
// let p1=1;
// for (Q=1; Q<i; Q++){
//     p1=p1*y;
// }
// Q=p*p1;
// if ((i-1)%4==0){
//     sum=sum-(Q/f);
// }
// else if ((i-1)%4==1){
//     sum=sum-(Q/f);
// }
// else {
//     sum=sum+(Q/f);
// }
// }
// console.log(sum);

// let n=parseInt(prompt("Enter the value of n"));
// let x=parseInt(prompt("Enter the value of x"));
// let y=parseInt(prompt("Enter the value of y"));
// let sum=0;
// let k=1;
// for (i=1; i<=n; i++){
//     let p=1;
//     let f=1;
//     for (j=1; j<=k; j++){
//         p=p*x;
//         f=f*j;
//     }
//     let p1=1;
//     for (Q=1; Q<i; Q++){
//         p1= p1*y;
//     }
//     Q=p*p1;
//     if (i%4==0 || i%4==1){
//         sum=sum+(Q/f);
//     }
//     else {
//         sum=sum-(Q/f);
//     }
//     k=k+2;
// }
//     console.log(sum);

// let n=parseInt(prompt("Enter the value of n"));
// let x=parseInt(prompt("Enter the value of x"));
// let y=parseInt(prompt("Enter the value of y"));
// let sum=1;
// for (i=1; i<=n; i++){
//     let p=1;
//    for (j=1; j<=i; j++){
//     p=p*x;
//    }
//    let p1=1;
//    for (Q=1; Q<=i; Q++){
//       p1=p1*y;
//    }
//    Q=p*p1;         (not correct)
//    if (i%2==0){
//     sum=sum-(1/Q);
//    }
//    else {
//     summ=sum+(1/Q);
//    }
// }
// console.log(sum);

// let n=parseInt(prompt("Enter the value of n"));
// let x=parseInt(prompt("Enter the value of x"));
// let y=parseInt(prompt("Enter the value of y"));
// let k=2;
// let sum=x;
// for (i=1; i<=n; i++){
//     let p=1;
//     let f=1;
//     for (j=1; j<=k; j++){
//         p=p*x;
//     }
//     for (j=1; j<=i+1; j++){
//         f=f*j;                  (not correct)
//     }
//     let p1=1;
//     for (Q=1; Q<=i; Q++){
//         p=p1*y;
//     }
//     Q=p*p1;
//     if (i%4==0){
//         sum=sum-(Q/f);
//     }
//     else if (i%4==1){
//         sum=sum-(Q/f);
//     }
//     else {
//         sum=sum+(Q/f);
//     }
// }
// console.log(sum);


// Write a program how to find all the perfect numbers under 1000.

// let n=parseInt(prompt("enter the value of n"));
// for (i=0; i<n; i++){
//     let sum=0;
//     for (j=1; j<i; j++){
//         if (i%j==0){
//             sum=sum+j;
//         }
//     }
// if(sum==i){
//     console.log(i);
// }
// }
  
// Find the third max of given number n

// let n=parseInt(prompt("Enter the numbers"));
// let max=parseInt(prompt("Enter the value of first element"));
// let smax=parseInt(prompt("Enter the value of 0"));
// let thmax=parseInt(prompt("Enter the value of 0"));
// let a=parseInt(prompt("Enter the value "));
// for (i=0; i<n; i++){
//     if (a>max){
//         max=a;
//         smax=max;
//         thmax=smax;
//     }
//     else if (a>smax){
//         smax=a;
//         thmax=smax;
//     }
//     else if (thmax=a){
//     }
// }
// console.log(thmax);

// write a program how to print multiplication table

// let n=parseInt(prompt("Enter the value of n"));
// for (let i=1; i<=n; i++){
//     for (let j=1; j<=n; j++){
//         console.log(i + '*' + j + '=' + i*j);
//     }
// }

// HCF and LCM
let a=parseInt(prompt("Enter the value of a"));
let b=parseInt(prompt("Enter the value of b"));
let A=a;
let B=b;
while(b!=0){
    let r = a%b;
    a=b;
    b=r;
}
hcf=a;
lcm=A*B/hcf;
console.log("hcf",hcf);
console.log("lcm",lcm);










    















 

























        





























   












