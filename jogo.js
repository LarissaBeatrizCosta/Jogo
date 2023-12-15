const princess = document.querySelector("#princess");
const flower = document.querySelector("#flower");



const jump = () => {
    princess.classList.add("jump");

    setTimeout(() => {
        princess.classList.remove("jump");
    }, 500);

}

const loop= setInterval(()=>{

    const flowerPosition = flower.offsetLeft;
    const princessPosition = +window.getComputedStyle(princess).bottom.replace("px", "");

    if(flowerPosition <=80 && princessPosition <60){
        flower.style.animation = "none";
        flower.style.left = `${flowerPosition}px`;
        
        princess.style.animation = "none";
        princess.style.left = `${princessPosition}px`;

   
    
        clearInterval(loop);
    }
    
},10)




document.addEventListener("keydown", jump);