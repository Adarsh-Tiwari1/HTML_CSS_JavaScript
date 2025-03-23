// Array : Collection of items .

// let marks = [100, 200, 300];
// console.log(marks);
// console.log(marks.length); // property
 
// let heros = ["thor", "spiderman", "shaktiman"];
// console.log(heros);
// console.log(typeof heros);
// console.log(heros[2]);
// heros[1] = "God"; // Array are mutable .
// console.log(heros[1]);
// console.log(heros);


// let mark = [100, 200, 300, 200, 300, 200, 30];
// for(let i=0;i<mark.length;i++){
//     console.log(mark[i])
// }
// let sum = 0;
// for(let value of mark){
//     sum += value;
// }
// let avg = sum / mark.length;
// console.log(`avg marks of the class = ${avg}`);



// let item = [10,20,30,40,50];
// let i = 0;
// for(let val of item){
//     console.log(`value at index ${i} = ${val}`);
//     let offer = val / 10;
//     item[i] = item[i] - offer;
//     console.log(`value ofter offer = ${item[i]}`);
//     i++;
// }



// let item = [10,20,30,40,50];
// let i = 0;
// for(let val of item){
//     let offer = val / 10;
//     item[i] = item[i] - offer;
//     console.log(`value ofter offer = ${item[i]}`);
//     i++;
// }


let item = [10, 20, 30, 40, 50];
for (let i = 0; i < item.length; i++) {
    console.log(`Value at index ${i} = ${item[i]}`);
    let offer = item[i] / 10;
    item[i] -= offer; // Subtract discount directly
    console.log(`Value after offer = ${item[i]}`);
}

