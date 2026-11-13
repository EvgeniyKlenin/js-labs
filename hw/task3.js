let car1 = {
  brand: "BMW",
  model: "X5",
  year: 2020
};
let car2 = {
  brand: "Audi",
  model: "A6",
  owner: 2024
};
let car3 = { ...car1, ...car2 };
console.log(car3);