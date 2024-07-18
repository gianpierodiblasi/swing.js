package javascript.swing;

import def.js.Date;
import javascript.awt.GBC;
import javascript.awt.GridBagLayout;
import javascript.awt.event.ActionListener;
import static simulation.js.$Globals.$exists;
import static simulation.js.$Globals.parseInt;

/**
 * A dropdown menu
 *
 * @author gianpiero.diblasi
 */
public class JSDropDownMenu extends JSDropDown {
  
  private final JSLabel label = new JSLabel();
  private final JSPanel panel = new JSPanel();
  
  private int count;

  /**
   * Creates the object
   */
  public JSDropDownMenu() {
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
  public void setLabel(String text) {
    this.label.setText(text);
  }

  /**
   * Adds a button menu
   *
   * @param text The text button
   * @param listener The listener
   * @return The added button
   */
  public JSButton addMenu(String text, ActionListener listener) {
    JSButton button = new JSButton();
    button.setText(text);
    button.addActionListener(event -> {
      listener.$apply(event);
      this.removeAttribute("open");
    });
    this.panel.add(button, new GBC(0, this.count).i($exists(this.count) ? 1 : 0, 0, 0, 0).f(GBC.HORIZONTAL));
    this.count++;
    
    return button;
  }
}
