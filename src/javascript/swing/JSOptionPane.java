package javascript.swing;

import javascript.awt.BorderLayout;
import javascript.awt.event.ActionListener;
import javascript.util.Translations;

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

  public static void showMessageDialog(JSComponent component, Object message, String title, int messageType) {
    JSDialog dialog = JSOptionPane.createDialog(message, title);
    JSOptionPane.addIcon(messageType, dialog);
    JSOptionPane.addButtons(dialog, "OK");
    dialog.setVisible(true);
  }

  public static int showConfirmDialog(JSComponent component, Object message, String title, int optionType, int messageType) {
    JSDialog dialog = JSOptionPane.createDialog(message, title);
    JSOptionPane.addIcon(messageType, dialog);

    switch (optionType) {
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

  private static void addButtons(JSDialog dialog, String optionType) {
    JSPanel panel = new JSPanel();

    switch (optionType) {
      case "OK":
        JSOptionPane.addButton(panel, Translations.JSOptionPane_OK, (event) -> dialog.setVisible(false));
        break;
      case "OK_CANCEL":
        JSOptionPane.addButton(panel, Translations.JSOptionPane_OK, (event) -> dialog.setVisible(false));
        JSOptionPane.addButton(panel, Translations.JSOptionPane_CANCEL, (event) -> dialog.setVisible(false));
        break;
      case "YES_NO":
        JSOptionPane.addButton(panel, Translations.JSOptionPane_YES, (event) -> dialog.setVisible(false));
        JSOptionPane.addButton(panel, Translations.JSOptionPane_NO, (event) -> dialog.setVisible(false));
        break;
      case "YES_NO_CANCEL":
        JSOptionPane.addButton(panel, Translations.JSOptionPane_YES, (event) -> dialog.setVisible(false));
        JSOptionPane.addButton(panel, Translations.JSOptionPane_NO, (event) -> dialog.setVisible(false));
        JSOptionPane.addButton(panel, Translations.JSOptionPane_CANCEL, (event) -> dialog.setVisible(false));
        break;
    }

    dialog.getContentPane().add(panel, BorderLayout.SOUTH);
  }

  private static void addButton(JSPanel panel, String label, ActionListener listener) {
    JSButton button = new JSButton();
    button.setText(label);
    button.addActionListener(listener);
    panel.add(button, null);
  }
}
