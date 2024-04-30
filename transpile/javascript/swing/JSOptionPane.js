/**
 * The javax.swing.JOptionPane clone
 *
 * @author gianpiero.diblasi
 */
class JSOptionPane extends JSDialog {

  static  DEFAULT_OPTION = -1;

  static  YES_NO_OPTION = 0;

  static  YES_NO_CANCEL_OPTION = 1;

  static  OK_CANCEL_OPTION = 2;

  static  YES_OPTION = 0;

  static  NO_OPTION = 1;

  static  CANCEL_OPTION = 2;

  static  OK_OPTION = 0;

  static  CLOSED_OPTION = -1;

  static  ERROR_MESSAGE = 0;

  static  INFORMATION_MESSAGE = 1;

  static  WARNING_MESSAGE = 2;

  static  QUESTION_MESSAGE = 3;

  static  PLAIN_MESSAGE = -1;

  static  showMessageDialog(component, message, title, messageType) {
    let dialog = JSOptionPane.createDialog(message, title);
    JSOptionPane.addIcon(messageType, dialog);
    JSOptionPane.addButtons(dialog, "OK");
    dialog.setVisible(true);
  }

  static  showConfirmDialog(component, message, title, optionType, messageType) {
    let dialog = JSOptionPane.createDialog(message, title);
    JSOptionPane.addIcon(messageType, dialog);
    switch(optionType) {
      case JSOptionPane.OK_CANCEL_OPTION:
        JSOptionPane.addButtons(dialog, "OK_CANCEL");
        break;
      case JSOptionPane.YES_NO_OPTION:
        JSOptionPane.addButtons(dialog, "YES_NO");
        break;
      case JSOptionPane.YES_NO_CANCEL_OPTION:
        JSOptionPane.addButtons(dialog, "YES_NO_CANCEL");
        break;
    }
    dialog.setVisible(true);
    return 0;
  }

  static  createDialog(message, title) {
    let dialog = new JSDialog();
    dialog.getContentPane().setLayout(new BorderLayout(20, 20));
    dialog.cssAddClass("jsoptionpane");
    dialog.setTitle(title);
    if (message instanceof JSComponent) {
      dialog.getContentPane().add(message, BorderLayout.CENTER);
    } else {
      let label = new JSLabel();
      label.cssAddClass("jsoptionpane-label");
      label.setText(message.toString());
      dialog.getContentPane().add(label, BorderLayout.CENTER);
    }
    return dialog;
  }

  static  addIcon(messageType, dialog) {
    let label = new JSLabel();
    switch(messageType) {
      case JSOptionPane.ERROR_MESSAGE:
        dialog.cssAddClass("jsoptionpane-error");
        label.setText("!");
        dialog.getContentPane().add(label, BorderLayout.WEST);
        break;
      case JSOptionPane.INFORMATION_MESSAGE:
        dialog.cssAddClass("jsoptionpane-information");
        label.setText("i");
        dialog.getContentPane().add(label, BorderLayout.WEST);
        break;
      case JSOptionPane.WARNING_MESSAGE:
        dialog.cssAddClass("jsoptionpane-warning");
        label.setText("!");
        dialog.getContentPane().add(label, BorderLayout.WEST);
        break;
      case JSOptionPane.QUESTION_MESSAGE:
        dialog.cssAddClass("jsoptionpane-question");
        label.setText("?");
        dialog.getContentPane().add(label, BorderLayout.WEST);
        break;
      case JSOptionPane.PLAIN_MESSAGE:
        break;
    }
  }

  static  addButtons(dialog, optionType) {
    let panel = new JSPanel();
    switch(optionType) {
      case "OK":
        JSOptionPane.addButton(panel, Translations.JSOptionPane_OK, (event) => dialog.setVisible(false));
        break;
      case "OK_CANCEL":
        JSOptionPane.addButton(panel, Translations.JSOptionPane_OK, (event) => dialog.setVisible(false));
        JSOptionPane.addButton(panel, Translations.JSOptionPane_CANCEL, (event) => dialog.setVisible(false));
        break;
      case "YES_NO":
        JSOptionPane.addButton(panel, Translations.JSOptionPane_YES, (event) => dialog.setVisible(false));
        JSOptionPane.addButton(panel, Translations.JSOptionPane_NO, (event) => dialog.setVisible(false));
        break;
      case "YES_NO_CANCEL":
        JSOptionPane.addButton(panel, Translations.JSOptionPane_YES, (event) => dialog.setVisible(false));
        JSOptionPane.addButton(panel, Translations.JSOptionPane_NO, (event) => dialog.setVisible(false));
        JSOptionPane.addButton(panel, Translations.JSOptionPane_CANCEL, (event) => dialog.setVisible(false));
        break;
    }
    dialog.getContentPane().add(panel, BorderLayout.SOUTH);
  }

  static  addButton(panel, label, listener) {
    let button = new JSButton();
    button.setText(label);
    button.addActionListener(listener);
    panel.add(button, null);
  }
}
