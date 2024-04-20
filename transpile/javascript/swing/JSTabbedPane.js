/**
 * The javax.swing.JSTabbedPane clone
 *
 * @author gianpiero.diblasi
 */
class JSTabbedPane extends JSPanel {

   tabs = new JSPanel();

   content = new JSPanel();

   contentLayout = new CardLayout(0, 0);

   tabsGroup = new ButtonGroup();

  constructor() {
    super();
    this.setLayout(new BorderLayout(0, 0));
    this.tabs.setLayout(new FlowLayout(FlowLayout.LEFT, 0, 0));
    this.add(this.tabs, BorderLayout.NORTH);
    this.content.setLayout(this.contentLayout);
    this.add(this.content, BorderLayout.CENTER);
  }

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
