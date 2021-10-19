// 변수 불러오기
const viewAngleX = document.getElementById("viewAngleX");
const viewAngleY = document.getElementById("viewAngleY");
let gradientMask1 = document.getElementById("gradientMask_1");
let gradientMask2 = document.getElementById("gradientMask_2");

const randomColor = () =>{
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
}

const initColor = () => {
    firstColor = randomColor();
    secondColor = randomColor();
    if(firstColor===secondColor){
        secondColor = randomColor();
    }
    gradientMask2.style.backgroundImage = `linear-gradient(45deg, ${firstColor} 0%, ${secondColor} 100%)`;
    gradientMask2.style.opacity = 1;
    gradientMask1.style.opacity = 0;
}

// get and print current x and y axis
const changeColor = () => {
    firstColor = randomColor();
    secondColor = randomColor();
    if(firstColor===secondColor){
        secondColor = randomColor();
    }
    console.log(gradientMask1.style.opacity==0);
    if(gradientMask1.style.opacity == 0){
        gradientMask1.style.backgroundImage = `linear-gradient(45deg, ${firstColor} 0%, ${secondColor} 100%)`;
        gradientMask1.style.opacity = 1;
        gradientMask2.style.opacity = 0;
    }
    else{
        gradientMask2.style.backgroundImage = `linear-gradient(45deg, ${firstColor} 0%, ${secondColor} 100%)`;
        gradientMask2.style.opacity = 1;
        gradientMask1.style.opacity = 0;
    }
}

initColor();
setInterval(changeColor, 3000);