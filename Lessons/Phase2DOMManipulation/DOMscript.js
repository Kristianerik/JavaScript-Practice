//DOM (Document Object Model) Manipulation

//Selecting Elements

/*
let title = document.getElementById("main-title");
console.log(title.innerText)

let button = document.querySelector(".btn");
console.log("Button Element:", button);

let listItems = document.querySelectorAll("li");
console.log("List Items:", listItems);
*/

//Modifying Text and Attributes
//let heading = document.getElementById("heading");
//heading.innerText = "New Heading Text";

//Event Listeners
/*
let button = document.getElementById('clickMeBtn');
button.addEventListener('click', function() {
    alert("Button was clicked."); 
});

document.getElementById("textInput").addEventListener("keyup", function (e) {
    console.log("You pressed:", e.key);
});

let box = document.getElementById('hoverBox');
box.addEventListener("mouseover", function() {
    box.style.backgroundColor = "yellow";
});
*/

//Manipulating Styles and CLasses
let title = document.getElementById("main-title");
title.style.color = "blue";
title.style.fontSize = "24px";

/*
let box = document.getElementById("hoverBox");
box.classList.add("highlight");
box.classList.remove("hidden")
box.classList.toggle("active");
*/