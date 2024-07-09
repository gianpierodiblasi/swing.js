package javascript.swing;

import def.js.Array;
import def.js.Object;
import javascript.awt.Color;
import javascript.swing.colorchooser.JSAbstractColorExtraTabPanel;
import javascript.swing.colorchooser.JSColorPanel;
import javascript.swing.colorchooser.JSColorPreview;
import javascript.swing.event.ChangeEvent;
import javascript.swing.event.ChangeListener;
import simulation.js.$Apply_1_Void;
import static simulation.js.$Globals.$exists;
import static simulation.js.$Globals.$typeof;

/**
 * The javax.swing.JColorChooser clone
 *
 * @author gianpiero.diblasi
 */
public class JSColorChooser extends JSDropDown {

  private final JSColorPreview colorPreview = new JSColorPreview();
  private final JSColorPanel panel = new JSColorPanel();

  private boolean closeOnChange = true;
  private boolean changed;

  private final Array<ChangeListener> listeners = new Array<>();

  /**
   * Creates the object
   */
  @SuppressWarnings("StringEquality")
  public JSColorChooser() {
    super(".jscolorpanel");
    this.cssAddClass("jscolorchooser");

    this.addEventListener("toggle", event -> {
      if ("" + this.getProperty("open") == "true") {
        this.panel.reloadHistory();
      } else if (this.changed) {
        Color.pushHistory(this.panel.getSelectedColor());
      }
    });

    this.colorPreview.setColor(this.getSelectedColor());
    this.appendChildInTree("summary", this.colorPreview);

    this.panel.addChangeListener(event -> this.onchange());
    this.appendChild(this.panel);
  }

  /**
   * Adds an extra tab
   *
   * @param title The title
   * @param panel The extra tab
   */
  public void addExtraTab(String title, JSAbstractColorExtraTabPanel panel) {
    this.panel.addExtraTab(title, panel);
  }

  /**
   * Returns the selected color
   *
   * @return The selected color
   */
  public Color getSelectedColor() {
    return this.panel.getSelectedColor();
  }

  /**
   * Sets the selected color
   *
   * @param color The selected color
   */
  public void setSelectedColor(Color color) {
    this.panel.setSelectedColor(color);
    this.colorPreview.setColor(this.getSelectedColor());
  }

  /**
   * Sets the visibility of the opacity selectors
   *
   * @param b true to make the opacity selectors visible, false otherwise
   */
  public void setOpacityVisible(boolean b) {
    this.panel.setOpacityVisible(b);
  }

  /**
   * Returns if the selected color is "adjusting"
   *
   * @return true if the selected color is adjusting, false otherwise
   */
  public boolean getValueIsAdjusting() {
    return this.panel.getValueIsAdjusting();
  }

  /**
   * Adds a change listener
   *
   * @param listener The listener
   */
  public void addChangeListener(ChangeListener listener) {
    this.listeners.push(listener);
  }

  private void onchange() {
    this.changed = true;

    this.colorPreview.setColor(this.getSelectedColor());

    if (!this.getValueIsAdjusting() && this.closeOnChange) {
      this.removeAttribute("open");
      this.invoke("querySelector('summary').focus()");
    }

    ChangeEvent event = new ChangeEvent();

    this.listeners.forEach(listener -> {
      if ($typeof(listener, "function")) {
        listener.$apply(event);
      } else {
        listener.stateChanged(event);
      }
    });
  }

  @Override
  public void setEnabled(boolean b) {
    super.setEnabled(b);

    if (b) {
      this.removeAttribute("tabIndex");
    } else {
      this.setAttribute("tabIndex", "-1");
    }
  }

  /**
   * Sets if the combobox has to be closed on change
   *
   * @param b true to close the combobox on change, false otherwise
   */
  public void setCloseOnChange(boolean b) {
    this.closeOnChange = b;
  }

  /**
   * Shows a dialog to select the color
   *
   * @param title The title
   * @param color The initial color (it can be null)
   * @param opacityVisible true to make the opacity selectors visible, false
   * otherwise
   * @param extraTabs An associative key/value array of extra tabs (it can be
   * null), key = title, value = the extra tab
   * @param response The function to call on close
   */
  public static void showDialog(String title, Color color, boolean opacityVisible, Array<JSAbstractColorExtraTabPanel> extraTabs, $Apply_1_Void<Color> response) {
    JSColorPanel panel = new JSColorPanel();
    if ($exists(color)) {
      panel.setSelectedColor(color);
    }
    panel.setOpacityVisible(opacityVisible);
    if ($exists(extraTabs)) {
      Object.keys(extraTabs).forEach(key -> panel.addExtraTab("" + key, extraTabs.$get(key)));
    }

    JSOptionPane.showInputDialog(panel, title, (changeListener) -> panel.addChangeListener(changeListener), () -> true, res -> {
      if (res == JSOptionPane.OK_OPTION) {
        Color selected = panel.getSelectedColor();
        Color.pushHistory(selected);
        response.$apply(selected);
      }
    });
  }
}
