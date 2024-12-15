var box = document.querySelector(".box");
var button = document.querySelector("button");

button.addEventListener("click", function () {
    // Check current background color and toggle
    if (box.style.backgroundColor === "red") {
        box.style.backgroundColor = "blueviolet";
        box.classList.remove("circle");
        box.classList.add("square");
    } else {
        box.style.backgroundColor = "red";
        box.classList.remove("square");
        box.classList.add("circle");
    }
});
