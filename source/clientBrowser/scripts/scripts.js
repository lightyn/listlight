//Declarations
let shoppingList = document.getElementById('shoppingList');
let recipeList = document.getElementById('recipeList');

//Toggle view pane to recipe list view
document.getElementById('mobileButtonRecipe').onclick = () => {
    recipeList.classList.remove("hiddenPane");
    shoppingList.classList.add("hiddenPane");
};

//Toggle view pane to shop list view
document.getElementById('mobileButtonShop').onclick = () => {
  shoppingList.classList.remove("hiddenPane");
  recipeList.classList.add("hiddenPane");
};
