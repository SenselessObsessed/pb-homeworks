// 1 задание

let username, bonusBalance;
username = "LeoTolstoy";
bonusBalance = 131;
console.log("Пользователь " + username);
console.log("Баланс " + bonusBalance);

// 2 задание

let bonusBalanceAfterBuy, bonusBalanceAfterDay;
bonusBalanceAfterBuy = 50;
bonusBalanceAfterDay = 3;

console.log(
  bonusBalance + bonusBalanceAfterBuy * 5 - bonusBalanceAfterDay * 10,
);

// 3 задание

let pastilaPrice = 80,
  remainingPoints = bonusBalance % pastilaPrice,
  lastBonusBalance = bonusBalance - remainingPoints;

console.log((bonusBalance - remainingPoints) / pastilaPrice)