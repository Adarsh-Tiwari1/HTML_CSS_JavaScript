// Don't use var
// alert("O My God");
// console.log("O My God");
// name = "Ram";
// console.log(name);
// age = 20;
// console.log(age);
// x = null;
// console.log(x);
// y = undefined;
// console.log(y);
// isFollow = true;
// console.log(isFollow);
// age = 100;
// console.log(age);
// const PI = 3.14;
// console.log(PI);
// console.log(typeof(PI));
// let A;
// console.log(A);
// console.log(typeof(A)); 
// let B = null;
// console.log(B);
// console.log(typeof(B));
// let C = BigInt("123");
// console.log(C);
// console.log(typeof(C));
// Object : Collection of values .

// {
//     let x = 10;
//     console.log(x);
// }

// {
//     let x = 10;
//     console.log(x);
// }
// constant variable me change nahi kar sakte hai, but constant  object ke keys ka under change kar sakte hai .
// const student = {
//     name : "Ram",
//     age : 10,
//     city : "Rewa",
//     isPass : true
// };
// student["age"] = student["age"] + 5;
// console.log(student);
// console.log(student["age"]);
// console.log(student.name);

// let F = 10;
// let G = 50;
// console.log("F + G ", F + G);

// let Z = 2 ** 4; // power
// console.log(Z); 

// let T = 10;
// T += 10;
// console.log(T);

// let U = 10;
// let V = 10;
// console.log(U == V);
// console.log(U != V);
// console.log(U === V);


// let H = 10;
// let I = "10"; // internally String convert to number then check
// console.log(H == I);
// console.log(H != I);
// console.log(H === I); // Equal to & type 

// let mode = "dark";
// let color;
// if(mode === "dark"){
//     color = "black";
// }
// if(mode === "white"){
//     color = "whilte";
// }
// console.log(color);

// prompt("O My God");
// let pro = prompt("Enter Your Name");
// console.log(pro);

// let prom = prompt("Enter number");
// if(prom % 5 === 0){
//     console.log("divide", prom);
// }else{
//     console.log("Not divide");
// }

// let str = "Good";
// let size = 0;
// for(let i of str){ // for of loop // iterator || always use string and array but not use object
//     console.log(i);
//     size++;
// }
// console.log(size);

// let college = {
//     name : "Ram",
//     age : 21,
//     rollNo : 54,
//     cgpa : 8.5,
// };
// for(let key in college){ // for in loop : using object mostely
//     console.log("key = ", key, "value = ", student[key]);
// }

let gameNum = 5;
let userGu = prompt("Enter Game Number");
while(userGu != gameNum){
    userGu = prompt("You Enter Wrong Number, Guess Again");
}
console.log("Congrulation, you enter write number");