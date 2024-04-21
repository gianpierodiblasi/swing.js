package javascript.swing;

import static def.dom.Globals.document;
import def.dom.HTMLElement;
import javascript.awt.BorderLayout;
import javascript.awt.CardLayout;
import javascript.swing.plaf.LookAndFeel;

/**
 * The javax.swing.JTabbedPane clone
 *
 * @author gianpiero.diblasi
 */
@SuppressWarnings("serial")
public class JSTabbedPane extends JSPanel {

  public static final int TOP = 1;
  public static final int LEFT = 2;
  public static final int BOTTOM = 3;
  public static final int RIGHT = 4;

  public static final int START = 0;
  public static final int CENTER = 1;
  public static final int END = 2;

  private JSComponent tabs;
  private final JSComponent tabsN = new JSComponent();
  private final JSComponent tabsS = new JSComponent();
  private final JSComponent tabsE = new JSComponent();
  private final JSComponent tabsW = new JSComponent();
  private final JSPanel content = new JSPanel();
  private final CardLayout contentLayout = new CardLayout(0, 0);
  private final ButtonGroup tabsGroup = new ButtonGroup();

  private int tabPlacement = JSTabbedPane.TOP;

  public JSTabbedPane() {
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

  private void createTab(JSComponent tab) {
    tab.element = document.createElement("nav");
    tab.element.appendChild(document.createElement("ul"));
  }

  /**
   * Clone of javax.swing.JTabbedPane.setTabPlacement
   *
   * @param tabPlacement The tab placement
   */
  public void setTabPlacement(int tabPlacement) {
    this.tabPlacement = tabPlacement;
    switch (this.tabPlacement) {
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
  public int getTabPlacement() {
    return this.tabPlacement;
  }

  /**
   * Clone of javax.swing.JTabbedPane.addTab
   *
   * @param title The tab title
   * @param component The added component
   */
  public void addTab(String title, JSComponent component) {
    JSRadioButton button = new JSRadioButton();
    button.setText(title);
    button.setSelected(this.tabsGroup.getButtonCount() == 0);
    button.addActionListener((event) -> this.contentLayout.show(this.content, title));

    HTMLElement li = document.createElement("li");
    li.appendChild(button.element);
    this.tabs.element.querySelector("nav ul").appendChild(li);

    this.tabsGroup.add(button);

    this.content.add(component, title);

    LookAndFeel.CURRENT.styleJSTabbedPane(this, button, component);
  }
}
