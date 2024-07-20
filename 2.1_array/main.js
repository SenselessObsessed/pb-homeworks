// Задание 1

let arr = [
    "Привет! Есть ли новости?",
    ":)",
    "Начал работать над заданием.",
    "Ленюсь.",
    "Но дело движется.",
  ];
  console.log(arr);
  
  // Задание 2
  
  arr.push("Готово!")
  arr.splice(3, 1, "Стараюсь")
  arr.splice(1, 1);
  console.log(arr)
  
  // Задание 3
  
  let message = 'Готово!';
  if (arr.indexOf(message) !== -1) {
    arr.splice(arr.indexOf(message), 1)
  }
  
  console.log(arr)