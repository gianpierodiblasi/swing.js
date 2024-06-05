/**
 * The javax.swing.JTabbedPane clone
 *
 * @author gianpiero.diblasi
 */
class JSTabbedPane extends JSPanel {

  static  TOP = 1;

  static  LEFT = 2;

  static  BOTTOM = 3;

  static  RIGHT = 4;

  static  START = 0;

  static  CENTER = 1;

  static  END = 2;

   tabs = null;

   tabsN = new JSComponent(document.createElement("nav"));

   tabsS = new JSComponent(document.createElement("nav"));

   tabsE = new JSComponent(document.createElement("nav"));

   tabsW = new JSComponent(document.createElement("nav"));

   content = new JSPanel();

   contentLayout = new CardLayout(0, 0);

   tabsGroup = new ButtonGroup();

   tabPlacement = JSTabbedPane.TOP;

   listeners = new Array();

  /**
   * Creates the object
   */
  constructor() {
    super();
    this.cssAddClass("jstabbedpane");
    this.setLayout(new BorderLayout(0, 0));
    this.createTab(this.tabsN);
    this.add(this.tabsN, BorderLayout.NORTH);
    this.createTab(this.tabsS);
    this.add(this.tabsS, BorderLayout.SOUTH);
    this.createTab(this.tabsE);
    this.add(this.tabsE, BorderLayout.EAST);
    this.createTab(this.tabsW);
    this.add(this.tabsW, BorderLayout.WEST);
    this.tabs = this.tabsN;
    this.content.setLayout(this.contentLayout);
    this.add(this.content, BorderLayout.CENTER);
  }

   createTab(tab) {
    let ul = document.createElement("ul");
    ul.appendChild(this.createLI());
    ul.appendChild(this.createLI());
    tab.appendNodeChild(ul);
  }

   createLI() {
    let li = document.createElement("li");
    li.style.flexGrow = "1";
    li.style.display = "none";
    return li;
  }

  /**
   * Clone of javax.swing.JTabbedPane.setTabPlacement
   *
   * @param tabPlacement The tab placement
   */
   setTabPlacement(tabPlacement) {
    this.tabPlacement = tabPlacement;
    switch(this.tabPlacement) {
      case JSTabbedPane.TOP:
        this.tabs = this.tabsN;
        break;
      case JSTabbedPane.BOTTOM:
        this.tabs = this.tabsS;
        break;
      case JSTabbedPane.LEFT:
        this.tabs = this.tabsW;
        break;
      case JSTabbedPane.RIGHT:
        this.tabs = this.tabsE;
        break;
    }
  }

  /**
   * Clone of javax.swing.JTabbedPane.getTabPlacement
   *
   * @return The tab placement
   */
   getTabPlacement() {
    return this.tabPlacement;
  }

  /**
   * Sets the tab alignment
   *
   * @param align The alignment (START, CENTER, END)
   */
   setAlign(align) {
    this.tabs.getChilStyleByQuery("nav ul li:first-child").display = "none";
    this.tabs.getChilStyleByQuery("nav ul li:last-child").display = "none";
    switch(align) {
      case JSTabbedPane.START:
        break;
      case JSTabbedPane.CENTER:
        this.tabs.getChilStyleByQuery("nav ul li:first-child").removeProperty("display");
        this.tabs.getChilStyleByQuery("nav ul li:last-child").removeProperty("display");
        break;
      case JSTabbedPane.END:
        this.tabs.getChilStyleByQuery("nav ul li:first-child").removeProperty("display");
        break;
    }
  }

  /**
   * Clone of javax.swing.JTabbedPane.addTab
   *
   * @param title The tab title
   * @param component The added component
   */
   addTab(title, component) {
    let button = new JSRadioButton();
    button.setText(title);
    button.setSelected(this.tabsGroup.getButtonCount() === 0);
    button.addActionListener(event => {
      this.contentLayout.show(this.content, title);
      this.onchange();
    });
    this.tabs.insertNodeBeforeInTree("nav ul", document.createElement("li"), "nav ul li:last-child");
    this.tabs.appendChildInTree("nav ul li:nth-last-child(2)", button);
    this.tabsGroup.add(button);
    this.content.add(component, title);
  }

  /**
   * Clone of javax.swing.JTabbedPane.addChangeListener
   *
   * @param listener The listener
   */
   addChangeListener(listener) {
    this.listeners.push(listener);
  }

   onchange() {
    let event = new ChangeEvent();
    this.listeners.forEach(listener => {
      if (typeof listener === "function") {
        listener(event);
      } else {
        listener.stateChanged(event);
      }
    });
  }
}
