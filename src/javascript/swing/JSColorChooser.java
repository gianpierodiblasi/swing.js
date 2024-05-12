package javascript.swing;

import static def.dom.Globals.document;
import def.js.Array;
import def.js.Object;
import javascript.awt.Color;
import javascript.swing.colorchooser.JSAbstractColorExtraTabPanel;
import javascript.swing.colorchooser.JSColorPanel;
import javascript.swing.event.ChangeEvent;
import javascript.swing.event.ChangeListener;
import simulation.dom.$DOMRect;
import simulation.js.$Apply_1_Void;
import static simulation.js.$Globals.$exists;
import static simulation.js.$Globals.$typeof;

/**
 * The javax.swing.JColorChooser clone
 *
 * @author gianpiero.diblasi
 */
public class JSColorChooser extends JSComponent {

  private final JSComponent container = new JSComponent(document.createElement("div"));
  private final JSComponent componentOpacity = new JSComponent(document.createElement("div"));
  private final JSColorPanel panel = new JSColorPanel();

  private boolean closeOnChange = true;
  private final Array<ChangeListener> listeners = new Array<>();

  /**
   * Creates the object
   */
  @SuppressWarnings("StringEquality")
  public JSColorChooser() {
    super(document.createElement("details"));

    this.cssAddClass("jscolorchooser");
    this.addEventListener("toggle", event -> {
      if ("" + this.getProperty("open") == "true") {
        this.getChilStyleByQuery(".jscolorpanel").visibility = "visible";

        $DOMRect rect = this.invokeInTree(".jscolorpanel", "getBoundingClientRect()");
        $DOMRect rectSummary = this.invokeInTree("summary", "getBoundingClientRect()");

        if (rectSummary.left + rect.width < document.body.scrollWidth) {
          this.getChilStyleByQuery(".jscolorpanel").left = rectSummary.left + "px";
        } else if (rectSummary.right - rect.width > 0) {
          this.getChilStyleByQuery(".jscolorpanel").left = (rectSummary.right - rect.width) + "px";
        } else {
          this.getChilStyleByQuery(".jscolorpanel").left = "auto";
          this.getChilStyleByQuery(".jscolorpanel").right = "5px";
        }

        if (rectSummary.bottom + rect.height < document.body.scrollHeight) {
          this.getChilStyleByQuery(".jscolorpanel").top = rectSummary.bottom + "px";
        } else if (rectSummary.top - rect.height > 0) {
          this.getChilStyleByQuery(".jscolorpanel").top = "calc(" + (rectSummary.top - rect.height) + "px - 1rem)";
        } else {
          this.getChilStyleByQuery(".jscolorpanel").top = "auto";
          this.getChilStyleByQuery(".jscolorpanel").bottom = "5px";
        }
      } else {
        this.getChilStyleByQuery(".jscolorpanel").removeProperty("visibility");
        this.getChilStyleByQuery(".jscolorpanel").removeProperty("top");
        this.getChilStyleByQuery(".jscolorpanel").removeProperty("bottom");
        this.getChilStyleByQuery(".jscolorpanel").removeProperty("left");
        this.getChilStyleByQuery(".jscolorpanel").removeProperty("right");
      }
    });

    Color color = this.getSelectedColor();
    this.componentOpacity.cssAddClass("jscolorchooser-preview-transparent");
    this.componentOpacity.getStyle().backgroundColor = color.getRGBA_String();

    this.container.cssAddClass("jscolorchooser-preview");
    this.container.appendChild(this.componentOpacity);
    this.setContainerBorder(color);

    this.appendNodeChild(document.createElement("summary"));
    this.appendChildInTree("summary", this.container);

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

    Color c = this.getSelectedColor();
    this.componentOpacity.getStyle().backgroundColor = c.getRGBA_String();
    this.setContainerBorder(c);
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
    Color color = this.getSelectedColor();
    this.componentOpacity.getStyle().backgroundColor = color.getRGBA_String();
    this.setContainerBorder(color);

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

  private void setContainerBorder(Color color) {
    Array<Integer> rgb = new Array<>();
    Array<Double> hsl = new Array<>();
    rgb.$set(0, color.red);
    rgb.$set(1, color.green);
    rgb.$set(2, color.blue);
    Color.RGBtoHSL(rgb, hsl);
    this.container.getStyle().border = "1px solid " + (hsl.$get(2) > 0.5 ? color.darkened(0.1).getRGB_HEX() : color.lighted(0.1).getRGB_HEX());
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
        response.$apply(panel.getSelectedColor());
      }
    });
  }
}
