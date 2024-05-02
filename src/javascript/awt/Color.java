package javascript.awt;

import def.js.RegExp;
import def.js.RegExpExecArray;
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

  public Color(int red, int green, int blue) {
    this.red = red;
    this.green = green;
    this.blue = blue;
  }

  /**
   * Returns the RGB hex string representing this Color
   *
   * @return The RGB hex string representing this Color
   */
  public String getHEX() {
    return "#"
            + new $Number(this.red).toString(16).padStart(2, "0")
            + new $Number(this.green).toString(16).padStart(2, "0")
            + new $Number(this.blue).toString(16).padStart(2, "0");
  }

  /**
   * Creates a Color from an RGB hex string
   *
   * @param color The color
   * @return The Color
   */
  public static Color fromHEX(String color) {
    RegExpExecArray result = new RegExp("^#?([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})$", "i").exec(color);
    return new Color(parseInt(result.$get(1), 16), parseInt(result.$get(2), 16), parseInt(result.$get(3), 16));
  }

  /**
   * Creates a Color from a RGB integer color
   *
   * @param color The color
   * @return The Color
   */
  public static Color fromARGB(int color) {
    return new Color(color >>> 16 & 0xff, color >>> 8 & 0xff, color & 0xff);
  }
}
