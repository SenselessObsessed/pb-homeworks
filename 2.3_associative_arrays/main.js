// Задание 1

let user = {
    name: "Лев Толстой",
    login: "leo_tolstoy",
    reputation: 97,
    total: 900,
  };
  
  console.log(
    user.name,
    "Репутация " + user.reputation,
    "Сообщений " + user.total,
  );
  
  // Задание 2
  
  let messages = [
    [
      "zloy-zloy",
      "Мы с Алешей сегодня на иксбоксе рубились, потом в маке поели, потом ему новый телефон купили, и два часа с горок в Нескучном саду катались.",
    ],
    ["zloy-zloy", "У Алеши завтра день рождения."],
    ["zloy-zloy", "Он мой дед. Ему будет 81 год."],
    ["Вы", "LOL"],
  ];
  
  let messagess = [];
  for (let i = 0, count = messages.length; i < count; i++) {
    messagess[i] = {
      author: messages[i][0],
      text: messages[i][1],
    };
  }
  
  for (let i = 0, count = messagess.length; i < count; i++) {
    console.log(messagess[i].author + ": " + messagess[i].text);
  }
  
  user.chats = {};
  user.chats.mama = [
    { author: "mama", text: "Ты покушал?" },
    { author: "mama", text: "Почему не отвечаешь?" },
    { author: "Вы", text: "Покушал, мам" },
  ];
  
  user.chats.wife = [
    { author: "вы", text: "Устал и загрустил" },
    { author: "вы", text: "Ленюсь" },
    { author: "wife", text: "zzz" },
  ];
  
  for (let i = 0, count = user.chats.wife.length; i < count; i++) {
    console.log(user.chats.wife[i].author + ": " + user.chats.wife[i].text);
  }
  