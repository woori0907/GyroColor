const btnGetMeme = document.getElementById("btnGetMeme");
const memeTitle = document.getElementById("memeTitle");
const memeDesc = document.getElementById("memeDesc");


// 랜덤하게 밈 데이터를 받아오는 함수
const printMeme = () => {
    const randomNum = Math.floor(Math.random()*memes.length);
    memeTitle.innerText = memes[randomNum].text;
    memeDesc.innerText = memes[randomNum].description;
}

btnGetMeme.addEventListener("click", printMeme);