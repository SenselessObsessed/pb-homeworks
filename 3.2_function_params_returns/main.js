// 1 Задание

function repCounter(likes, dislikes, editMsg, totalMsg) {
    let reputation = 0;
    if (totalMsg === 0) {
      return reputation;
    } else if (dislikes > likes) {
      reputation = likes - dislikes;
    } else {
      reputation = ((likes - dislikes) * (totalMsg - editMsg)) / totalMsg;
    }
  
    return reputation;
  }
  
  console.log(repCounter(12, 10, 10, 50))
  
  // 2 Задание
  
  let thread = {
    title: "Поделитесь книжкой",
    author: "RuBrick",
    total: 23,
    messages: [
      {
        id: 13201,
        date: "2018-01-09",
        text: "Посоветуйте, пожалуйста, с одной стороны подробную, а с другой доступную для понимания книгу по javascript. Спасибо",
        author: {
          name: "RuBrick",
          login: "ru_brick",
          reputation: 3,
          role: "user",
        },
      },
      {
        id: 13208,
        date: "2018-01-12",
        text: "Неужели нет хорошей литературы?",
        author: {
          name: "RuBrick",
          login: "ru_brick",
          reputation: 3,
          role: "user",
        },
      },
      {
        id: 13209,
        date: "2018-01-12",
        text: "в общем, NodeJS это JS + некоторые доп. модули и объекты. Тебе нужна литература по самому JS и дока на официальном сайте.",
        author: {
          name: "Popov",
          login: "popov_ma",
          reputation: 2310,
          role: "user",
        },
      },
      {
        id: 13219,
        date: "2018-01-14",
        text: "В сети много сайтов с хорошими объяснениями + есть курсы.",
        author: {
          name: "Void",
          login: "void",
          reputation: 5005,
          role: "user",
        },
      },
      {
        id: 13220,
        date: "2018-01-14",
        text: "Есть большая книга «JavaScript.Подробное руководство», потом смотришь документацию.",
        author: {
          name: "noname",
          login: "noname",
          reputation: 100,
          role: "user",
        },
      },
      {
        id: 13250,
        date: "2018-01-19",
        text: "Или можно посмотреть видео-курсы на youtube! А самое главное - практика! И этот форум - лучшая тренировочная площадка!",
        author: {
          name: "noname",
          login: "noname",
          reputation: 110,
          role: "user",
        },
      },
      {
        id: 13259,
        date: "2018-01-20",
        text: "Понял, спасибо!",
        author: {
          name: "RuBrick",
          login: "ru_brick",
          reputation: 13,
          role: "user",
        },
      },
    ],
  };
  
  function printMessage(thread, count) {
    if (thread.messages.length === 0) {
      console.log("Ошибка формата! В теме нет сообщений");
      return;
    }
    if (count > thread.messages.length) {
      count = thread.messages.length;
    }
    for (
      let i = thread.messages.length - 1;
      i >= thread.messages.length - count;
      i--
    ) {
      console.log(
        thread.messages[i].author.name +
          " (репутация: " +
          thread.messages[i].author.reputation +
          "): " +
          thread.messages[i].text,
      );
    }
  }
  
  printMessage(thread, 5);
  
  // 3 Задание
  
  let allMessages = [
    { author: "zloy-zloy", text: "А у кого какой мобильный??", edited: true },
    {
      author: "zloy-zloy",
      text: "Я с андроидом. Уже 3 года живет, он самым крепким оказался, пережил 2 утопления.",
      edited: false,
    },
    {
      author: "МамаЗузу",
      text: "Айфон в свое время успешно сдох при первом же падении на кафельную плитку.",
      edited: false,
    },
    {
      author: "void",
      text: "У меня андроид. Особенно нравится, что никаких заморочек с айтюнс.",
      edited: false,
    },
    { author: "mama", text: "Айфон.", edited: false },
    { author: "mama", text: "Почему не отвечаешь?", edited: false },
    {
      author: "void",
      text: "Дэвид Хэрман «Сила JavaScript. 68 способов эффективного использования JS».",
      edited: false,
    },
    {
      author: "void",
      text: "Marijn Haverbeke, Вячеслав Голованов «Выразительный javascript: Введение».",
      edited: false,
    },
    { author: "void", text: "Ленюсь.", edited: false },
    { author: "void", text: "Пока оценивать нечего.", edited: false },
    {
      author: "void",
      text: "Не по-русски как-то получается, хоть и на русском.",
      edited: false,
    },
    {
      author: "ivanov",
      text: "Чип и Дейл прикольно, играл в детстве.",
      edited: false,
    },
    { author: "ivanov", text: "hello, world", edited: true },
    { author: "void", text: "Сейчас напишу книгу по JS.", edited: false },
    { author: "ivanov", text: "Спасибо.", edited: false },
    {
      author: "ivanov",
      text: "Смысл такого видео? Все непонятные функции приходится самому смотреть. Надо не так делать. Пишете код - объясняете сразу, что к чему, голосом, ну, или там, текстом хотя бы, хотя лучше голосом.",
      edited: true,
    },
    { author: "void", text: "Поделитесь видео-каналами по js.", edited: false },
    { author: "void", text: "Ничего не понравилось.", edited: false },
  ];
  
  function countEditMsg(allMessages) {
    let counter = 0;
    for (let i = 0; i < allMessages.length; i++)
      if (allMessages[i].edited) {
        counter++;
      }
  
    return counter;
  }
  
  console.log(countEditMsg(allMessages));
  