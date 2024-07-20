window.addEventListener("DOMContentLoaded", page);

function title() {
  let title = document.createElement("h1");
  var titleContent = document.createTextNode("Настройки");
  title.appendChild(titleContent);
  document.body.appendChild(title);
}

function menu() {
  let items = [
    "Отправлять сообщения по Enter",
    "Показывать смайлы",
    "Уведомлять о новых сообщениях",
    "Всегда использовать безопасный канал"
  ];

  let menuEl = document.createElement("div");
  menuEl.className = "menu";
  document.body.appendChild(menuEl);

  for(let i=0; i < items.length; ++i) {
    let menuItem = document.createElement("div");
    let menuItemContent = document.createTextNode(items[i]);
    
    menuItem.className = "menu-item";
    menuItem.appendChild(menuItemContent);
    menuEl.appendChild(menuItem);
  }
}

function navigation() {
  let items = [
    "Форум",
    "Настройки",
    "Профиль",
  ];

  let navEl = document.createElement("nav");
  document.body.appendChild(navEl);

  for(let i=0; i < items.length; ++i) {
    let navItem = document.createElement("a");
    let navItemContent = document.createTextNode(items[i]);
    
    navItem.className = "nav-item";
    navItem.appendChild(navItemContent);
    navEl.appendChild(navItem);
  }

}

function version() {
  let version = '1.0';
  let versionEl = document.createElement('p');
  versionEl.id = 'version';
  let versionText = document.createTextNode(`Forum Netology, ${version}`);
  versionEl.appendChild(versionText);
  document.body.appendChild(versionEl);
}