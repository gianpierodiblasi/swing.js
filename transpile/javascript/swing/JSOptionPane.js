/**
 * The javax.swing.JOptionPane clone
 *
 * @author gianpiero.diblasi
 */
class JSOptionPane {

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

  constructor() {
  }

  /**
   * Shows a message dialog, this method does not stop the code flow
   *
   * @param message The message
   * @param title The title
   * @param messageType The message type
   * @param response The function to call on close
   */
  static  showMessageDialog(message, title, messageType, response) {
    let dialog = JSOptionPane.createDialog(message, title);
    JSOptionPane.addIcon(messageType, dialog);
    JSOptionPane.addButtons(dialog, "OK", response ? value => response() : null);
    dialog.setVisible(true);
  }

  /**
   * Shows a confirm dialog, this method does not stop the code flow
   *
   * @param message The message
   * @param title The title
   * @param optionType The option type
   * @param messageType The message type
   * @param response The function to call on close
   */
  static  showConfirmDialog(message, title, optionType, messageType, response) {
    let dialog = JSOptionPane.createDialog(message, title);
    JSOptionPane.addIcon(messageType, dialog);
    switch(optionType) {
      case JSOptionPane.DEFAULT_OPTION:
        break;
      case JSOptionPane.OK_CANCEL_OPTION:
        JSOptionPane.addButtons(dialog, "OK_CANCEL", response);
        break;
      case JSOptionPane.YES_NO_OPTION:
        JSOptionPane.addButtons(dialog, "YES_NO", response);
        break;
      case JSOptionPane.YES_NO_CANCEL_OPTION:
        JSOptionPane.addButtons(dialog, "YES_NO_CANCEL", response);
        break;
    }
    dialog.setVisible(true);
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

  static  addButtons(dialog, optionType, response) {
    let panel = new JSPanel();
    switch(optionType) {
      case "OK":
        JSOptionPane.addButton(dialog, panel, Translations.JSOptionPane_OK, response, JSOptionPane.DEFAULT_OPTION);
        break;
      case "OK_CANCEL":
        JSOptionPane.addButton(dialog, panel, Translations.JSOptionPane_OK, response, JSOptionPane.OK_OPTION);
        JSOptionPane.addButton(dialog, panel, Translations.JSOptionPane_CANCEL, response, JSOptionPane.CANCEL_OPTION);
        break;
      case "YES_NO":
        JSOptionPane.addButton(dialog, panel, Translations.JSOptionPane_YES, response, JSOptionPane.YES_OPTION);
        JSOptionPane.addButton(dialog, panel, Translations.JSOptionPane_NO, response, JSOptionPane.NO_OPTION);
        break;
      case "YES_NO_CANCEL":
        JSOptionPane.addButton(dialog, panel, Translations.JSOptionPane_YES, response, JSOptionPane.YES_OPTION);
        JSOptionPane.addButton(dialog, panel, Translations.JSOptionPane_NO, response, JSOptionPane.NO_OPTION);
        JSOptionPane.addButton(dialog, panel, Translations.JSOptionPane_CANCEL, response, JSOptionPane.CANCEL_OPTION);
        break;
    }
    dialog.getContentPane().add(panel, BorderLayout.SOUTH);
    dialog.addWindowClosedListener(event => {
      if (response) {
        response(JSOptionPane.CLOSED_OPTION);
      }
    });
  }

  static  addButton(dialog, panel, label, response, option) {
    let button = new JSButton();
    button.setText(label);
    button.addActionListener(event => {
      dialog.setVisible(false);
      if (response) {
        response(option);
      }
    });
    panel.add(button, null);
  }
}
