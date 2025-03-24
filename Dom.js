// Dom : When a web page is loaded, the browser creates a document object model of the page .

// alert("O My God");

let heading = document.getElementById("heading_2");
console.log(heading);

let pa = document.getElementsByClassName("para");
console.log(pa);

let parahs = document.getElementsByTagName("p");
console.log(parahs);

let element = document.querySelector("p");
console.log(element); // return first element

let element2 = document.querySelectorAll("p");
console.log(element2); // return a NodeList


let element3 = document.querySelector(".myClass");
console.log(element); 
let element4 = document.querySelectorAll(".myClass");
console.log(element2); 

let element5 = document.querySelector("#MyId");
console.log(element); 
let element6 = document.querySelectorAll("#MyId");
console.log(element2);


    