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

   tabs = new JSPanel();

   content = new JSPanel();

   contentLayout = new CardLayout(0, 0);

   tabsGroup = new ButtonGroup();

   tabPlacement = JSTabbedPane.TOP;

  constructor() {
    super();
    this.setLayout(new BorderLayout(0, 0));
    this.tabs.setLayout(new FlowLayout(FlowLayout.LEFT, 0, 0));
    this.add(this.tabs, BorderLayout.NORTH);
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
