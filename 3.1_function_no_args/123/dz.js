// 1 Задание

function about() {
    console.log("Forum Netology, 1.0.");
  }
  
  about();
  
  // 2 Задание
  
  let user = {
    name: "Иван Иванов",
    login: "killer504",
    reputation: 97,
    messages: [
      {
        from: "administrator",
        text: "Вы получили предупреждение за публикацию рекламы на форуме",
      },
      { from: "Петр", text: "Собираем встречу в субботу в 19:00. Придёшь?" },
      {
        from: "administrator",
        text: "Ваш рейтинг был повышен пользователем DonkeyKong",
      },
      {
        from: "administrator",
        text: "Ваш рейтинг был повышен пользователем Netologist",
      },
      { from: "Brian Kerninghan", text: "hello, world" },
    ],
  };
  
   function printMessages(obj) {
     console.log('Всего сообщений: ' + obj.messages.length);
     for(let i = 0, count = obj.messages.length; i < count; i++) {
       console.log(obj.messages[i].from + ' | ' + obj.messages[i].text)
     }
   }
  
  printMessages(user)