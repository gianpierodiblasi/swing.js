package javascript.swing;

import javascript.awt.BorderLayout;
import javascript.awt.CardLayout;
import javascript.awt.FlowLayout;
import javascript.swing.plaf.LookAndFeel;

/**
 * The javax.swing.JSTabbedPane clone
 *
 * @author gianpiero.diblasi
 */
@SuppressWarnings("serial")
public class JSTabbedPane extends JSPanel {
  
  private final JSPanel tabs = new JSPanel();
  private final JSPanel content = new JSPanel();
  private final CardLayout contentLayout = new CardLayout(0, 0);
  private final ButtonGroup tabsGroup = new ButtonGroup();

  /**
   * Creates the object
   */
  public JSTabbedPane() {
    super();
    this.setLayout(new BorderLayout(0, 0));
    
    this.tabs.setLayout(new FlowLayout(FlowLayout.LEFT, 0, 0));
    this.add(this.tabs, BorderLayout.NORTH);
    this.content.setLayout(this.contentLayout);
    this.add(this.content, BorderLayout.CENTER);
    
    LookAndFeel.CURRENT.styleJSTabbedPane(this);
  }
  
  public void addTab(String title, JSComponent component) {
    JSRadioButton button = new JSRadioButton();
    button.setText(title);
    button.setSelected(this.tabsGroup.getButtonCount() == 0);
    button.addActionListener((event) -> this.contentLayout.show(this.content, title));
    this.tabs.add(button, null);
    this.tabsGroup.add(button);
    
    this.content.add(component, title);
    
    LookAndFeel.CURRENT.styleJSTabbedPane(this);
  }
}
