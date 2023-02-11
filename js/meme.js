const btnGetMeme = document.getElementById("btnGetMeme");
const memeTitle = document.getElementById("memeTitle");
const memeDesc = document.getElementById("memeDesc");
const memeImg = document.getElementById("memeImg");

// 랜덤하게 밈 데이터를 받아오는 함수
let recipeData;
const getRecipes = async () => {
  const data = await (
    await fetch(
      `http://openapi.foodsafetykorea.go.kr/api/eafaaf00c0a245adb5ea/COOKRCP01/json/1/1000`
    )
  ).json();
  recipeData = data.COOKRCP01.row;
  console.log("Data Loaded!");
};

const printRecipe = () => {
  const index = Math.floor(Math.random() * 1001);
  console.log(recipeData[index]);
};

window.onload = () => {
  getRecipes();
};
btnGetMeme.addEventListener("click", printRecipe);
