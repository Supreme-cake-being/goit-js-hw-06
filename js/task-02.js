const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulIngredients = document.querySelector("#ingredients");

for (const ingredient of ingredients) {
  const liIngredient = document.createElement("li");
  liIngredient.textContent = ingredient;

  ulIngredients.append(liIngredient);
}