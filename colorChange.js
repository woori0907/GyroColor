// 변수 불러오기
const viewAngleX = document.getElementById("viewAngleX");
const viewAngleY = document.getElementById("viewAngleY");
let gyroscope = new Gyroscope({frequncy : 60});
let firstColor;
let secondColor;

const randomColor = () =>{
    const index = Math.floor(Math.random() * colors.length);
    console.log(index);
    console.log(colors[index]);
    return colors[index];
}

// get and print current x and y axis
const getGyroscope = () => {
    firstColor = randomColor();
    secondColor = randomColor();
    document.body.style.backgroundImgae = `linear-gradient(to top, ${firstColor}, 0%, ${secondColor}, 100%)`
    // background-image: linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%);
}


gyroscope.addEventListener('reading', getGyroscope);
gyroscope.start();