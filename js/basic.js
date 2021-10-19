const btnStart = document.getElementById("btnStart");
const titlePage = document.getElementById("title-page");
const mainPage = document.getElementById("main-page");

const startTest = () => {
    titlePage.style.opacity = 0;
    setTimeout(() => {
        titlePage.classList.add("blind");
        mainPage.classList.remove("blind");
    }, 500);
}

btnStart.addEventListener("click", startTest);