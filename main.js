// antra uzduotis

const allIngredientsND = document.querySelectorAll('li');

const darzoves = [];

for (let i = 0; i < allIngredientsND.length; i++) {
  const item = allIngredientsND[i];
  const itemName = item.innerText;
  const nameInUpperCase = itemName.toUpperCase();
  
  darzoves.push(nameInUpperCase);
  console.log(itemName, nameInUpperCase);
}
console.log(darzoves);