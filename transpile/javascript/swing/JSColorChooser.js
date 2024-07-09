/**
 * The javax.swing.JColorChooser clone
 *
 * @author gianpiero.diblasi
 */
class JSColorChooser extends JSDropDown {

   colorPreview = new JSColorPreview();

   panel = new JSColorPanel();

   closeOnChange = true;

   changed = false;

   listeners = new Array();

  /**
   * Creates the object
   */
  constructor() {
    super(".jscolorpanel");
    this.cssAddClass("jscolorchooser");
    this.addEventListener("toggle", event => {
      if ("" + this.getProperty("open") === "true") {
        this.panel.reloadHistory();
      } else if (this.changed) {
        Color.pushHistory(this.panel.getSelectedColor());
      }
    });
    this.colorPreview.setColor(this.getSelectedColor());
    this.appendChildInTree("summary", this.colorPreview);
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
    this.colorPreview.setColor(this.getSelectedColor());
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
    this.changed = true;
    this.colorPreview.setColor(this.getSelectedColor());
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
        let selected = panel.getSelectedColor();
        Color.pushHistory(selected);
        response(selected);
      }
    });
  }
}
