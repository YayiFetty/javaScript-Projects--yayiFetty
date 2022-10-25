const count = document.querySelector(".count");

const bttn = document.querySelector(".btn");

bttn.addEventListener("click", () => {
    //console.log("btn")
   icount();
})

function icount(){
    for(let i = 3 ; i >= 0; i--){
        let result = i;
        count.textContent = result
       }
}