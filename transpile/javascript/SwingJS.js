/**
 * The class to perform some "magics"
 *
 * @author gianpiero.diblasi
 */
class SwingJS {

  static  CURRENT = new SwingJS();

   _darkMode = false;

   _fontFamily = null;

   _fontSize = 0;

   _mainColor = null;

   _mainBGColor = null;

   _mainActionColor = null;

   _mainActionBGColor = null;

   _roundness = null;

  /**
   * Converts "any" Java object into a JavaScript object. This method is useful
   * when developing in Java, whene developing in JavaScript this method is
   * useless
   *
   * @param <T> The return type
   * @param object The original java object
   * @return The javascript object
   */
  static  convert(object) {
    return object;
  }

  /**
   * Returns the singleton instance of SwingJS
   *
   * @return The singleton instance of SwingJS
   */
  static  instance() {
    return SwingJS.CURRENT;
  }

  /**
   * Sets the dark mode
   *
   * @param b true to set the dark mode, false otherwise
   * @return The SwingJS instance (for chaining)
   */
   darkMode(b) {
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
   fontFamily(fontFamily) {
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
   fontSize(fontSize) {
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
   mainColor(color) {
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
   mainBGColor(color) {
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
   mainActionColor(color) {
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
   mainActionBGColor(color) {
    this._mainActionBGColor = color;
    return this;
  }

  /**
   * Sets the roundness, to complete the setting the
   * <i>build</i> method has to be called
   *
   * @param roundness The roundness, a value in the range [0,1]
   * @return The SwingJS instance (for chaining)
   */
   roundness(roundness) {
    this._roundness = (roundness * 30) + "rem";
    return this;
  }

  /**
   * Builds the new global style
   */
   build() {
    if (this._darkMode) {
      document.documentElement.classList.add("dark-mode");
    }
    let style = document.createElement("style");
    style.textContent = ":root {\n" + (this._fontFamily ? "  --font-family: " + this._fontFamily + " !important;\n" : "") + (this._fontSize ? "  --font-size: " + this._fontSize + "px !important;\n" : "") + (this._mainColor ? "  --main-color: " + this._mainColor + " !important;\n" : "") + (this._mainBGColor ? "  --main-bgcolor: " + this._mainBGColor + " !important;\n" : "") + (this._mainActionColor ? "  --main-action-color: " + this._mainActionColor + " !important;\n" : "") + (this._mainActionBGColor ? "  --main-action-bgcolor: " + this._mainActionBGColor + " !important;\n" : "") + (this._roundness ? "  --roundness: " + this._roundness + " !important;\n" : "") + "}";
    document.head.appendChild(style);
  }

  constructor() {
  }
}
