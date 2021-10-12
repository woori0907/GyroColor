// 변수 불러오기
const viewAngleX = document.getElementById("viewAngleX");
const viewAngleY = document.getElementById("viewAngleY");
let gyroscope = new Gyroscope({frequency : 1});
let firstColor;
let secondColor;

const randomColor = () =>{
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
}

// get and print current x and y axis
const getGyroscope = () => {
    firstColor = randomColor();
    secondColor = randomColor();
    console.log(firstColor);
    console.log(secondColor);
    document.body.style.backgroundImage = `linear-gradient(45deg, ${firstColor} 0%, ${secondColor} 100%)`;
    // background-image: linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%);
}


gyroscope.addEventListener('reading', getGyroscope);
gyroscope.start();