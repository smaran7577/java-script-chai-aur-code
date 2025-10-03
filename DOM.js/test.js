let btn = document.querySelector("button"); //accesing the buttuon ,h3,div from html to JS 
let h3 = document.querySelector("h3");
let div = document.querySelector(".color-box");
 //adding the functions to th button and div ,h3
btn.addEventListener("click", function () {
    let ran = getRandomColour();
    h3.innerText = ran;
    div.style.backgroundColor = ran;
});
//creating the function 
function getRandomColour() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}