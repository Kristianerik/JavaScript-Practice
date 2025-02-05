/*
    Project: Interactive Quiz
    Project Overview
    Create a simple quiz that asks the user a question and checks their answer.
*/

alert("Welcome to the color quiz please answer these following questions.")

let question = "What color is the Sky?"
let answer = prompt(question)
let score = 0;

if (answer.toLocaleLowerCase() === "blue"){
    alert("That is the correct answer.")
    score ++;
} else {
    alert("That is the incorrect answer.")
}

question = "What color is Snow?"
answer = prompt(question)

if (answer.toLocaleLowerCase() === "white"){
    alert("That is the correct answer.")
    score ++;
} else {
    alert("That is the incorrect answer.")
}

question = "What color is Grass?"
answer = prompt(question)

if (answer.toLocaleLowerCase() === "green"){
    alert("That is the correct answer.")
    score ++;
} else {
    alert("That is the incorrect answer.")
}

alert("Thank you for taking this quiz. Your score was " + score + "/3.")
