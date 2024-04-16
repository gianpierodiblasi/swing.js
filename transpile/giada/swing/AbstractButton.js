/**
 * The javax.swing.AbstractButton clone
 *
 * @author gianpiero.diblasi
 */
class AbstractButton extends JComponent {

   listeners = new Array();

  constructor() {
    super();
  }

   addActionListener(listener) {
    this.listeners.push(listener);
  }

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
