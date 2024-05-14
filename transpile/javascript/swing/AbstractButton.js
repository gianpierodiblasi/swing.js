/**
 * The javax.swing.AbstractButton clone
 *
 * @author gianpiero.diblasi
 */
class AbstractButton extends JSComponent {

   listeners = new Array();

  /**
   * Creates the object
   *
   * @param element The HTML element representing this component
   */
  constructor(element) {
    super(element);
  }

  /**
   * Clone of javax.swing.AbstractButton.addActionListener
   *
   * @param listener The listener
   */
   addActionListener(listener) {
    this.listeners.push(listener);
  }

  /**
   * The method for click events
   */
   onclick() {
    let event = new ActionEvent();
    this.listeners.forEach(listener => {
      if (typeof listener === "function") {
        listener(event);
      } else {
        listener.actionPerformed(event);
      }
    });
  }

  /**
   * Clone of javax.swing.AbstractButton.setTooltip
   *
   * @param text The text
   */
   setTooltip(text) {
    this.setAttribute("title", text);
  }

  /**
   * Sets the icon
   *
   * @param producer The icon producer
   */
   setIcon(producer) {
    this.prependNodeChild(producer.produce());
  }
}
