const prompt = require("prompt-sync")();
//1.
function navigateDirection(direction){
    const dir = direction.toUpperCase();
    switch (dir) {
        case 'N':
            console.log("You move North...");
            break;
        case 'S':
            console.log("You move South...");
            break;
        case 'E':
            console.log("You move East...");
            break;
        case 'W':
            console.log("You move West...");
            break;
        default:
            console.log("Invalid direction. Try again.");
            break;
    }
}
const userDirection = prompt("Enter a direction (N, S, E, W): ");
navigateDirection(userDirection);



//2.ooooooooooooo
// function HTMLTags(html) {
//     let result = "";
//     let ass = false;
//     for (let i = 0; i < html.length; i++) {
//         if (html[i] === '<') {
//             ass = true;
//         } else if (html[i] === '>') {
//             ass = false;
//         } else if (ass==false) {
//             result += html[i];
//         }
//     }
//     return result;
// }
// let userInput = prompt("Enter code");
// let plainText = HTMLTags(userInput); 
// console.log(plainText);




//or
// function HTMLTags(html) {
//     let result = "";
//     let c=0;
//     for (let i = 0; i < html.length; i++) {
//         if (html[i] === '<') {
//             c++;
//         } else if (html[i] === '>') {
//             c--;
//         } else if (c==0) {
//             result += html[i];
//         }
//     }
//     return result;
// }
// let userInput = prompt("Enter code");
// let plainText = HTMLTags(userInput);
// console.log(plainText);



//3.
// function calculateMVP(){
//     let players=[];
//     let numplayers=parseInt(prompt("Enter the number of players: "));
//     for (let i=0; i<numplayers; i++){
//         console.log(`Enter details for player ${i+1}: `);
//     let name = prompt("name: ");
//     let runs=parseFloat(prompt("run: "));
//     let wickets=parseFloat(prompt("wickets: "));
//     let catches=parseFloat(prompt("catches: "));
//     players.push({name, runs, wickets, catches });
//     }
// let mvpName="";
// let HS=-1;
// for (i=0; i<players.length; i++){
//     const player=players[i];
//     const TS=player.runs+25*player.wickets+10*player.catches;
//     if (TS>HS){
//         HS=TS;
//         mvpName=player.name;
//     }
// }
//    return mvpName;
// }
// let mvp=calculateMVP();
// console.log(mvp);



//5.
// function getFileType(filename) {
//     const fileTypes = {
//         'doc': 'Document', 'docx': 'Document', 'pdf': 'Document', 'txt': 'Document',
//         'jpg': 'Image', 'jpeg': 'Image', 'png': 'Image', 'gif': 'Image',
//         'mp3': 'Audio', 'wav': 'Audio', 'ogg': 'Audio', 'aac': 'Audio',
//         'mp4': 'Video', 'avi': 'Video', 'mkv': 'Video', 'wmv': 'Video'
//     };
//     const extension = filename.split('.').pop().toLowerCase();
//     return fileTypes[extension] || "Unknown File Type";
// }
// let userInput = prompt("Enter file type");
// let filename=getFileType(userInput);
// console.log(filename);



//or
// function getFileType(filename) {
//     const extension = filename.split('.').pop().toLowerCase();
//     if (['doc', 'docx', 'pdf', 'txt'].includes(extension)) {
//         return 'Document';
//     } else if (['jpg', 'jpeg', 'png', 'gif'].includes(extension)) {
//         return 'Image';
//     } else if (['mp3', 'wav', 'ogg', 'aac'].includes(extension)) {
//         return 'Audio';
//     } else if (['mp4', 'avi', 'mkv', 'wmv'].includes(extension)) {
//         return 'Video';
//     } else {
//         return 'Unknown File Type';
//     }
// }
// let userInput = prompt("Enter file type");
// let filename=getFileType(userInput);
// console.log(filename);



//6.
// function extraHashtags(caption) {
//     let seen = {};
//     let uniqueHashtags = [];
//     let hashtags = caption.match(/#[\w]+/g);
//   if (hashtags) {
//     for (let i=0; i<hashtags.length; i++) {
//         let tag = hashtags[i].slice(1).toLowerCase();
//         if (!seen[tag]) {
//             seen[tag] = true;
//             uniqueHashtags.push(tag);
//         }
//     }
//   }
//   return uniqueHashtags;
// }
// let userInput = prompt("Enter an Instragram caption: ");
// let hashtags = extraHashtags(userInput);
// console.log(hashtags);



// function maskUsername(username) {
//     let result = "";
//     for (i = 0; i < username.length; i++) {
//         if (username[i] === 'a') {
//             result += '@';
//         }
//         else if (username[i] === 's' || username[i] === 'S') {
//             result += '$';
//         }
//         else if (username[i] === 'i') {
//             result += '!';
//         }
//         else if (username[i] === 'o' || username[i] === 'O') {
//             result += '0';
//         }
//         else if (username[i] === 'E') {
//             result += '3';
//         }
//         else {
//             result += username[i]

//         }
//     }
//     return result;
// }
// let userinput = prompt("Enter the string: ");
// let username = maskUsername(userinput);
// console.log(username);



// function getOrderIdsForCity() {
//   const orders = [];
//   const numOrders = parseInt(prompt("Enter the number of Orders :"));

//   for (let i = 0; i < numOrders; i++) {
//     const orderId = parseInt(prompt("Enter Id number: "));
//     const city = prompt("Enter the City name: ");
//     const productName = prompt("Enter the product name: ");
//     orders.push({ orderId: orderId, city: city, productName: productName });
//   }

//   const targetCity = prompt("Enter the target city: ");
//   const filteredOrders = orders.filter(function (order) {
//     return order.city === targetCity;
//   });

//   const orderIds = filteredOrders.map(function (order) {
//     return order.orderId;
//   });


// function performAction(action) {
//   action= action.toLowerCase();
//   switch (action) {
//     case  'l':
//       console.log("You look around");
//       break;
//     case  't':
//       console.log("You look the item");
//       break;
//     case  'u':
//       console.log("You use the item");
//       break;
//     case  'i':
//       console.log("You check your inventory");
//       break;
//     default:
//       console.log("Invalid action");
//   }
// }
// let userinput = prompt("Enter the action: ");
// action = performAction(userinput);


// function interactWithObject(object) {
//   object = object.toLowerCase();
//   switch (object) {
//     case 'd':
//       console.log("You open the door");
//       break;
//     case 'w':
//       console.log("You look out the window");
//       break;
//     case 'c':
//       console.log("You open the chest");
//       break;
//     case 'k':
//       console.log("You use the kay");
//       break;
//     default:
//       console.log("Invalid object");
//   }
// }
// let userinput = prompt("Enter the object");
// interactWithObject(userinput);


// function checkSeason(month) {
//     switch (month) {
//         case 'December':
//         case 'January':
//         case 'February':
//             console.log("Winter");
//             break;
//         case 'March':
//         case 'April':
//         case 'May':
//             console.log("Spring");
//             break;
//         case 'June':
//         case 'July':
//         case 'August':
//             console.log("Summer");
//             break;
//         case 'September':
//         case 'October':
//         case 'November':
//             console.log("Autumn");
//             break;
//         default:
//             console.log("Invalid month");
//     }
// }
// let userinput = prompt("Enter the month");
// checkSeason(userinput);


// function animalSound(animal) {
//     switch (animal) {
//         case 'dog':
//             console.log("The dog barks");
//             break;
//         case 'cat':
//             console.log("The dog meows");
//             break;
//         case 'cow':
//             console.log("The cow moos");
//             break;
//         case 'sheep':
//             console.log("The sheep baas");
//             break;
//         default:
//             console.log("Unknown animal");
//     }
// }
// let userinput = prompt("Enter the animal");
// animalSound(userinput);


// function stripHTMLTags(html) {
//     let result = "";
//     let ass = false;
//     for (let i = 0; i < html.length; i++) {
//         if (html[i] === '<') {
//             ass = true;
//         }
//         else if (html[i] === '>') {
//             ass = false;
//         }
//         else if (ass === false) {
//             result += html[i];
//         }
//     }
//     return result;
// }
// let userinput = prompt("Enter the string");
// let plaintext = stripHTMLTags(userinput);
// console.log(plaintext);


















