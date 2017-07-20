let shoppingList = document.getElementById('shoppingList');
let recipeList = document.getElementById('recipeList');

document.getElementById('mobileButtonRecipe').onclick = () => {
    recipeList.classList.remove("hiddenPane");
    shoppingList.classList.add("hiddenPane");
};

/*addEventListener("click", callSteve);

function callSteve() {

};*/

document.getElementById('mobileButtonShop').onclick = () => {
  shoppingList.classList.remove("hiddenPane");
  recipeList.classList.add("hiddenPane");
};
