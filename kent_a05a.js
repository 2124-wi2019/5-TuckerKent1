/*
Tucker Kent
kent_a05a.js
19WI_INFO_2124_WW Online JavaScript I
Thoendel
16 January 2020
*/

let toDoList = []; // declared and initialized empty array - toDoList

toDoList.push("Dishes"); //element added to array at position 0
toDoList.push("Laundry"); //element added to array at position 1
toDoList.push("Change Diapers"); //element added to array at position 2
toDoList.push("Homework"); //element added to array at position 3

console.log(toDoList); //displaying array

toDoList.unshift("Get Groceries"); //using unshift method to add element at 0 position of array

console.log(toDoList); //displaying array

toDoList.reverse(); //reversing order of the array elements
toDoList.sort(); //sorting array elements in alphabetical order

console.log(toDoList); //displaying array in its new order

let toDoString = toDoList.join(", "); //joining toDoList elements into a String so it can be checked for letter "x"

console.log(toDoString.includes("x")); //checking toDoString for letter "x" and logging result to console

let groceryList = new Array(); // declaring groceryList and initializing groceryList as an empty array 

groceryList.push("Milk"); //using push method to add element to the array groceryList
groceryList.push("Eggs"); //using push method to add element to the array groceryList
groceryList.push("Cheese"); //using push method to add element to the array groceryList
groceryList.push("Jalapenos"); //using push method to add element to the array groceryList
groceryList.push("Cilantro"); //using push method to add element to the array groceryList
groceryList.push("Hamburger"); //using push method to add element to the array groceryList

console.log(groceryList); //logging array groceryList to console

groceryList.shift(); //removing first array element with shift method

console.log(groceryList); //logging array groceryList to console

groceryList.splice(3, 0, "Ice Cream", "Frozen Pizza"); //adding two elements to positions 3 and 4 of array groceryList

console.log(groceryList); //logging updated groceryList array to console

