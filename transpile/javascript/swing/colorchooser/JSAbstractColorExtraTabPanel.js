/**
 * The abstract panel to add extra tabs to the JSColorPanel
 *
 * @author gianpiero.diblasi
 */
class JSAbstractColorExtraTabPanel extends JSPanel {

   listeners = new Array();

  /**
   * Returns the selected color
   *
   * @return The selected color
   */
   getSelectedColor() {
  }

  /**
   * Sets the selected color
   *
   * @param color The selected color
   */
   setSelectedColor(color) {
  }

  /**
   * Returns if the selected color is "adjusting"
   *
   * @return true if the selected color is adjusting, false otherwise
   */
   getValueIsAdjusting() {
  }

  /**
   * Adds a change listener
   *
   * @param listener The listener
   */
   addChangeListener(listener) {
    this.listeners.push(listener);
  }

  /**
   * to call to invoke a change event
   */
   onchange() {
    let event = new ChangeEvent();
    this.listeners.forEach(listener => {
      if (typeof listener === "function") {
        listener(event);
      } else {
        listener.stateChanged(event);
      }
    });
  }
}
