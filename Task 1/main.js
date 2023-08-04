// // 1) Swap the values of two variables using destructuring
let a= 10;
let b= 20;

[a, b] = [b, a]

console.log(a)
console.log(b)

///////////////////////////////////////////////////////////////////////////////////////////////////////

// // 2) Using rest parameter and spread operator return max value from any array 
// //note: array length is not fixed return min and max value and display each of 
// //them separately after function call


function displayMax(a,b,...arr) {
    return Math.max(a,b,...arr)
}
function displayMin(...arr) {
    return Math.min(...arr)
}
console.log(`Maximumum Value is: ${displayMax(60, 15, 40, 25, 30)}, Minimum Value is: ${displayMin(60, 15, 40, 25, 30)}`)

///////////////////////////////////////////////////////////////////////////////////////////////////////

// //3) Study new array api methods then create the following methods and apply 
// //it on this array var fruits = ["apple", "strawberry", "banana", "orange","mango"]


var fruits = ["apple", "strawberry", "banana", "orange","mango"]


//a. To test that every element in the given array is a string, you can use the every() method:

let isString = fruits.every((fruit) => typeof fruit == `string` )
console.log(isString);



// //b. To test that some of the array elements start with "a", you can use the some() method:

let startsWithA = fruits.some((fruit)=> fruit.startsWith("a"))
console.log(startsWithA);



// //c. To generate a new array filtered from the given array with only elements that start with "b" or "s", you can use the filter() method:

let filterFruits = fruits.filter((fruit)=>
fruit.startsWith("b") || fruit.startsWith("s")
)
console.log(filterFruits);



// //d. To generate a new array where each element of the new array contains a string declaring that you like the given fruit element, 
//you can use the map() method:

let likedFruits = fruits.map((fruit)=>`I Like ${fruit}`)
console.log(likedFruits);


// //e. To use forEach() to display all elements of the new array from the previous point, you can do the following:

likedFruits.forEach((fruit) => console.log(fruit));

