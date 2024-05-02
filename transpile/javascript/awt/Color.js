/**
 * The java.awt.Color clone
 *
 * @author gianpiero.diblasi
 */
class Color {

   red = 0;

   green = 0;

   blue = 0;

  constructor(red, green, blue) {
    this.red = red;
    this.green = green;
    this.blue = blue;
  }

  /**
   * Returns the RGB hex string representing this Color
   *
   * @return The RGB hex string representing this Color
   */
   getHEX() {
    return "#" + new Number(this.red).toString(16).padStart(2, "0") + new Number(this.green).toString(16).padStart(2, "0") + new Number(this.blue).toString(16).padStart(2, "0");
  }

  /**
   * Creates a Color from an RGB hex string
   *
   * @param color The color
   * @return The Color
   */
  static  fromHEX(color) {
    let result = new RegExp("^#?([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})$", "i").exec(color);
    return new Color(parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16));
  }

  /**
   * Creates a Color from a RGB integer color
   *
   * @param color The color
   * @return The Color
   */
  static  fromARGB(color) {
    return new Color(color >>> 16 & 0xff, color >>> 8 & 0xff, color & 0xff);
  }
}
