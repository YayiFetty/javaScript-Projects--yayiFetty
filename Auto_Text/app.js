const text = document.querySelector("#text");
const speed = document.querySelector("#speed");

const txt = "He's a waste man in a waste land";

let index = 1;
let spd = 400

function scrollText(){
    text.innerText = txt.slice(0, index);
    index++
    if(index > txt.length){
        index = 1
    }
    setTimeout(scrollText, spd )
}
scrollText()
speed.addEventListener("input", (e) => spd = 400 / e.target.value);