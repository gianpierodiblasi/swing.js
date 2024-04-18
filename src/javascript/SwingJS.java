package javascript;

import javax.swing.JComponent;

/**
 * The class to perform some "magics"
 *
 * @author gianpiero.diblasi
 */
public class SwingJS {

  /**
   * Converts "any" javax.swing.JComponent in the corresponding
   * javascript.swing.JSComponent. This method is useful when developing in
   * Java, whene developing in JavaScript this method is useless
   *
   * @param <T> The return type
   * @param component The original java component
   * @return The javascript component
   */
  @SuppressWarnings("unchecked")
  public static <T> T convert(JComponent component) {
    return (T) component;
  }

  private SwingJS() {
  }
}
