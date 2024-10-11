const prompt = require("prompt-sync")();
// let n=parseInt(prompt("Enter the value of n"));
// if(n==0){
//     console.log("Monday");
// }
// else if(n==1){
//     console.log("Tuesday");
// }
// else if (n==2){
//     console.log("Wednesday");
// }
// else if (n==3){
//     console.log("Thursday");
// }
// else if (n==4){
//     console.log("Friday");
// }
// else if (n==5){
//     console.log("Saturday");
// }
// else if (n==6){
//     console.log("Sunday");
// }

// let sp=parseInt(prompt("Enter the selling price"));
// let cp=parseInt(prompt("Enter the value of cost price"));
// if (sp>cp){
//     p=sp-cp;
//     pp=p/cp*100;
// }
// console.log("profit persentage",pp);

// let a=parseInt(prompt("Enter the side"));
// let b=parseInt(prompt("Enter the side"));
// if(a==b){
//     console.log("square");
// }
// else{
//     console.log("rectengle");
// }

// let n=parseInt(prompt("Enter the value of n"));
// if (n==9999){
//     console.log("yes");
// }
// else{
// console.log("no");
// }

// let n=parseInt(prompt("Enter the value of n"));
// c=n%10;
// if (c%3===0){
//     console.log("Yes");
// }
// else {
//     console.log("No");
// }

// let n=parseInt(prompt("Enter the value of age"));
// if (n>=18){
//    console.log("Eligible");
// }
// else {
//     console.log("Not");
// }

// let a=parseInt(prompt("Enter the marks of hindi"));
// let b=parseInt(prompt("Enter the marks of english"));
// let c=parseInt(prompt("Enter the marks of Maths"));
// let d=parseInt(prompt("Enter the marks of sunskrit"));
// let e=parseInt(prompt("Enter the marks of sciense"));
// let a1=parseInt(prompt("Enter the marks of hindi"));
// let b1=parseInt(prompt("Enter the marks of english"));
// let c1=parseInt(prompt("Enter the marks of Maths"));
// let d1=parseInt(prompt("Enter the marks of science"));
// let e1=parseInt(prompt("Enter the marks of sunskrit"));
// x=(a+b+c+d+e)/5*100;
// y=(a1+b1+c1+d1)/5*100;
// if (x>y){
//     console.log("First student is topper");
// }
// else {
//     console.log("Second student is topper");
// }

// let n=parseInt(prompt("Enter the value of n"));
// if (n>=0){
//     if (n<=9){
//         console.log("1 digit");
//     }
//     else if(n<=99){
//            console.log("2 digit");
//      }
//          else if(n<=999){
//         console.log("3 digit");
//     }
//     else{
//         console.log("More then three digit");
//      }
//  }
//  else {
//      console.log("Invalid");
// }


//Display road tax according to the following criteria.
// let n=parseInt(prompt("Enter the cost price"));
// if (n>100000){
//     Tax=n/100*15;
// }
// else if(n>50000 && n<=100000){
//         Tax=n/100*10;
// }
// else {
//     Tax=n/100*5;
// }
// console.log(Tax);


//maximum between three numbers
// let a=parseInt(prompt("Enter the value of a"));
// let b=parseInt(prompt("Enter the value of a"));
// let c=parseInt(prompt("Enter the value of a"));
// if(a>b){
//     max=a;
// }
// else{
//     max=b;
// }
// if (max>c){
//     max=max;
// }
// else{
//     max=c;
// }
// console.log(max);


//Validate year
// let y=parseInt(prompt("Enter the year"));
// let m=parseInt(prompt("Enter the Month number"));
// let d=parseInt(prompt("Enter the number of day"));
// if (y>0 && m>0 && m<13){
//     if (m==2){
//         if (d>0 && d<30){
//             console.log("Valid Year");
//         }
//         else {
//             console.log("Invalid");
//         }
//     }
//        if (m==4 || m==6 || m==9 || m==11){
//         if (d>0 && d<31){
//             console.log("Valid Year");
//         }
//         else {
//             console.log("Invalid");
//         }
//        }
//         else if(d>0 && d<32){
//         console.log("Valid Year");
//     }
// }
//        else {
//        console.log("Invalid");
// }


// let R=parseInt(prompt("Enter the value of Rockwell hardness"));
// let C=parseInt(prompt("Enter the value of Carbon content"));
// let T=parseInt(prompt("Enter the value of Tensile strength"));
// if (R>50 && C>0.7 && T>5600){
//     console.log("Grade 10");
// }
// else if(R>50 && C>0.7){
//     console.log("Grade 9");
// }
// else if(C>0.7 && T>5600){
//     console.log("Grade 8");
// }
// else if(R>50 && T>5600){
//     console.log("Grade 7");
// }
// else {
//     console.log("Grade 0");
// }


//Leap year
// let y=parseInt(prompt("Enter the year"));
// if((y%4==0 && y%100==0) || y%400==0){
//     console.log("Leap year");
// }
// else{
//     console.log("Not");
// }


//valid angle of triangle
// let a=parseInt(prompt("Enter the value of a"));
// let b=parseInt(prompt("Enter the value of a"));
// let c=parseInt(prompt("Enter the value of a"));
// if(a>0 && b>0 && c>0){
//     if (a+b+c==180){
//         if(a==90 && b==90 && c==90){
//             console.log("Right Angle");
//         }
//         else if(a>90 && b>90 && c>90){
//             console.log("Obtuse angle");
//         }
//         else if(a==b && b==c){
//             console.log("Equiangular");
//         }
//         else {
//             console.log("Acute angle");
//         }
//     }
//     else {
//         console.log("Invalid");
//     }
// }
// else {
//     console.log("Invalid");
// }

//Categorize the shape of quadrilateral
// let a=parseInt(prompt("Enter the value of a"));
// let b=parseInt(prompt("Enter the value of b"));
// let c=parseInt(prompt("Enter the value of c"));
// let d=parseInt(prompt("Enter the value of d"));
// let A=parseInt(prompt("Enter the value of A"));
// if (a==b){
//     if (b==c && c==d){
//         if (A==90){
//             console.log("Square");
//         }
//         else {
//             console.log("Rhombus");
//         }
//     }
//     else{
//         console.log("Irregular");
//     }
// }
// else if(a==c && b==d){
//     if(A==90){
//         console.log("Rectangle");
//     }
//     else{
//         console.log("Parallelogram");
//     }
// }
// else {
//     console.log("Iregular");
// }


//Find which triangle
// let a=parseInt(prompt("Enter the value of a"));
// let b=parseInt(prompt("Enter the value of b"));
// let c=parseInt(prompt("Enter the value of c"));
// if (a>0 && b>0 && c>0){
//     if (a+b>c && a+c>b && b+c>a){
//         if (a*a+b*b==c*c || b*b+c*c==a*a || a*a+c*c==b*b){
//             console.log("Right angle");
//         }
//         if (a==b && b==c){
//             console.log("Equilateral");
//         }
//         else if (a==b || b==c || a==c){
//             console.log("Isosceles");
//         }
//         else {
//             console.log("Scalence");
//         }
//     }
//     else {
//         console.log("Invalid");
//     }
// }else {
//     console.log("Invalid");
// }


//Second max of three numbers
// let a=parseInt(prompt("Enter the value of a"));
// let b=parseInt(prompt("Enter the value of b"));
// let c=parseInt(prompt("Enter the value of c"));
// let max;
// let smax;
// if (a>b){
//     max=a;
//     smax=b;
// }
// else{
//     max=b;
//     smax=a;
// }
// if (c>max){
//     smax=max;
//     max=c;
// }
// else if (c>smax){
//     smax=c;
// }
// console.log("Second max",smax);

//Second max of 4 numbers
// let a = parseInt(prompt("Enter the value of a"));
// let b = parseInt(prompt("Enter the value of b"));
// let c = parseInt(prompt("Enter the value of c"));
// let d = parseInt(prompt("Enter the value of d"));
// let max, smax;
// if (a > b) {
//     max = a;
//     smax = b;
// } else {
//     max = b;
//     smax = a;
// }

// if (c > max) {
//     smax = max;
//     max = c;
// } else if (c > smax) {
//     smax = c;
// }
// if (d > max) {
//     smax = max;
//     max = d;
// } else if (d > smax) {
//     smax = d;
// }
// console.log("Second max", smax);


//Perfect number
// let n=parseInt(prompt("Enter the value of n"));
// let sum=0;
// for (i=1; i<n; i++){
//     if (n%i==0){
//         sum=sum+i
//     }
// }
// if (sum==n){
//     console.log("Perfect number");
// }
// else {
//     console.log("Not a perfect number");
// }

//Prime number
// let n=parseInt(prompt("Enter the value of n"));
// let c=1;
// for (let i=1; i<n; i++){
//     if(n%i==0){
//         c++;
//     }
// }
// if(c==2){
//     console.log("Prime number");
// }
// else {
//     console.log("Not a prime number");
// }

// let ul=parseInt(prompt("Enter the upper limit"));
// let ll=parseInt(prompt("Enter the lower limit"));
// for (i=ll; i<=ul; i+=2){
//       if(i%7==0){
//         console.log(i);
//       }
// }

// let n=parseInt(prompt("Enter the value of n"));
// let sum=0;
// for (let i=1; i<n; i++){
//     if (i%3==0){
//      sum=sum+i*i;
//     }
// }
// console.log(sum);

// let ul=parseInt(prompt("Enter the value of ul: "));
// let ll=parseInt(prompt("Enter the value of ll: "));
// let p=parseInt(prompt("Enter the value of p: "));
// let q=parseInt(prompt("Enter the value of q: "));
// let sum=0;
// for (let i=ll; i<ul; i++){
//       if(i%p==0 && i%q!=0){
//         sum=sum+i
//       }
// }
// console.log(sum);

// let a=parseInt(prompt("Enter the value of a"));
// let b=parseInt(prompt("Enter the value of a"));
// let p=a*b;
// while(b>0){
//     R=a%b;
//     a=b;
//     b=R;
// }
// let hcf=a;
// lcm=p/hcf;
// console.log(lcm,hcf);

// let n=parseInt(prompt("Enter the value of n"));
// sum=0;
// while(n>0){
//     R=n%10;
//     sum=sum+R;
//     n=Math.floor(n/10);
// }
// console.log(sum);


//Reverse number
// let n=parseInt(prompt("Enter the value of n"));
// let sum=0;
// while(n>0){
//     R=n%10;
//     sum=sum*10+R;
//     n=Math.floor(n/10);
// }
// console.log(sum);

//factor of a number n
// let n=parseInt(prompt("Enter the value of n: "));
// for (let i=1; i<=n; i++){
//      if(n%i==0){
//         console.log(i);
//      }
// }


//perfect number under 1000
// let n=parseInt(prompt("Enter the value of n: "));
// for (let i=1; i<n; i++){
//     let sum=0;
//      for (let j=1; j<i; j++){
//         if(i%j==0){
//             sum=sum+j;
//         }
//      }
//      if (sum==i){
//         console.log(i);
//      }
// }


//Armstrong number
// let n=parseInt(prompt("Enter the value of n: "));
// let c=0;
// let OriginalN=n;
// let sum=0;
// while(n>0){
//    c++;
//    n=Math.floor(n/10);
// }
//  n=OriginalN;
// while(n>0){
//     R=n%10;
//     let p=1;
//     for( j=1; j<=c; j++){
//         p=p*R;
//     } 
//     sum=sum+p;
//     n=Math.floor(n/10);
//     }
// if(sum==OriginalN){
//     console.log("Armstrong number");
// }
// else{
//     console.log("Not");
// }


//the sum of factorial equal to digit
// let n=parseInt(prompt("Enter the value of n: "));
// let sum=0;
// let OriginalN=n;
// while(n>0){
//     R=n%10;
//     let f=1;
//     for (m=1; m<=R; m++){
//         f=f*m;
//     }
//     sum=sum+f;
//     n=Math.floor(n/10);
// }
// if(sum==OriginalN){
//     console.log("Yes");
// }
// else{
//     console.log("No");
// }


//HCF of n numbers
// let n=parseInt(prompt("Enter the value of n: "));
// let a=parseInt(prompt("Enter the value of a: "));
// let m=a;
// for (i=1; i<n; i++){
//     let b=parseInt(prompt("Enter the value of $(b+1): "));
//     let n=b;
//     while(n>0){
//         R=m%n;
//         m=n;
//         n=R;
//     }
// }
// console.log("HCF",m);


//max and min of n numbers
// let n=parseInt(prompt("Enter the value of n: "));
// let a=parseInt(prompt("Enter the value of a: "));
// let min=a;
// let max=a;
// for (let i=1; i<=n; i++){
//       let a=parseInt(prompt("Enter the value of a: "));
//       if(a>max){
//         max=a;
//       }
//       if(a<min){
//         min=a;
//     }
// }
// console.log("max",max);
// console.log("min",min); 


//smax of n numbers
// let n=parseInt(prompt("Enter the value of n: "));
// let a=parseInt(prompt("Enter the value of a: "));
// let max=a;
// let smax=0;
// for (let i=1; i<n; i++){
//     let a=parseInt(prompt("Enter the value of a: "));
//     if(a>max){
//         smax=max;
//         max=a;
//     }
//      else if(a>smax){
//     smax=smax;
//   }
// }
// console.log("second max",smax);


//second min of n numbers
// let n=parseInt(prompt("Enter the value of n: "));
// let a=parseInt(prompt("Enter the value of a: "));
// let b=parseInt(prompt("Enter the value of b: "));
// let min=a;
// let smin=b;
// if (smin<min){
//     t=min;
//     min=smin;
//     smin=t;
// }
// for (let i=1; i<n-1; i++){
// let c=parseInt(prompt("Enter the value of c: "));
// if (c<min){
//   smin=min;
//     min=c;
// }
// else if(c<smin){
//     smin=smin;
// }
// }
// console.log("Second min",smin);


//second max of n numbers
// let n=parseInt(prompt("Enter the value of n: "));
// let a=parseInt(prompt("Enter the value of a: "));
// let b=parseInt(prompt("Enter the value of b: "));
// let max=a;
// let smax=b;
// if(smax>max){
//     t=max;
//     max=smax;
//     smax=t;
// }
// for (let i=1; i<n-1; i++){
//     let c=parseInt(prompt("Enter the value of c: "));
//     if (c>max){
//         smax=max;
//         max=c;
//     }
//     else if(c>smax);
//     smax=smax;
// }
// console.log("Second max",smax);


//Third max of n numbers
// let n=parseInt(prompt("Enter the value of n: "));
// let a=parseInt(prompt("Enter the value of a: "));
// let max=a;
// let smax=0;
// let thmax=0;
// for (let i=1; i<n; i++){
//      let c=parseInt(prompt("Enter the value of c: "));
//      if (c>max){
//         thmax=smax;
//         smax=max;
//         max=c;
//      }
//      else if (c>smax){
//         thmax=smax;
//          smax=c;
//     }
//     else if(c>thmax){
//         thmax=c;
//     }
// }
// console.log("Third max",thmax);


//all prime numbers of n numbers
// let n=parseInt(prompt("Enter the value of n: "));
// for (let i=1; i<=n; i++){
//     let c=0;
//     for (let j=1; j<=i; j++){
//         if(i%j==0)
//           c++;
//     }
//     if(c==2){
//         console.log(i);
//     }
// }


//sum of all prime numbers up to n
// let n=parseInt(prompt("Enter the value of n: "));
// let sum=0;
// for (let i=1; i<=n; i++){
//     let c=0;
//     for(let j=1; j<=i; j++){
//         if (i%j==0){
//             c++;
//         }
//     }
//         if(c==2){
//          sum=sum+i;
//         }
// }
//     console.log(sum);


//prime factors of a given number
// let n=parseInt(prompt("Enter the value of n: "));
// for (let i=1; i<n; i++){
//     if (n%i==0){
//         let c=0;
//     for (let j=1; j<=i; j++){
//         if (i%j==0){
//             c++;
//         }
//      }
//      if (c==2){
//         console.log(i);
//      }
//    }
// }


//palindrome number
// let n=parseInt(prompt("Enter the value of n: "));
// let N=n;
// let sum=0;
// while(n>0){
//     R=n%10;
//     sum=sum*10+R;
//     n=Math.floor(n/10);
// }
// if (sum==N){
//     console.log("Yes");
// }
// else {
//     console.log("No");
// }

//palindrome number of m to n
// let m=parseInt(prompt("Enter the value of m: "));
// let n=parseInt(prompt("Enter the value of n: "));
// while (m<=n){
//     Temp=m;
// let sum=0;
// while (m>0){
//     R=m%10;
//     sum=sum*10+R;
//     m=Math.floor(m/10);
//   }
// if (sum==Temp){
//     console.log(m);
//   }
// }

//Perfect Square
// let n=parseInt(prompt("Enter the value of n: "));
// let i=1;
// let assum=true;
// while(i<=n){
//   p=i*i;
//   if (n==p){
//     console.log("This is perfect Square");
//     assum=false;
//     break;
//   }
//   i++;
// }
// if (assum==true){
// console.log("Not a perfect Square");
// }

// let n=parseInt(prompt("Enter the value of n: "));
// for (let i=1; i<=n; i++){
//   line = '';
//   for (let j=1; j<=i; j++){
//       line += '*' + ' ';
//   }
//   console.log(line);
// }

//let n=parseInt(prompt("Enter the value of n: "));
// for (let i=1; i<=n; i++){
//   line = '';
//      for (let j=n; j>=i; j--){
//          line += '*' + ' ';
//      }
//      console.log(line);
// }

// let n=parseInt(prompt("Enter the value of n: "));
// for (let i=1; i<=n; i++){
//     line = '';
//     for (let j=n; j>i; j--){
//       line += ' ';
//     }
//     for (let j=1; j<=i; j++){
//       line += '*' ;
//      }
//      console.log(line);
// }

// let n=parseInt(prompt("Enter the value of n: "));
// for (let i=1; i<=n; i++){
//   line = '';
//   for (let j=n; j>i; j--){
//     line += ' ';
//   }
//   for (let j=1; j<=i; j++){
//     line += '*' + ' ';
//   }
//   console.log(line);
// }

// let n=parseInt(prompt("Enter the value of n: "));
// let  k=1;
// for (let i=1; i<=n; i++){
//   line = '';
//   for (let j=i; j<n; j++){
//         line += ' ';
//   }
//   for (let j=1; j<=k; j++){
//     line += '*';
//   }
//     k+=2;
//   console.log(line);
// }
// k-=4;
// for (let i=1; i<n; i++){
//   line = '';
//   for (let j=1; j<=i; j++){
//     line += ' ';
//   }
//   for (let j=1; j<=k; j++){
//     line += '*';
//   }
//     k=k-2;
//   console.log(line);
// }

// let n=parseInt(prompt("Enter the value of n: "));
// let k=1;
// for (i=1; i<=n; i++){
//   line = '';
//     for (let j=1; j<=i; j++){
//        line += k + ' ';
//       k++;
//     }
//     console.log(line);
// }

// let n=parseInt(prompt("Enter the value of n: "));
// for (let i=1; i<=n; i++){
//      line = '';
//      for (let j=1; j<=i; j++){
//         line += j + ' ';
//      }
//      for (let j=1; j<i; j++){
//         line += i-j + ' ';  
//      }
//      console.log(line);
// }

// let n=parseInt(prompt("Enter the value of n: "));
// console.log("0");
// let a=2;
// for (let i=2; i<=n; i++){
//      line = '';
//      for (let j=1; j<i; j++){
//       if (j==1){
//       line += a + ' ';
//       b=a*2;
//     }
//     line += b + ' ';
//      b=a*2;
//   }
//    a=b;
//   console.log(line);
// }

// let n=parseInt(prompt("Enter the value of n: "));
// let k=n*n;
// for (let i=1; i<=n; i++){
//   line = '';
//     for (let j=1; j<=n; j++){
//       if (i%2==0){
//         line += k + ' ';
//         k++;
//       }
//       else {
//         line += k + ' ';
//         k--;
//       }
//     }
//     if (i%2==0){
//       k=k-(n+1);
//     }
//     else {
//       k=k-(n-1);
//     }
//     console.log(line);
// }

// let n=parseInt(prompt("Enter the value of n: "));
// for  (let i=1; i<=n; i++){
//       line = '';
//       for (let j=1; j<=n; j++){
//         if (i==1 && j==1){
//            k=(n*n)-1;
//           line += k + ' ';
//         }
//         else if (i%2==0){
//           line += k + ' ';
//           k++;
//         }
//         else {
//           line += k + ' ';
//           k--;
//         }
//       }
//         if (i%2==0){
//           k=k-(n+1);
//         }
//         else {
//           k=k-(n-1);
//         }
//     console.log(line);
// }

// let n=parseInt(prompt("Enter the value of n: "));
// for (let i=1; i<=n; i++){
//   let k=i;
//     let line = '';
//     for (let j=i; j<=n; j++){
//       line += k + ' ';
//       k+=i;
//     }
//     console.log(line);
// }

// let n=parseInt(prompt("Enter the value of n: "));
// let a=4;
// for (let i=1; i<n; i++){
//   let p=1;
//       line = '';
//    for (let j=i; j<n; j++){
//         p=p*a;
//    }
//    for (let j=1; j<=n; j++){
//     if (i%2==0){
//        line += p + ' ';
//        p--;
//    }
//    else {
//     line += p + ' ';
//     p++;
//     }
//   }
//    console.log(line);
// }

// let n=parseInt(prompt("Enter the value of n: "));
// let arr=[];
// for (let i=0; i<n; i++){
//   let num=parseInt(prompt("Enter the num $(i+1): "));
//   arr[i]=num;
// }
// let j=0;
// for (let i=n-1; i>=n/2; i--){
//     let Temp=arr[i];
//     arr[i]=arr[j];
//     arr[j]=Temp;
//     j++;
// }
// for (let i=0; i<n; i++){
//       console.log(arr[i]);
// }


// let x=parseInt(prompt("Enter the value of x: "));
// let y=parseInt(prompt("Enter the value of y: "));
// let h=parseInt(prompt("Enter the hours: "));
//  c=1*x;
//  d=h-1*y;
//  t=c+d;
//  console.log(t);


//const prompt = require("prompt-sync")();
let n=parseInt(prompt("Enter the value of n: "));
let c=0;
for (let i=1; i<=n; i++){
    if (n%i==0){
       c++;
    }
    else if (c==2){
        console.log("Yes");
        break;
    }
    else {
        console.log("No");
        break;
    }
}


























                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                





























