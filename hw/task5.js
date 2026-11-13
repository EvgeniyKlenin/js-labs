let users = [
  { name: "Євгеній", email: "evgenjklenin46@gmail.com", age: 17, city: "Кам'янське" },
  { name: "Олександр", email: "sasha@gmail.com", age: 18, city: "Київ" },
  { name: "Марія", email: "mariya@gmail.com", age: 19, city: "Львів" }
];
for (let { name, email, age, city } of users) {
  console.log(`Ім'я: ${name}, Email: ${email}, Вік: ${age}, Місто: ${city}`);
}