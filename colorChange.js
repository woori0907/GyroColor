// 변수 불러오기
const viewAngleX = document.getElementById("viewAngleX");
const viewAngleY = document.getElementById("viewAngleY");
let gyroscope = new Gyroscope({frequncy : 60});
let angleX = 0;
let angleY = 0;
let radianX = 0;
let radianY = 0;
let pi = Math.PI;

// get and print current x and y axis
const getGyroscope = () => {
    radianX = gyroscope.x * (180 / pi);
    radianY = gyroscope.y * (180 / pi);
    angleX = Math.floor(radianX * (180 / pi));
    angleY = Math.floor(radianY * (180 / pi));
    viewAngleX.innerText = `X-axis : ${angleX}`;
    viewAngleY.innerText = `Y-axis : ${angleY}`;
}

gyroscope.addEventListener('reading', getGyroscope);
gyroscope.start();