
// let foodItem = ["potato","Apple","Banana"];
// foodItem.push("chips", "Burger", "panner"); // push add to last value , existing array me change karta hai .
// console.log(foodItem);


// let foodItem2 = ["potato", "Apple", "Banana"];
// foodItem2.pop(); // Removes the last element ("Banana")
// console.log(foodItem2); // ["potato", "Apple"]
// console.log(foodItem2.toString()); 
// console.log(typeof foodItem2); 


// let value = [10,20,30,40,50];
// console.log(typeof value);
// let result = value.toString();
// console.log(result);
// console.log(typeof result);


// let heros = ["thor", "spiderman", "ironman"];
// let cricHero = ["virat", "sachin", "dhoni"];
// let result = heros.concat(cricHero);
// console.log(result);


// let heros = ["thor", "spiderman", "ironman"];
// heros.unshift("Gora");
// console.log(heros);


// let heros = ["thor", "spiderman", "ironman"];
// let val = heros.shift();
// console.log("delete",heros);


// slice : no orginal array change .

// let heros = ["Thor","Ironman", "Viral"];
// console.log(heros.slice(1,2));

// splice() : change orginal array . {start, delete, new Element(otpional)}

// let heros2 = ["Thor","Ironman", "Viral", "Shaktiman"];
// let result = heros2.splice(1,3);
// console.log(result);


// let numbers = [1, 2, 3, 4, 5];
// let removed = numbers.splice(2, 2);  // Removes 2 elements from index 2
// console.log(numbers);  // [1, 2, 5]
// console.log(removed);  // [3, 4]


// let colors = ["red", "green", "blue"];
// colors.splice(1, 0, "yellow", "purple");  // Inserts elements at index 1
// console.log(colors);  
// // Output: ["red", "yellow", "purple", "green", "blue"]


// let fruits = ["apple", "banana", "mango"];
// fruits.splice(1, 1, "orange");  // Replaces "banana" with "orange"
// console.log(fruits);  
// // Output: ["apple", "orange", "mango"]


// let letters = ["a", "b", "c", "d", "e"];
// letters.splice(2);  // Removes everything from index 2 onwards
// console.log(letters);  
// // Output: ["a", "b"]

