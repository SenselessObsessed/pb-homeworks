// 1 задание

let product = "Печенье «Юбилейное», 1 кг",
  inBasket = true,
  quantity = 5;

if (inBasket) {
  console.log(quantity + " x " + product);
}

// 2 задание

let accountStatus = "extended",
  username = "Vova",
  cashbackPercentage,
  accountStatusRu;

switch (accountStatus) {
  case "extended":
    cashbackPercentage = 15;
    accountStatusRu = "улучшенный";
    break;
  case "premium":
    cashbackPercentage = 20;
    accountStatusRu = "премиум"
    break;
  case "vip":
    cashbackPercentage = 30;
      accountStatusRu = "вип";
    break;
  default:
    cashbackPercentage = 10;
    accountStatusRu = "обычный"
}

console.log(username + " | " + accountStatusRu + " аккаунт");

// 3 задание

let user = 'Killer2001';
if ((user = 'admin')) {
  console.log("Привет, админ!\n Проверь нет ли жалоб от пользователей!");
} else {
  console.log('Здравствуйте ' + user + '! У нас новые поступления халвы!');
}

let newOrders = 4;
let errorOreders = 3;
console.log(errorOreders)
// показываем сколько новых заказов, а сколько заказов с ошибкой
if (newOrders > errorOreders) {
  console.log('В магазине ' + newOrders + ' новых заказов (с ошибкой: ' + errorOreders + ')');
}

if (newOrders === errorOreders) {
  console.log('ВНИМАНИЕ! Что-то идет не так! Все новые заказы завершились ошибкой!');
}