package javascript.swing;

import javascript.awt.BorderLayout;
import javascript.util.Translations;
import simulation.js.$Apply_0_Void;
import simulation.js.$Apply_1_Void;
import static simulation.js.$Globals.$exists;

/**
 * The javax.swing.JOptionPane clone
 *
 * @author gianpiero.diblasi
 */
@SuppressWarnings("serial")
public class JSOptionPane extends JSDialog {

  public static final int DEFAULT_OPTION = -1;
  public static final int YES_NO_OPTION = 0;
  public static final int YES_NO_CANCEL_OPTION = 1;
  public static final int OK_CANCEL_OPTION = 2;

  public static final int YES_OPTION = 0;
  public static final int NO_OPTION = 1;
  public static final int CANCEL_OPTION = 2;
  public static final int OK_OPTION = 0;
  public static final int CLOSED_OPTION = -1;

  public static final int ERROR_MESSAGE = 0;
  public static final int INFORMATION_MESSAGE = 1;
  public static final int WARNING_MESSAGE = 2;
  public static final int QUESTION_MESSAGE = 3;
  public static final int PLAIN_MESSAGE = -1;

  /**
   * Shows a message dialog, this method does not stop the code flow
   *
   * @param message The message
   * @param title The title
   * @param messageType The message type
   * @param response The function to call on close
   */
  public static void showMessageDialog(Object message, String title, int messageType, $Apply_0_Void response) {
    JSDialog dialog = JSOptionPane.createDialog(message, title);
    JSOptionPane.addIcon(messageType, dialog);
    JSOptionPane.addButtons(dialog, "OK", $exists(response) ? (value) -> response.$apply() : null);
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
  public static void showConfirmDialog(Object message, String title, int optionType, int messageType, $Apply_1_Void<Integer> response) {
    JSDialog dialog = JSOptionPane.createDialog(message, title);
    JSOptionPane.addIcon(messageType, dialog);

    switch (optionType) {
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

  @SuppressWarnings("null")
  private static JSDialog createDialog(Object message, String title) {
    JSDialog dialog = new JSDialog();
    dialog.getContentPane().setLayout(new BorderLayout(20, 20));
    dialog.cssAddClass("jsoptionpane");
    dialog.setTitle(title);

    if (message instanceof JSComponent) {
      dialog.getContentPane().add((JSComponent) message, BorderLayout.CENTER);
    } else {
      JSLabel label = new JSLabel();
      label.cssAddClass("jsoptionpane-label");
      label.setText(message.toString());
      dialog.getContentPane().add(label, BorderLayout.CENTER);
    }

    return dialog;
  }

  private static void addIcon(int messageType, JSDialog dialog) {
    JSLabel label = new JSLabel();

    switch (messageType) {
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

  private static void addButtons(JSDialog dialog, String optionType, $Apply_1_Void<Integer> response) {
    JSPanel panel = new JSPanel();

    switch (optionType) {
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
    dialog.addChildEventListenerByQuery(".jsdialog-header .jsbutton", "click", (event) -> {
      if ($exists(response)) {
        response.$apply(JSOptionPane.CLOSED_OPTION);
      }
    });
  }

  private static void addButton(JSDialog dialog, JSPanel panel, String label, $Apply_1_Void<Integer> response, int option) {
    JSButton button = new JSButton();
    button.setText(label);
    button.addActionListener(event -> {
      dialog.setVisible(false);

      if ($exists(response)) {
        response.$apply(option);
      }
    });
    panel.add(button, null);
  }
}
