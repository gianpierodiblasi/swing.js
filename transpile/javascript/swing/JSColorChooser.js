/**
 * The javax.swing.JColorChooser clone
 *
 * @author gianpiero.diblasi
 */
class JSColorChooser extends JSComponent {

   container = new JSComponent(document.createElement("div"));

   componentOpacity = new JSComponent(document.createElement("div"));

   panel = new JSColorPanel();

   closeOnChange = true;

   listeners = new Array();

  /**
   * Creates the object
   */
  constructor() {
    super(document.createElement("details"));
    this.cssAddClass("jscolorchooser");
    this.addEventListener("toggle", event => {
      if ("" + this.getProperty("open") === "true") {
        this.getChilStyleByQuery(".jscolorpanel").visibility = "visible";
        let rect = this.invokeInTree(".jscolorpanel", "getBoundingClientRect()");
        let rectSummary = this.invokeInTree("summary", "getBoundingClientRect()");
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
    let color = this.getSelectedColor();
    this.componentOpacity.cssAddClass("jscolorchooser-preview-transparent");
    this.componentOpacity.getStyle().backgroundColor = color.getRGBA_String();
    this.container.cssAddClass("jscolorchooser-preview");
    this.container.appendChild(this.componentOpacity);
    this.setContainerBorder(color);
    this.appendNodeChild(document.createElement("summary"));
    this.appendChildInTree("summary", this.container);
    this.panel.addChangeListener(event => this.onchange());
    this.appendChild(this.panel);
  }

  /**
   * Adds an extra tab
   *
   * @param title The title
   * @param panel The extra tab
   */
   addExtraTab(title, panel) {
    this.panel.addExtraTab(title, panel);
  }

  /**
   * Returns the selected color
   *
   * @return The selected color
   */
   getSelectedColor() {
    return this.panel.getSelectedColor();
  }

  /**
   * Sets the selected color
   *
   * @param color The selected color
   */
   setSelectedColor(color) {
    this.panel.setSelectedColor(color);
    let c = this.getSelectedColor();
    this.componentOpacity.getStyle().backgroundColor = c.getRGBA_String();
    this.setContainerBorder(c);
  }

  /**
   * Sets the visibility of the opacity selectors
   *
   * @param b true to make the opacity selectors visible, false otherwise
   */
   setOpacityVisible(b) {
    this.panel.setOpacityVisible(b);
  }

  /**
   * Returns if the selected color is "adjusting"
   *
   * @return true if the selected color is adjusting, false otherwise
   */
   getValueIsAdjusting() {
    return this.panel.getValueIsAdjusting();
  }

  /**
   * Adds a change listener
   *
   * @param listener The listener
   */
   addChangeListener(listener) {
    this.listeners.push(listener);
  }

   onchange() {
    let color = this.getSelectedColor();
    this.componentOpacity.getStyle().backgroundColor = color.getRGBA_String();
    this.setContainerBorder(color);
    if (!this.getValueIsAdjusting() && this.closeOnChange) {
      this.removeAttribute("open");
      this.invoke("querySelector('summary').focus()");
    }
    let event = new ChangeEvent();
    this.listeners.forEach(listener => {
      if (typeof listener === "function") {
        listener(event);
      } else {
        listener.stateChanged(event);
      }
    });
  }

   setContainerBorder(color) {
    let rgb = new Array();
    let hsl = new Array();
    rgb[0] = color.red;
    rgb[1] = color.green;
    rgb[2] = color.blue;
    Color.RGBtoHSL(rgb, hsl);
    this.container.getStyle().border = "1px solid " + (hsl[2] > 0.5 ? color.darkened(0.1).getRGB_HEX() : color.lighted(0.1).getRGB_HEX());
  }

   setEnabled(b) {
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
   setCloseOnChange(b) {
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
  static  showDialog(title, color, opacityVisible, extraTabs, response) {
    let panel = new JSColorPanel();
    if (color) {
      panel.setSelectedColor(color);
    }
    panel.setOpacityVisible(opacityVisible);
    if (extraTabs) {
      Object.keys(extraTabs).forEach(key => panel.addExtraTab("" + key, extraTabs[key]));
    }
    JSOptionPane.showInputDialog(panel, title, (changeListener) => panel.addChangeListener(changeListener), () => true, res => {
      if (res === JSOptionPane.OK_OPTION) {
        response(panel.getSelectedColor());
      }
    });
  }
}
