package javascript.awt;

import def.js.Array;
import def.js.Math;
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
   * In place lights up this Z4Color, the transparency is not changed
   *
   * @param lightingFactor The lighting factor (in the range [0,1])
   * @return This lighted Z4Color
   */
  public Color lighted(double lightingFactor) {
    return new Color(parseInt((255 - this.red) * lightingFactor + this.red), parseInt((255 - this.green) * lightingFactor + this.green), parseInt((255 - this.blue) * lightingFactor + this.blue), this.alpha);
  }

  /**
   * In place darkens this Z4Color, the transparency is not changed
   *
   * @param darkeningFactor The darkening factor (in the range [0,1])
   * @return This darkened Z4Color
   */
  public Color darkened(double darkeningFactor) {
    darkeningFactor = 1 - darkeningFactor;
    return new Color(parseInt(darkeningFactor * this.red), parseInt(darkeningFactor * this.green), parseInt(darkeningFactor * this.blue), this.alpha);
  }

  /**
   * Returns the RGB integer representing this Color
   *
   * @return The RGB integer representing this Color
   */
  public int getRGB() {
    return this.red << 16 | this.green << 8 | this.blue;
  }

  /**
   * Returns the RGBA integer representing this Color
   *
   * @return The RGBA integer representing this Color
   */
  public int getRGBA() {
    return this.red << 24 | this.green << 16 | this.blue << 8 | this.alpha;
  }

  /**
   * Returns the ARGB integer representing this Color
   *
   * @return The ARGB integer representing this Color
   */
  public int getARGB() {
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

  /**
   * Converts HSL components of a color to a set of RGB components
   *
   * @param hsl the hsl array
   * @param rgb the rgb array
   */
  public static void HSLtoRGB(Array<Double> hsl, Array<Integer> rgb) {
    double hue = hsl.$get(0);
    double saturation = hsl.$get(1);
    double lightness = hsl.$get(2);

    if (saturation > 0) {
      hue = (hue < 1) ? hue * 6 : 0;
      double q = lightness + saturation * (lightness > 0.5 ? 1 - lightness : lightness);
      double p = 2.0 * lightness - q;
      rgb.$set(0, parseInt(255 * Color.normalize(q, p, (hue < 4) ? (hue + 2) : (hue - 4))));
      rgb.$set(1, parseInt(255 * Color.normalize(q, p, hue)));
      rgb.$set(2, parseInt(255 * Color.normalize(q, p, (hue < 2) ? (hue + 4) : (hue - 2))));
    } else {
      rgb.$set(0, parseInt(255 * lightness));
      rgb.$set(1, parseInt(255 * lightness));
      rgb.$set(2, parseInt(255 * lightness));
    }
  }

  private static double normalize(double q, double p, double color) {
    if (color < 1) {
      return p + (q - p) * color;
    } else if (color < 3) {
      return q;
    } else if (color < 4) {
      return p + (q - p) * (4 - color);
    } else {
      return p;
    }
  }

  /**
   * Converts RGB components of a color to a set of HSL components
   *
   * @param rgb the rgb array
   * @param hsl the hsl array
   */
  public static void RGBtoHSL(Array<Integer> rgb, Array<Double> hsl) {
    double max = Math.max(rgb.$get(0), rgb.$get(1), rgb.$get(2)) / 255;
    double min = Math.min(rgb.$get(0), rgb.$get(1), rgb.$get(2)) / 255;

    double summa = max + min;
    double saturation = max - min;
    if (saturation > 0) {
      saturation /= (summa > 1) ? 2 - summa : summa;
    }
    hsl.$set(0, Color.getHue(rgb.$get(0) / 255, rgb.$get(1) / 255, rgb.$get(2) / 255, max, min));
    hsl.$set(1, saturation);
    hsl.$set(2, summa / 2);
  }

  /**
   * Converts HSV components of a color to a set of RGB components
   *
   * @param hsv the hsv array
   * @param rgb the rgb array
   */
  public static void HSVtoRGB(Array<Double> hsv, Array<Integer> rgb) {
    double hue = hsv.$get(0);
    double saturation = hsv.$get(1);
    double value = hsv.$get(2);

    rgb.$set(0, parseInt(255 * value));
    rgb.$set(1, parseInt(255 * value));
    rgb.$set(2, parseInt(255 * value));

    if (saturation > 0) {
      hue = (hue < 1) ? hue * 6 : 0;
      int integer = parseInt(hue);
      double f = hue - integer;

      switch (integer) {
        case 0:
          rgb.$set(1, parseInt(255 * value * (1 - saturation * (1 - f))));
          rgb.$set(2, parseInt(255 * value * (1 - saturation)));
          break;
        case 1:
          rgb.$set(0, parseInt(255 * value * (1 - saturation * f)));
          rgb.$set(2, parseInt(255 * value * (1 - saturation)));
          break;
        case 2:
          rgb.$set(0, parseInt(255 * value * (1 - saturation)));
          rgb.$set(2, parseInt(255 * value * (1 - saturation * (1 - f))));
          break;
        case 3:
          rgb.$set(0, parseInt(255 * value * (1 - saturation)));
          rgb.$set(1, parseInt(255 * value * (1 - saturation * f)));
          break;
        case 4:
          rgb.$set(0, parseInt(255 * value * (1 - saturation * (1 - f))));
          rgb.$set(1, parseInt(255 * value * (1 - saturation)));
          break;
        case 5:
          rgb.$set(1, parseInt(255 * value * (1 - saturation)));
          rgb.$set(2, parseInt(255 * value * (1 - saturation * f)));
          break;
      }
    }
  }

  /**
   * Converts RGB components of a color to a set of HSV components
   *
   * @param rgb the rgb array
   * @param hsv the hsv array
   */
  public static void RGBtoHSV(Array<Integer> rgb, Array<Double> hsv) {
    double max = Math.max(rgb.$get(0), rgb.$get(1), rgb.$get(2)) / 255;
    double min = Math.min(rgb.$get(0), rgb.$get(1), rgb.$get(2)) / 255;

    double saturation = max - min;
    if (saturation > 0) {
      saturation /= max;
    }
    hsv.$set(0, Color.getHue(rgb.$get(0) / 255, rgb.$get(1) / 255, rgb.$get(2) / 255, max, min));
    hsv.$set(1, saturation);
    hsv.$set(2, max);
  }

  private static double getHue(double red, double green, double blue, double max, double min) {
    double hue = max - min;
    if (hue > 0) {
      if (max == red) {
        hue = (green - blue) / hue;
        if (hue < 0) {
          hue += 6;
        }
      } else if (max == green) {
        hue = 2 + (blue - red) / hue;
      } else /*max == blue*/ {
        hue = 4 + (red - green) / hue;
      }
      hue /= 6;
    }
    return hue;
  }

  /**
   * Converts CMYK components of a color to a set of RGB components
   *
   * @param cmyk the cmyk array
   * @param rgb the rgb array
   */
  public static void CMYKtoRGB(Array<Integer> cmyk, Array<Integer> rgb) {
    rgb.$set(0, parseInt(255 * (1 + cmyk.$get(0) / 255 * cmyk.$get(3) / 255 - cmyk.$get(3) / 255 - cmyk.$get(0) / 255)));
    rgb.$set(1, parseInt(255 * (1 + cmyk.$get(1) / 255 * cmyk.$get(3) / 255 - cmyk.$get(3) / 255 - cmyk.$get(1) / 255)));
    rgb.$set(2, parseInt(255 * (1 + cmyk.$get(2) / 255 * cmyk.$get(3) / 255 - cmyk.$get(3) / 255 - cmyk.$get(2) / 255)));
  }

  /**
   * Converts RGB components of a color to a set of CMYK components
   *
   * @param rgb the rgb array
   * @param cmyk the cmyk array
   */
  public static void RGBtoCMYK(Array<Integer> rgb, Array<Integer> cmyk) {
    double max = Math.max(rgb.$get(0), rgb.$get(1), rgb.$get(2));
    if (max > 0) {
      cmyk.$set(0, parseInt(255 - rgb.$get(0) / max));
      cmyk.$set(1, parseInt(255 - rgb.$get(1) / max));
      cmyk.$set(2, parseInt(255 - rgb.$get(2) / max));
    } else {
      cmyk.$set(0, 0);
      cmyk.$set(1, 0);
      cmyk.$set(2, 0);
    }
    cmyk.$set(3, parseInt(255 - max));
  }
}
