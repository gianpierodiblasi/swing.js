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

   tabsN = new JSPanel();

   tabsS = new JSPanel();

   tabsE = new JSPanel();

   tabsW = new JSPanel();

   content = new JSPanel();

   contentLayout = new CardLayout(0, 0);

   tabsGroup = new ButtonGroup();

   tabPlacement = JSTabbedPane.TOP;

  constructor() {
    super();
    this.cssAddClass("jtabbedpane");
    this.setLayout(new BorderLayout(0, 0));
    this.tabsN.setLayout(new FlowLayout(FlowLayout.LEFT, 0, 0));
    this.add(this.tabsN, BorderLayout.NORTH);
    this.tabsS.setLayout(new FlowLayout(FlowLayout.LEFT, 0, 0));
    this.add(this.tabsS, BorderLayout.SOUTH);
    this.tabsE.setLayout(new BoxLayout(this.tabsE, BoxLayout.Y_AXIS));
    this.add(this.tabsE, BorderLayout.EAST);
    this.tabsW.setLayout(new BoxLayout(this.tabsW, BoxLayout.Y_AXIS));
    this.add(this.tabsW, BorderLayout.WEST);
    this.tabs = this.tabsN;
    this.content.setLayout(this.contentLayout);
    this.add(this.content, BorderLayout.CENTER);
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
    this.tabs.add(button, null);
    this.tabsGroup.add(button);
    this.content.add(component, title);
    LookAndFeel.CURRENT.styleJSTabbedPane(this, button, component);
  }
}
