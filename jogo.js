const princess = document.querySelector("#princess");
const flower = document.querySelector("#flower");



const jump = () => {
    princess.classList.add("jump");

    setTimeout(() => {
        princess.classList.remove("jump");
    }, 500);

}

const loop = setInterval(() => {

    const flowerPosition = flower.offsetLeft;
    const princessPosition = +window.getComputedStyle(princess).bottom.replace("px", "");
    const overMessage = document.querySelector('.gameOver')

    if (flowerPosition <= 80 && princessPosition < 50) {
        flower.style.animation = "none";
        flower.style.left = `${flowerPosition}px`;

        overMessage.innerHTML = "Game Over";
        overMessage.classList.add("gameOver");
        
        const returnButton = document.createElement("button");
        returnButton.innerHTML = "Return";
        returnButton.classList.add("return");

        princess.style.animation = "none";
        princess.style.left = `${princessPosition}px`;


        clearInterval(loop);
    }

}, 10)




document.addEventListener("keydown", jump);