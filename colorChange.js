// 변수 불러오기
const viewAngleX = document.getElementById("viewAngleX");
const viewAngleY = document.getElementById("viewAngleY");
let gyroscope = new Gyroscope({frequncy : 60});
let angleX = 0;
let angleY = 0;
let pi = Math.PI;

// get and print current x and y axis
const getGyroscope = () => {
    angleX = (angleX + gyroscope.x * 60) * 180 / pi;
    angleY = (angleY + gyroscope.y * 60) * 180 / pi;
    viewAngleX.innerText = `X-axis : ${angleX}`;
    viewAngleY.innerText = `Y-axis : ${angleY}`;
}

gyroscope.addEventListener('reading', getGyroscope);
gyroscope.start();