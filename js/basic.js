const btnStart = document.getElementById("btnStart");
const titlePage = document.getElementById("title-page");

const startTest = () => {
    titlePage.style.opacity = 0;
    setTimeout(() => {
        titlePage.classList.add("blind");
    }, 1000);
}

btnStart.addEventListener("click", startTest);