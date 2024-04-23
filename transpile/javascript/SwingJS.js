/**
 * The class to perform some "magics"
 *
 * @author gianpiero.diblasi
 */
class SwingJS {

  static  fontFamily = null;

  static  fontSize = 0;

  static  mainColor = null;

  static  mainBGColor = null;

  /**
   * Converts "any" javax.swing.JComponent in the corresponding
   * javascript.swing.JSComponent. This method is useful when developing in
   * Java, whene developing in JavaScript this method is useless
   *
   * @param <T> The return type
   * @param component The original java component
   * @return The javascript component
   */
  static  convert(component) {
    return component;
  }

  constructor() {
  }
}
