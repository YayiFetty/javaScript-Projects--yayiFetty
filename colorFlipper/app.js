//select the button and the span

const button = document.querySelector(".btn");

const spanColor = document.querySelector(".color")

//for simple rgb====================================================

//for the colors
function colors(){
    //colors -> 0 - 255
let red = Math.floor(Math.random() * 256);
let green = Math.floor(Math.random() * 256);
let blue = Math.floor(Math.random() * 256);

let rgb = `${red}, ${green}, ${blue}`
return rgb;

}

//select the btn
button.addEventListener("click", () => {
    const bgColor = `rgb(${colors()})`
    document.body.style.backgroundColor = bgColor;
    spanColor.textContent = colors()
})

// // second method ----you can do it this way also=======================================
// //generate the colors via array
// let colors =["red","green","blue", "yellow","white"]
// //listen for the events
// button.addEventListener("click", () => {
//     const bgColor = random()
//     document.body.style.backgroundColor = colors[bgColor];
//     spanColor.textContent = colors()
// })
// //to generate random color
// function random(){
//     return Math.floor(Math.random() * colors.length)
// }
