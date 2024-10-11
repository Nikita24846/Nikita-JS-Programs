//1.//Take an array from the user as input and reverse it before printing
// it to the user


 const prompt =require("prompt-sync")();
//Reverse array
// let n=parseInt(prompt("Enter the value of n"));
// let arr=[];
// for(let i = 0; i < 7; i++){
// let a = parseInt(prompt("Enter the num: &(i+1) "));
//      arr.push(a);
// }
// let j = 0;
// for(let i=arr.length-1; i>=(arr.length/2); i--){
//    let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;    j++;
// }
// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

//2.//Take an array from the user as input and print the mean, median,and 
//mode of the array

// let n=parseInt(prompt("Enter the number"));
//  let arr=[];
// for(let i = 0; i < n; i++){
//  let a = parseInt(prompt("Enter the num: &(i+1) "));
//       arr.push(a);
// }
// let sum=0;
// for (i=0; i<n; i++){
//     sum=sum+arr[i];
// }
// Mean = sum/n;
// for (i=0; i<n-1; i++){
//     for (j=0; j<n-i-1; j++){
//     if (arr[j]>arr[j+1]){
//         Temp = arr[j];
//         arr[j] = arr[j+1];
//         arr[j+1] = Temp;
//     }
// }
// }
// if (n%2==0){
//     Median = arr[(n/2)-1]+arr[n/2];
// }
// else {
//     Median = arr[n/2];
// }
// let Mode = arr[0];
// let MC = 0;
// for (i=0; i<n-1; i++){
//     let c=0;
//     for (j=0; j<n; j++){
//         if (arr[i]==arr[j+1]){
//             c++;
//         }
//     }
//     if (c>MC){
//         MC=c;
//         Mode = arr[i];
//     }
// }
// console.log("Mean",Mean);
// console.log("Median",Median);
// console.log("Mode",Mode);

// 3.Take an array of size N and a number K from the user as input, and print the
// elements of an array in a rotated manner with a gap of K.let us say the array is 
// - 3,6,7,5,10.And the value of K=3. The output should be - 7,3,10,6,5.If k=2,
// the output should be - 6,5,3,10,7


// let n=parseInt(prompt("Enter the value of n"));
// let arr=[];
// for (i=0; i<n; i++){
//     let a=parseInt(prompt("Enter the num: $(i+1) "));
//     arr.push(a);
// }
// let k=2;
// let c=1;
// let a;
// let i=0;
// let j=1;
// while(j<=n){
//     let i=0;
//     if (arr[i]!=a){
//         if (c==k){        
//             j++;                       
//             c=1;
//             arr[i]=a;
//             i++;
//             i=i%n;
//         }
//         c++;
//         i++;
//         i=i%n;
//     }
//     i++;
//     i=i%n;
// }
//     console.log(arr[i]);


 

// 4.Take an array from the user as input and find duplicate elements in an array.
// let n=parseInt(prompt("Enter the value of n"));
// let arr=[];
// for (i=0; i<n; i++){
//     let a=parseInt(prompt("Enter the num: $(i+1) "));
//     arr.push(a);
// }
// for (i=0; i<n-1; i++){
//     for (j=i+1; j<n; j++){
//         if(arr[i]==arr[j]){
//            console.log(arr[j]);
//         }
//     }
// }


//5.Take two sorted arrays from the user as input and Merge them into a single sorted array 
// let M = [];
// let array = [];
// let array1 = [];

// let m=parseInt(prompt("Enter the number of first array"));
// let n=parseInt(prompt("Enter the numbers of second array"));
// for (i=0; i<m; i++){ 
//     let num=parseFloat(prompt(`Enter the num: $ {i + 1}:`));
//     array.push(num);
// }
// for (j=0; j<n; j++) {
//     let num=parseFloat(prompt(`Enter the num: $ {j + 1}:`));
//      array1.push(num);
// }
// let k=0;
// for (i=0; i<m; i++){               
//     for (j=0; j<n; j++){
//         if (array[i]<array1[j]){
//              M[k]=array[i];
//              k++;
//         }
//         M[k]=array1[j];
//         k++;
//     }

// while (i<m){
//     M[k]=array[i];
//     i++;
//     k++;
// }
// while (j<n){
//     M[k]=array1[j];
//     j++;
//     k++;
// }
// }
// console.log (M);








//Selection sort//
//  let n=parseInt(prompt("Enter the number "));
//  let arr=[];
//  for (i=0; i<n; i++){
//     let a=parseInt(prompt("Enter the num: &(i+1)"));
//     arr.push(a);
//  }
//  for (let i=0; i<n-1; i++){
//     let min=i;
//     for (let j=i+1; j<n; j++){
//         if (arr[j]<arr[min]){
//             min=j;
//         }
//     }                          
//     if (min!=i){
//        let Temp = arr[i];
//     arr[i] = arr[min];
//     arr[min] = Temp;
//     }
// }
// for (i=0; i<n; i++){
//     console.log(arr[i]);
// }



//Insertion sort//
let n=parseInt(prompt("Enter the numbers"));
let arr=[];
for (i=0; i<n; i++){
    let a=parseInt(prompt("Enter the num: $(i+1)"));
    arr.push(a);
}
for(i=1; i<n; i++){
    let temp = arr[i];
    let j=i-1;
    while (j>=0 && arr[j]>temp){
            arr[j+1]=arr[j];
            j--;
        }
    
    arr[j+1]=temp;
}
for (i=0; i<n; i++){
    console.log(arr[i]);
}


//Bubble sort
// let n=parseInt(prompt("Enter the number"));
// let arr=[];
// let flag=0;
// for (let i=0; i<n; i++){
//     let a=parseInt(prompt('Enter the num: $(i+1)'));
//     arr.push(a);
// }
// for (let i=0; i<n-1; i++){
//      flag=0;
//     for (let j=0; j<n-1-i; j++){
//     if (arr[j]>arr[j+1]){
//        let temp = arr[j];
//         arr[j] = arr[j+1];
//         arr[j+1] = temp;
//          flag = 1;
//     }
// }
// if (flag===0){
//     console.log("array is sorted");
//     break;
// }
// }
// for (i=0; i<n; i++){
//     console.log(arr[i]);
// }


// 6.Take a sorted array from the user as input and find a number using Binary Search the array.
// let arr=[];
// let n=parseInt(prompt("Enter the value of n"));
// for (i=0; i<n; i++){
//     let num=parseInt(prompt("Enter the $(i+1) num: "));
//     arr.push(num);
// }
// let s=parseInt(prompt("Enter the value of s"));
// let sum=0;
// let j=0;
// for (i=0; i<n; i++){
//     sum=sum+arr[i];
//     if (sum>s && j<=i){
//         sum=sum-arr[j];
//         j++;
//     }
//     if (sum==s){
//         console.log("contiguous subarray");
//         for (p=j; p<=i; p++){
//             console.log(arr[p]);
//         }
//         break;
//     }
// }

// 7.Take two sorted arrays from the user as input and find the Union and Intersection of the arrays
// let arr1=[];
// let arr2=[];
// let u=[];
// let I=[];
// let n=parseInt(prompt("Ente the number of first array"));
// let m=parseInt(prompt("Enter the number of second array"));
// for (let i=0; i<n; i++){
//     let num=parseInt(prompt("Enter the num: $(i+1)"));
//     arr1.push(num);
// }
// for (let j=0; j<m; j++){
//     let num=parseInt(prompt("Enter the num: $(j+1)"));
//     arr2.push(num);
// }
// let k=0;
// for (let i=0; i<m; i++){
//        u[k]=arr1[i];
//        k++;
// }                                 
// let p=0;
// for (j=0; j<n; j++){
//     let c=1;                          
//     for (let i=0; i<m; i++){
//         if (arr2[j]==arr1[i]){
//             c=0;
//             I[p]=arr2[j];
//             p++;
//         }
//     }
//         if (c==1){
//             u[k]=arr1[j];
//             k++;
//         }
//     }
// console.log("merged array",u);
// console.log("duplicat",I);


//8.Take two sorted arrays of size m and n from the user as input and return the median of the two sorted arrays.
// let arr1=[];
// let arr2=[];
// let M=[];
// let m=parseInt(prompt("Ente the number of first array"));
// let n=parseInt(prompt("Enter the number of second array"));
// for (let i=0; i<m; i++){
//     let num=parseInt(prompt("Enter the num: $(i+1)"));
//     arr1.push(num);
// }
// for (let j=0; j<n; j++){
//     let num=parseInt(prompt("Enter the num: $(j+1)"));
//     arr2.push(num);
// }
// let k=0;
// for (i=0; i<m; i++){
//     for (j=0; j<n; j++){
//         if(arr1[i]<arr2[j]){
//             M[k]=arr1[i];            (doubt)
//             k++;
//         }
//         M[k]=arr2[j];
//         k++;
//     }
// }
// while (i<m){
//     M[k]=arr1[i];
//     i++;
//     k++;
// }
// while (j<n){
//      M[k]=arr2[j];
//      j++;
//      k++;
// }
// if (M%2==0){
//     Median=arr1[(M/2-1)+arr2[n/2]];
// }
// else {
//     Median=arr1[n/2];
// }
// console.log(Median);


//9.Take a sorted array from the user as input and find a number using Binary Search the array.
// let n=parseInt(prompt("Enter the value of n"));
// let a = [];
// for (i=0; i<n; i++){
//     let num = parseInt(prompt("Enter the num: $(i+1)"));
//     a[i] = num;
// }
// a.sort((a, b) => a - b);
// let D=parseInt(prompt("Enter the D:"));
// let l = 0;
// let r = n-1;
// while(l<=r){
//     mid = Math.floor(l+r)/2;
//     if(D == a[mid]){
//         console.log(a[mid]);
//         break;
//     }
//     else if (D<a[mid]){
//         r = mid - 1;
//     }
//     else {
//         l = mid + 1
//     }
// }
//     if(l>r){
//         console.log("not");
//     }



//Count sort//
// let n = parseInt(prompt("Enter the value of n"));
// let arr = [];
// for (let i = 0; i < n; i++) {
//     let num = parseInt(prompt("Enter the " + (i + 1) + "th num:"));
//     arr.push(num);
// }
// let c = 0;
// let d = 0;
// let e = 0;
// for (let i = 0; i < n; i++) {
//     if (arr[i] === 0) {
//         c++;
//     } else if (arr[i] === 1) {
//         d++;
//     } else if (arr[i] === 2) {
//         e++;
//     }
// }
// for (let i = 0; i < c; i++) {
//     arr[i] = 0;
//     console.log(arr[i]);
// }
// for (let i = c; i < c + d; i++) {
//     arr[i] = 1;
//     console.log(arr[i]);
// }
// for (let i = c + d; i < n; i++) {
//     arr[i] = 2;
//     console.log(arr[i]);
// }









    

















 




