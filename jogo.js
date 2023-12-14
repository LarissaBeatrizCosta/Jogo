const princess = document.querySelector("#princess");


const jump = () => {
    princess.classList.add("jump");

    setTimeout(() => {
        princess.classList.remove("jump");
    }, 500);

}

document.addEventListener("keydown", jump);