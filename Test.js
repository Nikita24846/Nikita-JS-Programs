 const prompt = require("prompt-sync")();
// let n=parseInt(prompt("Enter the number of problems: "));
// let arr=[];
// for (let i=0; i<n; i++){
//     let num=parseInt(prompt(`Enter the ${i+1} index value:`));
//     arr.push(num);
// }
// let ass=true;
// for (let i=0; i<n-1; i++){
//     if (arr[i]<=arr[i+1]){
//         ass=true;
//     }
// else{
//         ass=false;
//     }
// }
// if (ass==true){
//     console.log("Yes");
// }
// else {
//     console.log("No");
// }


// const prompt = require("prompt-sync")();
// let n=parseInt(prompt("Enter the John's income: "));
// if (n<=10000){
//     tax=n*5/100;
// }
// else if (n<=20000){
//     tax=n*10/100;
// }
// else if(n<=30000){
//     tax=n*15/100;
// }
// else {
//     tax=n*20/100;
// }
// console.log(tax);


// const prompt = require("prompt-sync")();
// let n=parseInt(prompt("Enter the given seconds: "));
// let m=Math.floor(n/60);
// let hours=Math.floor(m/60);
// let seconds=n%60;
// let minutes=Math.floor(m%60);
// if (minutes==0){
//     minutes=m;
// }
// console.log(hours,minutes,seconds);


// const prompt = require("prompt-sync")();
// let n=parseInt(prompt("Enter the number: "));
// let l=parseInt(prompt("Enter the length of array: "));
// if (n<l){
// let arr=[];
// for (let i=0; i<l; i++){
//     let num=parseInt(prompt(`Enter the ${i+1} index value: `));
//     arr.push(num);
// }
// let sum=0;
// for (let i=0; i<n; i++){
//      sum+=arr[i];
// }
// console.log(sum);
// }
// else{
//     console.log(`Only ${l} element is in array`);
// }

let n=parseInt(prompt("Enter the value of n"))
let arr=[];

for (i=0; i<n; i++){
    let a=parseInt(prompt("Enter the "+i+" index element"));
    arr.push(a);
}
let ass=false;
for(i=0; i<n-1; i++){
    for(j=i+1; j<n; j++){
        if (arr[i]==arr[j]){
            ass=true;
        console.log(arr[j]);
        }
    }
        
}
    if (ass==false){
    console.log("there is no duplicate element");
    
     }