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
// let n=parseInt(prompt("Enter the value of n"));
// for (let i=1; i<=n; i++){
//     line = '';
//     for (let j=1; j<=i; j++){
//         line += '* '
//     }
//     console.log(line);
// }

// let n=parseInt(prompt("Enter the value of n"));
// for (let i=n; i>=1; i--){
//     let line = '';
//     for (let j=1; j<=i; j++){
//         line += '* '
//     }
//     console.log(line);
// }

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
// k -= 4; // Adjusting k for the bottom half of the diamond
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
//     }l
//     k -= 2;
//     console.log(line);
// }

let n=parseInt(prompt("Enter the number"));
for (let i=1; i<=n; i++){
    let line = '';
    for (j=1; j<i; j++){
        line += ' ';
    }
for (let k=1; k<=n; k++){
    if (k==i || k==n || i==n){z
        line += '*';
    }
    else {
        line += ' ';
    }
}
console.log(line);
}
for (i=n-1; i>=1; i--){
    let line = '';
    for (let j=1; j<i; j++){
        line += ' ';
    }
    for (let k=i; k<=n; k++){
        if (k==i || k==n || i==n){
        line += '*';
        }
        else {
            line += ' ';
        }
    }
console.log(line);
}






 

























        





























   












