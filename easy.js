const prompt = require("prompt-sync")();
// let n=parseInt(prompt("Enter the value of n: "));
// let arr=[];
// for (let i=0; i<n; i++){
//     let num=parseInt(prompt("Enter the index value: "));
//     arr.push(num);
// }
// let c=0;
// for (let i=0; i<n; i++){
//     if (arr[i]==4){
//       c++;
//     }
// }
// console.log(c);


// let a=parseInt(prompt("Enter the angle: "));
// let b=parseInt(prompt("Enter the angle: "));
// let c=parseInt(prompt("Enter the angle: "))
// if (a+b+c==180){
//     console.log("Yes");
// }
// else {
//     console.log("No");
// }

// let n=parseInt(prompt("Enter the number: "));
// let arr=[];
// for (let i=0; i<n; i++){
//     let num=parseInt(prompt("Enter the index value: "));
//     arr.push(num);
// }
// let s=0; 
// for (let i=0; i<n; i++){
//       s=s+arr[i];
// }
// console.log(s);


// let n=parseInt(prompt("Enter the number: "));
// console.log(n);

// let a=parseInt(prompt("Enter the value of a: "));
// let b=parseInt(prompt("Enter the value of b: "));
// let c=a%b;
// console.log(c);

// let n=parseInt(prompt("Enter the value of n: "));
// let k=parseInt(prompt("Enter the value of k: "));
// let arr=[];
// for (let i=0; i<n; i++){
//     let num=parseInt(prompt("Enter the index value:"));
//     arr.push(num);
// }
// let c=0;
// for (let i=0; i<n; i++){
//     if (arr[i]%3==0){
//         c++;
//     }
// }
// console.log(c);


// let n=parseInt(prompt("Enter the value of n: "));
// let arr=[];
// for (let i=0; i<n; i++){
//     let num=parseInt(prompt("Enter the num: "));
//     arr.push(num);
// }
// let s=0;
// for (let i=0; i<n; i++){
//     if (i==0){
//         s=s+arr[0];
//     }
//     if (i==n-1){
//         s=s+arr[n-1];
//     }
// }
// console.log(s);

// let a=parseInt(prompt("Enter the value of a: "));
// let b=parseInt(prompt("Enter the value of b: "));
// let c=a+b;
// console.log(c);

// let x=(prompt("Enter the alfabet: "));
// if (x == 'B' || x == 'b'){
//     console.log("BattleShip");
// }
// else if (x == 'C' || x == 'c'){
//     console.log("Cruiser");
// }
// else if (x == 'D' || x == 'd'){
//     console.log("Destroyer");
// }
// else if (x == 'F' || x == 'f'){
//      console.log("Frigate");
// }
// else {
//     console.log("Invalid input");
// // }

// let n=parseInt(prompt("Enter the value of n: "));
// let c=0;
// while (n>0){
// let r=n%10;
// c=c*10+r;
//   n=Math.floor(n/10);
// }
// console.log(c);

// let a=parseInt(prompt("Enter the value of a: "));
// let b=parseInt(prompt("Enter the value of b: "));
// if (a>b){
//     console.log(">");
// }
// else if (a<b){
//     console.log("<");
// }
// else {
//     console.log("=");
// }

// let x=parseInt(prompt("Enter the value of x: "));
// let y=parseInt(prompt("Enter the value of y: "));
// if (x%5==0){
//    c=y-(x+0.50);
//    if (c>0){
//     console.log(c);
//    }else {
//    console.log(y);
//    }
// }
// else {
//     console.log(y);
// }

// let x=parseInt(prompt("Enter the value of x: "));
// let c=x*2;
// let t=5*c;
// console.log(t);


// let n=parseInt(prompt("Enter the value of n: "));
// let c=n%10;
// console.log(c);


// let X=parseInt(prompt("Enter the value of x: "));
// let Y=parseInt(prompt("Enter the value of Y: "));
// let Z=parseInt(prompt("Enter the value of Age: "));
// if (Z>=X && Z<Y){
//     console.log("Yes");
// }
// else {
//     console.log("No");
// }

// let A=parseInt(prompt("Enter the value of A: "));
// let B=parseInt(prompt("Enter the value of B: "));
// let C=parseInt(prompt("Enter the value of C: "));
// if (A>B && A>C){
//     console.log("Alice");
// }
// else if (B>A && B>C){
//     console.log("Bob");
// }
// else {
//     console.log("Charlie");
// }

// let A=parseInt(prompt("Enter the value of A: "));
// let B=parseInt(prompt("Enter the value of B: "));
// let C=parseInt(prompt("Enter the value of C: "));
// let D=parseInt(prompt("Enter the value of D: "));
// let s=0;
// if (A>B){
//     s=s+A;
// }
// else {
//     s=s+B;
// }
// if (C>D){
//     s=s+C;
// }
// else {
//     s=s+D;
// }
// console.log(s);


// let T=parseInt(prompt("Enter the test cases: "));
// for (i=0; i<T; i++){
// let n=parseInt(prompt("Enter the number of childrens: "));
// let x=parseInt(prompt("Enter the number of candies: "));
// let d=0;
//     if (n>x){
//         let c=n-x;
//         let d=Math.floor(c/4); 
//         if (c%4==0){
//         console.log(d);
//         }
//         else {
//         console.log(d+1);
//         }
//     }
//     else {
//       console.log(d);
//         }
// }


// let n=parseInt(prompt("Enter the value of n: "));
// if (n<=0){
//     console.log(0);
// }
// else {
//     let a=n%3;
//     if (a<2){
//         a++;
//     }
//     else {
//         a--;
//     }
//     if (n%3!=0){
//         console.log(a);
//     }
//     else {
//         console.log(0);
//     }
// }


// let S=parseInt(prompt("Enter the the total memory of Chef's phone: "));
// let X=parseInt(prompt("Enter the memory of already installed apps: "));
// let Y=parseInt(prompt("Enter the memory of already installed apps: "));
// let Z=parseInt(prompt("Enter the memory required by the third app: "));
// if (S>=X+Y+Z){
//     console.log(0);
// }
// else if (S - X >= Z || S - Y >= Z){  
//     console.log(1);
// }
// else {
//     console.log(2);
// }

// let x=parseInt(prompt("Enter the amount of tea the Chef has to drink daily: "));
// let y=parseInt(prompt("Enter the capacity of his jar: "));
// let z=parseInt(prompt("Enter the cost of refilling his jar: "));
// if (x==y){
//     console.log(z);
// }
// else {
//     c=Math.floor(x/y);         
//     d=z*c;
//     if (x%y!=0){
//         d +=z;
//     }
//     console.log(d);
// }

// let a=parseInt(prompt("Enter the value of p: "));
// let b=parseInt(prompt("Enter the value of q: "));
// if (a==b){
//     console.log("Alice");
// }
// else if (a>b){
//     console.log("Alice");
// }
// else {
//     console.log("Bob");
// }


// let n=parseInt(prompt("Enter the the minuts of journey: "));
// let x=parseInt(prompt("Enter the duration of each song: "));
// let c=x*3;
// z=Math.floor(n/c);
// console.log(z);


// let x=parseInt(prompt("Enter the value of x: "));
// let y=parseInt(prompt("Enter the value of y: "));
// let c=Math.floor((x-1)/10);
// let d=Math.floor((y-1)/10);
// let t=Math.abs(c-d);
// console.log(t);

// let n=parseInt(prompt("Enter the value of n: "));
// let arr=[];
// for (let i=0; i<n; i++){
//     let num=(prompt("Enter the index value: "));
//     arr.push(num);
// }
// for (let i=0; i<n; i++){
//     if (arr[i]=='A'){
//         arr[i]='T';
//     }
//    else  if (arr[i]=='T'){
//         arr[i]='A';
//     }
//    else  if (arr[i]=='C'){
//         arr[i]='G';
//     }
//     else {
//         arr[i]='C';
//     }
// }
//     console.log(arr.join(''));

// let x1=parseInt(prompt("Enter the value of x1: "));
// let x2=parseInt(prompt("Enter the value of x2: "));
// let y1=parseInt(prompt("Enter the value of y1: "));
// let y2=parseInt(prompt("Enter the value of y2: "));
// let c=x1+x2;
// let d=y1+y2;
// if (c>d){
//     console.log(d);
// }
// else {
//     console.log(c);
// }

// let n=parseInt(prompt("Enter the value of n: "));
// if (n%4==0){
//     c=n+1;
// }
// else {
//     c=n-1;
// }
// console.log(c);

// let n=parseInt(prompt("Enter the value of n: "));
// let c=0;
// if (n%5!=0){
//     console.log(-1);
// }else {
// while (n>=10){
//     n-=10;
//     c++;
// }
// while (n>=5){
//     n-=5;
//     c++;
// }
// console.log(c);
// }

// let n=parseInt(prompt("Enter the value of n: "));x
// let s=n%3;
// if (s==0){
//         console.log("Normal");
// }
//       else if (s==1){
//         console.log("huge");
// }
//       else {
//         console.log("small");
//}



// let n=parseInt(prompt("Enter the value of n: "));
// let k=1;
// for (let i=1; i<=n; i++){
//     let line='';
//     for (let j=1; j<=n; j++){
//         line += k + ' ';
//     if(i%2==0){
//         k--;
//     }
//     else{
//         k++;
//     }
// }
//     if (i%2==0){
//         k=(k+n)+1;
//     }
//     else {
//         k=(k+n)-1;
//     }
//     console.log(line);
// }


// let n=parseInt(prompt("Enter the number"));
// let arr=[];
// let flag=0;
// for (let i=0; i<n; i++){
//     let a=parseInt(prompt('Enter the num: $(i+1)'));
//     arr.push(a);
// }
// for (let i=0; i<n-1; i++){
//     for (let j=0; j<n-1-i; j++){
//     if (arr[j]>arr[j+1]){
//        let temp = arr[j];
//         arr[j] = arr[j+1];
//         arr[j+1] = temp;
//          flag = 1;
//     }
// }
// }
// for (i=0; i<n; i++){
//     console.log(arr[i]);
// }


// let n=parseInt(prompt("Enter the value of n: "));
// let f=1;
// for (let i=1; i<=n; i++){
//         f=f*i;
// }
// console.log(f);


// let x=parseInt(prompt("Enter the levels: "));
// let y=parseInt(prompt("Enter the minutes: "));
// let z=parseInt(prompt("Enter the break minutes: "));
// let b=x*y;
// if (x>3){
//     let c=Math.floor((x-1)/3);
//     e=z*c;
//     g=e+b;
//     console.log(g);
// }
// else {
//     console.log(b);
// }


// let n=parseInt(prompt("Enter the value of n: "));
// let i=0;
// while (i<n){
//     if (n%3==0){
//         c='normal';
//     }
//     else if (n%3==1){
//         c='huge';
//     }
//     else if (n%3==2){
//         c='small';
//     }
//         i++;
//     }
// console.log(c);

// let n=parseInt(prompt("Enter the test cases: "));
// for (let i=1; i<=n; i++){
//     let x=parseInt(prompt("Enter the number: "));
//     let c=0;
//     while (x>0){
//         r=x%10;
//         if (r==4){
//             c++;
//         }
//             x=Math.floor(x/10);
//     }
//     console.log(c);
// }





        





    





