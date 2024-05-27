package javascript.swing;

import javascript.awt.BorderLayout;
import javascript.swing.event.ChangeListener;
import javascript.util.Translations;
import simulation.js.$Apply_0_T;
import simulation.js.$Apply_0_Void;
import simulation.js.$Apply_1_Void;
import static simulation.js.$Globals.$exists;
import simulation.js.$Object;

/**
 * The javax.swing.JOptionPane clone
 *
 * @author gianpiero.diblasi
 */
public class JSOptionPane {

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

  private JSOptionPane() {
  }

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
    JSOptionPane.addButtons(dialog, "OK", $exists(response) ? value -> response.$apply() : null);
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

  /**
   * Shows an input dialog, this method does not stop the code flow
   *
   * @param component The component containing the input to select
   * @param title The title
   * @param addChangeListener The function to call to add a change listener to
   * the component
   * @param isValid The function to call when the component's value changes to
   * verify if the selected value is valid
   * @param response The function to call on close
   */
  public static void showInputDialog(JSComponent component, String title, $Apply_1_Void<ChangeListener> addChangeListener, $Apply_0_T<Boolean> isValid, $Apply_1_Void<Integer> response) {
    JSDialog dialog = JSOptionPane.createDialog(component, title);
    JSOptionPane.addButtons(dialog, "OK_CANCEL", response);
    JSOptionPane.setOkEnabled(dialog, isValid);
    addChangeListener.$apply(event -> JSOptionPane.setOkEnabled(dialog, isValid));

    dialog.setVisible(true);
  }

  private static void setOkEnabled(JSDialog dialog, $Apply_0_T<Boolean> isValid) {
    if (isValid.$apply()) {
      dialog.removeChildAttributeByQuery(".jsoptionpane-option-" + JSOptionPane.OK_OPTION, "disabled");
    } else {
      dialog.setChildAttributeByQuery(".jsoptionpane-option-" + JSOptionPane.OK_OPTION, "disabled", "disabled");
    }
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
    $Object RESPONSE = new $Object();
    RESPONSE.$set("RESPONSE", JSOptionPane.CLOSED_OPTION);

    switch (optionType) {
      case "OK":
        JSOptionPane.addButton(dialog, panel, Translations.JSOptionPane_OK, RESPONSE, JSOptionPane.DEFAULT_OPTION);
        break;
      case "OK_CANCEL":
        JSOptionPane.addButton(dialog, panel, Translations.JSOptionPane_OK, RESPONSE, JSOptionPane.OK_OPTION);
        JSOptionPane.addButton(dialog, panel, Translations.JSOptionPane_CANCEL, RESPONSE, JSOptionPane.CANCEL_OPTION);
        break;
      case "YES_NO":
        JSOptionPane.addButton(dialog, panel, Translations.JSOptionPane_YES, RESPONSE, JSOptionPane.YES_OPTION);
        JSOptionPane.addButton(dialog, panel, Translations.JSOptionPane_NO, RESPONSE, JSOptionPane.NO_OPTION);
        break;
      case "YES_NO_CANCEL":
        JSOptionPane.addButton(dialog, panel, Translations.JSOptionPane_YES, RESPONSE, JSOptionPane.YES_OPTION);
        JSOptionPane.addButton(dialog, panel, Translations.JSOptionPane_NO, RESPONSE, JSOptionPane.NO_OPTION);
        JSOptionPane.addButton(dialog, panel, Translations.JSOptionPane_CANCEL, RESPONSE, JSOptionPane.CANCEL_OPTION);
        break;
    }

    dialog.getContentPane().add(panel, BorderLayout.SOUTH);

    dialog.addWindowClosedListener(event -> {
      dialog.dispose();

      if ($exists(response)) {
        response.$apply((int) RESPONSE.$get("RESPONSE"));
      }
    });
  }

  private static void addButton(JSDialog dialog, JSPanel panel, String label, $Object RESPONSE, int option) {
    JSButton button = new JSButton();
    button.setText(label);
    button.cssAddClass("jsoptionpane-option-" + option);
    button.addActionListener(event -> {
      RESPONSE.$set("RESPONSE", option);
      dialog.setVisible(false);
    });
    panel.add(button, null);
  }
}
