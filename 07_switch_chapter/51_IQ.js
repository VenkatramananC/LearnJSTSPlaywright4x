const prompt = require('prompt-sync')();
let day = Number(prompt("Enter day: "));

switch(day){
  case 1:
    console.log("Ok");
  case 2:
    console.log("Done");
  case 3:
    console.log("valid");
  default:
    console.log("Execute");
}
