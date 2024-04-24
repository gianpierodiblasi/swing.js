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
  private boolean _darkMode;
  private String _fontFamily;
  private int _fontSize;
  private String _mainColor;
  private String _mainBGColor;
  private String _mainActionColor;
  private String _mainActionBGColor;

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
   * Returns the singleton instance of SwingJS
   *
   * @return The singleton instance of SwingJS
   */
  public static SwingJS instance() {
    return SwingJS.CURRENT;
  }

  /**
   * Sets the dark mode
   *
   * @param b true to set the dark mode, false otherwise
   * @return The SwingJS instance (for chaining)
   */
  public SwingJS darkMode(boolean b) {
    this._darkMode = b;
    return this;
  }

  /**
   * Sets the global font family, to complete the setting the <i>build</i>
   * method has to be called
   *
   * @param fontFamily The font family
   * @return The SwingJS instance (for chaining)
   */
  public SwingJS fontFamily(String fontFamily) {
    this._fontFamily = fontFamily;
    return this;
  }

  /**
   * Sets the global font size, to complete the setting the <i>build</i> method
   * has to be called
   *
   * @param fontSize The font size
   * @return The SwingJS instance (for chaining)
   */
  public SwingJS fontSize(int fontSize) {
    this._fontSize = fontSize;
    return this;
  }

  /**
   * Sets the global main color, to complete the setting the <i>build</i> method
   * has to be called
   *
   * @param color The color
   * @return The SwingJS instance (for chaining)
   */
  public SwingJS mainColor(String color) {
    this._mainColor = color;
    return this;
  }

  /**
   * Sets the global main background color, to complete the setting the
   * <i>build</i> method has to be called
   *
   * @param color The color
   * @return The SwingJS instance (for chaining)
   */
  public SwingJS mainBGColor(String color) {
    this._mainBGColor = color;
    return this;
  }

  /**
   * Sets the global main action color, to complete the setting the
   * <i>build</i> method has to be called
   *
   * @param color The color
   * @return The SwingJS instance (for chaining)
   */
  public SwingJS mainActionColor(String color) {
    this._mainActionColor = color;
    return this;
  }

  /**
   * Sets the global main action background color, to complete the setting the
   * <i>build</i> method has to be called
   *
   * @param color The color
   * @return The SwingJS instance (for chaining)
   */
  public SwingJS mainActionBGColor(String color) {
    this._mainActionBGColor = color;
    return this;
  }

  /**
   * Builds the new global style
   */
  public void build() {
    if (this._darkMode) {
      document.documentElement.classList.add("dark-mode");
    }

    HTMLElement style = document.createElement("style");
    style.textContent
            = ":root {\n"
            + ($exists(this._fontFamily) ? "  --font-family: " + this._fontFamily + " !important;\n" : "")
            + ($exists(this._fontSize) ? "  --font-size: " + this._fontSize + "px !important;\n" : "")
            + ($exists(this._mainColor) ? "  --main-color: " + this._mainColor + " !important;\n" : "")
            + ($exists(this._mainBGColor) ? "  --main-bgcolor: " + this._mainBGColor + " !important;\n" : "")
            + ($exists(this._mainActionColor) ? "  --main-action-color: " + this._mainActionColor + " !important;\n" : "")
            + ($exists(this._mainActionBGColor) ? "  --main-action-bgcolor: " + this._mainActionBGColor + " !important;\n" : "")
            + "}";

    document.head.appendChild(style);
  }

  private SwingJS() {
  }
}
