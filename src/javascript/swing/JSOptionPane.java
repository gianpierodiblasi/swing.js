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

  @SuppressWarnings("null")
  public static void showMessageDialog(JSComponent component, Object message, String title, int messageType) {
    JSDialog dialog = new JSDialog();
    dialog.getContentPane().setLayout(new BorderLayout(20, 20));
    dialog.cssAddClass("jsoptionpane");
    dialog.setTitle(title);

    JSOptionPane.addIcon(messageType, dialog);
    JSOptionPane.addButtons(dialog, Translations.JSOptionPane_OK, (event) -> dialog.setVisible(false));

    if (message instanceof JSComponent) {
      dialog.getContentPane().add((JSComponent) message, BorderLayout.CENTER);
    } else {
      JSLabel label = new JSLabel();
      label.cssAddClass("jsoptionpane-label");
      label.setText(message.toString());
      dialog.getContentPane().add(label, BorderLayout.CENTER);
    }

    dialog.setVisible(true);
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

  private static void addButtons(JSDialog dialog, String label1, ActionListener listener1) {
    JSPanel panel = new JSPanel();

    JSButton button = new JSButton();
    button.setText(label1);
    button.addActionListener(listener1);
    panel.add(button, null);

    dialog.getContentPane().add(panel, BorderLayout.SOUTH);
  }
}
