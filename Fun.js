
// Function : Block of code that perform a specific task, can be invoked whenever needed .

// function myFunction(){
//     console.log("Welcome to my Group");
//     console.log("we arw learning js ");
// }
// myFunction();
// myFunction();


// function myFunction(msg, a){
//     console.log(msg, a);
// }
// myFunction("I love JS", 100);


// function sum(x,y){
//     sum = x + y;
//     console.log("before return");
//     return sum;
//     console.log("after return"); // return ke baad wala code kabhi execute nahi hota hai .
// }
// let val = sum(3,4);
// console.log(val);


// Arrow function .

// const sum = (x,y) => {
//     console.log(x + y);
// }


// const sum = (x,y) => {
//     return x + y;
// }
// let result = sum(3, 5);
// console.log(result);


// const printHello = () => {
//     console.log("Hello");
// };
// printHello();


// function countVowels(str) {
//     let count = 0;
//     for (const char of str.toLowerCase()) { 
//         if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//             count++;
//         }
//     }
//     return count;
// }
// console.log(countVowels("Hello World"));


// const countVow = (str) => {
//     let count = 0;
//     for (const char of str.toLowerCase()) { 
//         if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//             count++;
//         }
//     }
//     return count;
// }
// console.log(countVow("abcd")); 


// ***********************************************************************
// forEach Loop in Arrays .
// arr.forEach(callBackFunction)
// CallBackFunction : Here, it is a function to execute for each element in the array .

// * A callback is a function passed as an argument to anotger function .

// let arr = [1,2,3,4,5];
// arr.forEach(function printVal(val){
//     console.log(val);
// })


// let arr = [1,2,3,4,5];
// arr.forEach((val) => {
// console.log(val);
// });


// let arr = ["Pune", "delhi", "mumbai"];
// arr.forEach((val, idx, arr) => {
// console.log(val.toUpperCase(), idx, arr);
// });


// forEach loop ko higher order function/method bolte hai .

// let num = [1,2,3,4,5];
// num.forEach((num) => {
//     console.log(num * num);
// });



// Map : Creates a new array with thr results of some operation. The value its callback returns are used to from new array .

// let num = [1,2,3,4,5];
// num.map((val) =>{
//     console.log(val);
// })


// let num = [1,2,3,4,5];
// let newArr = num.map((val) =>{ // used and create new Array .
//     return val * val;
// })
// console.log(newArr);


// * Filter : Create a new array of elements that given true for a condition/filter .

// let num = [1,2,3,4,5];
// let even = num.filter((val) => {
//     return val % 2 === 0;
// });
// console.log(even); // this create dublicate array .
// console.log(num); // orginal array not changed .


// * Reduce : Performs some operations & reduces the array to as single value. it returns that single value .

