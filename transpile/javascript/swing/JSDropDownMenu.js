/**
 * A dropdown menu
 *
 * @author gianpiero.diblasi
 */
class JSDropDownMenu extends JSDropDown {

   label = new JSLabel();

   panel = new JSPanel();

   count = 0;

  /**
   * Creates the object
   */
  constructor() {
    super(".DropDownContentSelector" + new Date().getTime() + "_" + parseInt(1000 * Math.random()));
    this.appendChildInTree("summary", this.label);
    this.panel.cssAddClass(this.dropDownContentSelector.substring(1));
    this.panel.setLayout(new GridBagLayout());
    this.appendChild(this.panel);
  }

  /**
   * Sets the text label
   *
   * @param text The text label
   */
   setLabel(text) {
    this.label.setText(text);
  }

  /**
   * Adds a button menu
   *
   * @param text The text button
   * @param listener The listener
   * @return The added button
   */
   addMenu(text, listener) {
    let button = new JSButton();
    button.setText(text);
    button.addActionListener(event => {
      listener(event);
      this.removeAttribute("open");
    });
    this.panel.add(button, new GBC(0, this.count).i(this.count ? 1 : 0, 0, 0, 0).f(GBC.HORIZONTAL));
    this.count++;
    return button;
  }
}
