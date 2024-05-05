/**
 * The java.awt.Color clone
 *
 * @author gianpiero.diblasi
 */
class Color {

   red = 0;

   green = 0;

   blue = 0;

   alpha = 0;

  constructor(red, green, blue, alpha) {
    this.red = red;
    this.green = green;
    this.blue = blue;
    this.alpha = alpha;
  }

  /**
   * In place lights up this Z4Color, the transparency is not changed
   *
   * @param lightingFactor The lighting factor (in the range [0,1])
   * @return This lighted Z4Color
   */
   lighted(lightingFactor) {
    return new Color(parseInt((255 - this.red) * lightingFactor + this.red), parseInt((255 - this.green) * lightingFactor + this.green), parseInt((255 - this.blue) * lightingFactor + this.blue), this.alpha);
  }

  /**
   * In place darkens this Z4Color, the transparency is not changed
   *
   * @param darkeningFactor The darkening factor (in the range [0,1])
   * @return This darkened Z4Color
   */
   darkened(darkeningFactor) {
    darkeningFactor = 1 - darkeningFactor;
    return new Color(parseInt(darkeningFactor * this.red), parseInt(darkeningFactor * this.green), parseInt(darkeningFactor * this.blue), this.alpha);
  }

  /**
   * Returns the RGB integer representing this Color
   *
   * @return The RGB integer representing this Color
   */
   getRGB() {
    return this.red << 16 | this.green << 8 | this.blue;
  }

  /**
   * Returns the RGBA integer representing this Color
   *
   * @return The RGBA integer representing this Color
   */
   getRGBA() {
    return this.red << 24 | this.green << 16 | this.blue << 8 | this.alpha;
  }

  /**
   * Returns the ARGB integer representing this Color
   *
   * @return The ARGB integer representing this Color
   */
   getARGB() {
    return this.alpha << 24 | this.red << 16 | this.green << 8 | this.blue;
  }

  /**
   * Returns the RGB hex string representing this Color
   *
   * @return The RGB hex string representing this Color
   */
   getRGB_HEX() {
    return "#" + new Number(this.red).toString(16).padStart(2, "0") + new Number(this.green).toString(16).padStart(2, "0") + new Number(this.blue).toString(16).padStart(2, "0");
  }

  /**
   * Returns the RGB string representing this Color
   *
   * @return The RGB string representing this Color
   */
   getRGB_String() {
    return "rgb(" + this.red + ", " + this.green + ", " + this.blue + ")";
  }

  /**
   * Returns the RGBA hex string representing this Color
   *
   * @return The RGBA hex string representing this Color
   */
   getRGBA_HEX() {
    return "#" + new Number(this.red).toString(16).padStart(2, "0") + new Number(this.green).toString(16).padStart(2, "0") + new Number(this.blue).toString(16).padStart(2, "0") + new Number(this.alpha).toString(16).padStart(2, "0");
  }

  /**
   * Returns the RGBA string representing this Color
   *
   * @return The RGBA string representing this Color
   */
   getRGBA_String() {
    return "rgba(" + this.red + ", " + this.green + ", " + this.blue + ", " + (this.alpha / 255) + ")";
  }

  /**
   * Returns the ARGB hex string representing this Color
   *
   * @return The ARGB hex string representing this Color
   */
   getARGB_HEX() {
    return "#" + new Number(this.alpha).toString(16).padStart(2, "0") + new Number(this.red).toString(16).padStart(2, "0") + new Number(this.green).toString(16).padStart(2, "0") + new Number(this.blue).toString(16).padStart(2, "0");
  }

  /**
   * Returns the components of this Color
   *
   * @return The components of Color
   */
   getRGB_Components() {
    return new Array(this.red, this.green, this.blue);
  }

  /**
   * Returns the components of this Color
   *
   * @return The components of Color
   */
   getRGBA_Components() {
    return new Array(this.red, this.green, this.blue, this.alpha);
  }

  /**
   * Returns the components of this Color
   *
   * @return The components of Color
   */
   getARGB_Components() {
    return new Array(this.alpha, this.red, this.green, this.blue);
  }

  /**
   * Creates a Color from a RGB integer color
   *
   * @param color The color
   * @return The Color
   */
  static  fromRGB(color) {
    return new Color(color >>> 16 & 0xff, color >>> 8 & 0xff, color & 0xff, 255);
  }

  /**
   * Creates a Color from a RGBA integer color
   *
   * @param color The color
   * @return The Color
   */
  static  fromRGBA(color) {
    return new Color(color >>> 24 & 0xff, color >>> 16 & 0xff, color >>> 8 & 0xff, color & 0xff);
  }

  /**
   * Creates a Color from a ARGB integer color
   *
   * @param color The color
   * @return The Color
   */
  static  fromARGB(color) {
    return new Color(color >>> 16 & 0xff, color >>> 8 & 0xff, color & 0xff, color >>> 24 & 0xff);
  }

  /**
   * Creates a Color from an RGB hex string
   *
   * @param color The color
   * @return The Color
   */
  static  fromRGB_HEX(color) {
    let result = new RegExp("^#?([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})$", "i").exec(color);
    return new Color(parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16), 255);
  }

  /**
   * Creates a Color from an RGBA hex string
   *
   * @param color The color
   * @return The Color
   */
  static  fromRGBA_HEX(color) {
    let result = new RegExp("^#?([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})$", "i").exec(color);
    return new Color(parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16), parseInt(result[4], 16));
  }

  /**
   * Creates a Color from an ARGB hex string
   *
   * @param color The color
   * @return The Color
   */
  static  fromARGB_HEX(color) {
    let result = new RegExp("^#?([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})$", "i").exec(color);
    return new Color(parseInt(result[2], 16), parseInt(result[3], 16), parseInt(result[4], 16), parseInt(result[1], 16));
  }

  /**
   * Converts HSL components of a color to a set of RGB components
   *
   * @param hsl the hsl array
   * @param rgb the rgb array
   */
  static  HSLtoRGB(hsl, rgb) {
    let hue = hsl[0];
    let saturation = hsl[1];
    let lightness = hsl[2];
    if (saturation > 0) {
      hue = (hue < 1) ? hue * 6 : 0;
      let q = lightness + saturation * (lightness > 0.5 ? 1 - lightness : lightness);
      let p = 2.0 * lightness - q;
      rgb[0] = parseInt(255 * Color.normalize(q, p, (hue < 4) ? (hue + 2) : (hue - 4)));
      rgb[1] = parseInt(255 * Color.normalize(q, p, hue));
      rgb[2] = parseInt(255 * Color.normalize(q, p, (hue < 2) ? (hue + 4) : (hue - 2)));
    } else {
      rgb[0] = parseInt(255 * lightness);
      rgb[1] = parseInt(255 * lightness);
      rgb[2] = parseInt(255 * lightness);
    }
  }

  static  normalize(q, p, color) {
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
  static  RGBtoHSL(rgb, hsl) {
    let max = Math.max(rgb[0], rgb[1], rgb[2]) / 255;
    let min = Math.min(rgb[0], rgb[1], rgb[2]) / 255;
    let summa = max + min;
    let saturation = max - min;
    if (saturation > 0) {
      saturation /= (summa > 1) ? 2 - summa : summa;
    }
    hsl[0] = Color.getHue(rgb[0] / 255, rgb[1] / 255, rgb[2] / 255, max, min);
    hsl[1] = saturation;
    hsl[2] = summa / 2;
  }

  /**
   * Converts HSV components of a color to a set of RGB components
   *
   * @param hsv the hsv array
   * @param rgb the rgb array
   */
  static  HSVtoRGB(hsv, rgb) {
    let hue = hsv[0];
    let saturation = hsv[1];
    let value = hsv[2];
    rgb[0] = parseInt(255 * value);
    rgb[1] = parseInt(255 * value);
    rgb[2] = parseInt(255 * value);
    if (saturation > 0) {
      hue = (hue < 1) ? hue * 6 : 0;
      let integer = parseInt(hue);
      let f = hue - integer;
      switch(integer) {
        case 0:
          rgb[1] = parseInt(255 * value * (1 - saturation * (1 - f)));
          rgb[2] = parseInt(255 * value * (1 - saturation));
          break;
        case 1:
          rgb[0] = parseInt(255 * value * (1 - saturation * f));
          rgb[2] = parseInt(255 * value * (1 - saturation));
          break;
        case 2:
          rgb[0] = parseInt(255 * value * (1 - saturation));
          rgb[2] = parseInt(255 * value * (1 - saturation * (1 - f)));
          break;
        case 3:
          rgb[0] = parseInt(255 * value * (1 - saturation));
          rgb[1] = parseInt(255 * value * (1 - saturation * f));
          break;
        case 4:
          rgb[0] = parseInt(255 * value * (1 - saturation * (1 - f)));
          rgb[1] = parseInt(255 * value * (1 - saturation));
          break;
        case 5:
          rgb[1] = parseInt(255 * value * (1 - saturation));
          rgb[2] = parseInt(255 * value * (1 - saturation * f));
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
  static  RGBtoHSV(rgb, hsv) {
    let max = Math.max(rgb[0], rgb[1], rgb[2]) / 255;
    let min = Math.min(rgb[0], rgb[1], rgb[2]) / 255;
    let saturation = max - min;
    if (saturation > 0) {
      saturation /= max;
    }
    hsv[0] = Color.getHue(rgb[0] / 255, rgb[1] / 255, rgb[2] / 255, max, min);
    hsv[1] = saturation;
    hsv[2] = max;
  }

  static  getHue(red, green, blue, max, min) {
    let hue = max - min;
    if (hue > 0) {
      if (max === red) {
        hue = (green - blue) / hue;
        if (hue < 0) {
          hue += 6;
        }
      } else if (max === green) {
        hue = 2 + (blue - red) / hue;
      } else /*max == blue*/
      {
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
  static  CMYKtoRGB(cmyk, rgb) {
    rgb[0] = parseInt(255 * (1 + cmyk[0] / 255 * cmyk[3] / 255 - cmyk[3] / 255 - cmyk[0] / 255));
    rgb[1] = parseInt(255 * (1 + cmyk[1] / 255 * cmyk[3] / 255 - cmyk[3] / 255 - cmyk[1] / 255));
    rgb[2] = parseInt(255 * (1 + cmyk[2] / 255 * cmyk[3] / 255 - cmyk[3] / 255 - cmyk[2] / 255));
  }

  /**
   * Converts RGB components of a color to a set of CMYK components
   *
   * @param rgb the rgb array
   * @param cmyk the cmyk array
   */
  static  RGBtoCMYK(rgb, cmyk) {
    let max = Math.max(rgb[0], rgb[1], rgb[2]);
    if (max > 0) {
      cmyk[0] = parseInt(255 - rgb[0] / max);
      cmyk[1] = parseInt(255 - rgb[1] / max);
      cmyk[2] = parseInt(255 - rgb[2] / max);
    } else {
      cmyk[0] = 0;
      cmyk[1] = 0;
      cmyk[2] = 0;
    }
    cmyk[3] = parseInt(255 - max);
  }
}
