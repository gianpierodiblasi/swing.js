package javascript;

import static def.dom.Globals.document;
import def.dom.HTMLElement;
import javax.swing.JComponent;
import static simulation.js.$Globals.$exists;

/**
 * The class to perform some "magics"
 *
 * @author gianpiero.diblasi
 */
public class SwingJS {

  private final static SwingJS CURRENT = new SwingJS();
  private String fontFamily;
  private int fontSize;
  private String mainColor;
  private String mainBGColor;

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

  /**
   * Sets the global font family, to complete the setting the <i>build</i>
   * method has to be called
   *
   * @param fontFamily The font family
   * @return The SwingJS static instance (for chaining)
   */
  public static SwingJS fontFamily(String fontFamily) {
    SwingJS.CURRENT.fontFamily = fontFamily;
    return SwingJS.CURRENT;
  }

  /**
   * Sets the global font size, to complete the setting the <i>build</i> method
   * has to be called
   *
   * @param fontSize The font size
   * @return The SwingJS static instance (for chaining)
   */
  public static SwingJS fontSize(int fontSize) {
    SwingJS.CURRENT.fontSize = fontSize;
    return SwingJS.CURRENT;
  }

  /**
   * Sets the global main color, to complete the setting the <i>build</i> method
   * has to be called
   *
   * @param color The color
   * @return The SwingJS static instance (for chaining)
   */
  public static SwingJS mainColor(String color) {
    SwingJS.CURRENT.mainBGColor = color;
    return SwingJS.CURRENT;
  }

  /**
   * Sets the global main background color, to complete the setting the
   * <i>build</i> method has to be called
   *
   * @param color The color
   * @return The SwingJS static instance (for chaining)
   */
  public static SwingJS mainBGColor(String color) {
    SwingJS.CURRENT.mainBGColor = color;
    return SwingJS.CURRENT;
  }

  /**
   * Builds the new global style
   */
  public static void build() {
    HTMLElement style = document.createElement("style");
    style.textContent
            = ":root {\n"
            + ($exists(SwingJS.CURRENT.fontFamily) ? "  --font-family: " + SwingJS.CURRENT.fontFamily + " !important;\n" : "")
            + ($exists(SwingJS.CURRENT.fontSize) ? "  --font-size: " + SwingJS.CURRENT.fontSize + "px !important;\n" : "")
            + ($exists(SwingJS.CURRENT.mainColor) ? "  --main-color: " + SwingJS.CURRENT.mainColor + " !important;\n" : "")
            + ($exists(SwingJS.CURRENT.mainBGColor) ? "  --main-bgcolor: " + SwingJS.CURRENT.mainBGColor + " !important;\n" : "")
            + "}";

    document.head.appendChild(style);
  }

  private SwingJS() {
  }
}
