const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulIngredients = document.querySelector("#ingredients");

const liIngredients = ingredients.map(ingredient => {
  const liIngredient = document.createElement('li');
  liIngredient.textContent = ingredient;

  return liIngredient;
});

ulIngredients.append(...liIngredients);