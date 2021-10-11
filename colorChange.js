// 변수 불러오기
const viewAngleX = document.getElementById("viewAngleX");
const viewAngleY = document.getElementById("viewAngleY");
let gyroscope = new Gyroscope({frequncy : 60});

// get and print current x and y axis
const getGyroscope = () => {
    viewAngleX.innerText = `X-axis : ${gyroscope.x}`;
    viewAngleY.innerText = `Y-axis : ${gyroscope.y}`;
}

gyroscope.addEventListener('reading', getGyroscope);
gyroscope.start();