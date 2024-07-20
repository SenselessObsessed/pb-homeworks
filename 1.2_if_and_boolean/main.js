// 1 задание

let username, balance;
username = 'admin';
balance = 5002;
if(username === 'admin') {
  console.log('Администратор');
} else if (!username) {
  console.log('Гость')
} else if (balance > 1000) {
  console.log('Постоянный покупатель')
}  else if (balance > 5000) {
  console.log('ВИП-клиент');
}

// 2 задание 

let user, orderOwner;
user = 'netologist';
orderOwner = 'leo_tolstoy';
if(orderOwner === user || user === 'admin') {
  console.log('Редактирование разрешено');
} else {
  console.log('Заказ нельзя редактировать')
}

// 3 задание

let bonusBalance, orderPrice, ordersCount, bonusStandart, bonusHigh, bonusAdd, bonusTotal;

bonusBalance = 400;
orderPrice = 5001;
ordersCount = 1;
bonusStandart = 10;
bonusHigh = 20;
bonusAdd = 5;

if (bonusBalance > 5000 && ordersCount > 1) {
  bonusTotal = 25;
} else if (bonusBalance > 5000) {
  bonusTotal = 20;
} else if (ordersCount > 1) {
  bonusTotal = 15;
} else {
  bonusTotal = 10;
}

console.log(bonusTotal)