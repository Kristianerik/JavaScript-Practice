// Arrays ---------------------------------------------------------------
let numbers = [1, 2, 3, 4, 5];

//console.log(numbers[0]);
//console.log(numbers.length);

// Array Methods
let fruits = ["Apple", "Banana", "Cherry"];

/*
fruits.forEach(function (fruit) {
    console.log(fruit)
});
*/

let numbersDoubled = numbers.map(num => num * 2);
//console.log(numbersDoubled);

let evenNumbers = numbers.filter(num => num % 2 === 0);
//console.log(evenNumbers);

let total = numbers.reduce((acc, num) => acc + num, 0);
//console.log(total)

// Objects ---------------------------------------------------------------

let person = {
    name: "Alice",
    age: 25,
    greet: function() {
        console.log("Hello, my name is " + this.name + ", and I am " + this.age + " years old.");
    }
};
/*
person.city = "New York";
person.age = 24;
console.log(person);
console.log(person.name);
person.greet();
*/

// Local Storage ---------------------------------------------------------------
/*
localStorage.setItem("username", "Kristian");
let storedName = localStorage.getItem("username");
console.log(storedName);

//remove stored item
localStorage.removeItem("username");
*/