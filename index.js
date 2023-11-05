const PI = 3.142;
let radius;
let circumference;

document.getElementById(`ga`).onclick = function() {
    radius = document.getElementById(`radius`).value;
    circumference = 2 * PI * radius;
    document.getElementById(`answer`).textContent = `Your Circumference is: ${circumference}`;
}