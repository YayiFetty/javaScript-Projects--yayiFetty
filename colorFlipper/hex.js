//select the span and the btn
const spanColor = document.querySelector(".color")
const btnH = document.querySelector(".btn-h");


// //for hex first method =====================================

// let hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0,"A", "B", "C", "D", "E", "F"];

// btnH.addEventListener("click", () => {
//     let hexColor = "#"
//     for(let i=0; i < 6; i++){
//          hexColor += hex[rand()]
//         document.body.style.backgroundColor = hexColor;
//         spanColor.textContent = hexColor
        
//     }
// })

// function rand(){
//     return Math.floor(Math.random() * hex.length)
// }

// OR  second method ===============================



let x = () => Math.random().toString(16).substr(-6)

//.toString returns hexadecimal of 15 numbers
//.substr(-6) return 6 numbers or .substr(1, 6)
//Math.random return random
// x will return 6 random hexadecimal

btnH.addEventListener("click", () => {
    let hexColor = `#${x()}`;

    document.body.style.backgroundColor = hexColor;
    spanColor.textContent = hexColor

})

//Or third method

let characters = "ABCDEF0123456789";