let name = "Ayodele";
console.log(name);

let age = "19";
console.log(age)

let year = 2026;
console.log(year - age)

function greet() {
    console.log("Hello!");
}
greet()
let button =
document.getElementById("messageButton");

button.addEventListener("click", function() {
    document.getElementById("message").textContent
= "I am learning Javascript!";
});