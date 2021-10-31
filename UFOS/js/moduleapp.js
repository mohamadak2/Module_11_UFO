// // import the data from data.js
// const tableData = data;

// // Reference the HTML table using d3
// var tbody = d3.select("tbody");

// Simple JavaScript console.log statement
// function printHello() {
//     console.log("Hello there!");
//   }

// Takes two numbers and adds them
// function addition(a, b) {
//     return a + b;
//   }
// console.log(addition(4,5))
//   // Functions can call other functions
// function doubleAddition(c, d) {
//     var total = addition(c, d) * 2;
//     return total;
//   }
let a = 4
let b = 5
//   console.log(doubleAddition(4,5))


printHello = () => "Hello there!";
console.log(printHello())

addition = (a,b) => a+b;

console.log(addition(a,b))

let friends = ["Sarah", "Greg", "Cindy", "Jeff"];

console.log(friends)

function listLoop(userList) {
    for (var i = 0; i < userList.length; i++) {
      console.log(userList[i]);
    }
}


console.log(listLoop(friends))

let vegetables = ["Carrots", "Peas", "Lettuce", "Tomatoes"];

for (var i = 0 ; i < vegetables.length; i++){
    console.log("I love "+vegetables[i])

}