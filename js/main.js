class TabChanger {
  constructor({
    tabsClassName,
    tabsContent,
    tabContentClassName,
    tabContentBottomBorderClassName,
    activeClassname
  }) {
    this.tabsClassName = tabsClassName;
    this.tabs = document.querySelectorAll(tabsClassName);
    this.tabsContent = document.querySelectorAll(tabsContent);
    this.tabContentClassName = tabContentClassName;
    this.tabContentBottomBorderClassName = tabContentBottomBorderClassName;
    this.activeClassname = activeClassname;
    this.tabs.forEach(tab => {
      tab.addEventListener("click", ev => this.toogleTabs(ev));
    });
  }

  toogleTabs(tab) {
    let chosenTab = tab.currentTarget.id;
    this.hideTabs();
    this.showTab({ id: chosenTab });
  }

  showTab({ id }) {
    let tabNumber = id.match(/\d/)[0];
    let chosenTabContent = document.getElementById(
      `${this.tabContentClassName}${tabNumber}`
    );
    chosenTabContent.classList.add(`${this.activeClassname}`);
    document
      .querySelectorAll(`#${id} ${this.tabContentBottomBorderClassName}`)[0]
      .classList.add(`${this.activeClassname}`);
  }

  hideTabs() {

    this.tabs.forEach(tab => {
      tab.classList.remove(`${this.activeClassname}`);
    });

    this.tabsContent.forEach(tabContent => {
      tabContent.classList.remove(`${this.activeClassname}`);
    });

    document.querySelectorAll(`${this.tabsClassName} ${this.tabContentBottomBorderClassName}`).forEach(tab => {
      tab.classList.remove(`${this.activeClassname}`);
    });
  }
}

const tabs = new TabChanger({
  tabsClassName: ".tab-item",
  tabsContent: ".tab-content-item",
  tabContentClassName: "tab-content-",
  tabContentBottomBorderClassName: ".tab-footer",
  activeClassname: "active"
});
