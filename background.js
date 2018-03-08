browser.menus.create(
  {
    id: "go-to-oxford-dictionary",
    title: "Search Oxford for '%s'",
    contexts: ["selection"]
  }
);

browser.menus.onClicked.addListener((info, tab) => {
  if (info.menuItemId == "go-to-oxford-dictionary") {
    browser.tabs.create({
      'url': `https://www.oxfordlearnersdictionaries.com/definition/english/${info.selectionText.toLowerCase()}`,
      'active': true,
      'index': tab.index + 1
    });
    browser.tabs.create({
      'url': `https://www.multitran.ru/c/m.exe?l1=1&l2=2&s=${info.selectionText.toLowerCase()}`,
      'active': true,
      'index': tab.index + 2
    });
  }
});