// Задание 1

let messages = [
    "Я принесла тебе утренний чай. Обычно ты еще спишь.",
    "Вы приносите мне чай по утрам?",
    "А ты как думаешь, откуда он берётся?",
    "Не знаю. Я думал, это само собой разумеющееся.",
  ];
  for (let i = 0, count = messages.length; i < count; i++) {
    if (i % 2 === 0) {
      console.log("Мисс Марпл: " + messages[i]);
    } else {
      console.log("Вы: " + messages[i]);
    }
  }
  
  // Задание 2
  
  let word = "чай";
  
  for (i = 0, count = messages.length; i < count; i++) {
    if (messages[i].includes(word)) {
      console.log(messages[i]);
    }
  }
  
  // Задание 3
  
  let messagess = [
    [
      "zloy-zloy",
      "Мы с Алешей сегодня на иксбоксе рубились, потом в маке поели, потом ему новый телефон купили, и два часа с горок в Нескучном саду катались.",
    ],
    ["zloy-zloy", "У Алеши завтра День рождения."],
    ["zloy-zloy", "Он мой дед. Ему будет 81 год."],
    ["Вы", "LOL."],
  ];
  
  for (i = 0, count = messagess.length; i < count; i++) {
    console.log(messagess[i][0] + ': ' + messagess[i][1])
  }