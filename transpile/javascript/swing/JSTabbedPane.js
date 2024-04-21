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

   tabsN = new JSComponent();

   tabsS = new JSComponent();

   tabsE = new JSComponent();

   tabsW = new JSComponent();

   content = new JSPanel();

   contentLayout = new CardLayout(0, 0);

   tabsGroup = new ButtonGroup();

   tabPlacement = JSTabbedPane.TOP;

  constructor() {
    super();
    this.cssAddClass("jtabbedpane");
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
    tab.element = document.createElement("nav");
    tab.element.appendChild(ul);
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
    let first = this.tabs.element.querySelector("nav ul li:first-child");
    let last = this.tabs.element.querySelector("nav ul li:last-child");
    first.style.display = "none";
    last.style.display = "none";
    switch(align) {
      case JSTabbedPane.START:
        break;
      case JSTabbedPane.CENTER:
        first.style.removeProperty("display");
        last.style.removeProperty("display");
        break;
      case JSTabbedPane.END:
        first.style.removeProperty("display");
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
    button.addActionListener((event) => this.contentLayout.show(this.content, title));
    let li = document.createElement("li");
    li.appendChild(button.element);
    this.tabs.element.querySelector("nav ul").insertBefore(li, this.tabs.element.querySelector("nav ul li:last-child"));
    this.tabsGroup.add(button);
    this.content.add(component, title);
    LookAndFeel.CURRENT.styleJSTabbedPane(this, button, component);
  }
}
