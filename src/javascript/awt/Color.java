package javascript.awt;

import def.js.Array;
import def.js.RegExp;
import def.js.RegExpExecArray;
import static simulation.js.$Globals.$exists;
import static simulation.js.$Globals.parseInt;
import simulation.js.$Number;

/**
 * The java.awt.Color clone
 *
 * @author gianpiero.diblasi
 */
public class Color {

  public final int red;
  public final int green;
  public final int blue;
  public final int alpha;

  public Color(int red, int green, int blue, int alpha) {
    this.red = red;
    this.green = green;
    this.blue = blue;
    this.alpha = $exists(alpha) ? alpha : 255;
  }

  /**
   * Returns the RGB integer representing this Color
   *
   * @return The RGB integer representing this Color
   */
  public Integer getRGB() {
    return this.red << 16 | this.green << 8 | this.blue;
  }

  /**
   * Returns the RGBA integer representing this Color
   *
   * @return The RGBA integer representing this Color
   */
  public Integer getRGBA() {
    return this.red << 24 | this.green << 16 | this.blue << 8 | this.alpha;
  }

  /**
   * Returns the ARGB integer representing this Color
   *
   * @return The ARGB integer representing this Color
   */
  public Integer getARGB() {
    return this.alpha << 24 | this.red << 16 | this.green << 8 | this.blue;
  }

  /**
   * Returns the RGB hex string representing this Color
   *
   * @return The RGB hex string representing this Color
   */
  public String getRGB_HEX() {
    return "#"
            + new $Number(this.red).toString(16).padStart(2, "0")
            + new $Number(this.green).toString(16).padStart(2, "0")
            + new $Number(this.blue).toString(16).padStart(2, "0");
  }

  /**
   * Returns the RGBA hex string representing this Color
   *
   * @return The RGBA hex string representing this Color
   */
  public String getRGBA_HEX() {
    return "#"
            + new $Number(this.red).toString(16).padStart(2, "0")
            + new $Number(this.green).toString(16).padStart(2, "0")
            + new $Number(this.blue).toString(16).padStart(2, "0")
            + new $Number(this.alpha).toString(16).padStart(2, "0");
  }

  /**
   * Returns the ARGB hex string representing this Color
   *
   * @return The ARGB hex string representing this Color
   */
  public String getARGB_HEX() {
    return "#"
            + new $Number(this.alpha).toString(16).padStart(2, "0")
            + new $Number(this.red).toString(16).padStart(2, "0")
            + new $Number(this.green).toString(16).padStart(2, "0")
            + new $Number(this.blue).toString(16).padStart(2, "0");
  }

  /**
   * Returns the components of this Color
   *
   * @return The components of Color
   */
  public Array<Integer> getRGB_Components() {
    return new Array<>(this.red, this.green, this.blue);
  }

  /**
   * Returns the components of this Color
   *
   * @return The components of Color
   */
  public Array<Integer> getRGBA_Components() {
    return new Array<>(this.red, this.green, this.blue, this.alpha);
  }

  /**
   * Returns the components of this Color
   *
   * @return The components of Color
   */
  public Array<Integer> getARGB_Components() {
    return new Array<>(this.alpha, this.red, this.green, this.blue);
  }

  /**
   * Creates a Color from a RGB integer color
   *
   * @param color The color
   * @return The Color
   */
  public static Color fromRGB(int color) {
    return new Color(color >>> 16 & 0xff, color >>> 8 & 0xff, color & 0xff, 255);
  }

  /**
   * Creates a Color from a RGBA integer color
   *
   * @param color The color
   * @return The Color
   */
  public static Color fromRGBA(int color) {
    return new Color(color >>> 24 & 0xff, color >>> 16 & 0xff, color >>> 8 & 0xff, color & 0xff);
  }

  /**
   * Creates a Color from a ARGB integer color
   *
   * @param color The color
   * @return The Color
   */
  public static Color fromARGB(int color) {
    return new Color(color >>> 16 & 0xff, color >>> 8 & 0xff, color & 0xff, color >>> 24 & 0xff);
  }

  /**
   * Creates a Color from an RGB hex string
   *
   * @param color The color
   * @return The Color
   */
  public static Color fromRGB_HEX(String color) {
    RegExpExecArray result = new RegExp("^#?([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})$", "i").exec(color);
    return new Color(parseInt(result.$get(1), 16), parseInt(result.$get(2), 16), parseInt(result.$get(3), 16), 255);
  }

  /**
   * Creates a Color from an RGBA hex string
   *
   * @param color The color
   * @return The Color
   */
  public static Color fromRGBA_HEX(String color) {
    RegExpExecArray result = new RegExp("^#?([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})$", "i").exec(color);
    return new Color(parseInt(result.$get(1), 16), parseInt(result.$get(2), 16), parseInt(result.$get(3), 16), parseInt(result.$get(4), 16));
  }
  
  /**
   * Creates a Color from an ARGB hex string
   *
   * @param color The color
   * @return The Color
   */
  public static Color fromARGB_HEX(String color) {
    RegExpExecArray result = new RegExp("^#?([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})$", "i").exec(color);
    return new Color(parseInt(result.$get(2), 16), parseInt(result.$get(3), 16), parseInt(result.$get(4), 16), parseInt(result.$get(1), 16));
  }
}
