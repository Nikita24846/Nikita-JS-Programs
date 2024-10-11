// let str = "Nikita Rajput";
// console.log(str.slice(1, 4));

// let str = "   Nikita Rajput   ";
// console.log(str.trim());

// let str1 = "Nikita";
// let str2 = "Rajput";
// let res = str1.concat(str2);
// console.log(res);

// let str = "Shivraj"
// console.log(str.replace("raj", "a"));

// let str = "Rajpal"
// console.log(str.charAt(3));






//functions
function countVowels(str){
    let c = 0;
    for (const char of str){
        if(char === "a"  || char === "e" || char ==="o" || char === "i" || char === "u" ){    
            c++;
       }
    }
    console.log(c);
}
