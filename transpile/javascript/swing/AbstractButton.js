/**
 * The javax.swing.AbstractButton clone
 *
 * @author gianpiero.diblasi
 */
class AbstractButton extends JSComponent {

   listeners = new Array();

  constructor() {
    super();
  }

  /**
   * Clone of javax.swing.AbstractButton.addActionListener
   * @param listener The listener
   */
   addActionListener(listener) {
    this.listeners.push(listener);
  }

  /**
   * The method for click events
   *
   * @return null
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
    return null;
  }
}
