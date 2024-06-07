document.addEventListener("click", (event) => document.querySelectorAll("details").forEach(detail => !detail.contains(event.target) ? detail.removeAttribute("open") : ""));

class Comparable {

  compareTo(other) {
    return 0;
  }
}
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

  static  U_MIN = -0.50059;

  static  U_MAX = 0.50058997;

  static  DIFF_U = Color.U_MAX - Color.U_MIN;

  static  V_MIN = -0.49981302;

  static  V_MAX = 0.499813;

  static  DIFF_V = Color.V_MAX - Color.V_MIN;

  /**
   * Creates the object
   *
   * @param red The red component (in the range [0,255])
   * @param green The green component (in the range [0,255])
   * @param blue The blue component (in the range [0,255])
   * @param alpha The alpha component (in the range [0,255])
   */
  constructor(red, green, blue, alpha) {
    this.red = red;
    this.green = green;
    this.blue = blue;
    this.alpha = alpha;
  }

  /**
   * Converts this Color to gray scaled, the transparency is not changed
   *
   * @return This gray scaled Color
   */
   gray() {
    let gray = parseInt(0.21 * this.red + 0.71 * this.green + 0.08 * this.blue);
    return new Color(gray, gray, gray, this.alpha);
  }

  /**
   * Converts this Color to negative, the transparency is not changed
   *
   * @return This negativized Color
   */
   negative() {
    return new Color(255 - this.red, 255 - this.green, 255 - this.blue, this.alpha);
  }

  /**
   * Lights up this Color, the transparency is not changed
   *
   * @param lightingFactor The lighting factor (in the range [0,1])
   * @return This lighted Color
   */
   lighted(lightingFactor) {
    return new Color(parseInt((255 - this.red) * lightingFactor + this.red), parseInt((255 - this.green) * lightingFactor + this.green), parseInt((255 - this.blue) * lightingFactor + this.blue), this.alpha);
  }

  /**
   * Darkens this Color, the transparency is not changed
   *
   * @param darkeningFactor The darkening factor (in the range [0,1])
   * @return This darkened Color
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
    let C = cmyk[0] / 255;
    let M = cmyk[1] / 255;
    let Y = cmyk[2] / 255;
    let K = cmyk[3] / 255;
    rgb[0] = parseInt(255 * (1 - C) * (1 - K));
    rgb[1] = parseInt(255 * (1 - M) * (1 - K));
    rgb[2] = parseInt(255 * (1 - Y) * (1 - K));
  }

  /**
   * Converts RGB components of a color to a set of CMYK components
   *
   * @param rgb the rgb array
   * @param cmyk the cmyk array
   */
  static  RGBtoCMYK(rgb, cmyk) {
    let R = rgb[0] / 255;
    let G = rgb[1] / 255;
    let B = rgb[2] / 255;
    let K = 1 - Math.max(R, G, B);
    if (K === 1) {
      cmyk[0] = 0;
      cmyk[1] = 0;
      cmyk[2] = 0;
    } else {
      cmyk[0] = parseInt(255 * (1 - R - K) / (1 - K));
      cmyk[1] = parseInt(255 * (1 - G - K) / (1 - K));
      cmyk[2] = parseInt(255 * (1 - B - K) / (1 - K));
    }
    cmyk[3] = parseInt(255 * K);
  }

  /**
   * Converts YUV components of a color to a set of RGB components
   *
   * @param yuv the yuv array
   * @param rgb the rgb array
   */
  static  YUVtoRGB(yuv, rgb) {
    let R = parseInt(255 * (0.713 * yuv[0] + Color.DIFF_V * yuv[2] + Color.V_MIN) / 0.713);
    let B = parseInt(255 * (0.565 * yuv[0] + Color.DIFF_U * yuv[1] + Color.U_MIN) / 0.565);
    let G = parseInt((255 * yuv[0] - 0.114 * B - 0.299 * R) / 0.587);
    if (R < 0) {
      R = 0;
    }
    if (R > 255) {
      R = 255;
    }
    if (G < 0) {
      G = 0;
    }
    if (G > 255) {
      G = 255;
    }
    if (B < 0) {
      B = 0;
    }
    if (B > 255) {
      B = 255;
    }
    rgb[0] = R;
    rgb[1] = G;
    rgb[2] = B;
  }

  /**
   * Converts RGB components of a color to a set of YUV components
   *
   * @param rgb the rgb array
   * @param yuv the cmyk array
   */
  static  RGBtoYUV(rgb, yuv) {
    yuv[0] = 0.299 * rgb[0] / 255 + 0.587 * rgb[1] / 255 + 0.114 * rgb[2] / 255;
    yuv[1] = ((rgb[2] / 255 - yuv[0]) * 0.565 - Color.U_MIN) / Color.DIFF_U;
    yuv[2] = ((rgb[0] / 255 - yuv[0]) * 0.713 - Color.V_MIN) / Color.DIFF_V;
  }
}
/**
 * The java.awt.Dimension clone
 *
 * @author gianpiero.diblasi
 */
class Dimension {

   width = 0;

   height = 0;

  /**
   * Creates the object
   *
   * @param width The width
   * @param height The height
   */
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}
/**
 * The java.awt.event.ActionEvent clone
 *
 * @author gianpiero.diblasi
 */
class ActionEvent {
}
/**
 * The java.awt.event.ActionListener clone
 *
 * @author gianpiero.diblasi
 */
class ActionListener {

  /**
   * Clone of java.awt.event.ActionListener.actionPerformed
   *
   * @param event The event
   */
   actionPerformed(event) {
  }
}
/**
 * The listener of window closed
 *
 * @author gianpiero.diblasi
 */
class WindowClosedListener {

  /**
   * Invoked when a window has been closed
   *
   * @param event The event
   */
   windowClosed(event) {
  }
}
/**
 * The java.awt.event.WindowEvent clone
 *
 * @author gianpiero.diblasi
 */
class WindowEvent {
}
/**
 * The java.awt.GridBagConstraints clone
 *
 * @author gianpiero.diblasi
 */
class GridBagConstraints {

  static  RELATIVE = -1;

  static  REMAINDER = 0;

  static  NONE = 0;

  static  BOTH = 1;

  static  HORIZONTAL = 2;

  static  VERTICAL = 3;

  static  CENTER = 10;

  static  NORTH = 11;

  static  NORTHEAST = 12;

  static  EAST = 13;

  static  SOUTHEAST = 14;

  static  SOUTH = 15;

  static  SOUTHWEST = 16;

  static  WEST = 17;

  static  NORTHWEST = 18;

  static  PAGE_START = 19;

  static  PAGE_END = 20;

  static  LINE_START = 21;

  static  LINE_END = 22;

  static  FIRST_LINE_START = 23;

  static  FIRST_LINE_END = 24;

  static  LAST_LINE_START = 25;

  static  LAST_LINE_END = 26;

  static  BASELINE = 0x100;

  static  BASELINE_LEADING = 0x200;

  static  BASELINE_TRAILING = 0x300;

  static  ABOVE_BASELINE = 0x400;

  static  ABOVE_BASELINE_LEADING = 0x500;

  static  ABOVE_BASELINE_TRAILING = 0x600;

  static  BELOW_BASELINE = 0x700;

  static  BELOW_BASELINE_LEADING = 0x800;

  static  BELOW_BASELINE_TRAILING = 0x900;

   gridx = 0;

   gridy = 0;

   gridwidth = 0;

   gridheight = 0;

   weightx = 0.0;

   weighty = 0.0;

   anchor = 0;

   fill = 0;

   insets = null;

   ipadx = 0;

   ipady = 0;

  /**
   * Creates the object
   */
  constructor() {
    this.gridx = GridBagConstraints.RELATIVE;
    this.gridy = GridBagConstraints.RELATIVE;
    this.gridwidth = 1;
    this.gridheight = 1;
    this.weightx = 0;
    this.weighty = 0;
    this.anchor = GridBagConstraints.CENTER;
    this.fill = GridBagConstraints.NONE;
    this.insets = new Insets(0, 0, 0, 0);
    this.ipadx = 0;
    this.ipady = 0;
  }

  /**
   * Returns a constraint value by key
   *
   * @param key The key (options are: "gridx", "gridy", "gridwidth",
   * "gridheight", "weightx", "weighty", "anchor", "fill", "ipadx" and "ipady")
   * @return The value
   */
   get(key) {
    switch(key) {
      case "gridx":
        return this.gridx;
      case "gridy":
        return this.gridy;
      case "gridwidth":
        return this.gridwidth;
      case "gridheight":
        return this.gridheight;
      case "weightx":
        return this.weightx;
      case "weighty":
        return this.weighty;
      case "anchor":
        return this.anchor;
      case "fill":
        return this.fill;
      case "ipadx":
        return this.ipadx;
      case "ipady":
        return this.ipady;
      default:
        return 0;
    }
  }
}
/**
 * Utility object to simplify the use of the GridBagConstraints object
 *
 * @author gianpiero.diblasi
 */
class GBC extends GridBagConstraints {

  /**
   * Creates the object
   *
   * @param gridx The gridx
   * @param gridy The gridy
   */
  constructor(gridx, gridy) {
    super();
    this.gridx = gridx;
    this.gridy = gridy;
  }

  /**
   * Sets the grid width
   *
   * @param gridwidth The grid width
   * @return This object
   */
   w(gridwidth) {
    this.gridwidth = gridwidth;
    return this;
  }

  /**
   * Sets the grid height
   *
   * @param gridheight The grid height
   * @return This object
   */
   h(gridheight) {
    this.gridheight = gridheight;
    return this;
  }

  /**
   * Sets the grid size
   *
   * @param gridwidth The grid width
   * @param gridheight The grid height
   * @return This object
   */
   wh(gridwidth, gridheight) {
    this.gridwidth = gridwidth;
    this.gridheight = gridheight;
    return this;
  }

  /**
   * Sets the x weight
   *
   * @param weightx The x weight
   * @return This object
   */
   wx(weightx) {
    this.weightx = weightx;
    return this;
  }

  /**
   * Sets the y weight
   *
   * @param weighty The y weight
   * @return This object
   */
   wy(weighty) {
    this.weighty = weighty;
    return this;
  }

  /**
   * Sets the weight
   *
   * @param weightx The x weight
   * @param weighty The y weight
   * @return This object
   */
   wxy(weightx, weighty) {
    this.weightx = weightx;
    this.weighty = weighty;
    return this;
  }

  /**
   * Sets the anchor
   *
   * @param anchor The anchor
   * @return This object
   */
   a(anchor) {
    this.anchor = anchor;
    return this;
  }

  /**
   * Sets the fill direction
   *
   * @param fill The fill direction
   * @return This object
   */
   f(fill) {
    this.fill = fill;
    return this;
  }

  /**
   * Sets the insets
   *
   * @param top The spacing to use on top
   * @param left The spacing to use to the left
   * @param bottom The spacing to use on the bottom
   * @param right The spacing to use to the right
   * @return This object
   */
   i(top, left, bottom, right) {
    this.insets = new Insets(top, left, bottom, right);
    return this;
  }
}
/**
 * The java.awt.Insets clone
 *
 * @author gianpiero.diblasi
 */
class Insets {

   top = 0;

   left = 0;

   bottom = 0;

   right = 0;

  /**
   * Creates the object
   *
   * @param top The top value
   * @param left The left value
   * @param bottom The bottom value
   * @param right The right value
   */
  constructor(top, left, bottom, right) {
    this.top = top;
    this.left = left;
    this.bottom = bottom;
    this.right = right;
  }
}
/**
 * The java.awt.LayoutManager clone
 *
 * @author gianpiero.diblasi
 */
class LayoutManager {

  /**
   * Sets the panel managed by this layout manager
   *
   * @param panel The panel
   */
   setPanel(panel) {
  }

  /**
   * Resets the panel managed by this layout manager (all custom configurations
   * will be removed)
   *
   * @param panel The panel
   */
   resetPanel(panel) {
  }

  /**
   * Add a component in a panel
   *
   * @param panel The panel
   * @param component The component
   * @param constraints The constraints
   */
   addInPanel(panel, component, constraints) {
  }
}
/**
 * The java.awt.BorderLayout clone
 *
 * @author gianpiero.diblasi
 */
class BorderLayout extends LayoutManager {

  static  NORTH = "North";

  static  SOUTH = "South";

  static  EAST = "East";

  static  WEST = "West";

  static  CENTER = "Center";

  static  BEFORE_FIRST_LINE = BorderLayout.NORTH;

  static  AFTER_LAST_LINE = BorderLayout.SOUTH;

  static  BEFORE_LINE_BEGINS = BorderLayout.WEST;

  static  AFTER_LINE_ENDS = BorderLayout.EAST;

  static  PAGE_START = BorderLayout.BEFORE_FIRST_LINE;

  static  PAGE_END = BorderLayout.AFTER_LAST_LINE;

  static  LINE_START = BorderLayout.BEFORE_LINE_BEGINS;

  static  LINE_END = BorderLayout.AFTER_LINE_ENDS;

   hGap = 0;

   vGap = 0;

  /**
   * Creates the object
   *
   * @param hGap The horizontal gap
   * @param vGap The vertical gap
   */
  constructor(hGap, vGap) {
    super();
    this.hGap = typeof hGap === "undefined" ? 0 : hGap;
    this.vGap = typeof vGap === "undefined" ? 0 : vGap;
  }

   setPanel(panel) {
    panel.cssAddClass("borderlayout");
    panel.getStyle().setProperty("gap", this.vGap + "px " + this.hGap + "px");
  }

   resetPanel(panel) {
    panel.clearContent();
    panel.cssRemoveClass("borderlayout");
  }

   addInPanel(panel, component, constraints) {
    panel.appendChild(component);
    component.cssAddClass((constraints).toLowerCase());
    component.getStyle().setProperty("grid-area", (constraints).toLowerCase());
  }
}
/**
 * The java.awt.BoxLayout clone
 *
 * @author gianpiero.diblasi
 */
class BoxLayout extends LayoutManager {

  static  X_AXIS = 0;

  static  Y_AXIS = 1;

  static  LINE_AXIS = 2;

  static  PAGE_AXIS = 3;

   axis = 0;

  /**
   * Creates the object
   *
   * @param target The target component
   * @param axis The axis
   */
  constructor(target, axis) {
    super();
    this.axis = axis;
  }

   setPanel(panel) {
    panel.cssAddClass("boxlayout");
    switch(this.axis) {
      case BoxLayout.LINE_AXIS:
      case BoxLayout.X_AXIS:
        panel.getStyle().flexDirection = "row";
        panel.getStyle().alignItems = "center";
        break;
      case BoxLayout.PAGE_AXIS:
      case BoxLayout.Y_AXIS:
        panel.getStyle().flexDirection = "column";
        panel.getStyle().alignItems = "flex-start";
        break;
    }
  }

   resetPanel(panel) {
    panel.clearContent();
    panel.cssRemoveClass("boxlayout");
    panel.getStyle().flexDirection = "";
    panel.getStyle().alignItems = "";
  }

   addInPanel(panel, component, constraints) {
    panel.appendChild(component);
  }
}
/**
 * The java.awt.CardLayout clone
 *
 * @author gianpiero.diblasi
 */
class CardLayout extends LayoutManager {

   hGap = 0;

   vGap = 0;

  /**
   * Creates the object
   *
   * @param hGap The horizontal gap
   * @param vGap The vertical gap
   */
  constructor(hGap, vGap) {
    super();
    this.hGap = typeof hGap === "undefined" ? 0 : hGap;
    this.vGap = typeof vGap === "undefined" ? 0 : vGap;
  }

   setPanel(panel) {
    panel.cssAddClass("cardlayout");
  }

   resetPanel(panel) {
    panel.clearContent();
    panel.cssRemoveClass("cardlayout");
  }

   addInPanel(panel, component, constraints) {
    panel.appendChild(component);
    component.setAttribute("card", constraints);
    component.setAttribute("old-display", component.getStyle().display);
    if (panel.getChildCount() > 1) {
      component.getStyle().display = "none";
    }
    component.getStyle().flexGrow = "1";
    component.getStyle().margin = this.vGap + "px " + this.hGap + "px";
  }

  /**
   * The java.awt.CardLayout.show clone
   *
   * @param parent The parent component
   * @param name The name of the card to show
   */
   show(parent, name) {
    for (let index = 0; index < parent.getChildCount(); index++) {
      parent.getChilStyleByIndex(index).display = "none";
    }
    parent.getChilStyleByQuery("[card=" + name + "]").display = parent.getChildAttributeByQuery("[card=" + name + "]", "old-display");
  }
}
/**
 * The java.awt.FlowLayout clone
 *
 * @author gianpiero.diblasi
 */
class FlowLayout extends LayoutManager {

  static  LEFT = 0;

  static  CENTER = 1;

  static  RIGHT = 2;

  static  LEADING = 3;

  static  TRAILING = 4;

   align = 0;

   hGap = 0;

   vGap = 0;

  /**
   * Creates the object
   *
   * @param align The alignment
   * @param hGap The horizontal gap
   * @param vGap The vertical gap
   */
  constructor(align, hGap, vGap) {
    super();
    this.align = align;
    this.hGap = typeof hGap === "undefined" ? 5 : hGap;
    this.vGap = typeof vGap === "undefined" ? 5 : vGap;
  }

   setPanel(panel) {
    panel.cssAddClass("flowlayout");
    switch(this.align) {
      case FlowLayout.LEFT:
      case FlowLayout.LEADING:
        panel.getStyle().justifyContent = "flex-start";
        break;
      case FlowLayout.CENTER:
        panel.getStyle().justifyContent = "center";
        break;
      case FlowLayout.RIGHT:
      case FlowLayout.TRAILING:
        panel.getStyle().justifyContent = "flex-end";
        break;
    }
  }

   resetPanel(panel) {
    panel.clearContent();
    panel.cssRemoveClass("flowlayout");
    panel.getStyle().justifyContent = "";
  }

   addInPanel(panel, component, constraints) {
    panel.appendChild(component);
    component.getStyle().margin = this.vGap + "px " + this.hGap + "px";
  }
}
/**
 * The java.awt.GridBagLayout clone
 *
 * @author gianpiero.diblasi
 */
class GridBagLayout extends LayoutManager {

   columnWidths = null;

   rowHeights = null;

   gridTemplateAreas = new Array();

   constraintsArray = new Array();

   position = 1;

  /**
   * Creates the object
   */
  constructor() {
    super();
  }

   setPanel(panel) {
    panel.cssAddClass("gridbaglayout");
  }

   resetPanel(panel) {
    panel.clearContent();
    panel.cssRemoveClass("gridbaglayout");
    panel.getStyle().removeProperty("grid-template");
    panel.getStyle().removeProperty("grid-template-areas");
    panel.getStyle().removeProperty("grid-template-rows");
    panel.getStyle().removeProperty("grid-template-columns");
  }

   addInPanel(panel, component, constraints) {
    this.constraintsArray.push(constraints);
    panel.appendChild(component);
    panel.getStyle().setProperty("grid-template-areas", this.setGridTemplateAreas(constraints));
    panel.getStyle().setProperty("grid-template-rows", this.getWeight(this.gridTemplateAreas, "gridy", "gridheight", "weighty", this.rowHeights));
    panel.getStyle().setProperty("grid-template-columns", this.gridTemplateAreas.length > 0 ? this.getWeight(this.gridTemplateAreas[0], "gridx", "gridwidth", "weightx", this.columnWidths) : "");
    this.setComponent(component, constraints);
  }

   setGridTemplateAreas(constraint) {
    for (let y = this.gridTemplateAreas.length; y < constraint.gridy + constraint.gridheight; y++) {
      this.gridTemplateAreas.push(new Array());
    }
    let maxX = 0;
    for (let y = 0; y < this.gridTemplateAreas.length; y++) {
      maxX = Math.max(maxX, this.gridTemplateAreas[y].length);
    }
    for (let y = 0; y < this.gridTemplateAreas.length; y++) {
      for (let x = this.gridTemplateAreas[y].length; x < Math.max(maxX, constraint.gridx + constraint.gridwidth); x++) {
        this.gridTemplateAreas[y].push(".");
      }
    }
    for (let y = constraint.gridy; y < constraint.gridy + constraint.gridheight; y++) {
      let array = this.gridTemplateAreas[y];
      for (let x = constraint.gridx; x < constraint.gridx + constraint.gridwidth; x++) {
        array[x] = "p" + this.position;
      }
    }
    let gta = "";
    for (let y = 0; y < this.gridTemplateAreas.length; y++) {
      let row = "";
      for (let x = 0; x < this.gridTemplateAreas[y].length; x++) {
        row += this.gridTemplateAreas[y][x] + " ";
      }
      gta += "\"" + row + "\"\n";
    }
    return gta;
  }

   getWeight(array, keyAxis, keySize, keyWeight, fixedSize) {
    let gridTemplate = new Array();
    for (let index = 0; index < array.length; index++) {
      gridTemplate.push(0.0);
    }
    for (let index = 1; index <= array.length; index++) {
      let gridsize = index;
      this.constraintsArray.filter(constraint => constraint.get(keySize) === gridsize).forEach(constraint => {
        let ok = false;
        for (let index2 = constraint.get(keyAxis); index2 < constraint.get(keyAxis) + constraint.get(keySize); index2++) {
          ok |= gridTemplate[index2] >= constraint.get(keyWeight);
        }
        if (!ok) {
          gridTemplate[constraint.get(keyAxis) + constraint.get(keySize) - 1] = constraint.get(keyWeight);
        }
      });
    }
    let gt = "";
    for (let index = 0; index < gridTemplate.length; index++) {
      if (fixedSize && fixedSize[index]) {
        gt += fixedSize[index] + "px ";
      } else {
        gt += gridTemplate[index] === 0.0 ? "auto " : gridTemplate[index] + "fr ";
      }
    }
    return gt;
  }

   setComponent(component, constraints) {
    component.getStyle().setProperty("grid-area", "p" + this.position);
    this.position++;
    switch(constraints.anchor) {
      case GridBagConstraints.CENTER:
      case GridBagConstraints.BASELINE:
      case GridBagConstraints.ABOVE_BASELINE:
      case GridBagConstraints.BELOW_BASELINE:
        component.getStyle().setProperty("place-self", "center center");
        break;
      case GridBagConstraints.NORTH:
      case GridBagConstraints.PAGE_START:
        component.getStyle().setProperty("place-self", "start center");
        break;
      case GridBagConstraints.NORTHEAST:
      case GridBagConstraints.FIRST_LINE_END:
        component.getStyle().setProperty("place-self", "start end");
        break;
      case GridBagConstraints.EAST:
      case GridBagConstraints.LINE_END:
      case GridBagConstraints.BASELINE_TRAILING:
      case GridBagConstraints.ABOVE_BASELINE_TRAILING:
      case GridBagConstraints.BELOW_BASELINE_TRAILING:
        component.getStyle().setProperty("place-self", "center end");
        break;
      case GridBagConstraints.SOUTHEAST:
      case GridBagConstraints.LAST_LINE_END:
        component.getStyle().setProperty("place-self", "end end");
        break;
      case GridBagConstraints.SOUTH:
      case GridBagConstraints.PAGE_END:
        component.getStyle().setProperty("place-self", "end center");
        break;
      case GridBagConstraints.SOUTHWEST:
      case GridBagConstraints.LAST_LINE_START:
        component.getStyle().setProperty("place-self", "end start");
        break;
      case GridBagConstraints.WEST:
      case GridBagConstraints.LINE_START:
      case GridBagConstraints.BASELINE_LEADING:
      case GridBagConstraints.ABOVE_BASELINE_LEADING:
      case GridBagConstraints.BELOW_BASELINE_LEADING:
        component.getStyle().setProperty("place-self", "center start");
        break;
      case GridBagConstraints.NORTHWEST:
      case GridBagConstraints.FIRST_LINE_START:
        component.getStyle().setProperty("place-self", "start start");
        break;
    }
    switch(constraints.fill) {
      case GridBagConstraints.NONE:
        break;
      case GridBagConstraints.BOTH:
        component.getStyle().setProperty("place-self", "stretch stretch");
        break;
      case GridBagConstraints.HORIZONTAL:
        component.getStyle().setProperty("justify-self", "stretch");
        break;
      case GridBagConstraints.VERTICAL:
        component.getStyle().setProperty("place-self", "stretch");
        break;
    }
    component.getStyle().margin = constraints.insets.top + "px " + constraints.insets.right + "px " + constraints.insets.bottom + "px " + constraints.insets.left + "px";
    // component.getStyle().padding = constraints.ipady + "px " + constraints.ipadx + "px";
  }
}
/**
 * The java.awt.GridLayout clone
 *
 * @author gianpiero.diblasi
 */
class GridLayout extends LayoutManager {

   rows = 0;

   cols = 0;

   hGap = 0;

   vGap = 0;

  /**
   * Creates the object
   *
   * @param rows The row count
   * @param cols The column count
   * @param hGap The horizontal gap
   * @param vGap The vertical gap
   */
  constructor(rows, cols, hGap, vGap) {
    super();
    this.rows = rows;
    this.cols = cols;
    this.hGap = typeof hGap === "undefined" ? 0 : hGap;
    this.vGap = typeof vGap === "undefined" ? 0 : vGap;
  }

   setPanel(panel) {
    panel.cssAddClass("gridlayout");
    let gridTemplate = "";
    for (let row = 1; row <= this.rows; row++) {
      let gridTemplateRow = "";
      for (let col = 1; col <= this.cols; col++) {
        gridTemplateRow += "p" + ((row - 1) * this.cols + col) + " ";
      }
      gridTemplate += "\"" + gridTemplateRow + "\" 1fr\n";
    }
    gridTemplate += "/";
    for (let col = 1; col <= this.cols; col++) {
      gridTemplate += " 1fr";
    }
    panel.getStyle().setProperty("grid-template", gridTemplate);
    panel.getStyle().setProperty("gap", this.vGap + "px " + this.hGap + "px");
  }

   resetPanel(panel) {
    panel.clearContent();
    panel.cssRemoveClass("gridlayout");
    panel.getStyle().removeProperty("grid-template");
    panel.getStyle().removeProperty("gap");
  }

   addInPanel(panel, component, constraints) {
    panel.appendChild(component);
    component.getStyle().setProperty("grid-area", "p" + panel.getChildCount());
  }
}
/**
 * The java.awt.Point clone
 *
 * @author gianpiero.diblasi
 */
class Point {

   x = 0;

   y = 0;

  /**
   * Creates the object
   *
   * @param x The x-axis coordinate
   * @param y The y-axis coordinate
   */
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}
/**
 * The javax.swing.ButtonGroup clone
 *
 * @author gianpiero.diblasi
 */
class ButtonGroup {

   name = "ButtonGroup_" + new Date().getTime() + "_" + parseInt(1000 * Math.random());

   count = 0;

  /**
   * Clone of javax.swing.ButtonGroup.add
   *
   * @param button The button
   */
   add(button) {
    button.setChildAttributeByQuery("[type=radio]", "name", this.name);
    this.count++;
  }

  /**
   * Clone of javax.swing.ButtonGroup.getButtonCount
   *
   * @return the button count
   */
   getButtonCount() {
    return this.count;
  }
}
/**
 * The javax.swing.event.ChangeEvent clone
 *
 * @author gianpiero.diblasi
 */
class ChangeEvent {
}
/**
 * The javax.swing.event.ChangeListener clone
 *
 * @author gianpiero.diblasi
 */
class ChangeListener {

  /**
   * Clone of javax.swing.event.ChangeListener.stateChanged
   *
   * @param event The event
   */
   stateChanged(event) {
  }
}
/**
 * The javax.swing.JComponent clone
 *
 * @author gianpiero.diblasi
 */
class JSComponent {

   element = null;

  /**
   * Creates the object
   *
   * @param element The HTML element representing this component
   */
  constructor(element) {
    this.element = element;
  }

  /**
   * Clone of javax.swing.JComponent.setBackground
   *
   * @param color The color
   */
   setBackground(color) {
    this.element.style.backgroundColor = color.getRGB_HEX();
  }

  /**
   * Clone of javax.swing.JComponent.setEnabled
   *
   * @param b true to enable the button, false otherwise
   */
   setEnabled(b) {
    if (b) {
      this.element.removeAttribute("disabled");
    } else {
      this.element.setAttribute("disabled", "disabled");
    }
  }

  /**
   * Invokes a method of the HTML element
   *
   * @param <T> The type of the return value
   * @param method The method name (with parenthesis)
   * @return The return value of the method
   */
   invoke(method) {
    let result = null;
    eval("result = this.element." + method + ";");
    return result;
  }

  /**
   * Invokes a method of an child of the HTML element
   *
   * @param <T> The type of the return value
   * @param query The query selector
   * @param method The method name (with parenthesis)
   * @return The return value of the method
   */
   invokeInTree(query, method) {
    let result = null;
    eval("result = this.element.querySelector('" + query + "')." + method + ";");
    return result;
  }

  /**
   * Sets the ID of the HTML element
   *
   * @param id The ID of the HTML element
   */
   setID(id) {
    this.element.id = id;
  }

  /**
   * Returns the ID of the HTML element
   *
   * @return The ID of the HTML element
   */
   getID() {
    return this.element.id;
  }

  /**
   * Adds a CSS class to the class list of the HTML element
   *
   * @param cl The class to add
   */
   cssAddClass(cl) {
    this.element.classList.add(cl);
  }

  /**
   * Removes a CSS class from the class list of the HTML element
   *
   * @param cl The class to remove
   */
   cssRemoveClass(cl) {
    this.element.classList.remove(cl);
  }

  /**
   * Toggles a CSS class in the class list of the HTML element (if the class is
   * set removes it, otherwise adds it)
   *
   * @param cl The class to toggle
   */
   cssToggleClass(cl) {
    this.element.classList.toggle(cl);
  }

  /**
   * Returns the class list of the HTML element
   *
   * @return The class list of the HTML element
   */
   cssClassList() {
    return this.element.classList;
  }

  /**
   * Returns the style of the HTML element
   *
   * @return The style of the HTML element
   */
   getStyle() {
    return this.element.style;
  }

  /**
   * Sets a property of the HTML element (for example <i>value</i> is a
   * property, <i>readonly</i> is an attribute)
   *
   * @param key the property key
   * @param value The property value
   */
   setProperty(key, value) {
    this.element[key] = value;
  }

  /**
   * Returns a property of the HTML element (for example <i>value</i> is a
   * property, <i>readonly</i> is an attribute)
   *
   * @param key The property key
   * @return The property value
   */
   getProperty(key) {
    return this.element[key];
  }

  /**
   * Sets an attribute of the HTML element (for example <i>value</i> is a
   * property, <i>readonly</i> is an attribute)
   *
   * @param key The attribute key
   * @param value The attribute value
   */
   setAttribute(key, value) {
    this.element.setAttribute(key, value);
  }

  /**
   * Returns an attribute of the HTML element (for example <i>value</i> is a
   * property, <i>readonly</i> is an attribute)
   *
   * @param key The attribute key
   * @return The attribute value
   */
   getAttribute(key) {
    return this.element.getAttribute(key);
  }

  /**
   * Removes an attribute of the HTML element (for example <i>value</i> is a
   * property, <i>readonly</i> is an attribute)
   *
   * @param key The attribute key
   */
   removeAttribute(key) {
    this.element.removeAttribute(key);
  }

  /**
   * Clears the text content of the HTML element
   */
   clearContent() {
    this.element.textContent = "";
  }

  /**
   * Sets the text content of the HTML element
   *
   * @param content The text content of this component
   */
   setContent(content) {
    this.element.textContent = content;
  }

  /**
   * Adds an event listener
   *
   * @param event The event
   * @param listener The listener
   */
   addEventListener(event, listener) {
    this.element.addEventListener(event, listener);
  }

  /**
   * Adds the HTML element to the BODY element
   */
   appendInBody() {
    document.querySelector("body").appendChild(this.element);
  }

  /**
   * Removes the HTML element from the BODY element
   */
   removeFromBody() {
    document.querySelector("body").removeChild(this.element);
  }

  /**
   * Adds a child to the HTML element
   *
   * @param component The child component
   */
   appendChild(component) {
    this.element.appendChild(component.element);
  }

  /**
   * Adds a child to the HTML element
   *
   * @param node The node
   */
   appendNodeChild(node) {
    this.element.appendChild(node);
  }

  /**
   * insert a child to the HTML element before another child
   *
   * @param component The child component
   * @param query The query selector
   */
   insertBefore(component, query) {
    this.element.insertBefore(component.element, this.element.querySelector(query));
  }

  /**
   * insert a child to the HTML element before another child
   *
   * @param node The node
   * @param query The query selector
   */
   insertNodeBefore(node, query) {
    this.element.insertBefore(node, this.element.querySelector(query));
  }

  /**
   * Prepends a child to the HTML element
   *
   * @param component The child component
   */
   prependChild(component) {
    (this.element).prepend(component.element);
  }

  /**
   * Prepends a child to the HTML element
   *
   * @param node The node
   */
   prependNodeChild(node) {
    (this.element).prepend(node);
  }

  /**
   * Adds a child to the HTML element
   *
   * @param query The query selector
   * @param component The child component
   */
   appendChildInTree(query, component) {
    this.element.querySelector(query).appendChild(component.element);
  }

  /**
   * Adds a child to the HTML element
   *
   * @param query The query selector
   * @param node The node
   */
   appendNodeChildInTree(query, node) {
    this.element.querySelector(query).appendChild(node);
  }

  /**
   * insert a child to the HTML element before another child
   *
   * @param queryInTree The query selector in tree
   * @param component The child component
   * @param query The query selector
   */
   insertBeforeInTree(queryInTree, component, query) {
    this.element.querySelector(queryInTree).insertBefore(component.element, this.element.querySelector(query));
  }

  /**
   * insert a child to the HTML element before another child
   *
   * @param queryInTree The query selector in tree
   * @param node The node
   * @param query The query selector
   */
   insertNodeBeforeInTree(queryInTree, node, query) {
    this.element.querySelector(queryInTree).insertBefore(node, this.element.querySelector(query));
  }

  /**
   * Prepends a child to the HTML element
   *
   * @param query The query selector
   * @param component The child component
   */
   prependChildInTree(query, component) {
    (this.element.querySelector(query)).prepend(component.element);
  }

  /**
   * Prepends a child to the HTML element
   *
   * @param query The query selector
   * @param node The node
   */
   prependNodeChildInTree(query, node) {
    (this.element.querySelector(query)).prepend(node);
  }

  /**
   * Returns the style of a child of the HTML element
   *
   * @param index The child index
   * @return The style of a child of the HTML element
   */
   getChilStyleByIndex(index) {
    return (this.element.childNodes.item(index)).style;
  }

  /**
   * Returns the style of a child of the HTML element
   *
   * @param query The query selector
   * @return The style of a child of the HTML element
   */
   getChilStyleByQuery(query) {
    return (this.element.querySelector(query)).style;
  }

  /**
   * Returns a property of a child of the HTML element (for example <i>value</i>
   * is a property, <i>readonly</i> is an attribute)
   *
   * @param query The query selector
   * @param key The property key
   * @return The property value
   */
   getChildPropertyByQuery(query, key) {
    return this.element.querySelector(query)[key];
  }

  /**
   * Sets a property of a child of the HTML element (for example <i>value</i>
   * is a property, <i>readonly</i> is an attribute)
   *
   * @param query The query selector
   * @param key The property key
   * @param value The property value
   */
   setChildPropertyByQuery(query, key, value) {
    let el = this.element.querySelector(query);
    el[key] = value;
  }

  /**
   * Sets an attribute of a child of the HTML element (for example <i>value</i>
   * is a property, <i>readonly</i> is an attribute)
   *
   * @param index The child index
   * @param key The attribute key
   * @param value The attribute value
   */
   setChildAttributeByIndex(index, key, value) {
    (this.element.childNodes.item(index)).setAttribute(key, value);
  }

  /**
   * Sets an attribute of a child of the HTML element (for example <i>value</i>
   * is a property, <i>readonly</i> is an attribute)
   *
   * @param query The query selector
   * @param key The attribute key
   * @param value The attribute value
   */
   setChildAttributeByQuery(query, key, value) {
    this.element.querySelector(query).setAttribute(key, value);
  }

  /**
   * Returns an attribute of a child of the HTML element (for example
   * <i>value</i> is a property, <i>readonly</i> is an attribute)
   *
   * @param index The child index
   * @param key The attribute key
   * @return The attribute value
   */
   getChildAttributeByIndex(index, key) {
    return (this.element.childNodes.item(index)).getAttribute(key);
  }

  /**
   * Returns an attribute of a child of the HTML element (for example
   * <i>value</i> is a property, <i>readonly</i> is an attribute)
   *
   * @param query The query selector
   * @param key The attribute key
   * @return The attribute value
   */
   getChildAttributeByQuery(query, key) {
    return this.element.querySelector(query).getAttribute(key);
  }

  /**
   * Removes an attribute of a child the HTML element (for example <i>value</i>
   * is a property, <i>readonly</i> is an attribute)
   *
   * @param query The query selector
   * @param key The attribute key
   */
   removeChildAttributeByQuery(query, key) {
    this.element.querySelector(query).removeAttribute(key);
  }

  /**
   * Clears the text content of a child of the HTML element
   *
   * @param query The query selector
   */
   clearChildContentByQuery(query) {
    this.element.querySelector(query).textContent = "";
  }

  /**
   * Adds an event listener to a child of the HTML element
   *
   * @param query The query selector
   * @param event The event
   * @param listener The listener
   */
   addChildEventListenerByQuery(query, event, listener) {
    this.element.querySelector(query).addEventListener(event, listener);
  }

  /**
   * Returns the child count of the HTML element
   *
   * @return The child count of the HTML element
   */
   getChildCount() {
    return this.element.childElementCount;
  }
}
/**
 * The javax.swing.AbstractButton clone
 *
 * @author gianpiero.diblasi
 */
class AbstractButton extends JSComponent {

   listeners = new Array();

  /**
   * Creates the object
   *
   * @param element The HTML element representing this component
   */
  constructor(element) {
    super(element);
  }

  /**
   * Clone of javax.swing.AbstractButton.addActionListener
   *
   * @param listener The listener
   */
   addActionListener(listener) {
    this.listeners.push(listener);
  }

  /**
   * The method for click events
   */
   onclick() {
    let event = new ActionEvent();
    this.listeners.forEach(listener => {
      if (typeof listener === "function") {
        listener(event);
      } else {
        listener.actionPerformed(event);
      }
    });
  }

  /**
   * Clone of javax.swing.AbstractButton.setTooltip
   *
   * @param text The text
   */
   setTooltip(text) {
    this.setAttribute("title", text);
  }

  /**
   * Sets the icon
   *
   * @param producer The icon producer
   */
   setIcon(producer) {
    this.prependNodeChild(producer.produce());
  }
}
/**
 * The javax.swing.JButton clone
 *
 * @author gianpiero.diblasi
 */
class JSButton extends AbstractButton {

  /**
   * Creates the object
   */
  constructor() {
    super(document.createElement("button"));
    this.cssAddClass("jsbutton");
    this.addEventListener("click", event => this.onclick());
  }

  /**
   * Clone of javax.swing.JButton.setText
   *
   * @param text The text
   */
   setText(text) {
    this.setContent(text);
  }

  /**
   * Clone of javax.swing.JButton.setContentAreaFilled
   *
   * @param b true to fill the area, false otherwise
   */
   setContentAreaFilled(b) {
    if (b) {
      this.cssRemoveClass("jsbutton-outline");
    } else {
      this.cssAddClass("jsbutton-outline");
    }
  }
}
/**
 * The javax.swing.JCheckBox clone
 *
 * @author gianpiero.diblasi
 */
class JSCheckBox extends AbstractButton {

   checkbox = null;

   text = null;

  /**
   * Creates the object
   */
  constructor() {
    super(document.createElement("label"));
    this.cssAddClass("jscheckbox");
    this.checkbox = document.createElement("input");
    this.checkbox.setAttribute("type", "checkbox");
    this.checkbox.addEventListener("change", event => this.onclick());
    this.appendNodeChild(this.checkbox);
    this.text = document.createTextNode("");
    this.appendNodeChild(this.text);
  }

  /**
   * Clone of javax.swing.JCheckBox.setText
   *
   * @param text The text
   */
   setText(text) {
    this.text.textContent = text;
  }

  /**
   * Clone of javax.swing.JCheckBox.getText
   *
   * @return The text
   */
   getText() {
    return this.text.textContent;
  }

  /**
   * Clone of javax.swing.JCheckBox.setSelected
   *
   * @param selected true to select, false otherwise
   */
   setSelected(selected) {
    this.checkbox.checked = selected;
  }

  /**
   * Clone of javax.swing.JCheckBox.isSelected
   *
   * @return true if selected, false otherwise
   */
   isSelected() {
    return this.checkbox.checked;
  }

   setEnabled(b) {
    super.setEnabled(b);
    if (b) {
      this.checkbox.removeAttribute("disabled");
    } else {
      this.checkbox.setAttribute("disabled", "disabled");
    }
  }
}
/**
 * The javax.swing.JRadioButton clone
 *
 * @author gianpiero.diblasi
 */
class JSRadioButton extends AbstractButton {

   radiobutton = null;

   text = null;

  /**
   * Creates the object
   */
  constructor() {
    super(document.createElement("label"));
    this.cssAddClass("jsradiobutton");
    this.radiobutton = document.createElement("input");
    this.radiobutton.setAttribute("type", "radio");
    this.radiobutton.addEventListener("change", event => this.onclick());
    this.appendNodeChild(this.radiobutton);
    this.text = document.createTextNode("");
    this.appendNodeChild(this.text);
  }

  /**
   * Set this radiobutton as a toggle
   */
   setToggle() {
    this.setAttribute("role", "toggle");
  }

  /**
   * Clone of javax.swing.JRadioButton.setText
   *
   * @param text The text
   */
   setText(text) {
    this.text.textContent = text;
  }

  /**
   * Clone of javax.swing.JRadioButton.getText
   *
   * @return The text
   */
   getText() {
    return this.text.textContent;
  }

  /**
   * Clone of javax.swing.JRadioButton.setSelected
   *
   * @param selected true to select, false otherwise
   */
   setSelected(selected) {
    this.radiobutton.checked = selected;
  }

  /**
   * Clone of javax.swing.JRadioButton.isSelected
   *
   * @return true if selected, false otherwise
   */
   isSelected() {
    return this.radiobutton.checked;
  }

   setEnabled(b) {
    super.setEnabled(b);
    if (b) {
      this.radiobutton.removeAttribute("disabled");
    } else {
      this.radiobutton.setAttribute("disabled", "disabled");
    }
  }

  /**
   * Clone of javax.swing.JRadioButton.setContentAreaFilled
   *
   * @param b true to fill the area, false otherwise
   */
   setContentAreaFilled(b) {
    if (b) {
      this.cssRemoveClass("jsradiobutton-outline");
    } else {
      this.cssAddClass("jsradiobutton-outline");
    }
  }
}
/**
 * The javax.swing.JToggleButton clone
 *
 * @author gianpiero.diblasi
 */
class JSToggleButton extends AbstractButton {

   togglebutton = null;

   text = null;

  /**
   * Creates the object
   */
  constructor() {
    super(document.createElement("label"));
    this.cssAddClass("jstogglebutton");
    this.togglebutton = document.createElement("input");
    this.togglebutton.setAttribute("type", "checkbox");
    this.togglebutton.addEventListener("change", event => this.onclick());
    this.appendNodeChild(this.togglebutton);
    this.text = document.createTextNode("");
    this.appendNodeChild(this.text);
  }

  /**
   * Clone of javax.swing.JToggleButton.setText
   *
   * @param text The text
   */
   setText(text) {
    this.text.textContent = text;
  }

  /**
   * Clone of javax.swing.JToggleButton.getText
   *
   * @return The text
   */
   getText() {
    return this.text.textContent;
  }

  /**
   * Clone of javax.swing.JToggleButton.setSelected
   *
   * @param selected true to select, false otherwise
   */
   setSelected(selected) {
    this.togglebutton.checked = selected;
  }

  /**
   * Clone of javax.swing.JToggleButton.isSelected
   *
   * @return true if selected, false otherwise
   */
   isSelected() {
    return this.togglebutton.checked;
  }

   setEnabled(b) {
    super.setEnabled(b);
    if (b) {
      this.togglebutton.removeAttribute("disabled");
    } else {
      this.togglebutton.setAttribute("disabled", "disabled");
    }
  }

  /**
   * Clone of javax.swing.JToggleButton.setContentAreaFilled
   *
   * @param b true to fill the area, false otherwise
   */
   setContentAreaFilled(b) {
    if (b) {
      this.cssRemoveClass("jstogglebutton-outline");
    } else {
      this.cssAddClass("jstogglebutton-outline");
    }
  }
}
/**
 * The javax.swing.Box.Filler clone
 *
 * @author gianpiero.diblasi
 */
class Filler extends JSComponent {

  /**
   * Creates the object
   *
   * @param min The mininum dimension
   * @param pref The preferred dimension
   * @param max The maximum dimension
   */
  constructor(min, pref, max) {
    super(document.createElement("span"));
    this.cssAddClass("jscomponent-box-filler");
    this.getStyle().minWidth = min.width + "px";
    this.getStyle().minHeight = min.height + "px";
    this.getStyle().width = pref.width + "px";
    this.getStyle().height = pref.height + "px";
    this.getStyle().maxWidth = max.width + "px";
    this.getStyle().maxHeight = max.height + "px";
    if (min.width === 0 && min.height === 0 && pref.width === 0 && pref.height === 0) {
      this.getStyle().flexGrow = "1";
    }
  }
}
/**
 * The javax.swing.JDialog clone
 *
 * @author gianpiero.diblasi
 */
class JSDialog extends JSComponent {

   title = new JSLabel();

   close = new JSButton();

   contentPane = new JSPanel();

   listeners = new Array();

  /**
   * Creates the object
   */
  constructor() {
    super(document.createElement("dialog"));
    this.cssAddClass("jsdialog");
    this.addEventListener("close", event => this.onclose());
    this.appendNodeChild(document.createElement("article"));
    let header = document.createElement("header");
    header.classList.add("jsdialog-header");
    this.appendNodeChildInTree("article", header);
    let panel = new JSPanel();
    panel.setLayout(new BorderLayout(0, 0));
    panel.add(this.title, BorderLayout.CENTER);
    panel.add(this.close, BorderLayout.EAST);
    this.close.addActionListener(event => this.setVisible(false));
    this.appendChildInTree("header", panel);
    this.contentPane.setLayout(new BorderLayout(0, 0));
    this.contentPane.cssAddClass("jsdialog-content");
    this.appendChildInTree("article", this.contentPane);
    this.appendInBody();
  }

  /**
   * Clone of javax.swing.JDialog.dispose
   */
   dispose() {
    this.removeFromBody();
  }

  /**
   * Clone of javax.swing.JDialog.setTitle
   *
   * @param title The title
   */
   setTitle(title) {
    this.title.setText(title);
  }

  /**
   * Clone of javax.swing.JDialog.getContentPane
   *
   * @return The content pane
   */
   getContentPane() {
    return this.contentPane;
  }

  /**
   * Clone of javax.swing.JDialog.setVisible
   *
   * @param b true to show the dialog, false otherwise
   */
   setVisible(b) {
    if (!b) {
      this.invoke("close()");
    } else {
      this.invoke("showModal()");
    }
  }

  /**
   * Adds a listener of window closed
   *
   * @param listener The listener
   */
   addWindowClosedListener(listener) {
    this.listeners.push(listener);
  }

   onclose() {
    let event = new WindowEvent();
    this.listeners.forEach(listener => {
      if (typeof listener === "function") {
        listener(event);
      } else {
        listener.windowClosed(event);
      }
    });
  }
}
/**
 * The abstract component for dropdown objects
 *
 * @author gianpiero.diblasi
 */
class JSDropDown extends JSComponent {

   dropDownContentSelector = null;

  /**
   * Creates the object
   *
   * @param dropDownContentSelector The CSS selector to select the content
   * inside the dropdown
   */
  constructor(dropDownContentSelector) {
    super(document.createElement("details"));
    this.cssAddClass("jsdropdown");
    this.appendNodeChild(document.createElement("summary"));
    this.dropDownContentSelector = dropDownContentSelector;
    this.addEventListener("toggle", event => {
      if ("" + this.getProperty("open") === "true") {
        this.computePopupPosition();
      } else {
        this.resetPopupPosition();
      }
    });
  }

  /**
   * Computes the popup position
   */
   computePopupPosition() {
    this.resetPopupPosition();
    this.getChilStyleByQuery(this.dropDownContentSelector).visibility = "visible";
    let rect = this.invokeInTree(this.dropDownContentSelector, "getBoundingClientRect()");
    let rectSummary = this.invokeInTree("summary", "getBoundingClientRect()");
    if (rectSummary.left + rect.width < document.body.scrollWidth) {
      this.getChilStyleByQuery(this.dropDownContentSelector).left = rectSummary.left + "px";
    } else if (rectSummary.right - rect.width > 0) {
      this.getChilStyleByQuery(this.dropDownContentSelector).left = (rectSummary.right - rect.width) + "px";
    } else {
      this.getChilStyleByQuery(this.dropDownContentSelector).left = "auto";
      this.getChilStyleByQuery(this.dropDownContentSelector).right = "5px";
    }
    if (rectSummary.bottom + rect.height < document.body.scrollHeight) {
      this.getChilStyleByQuery(this.dropDownContentSelector).top = rectSummary.bottom + "px";
    } else if (rectSummary.top - rect.height > 0) {
      this.getChilStyleByQuery(this.dropDownContentSelector).top = "calc(" + (rectSummary.top - rect.height) + "px - 1rem)";
    } else {
      this.getChilStyleByQuery(this.dropDownContentSelector).top = "auto";
      this.getChilStyleByQuery(this.dropDownContentSelector).bottom = "5px";
    }
  }

   resetPopupPosition() {
    this.getChilStyleByQuery(this.dropDownContentSelector).removeProperty("visibility");
    this.getChilStyleByQuery(this.dropDownContentSelector).removeProperty("top");
    this.getChilStyleByQuery(this.dropDownContentSelector).removeProperty("left");
    this.getChilStyleByQuery(this.dropDownContentSelector).removeProperty("bottom");
    this.getChilStyleByQuery(this.dropDownContentSelector).removeProperty("right");
  }
}
/**
 * The javax.swing.JColorChooser clone
 *
 * @author gianpiero.diblasi
 */
class JSColorChooser extends JSDropDown {

   container = new JSComponent(document.createElement("div"));

   componentOpacity = new JSComponent(document.createElement("div"));

   panel = new JSColorPanel();

   closeOnChange = true;

   listeners = new Array();

  /**
   * Creates the object
   */
  constructor() {
    super(".jscolorpanel");
    this.cssAddClass("jscolorchooser");
    let color = this.getSelectedColor();
    this.componentOpacity.cssAddClass("jscolorchooser-preview-transparent");
    this.componentOpacity.getStyle().backgroundColor = color.getRGBA_String();
    this.container.cssAddClass("jscolorchooser-preview");
    this.container.appendChild(this.componentOpacity);
    this.setContainerBorder(color);
    this.appendChildInTree("summary", this.container);
    this.panel.addChangeListener(event => this.onchange());
    this.appendChild(this.panel);
  }

  /**
   * Adds an extra tab
   *
   * @param title The title
   * @param panel The extra tab
   */
   addExtraTab(title, panel) {
    this.panel.addExtraTab(title, panel);
  }

  /**
   * Returns the selected color
   *
   * @return The selected color
   */
   getSelectedColor() {
    return this.panel.getSelectedColor();
  }

  /**
   * Sets the selected color
   *
   * @param color The selected color
   */
   setSelectedColor(color) {
    this.panel.setSelectedColor(color);
    let c = this.getSelectedColor();
    this.componentOpacity.getStyle().backgroundColor = c.getRGBA_String();
    this.setContainerBorder(c);
  }

  /**
   * Sets the visibility of the opacity selectors
   *
   * @param b true to make the opacity selectors visible, false otherwise
   */
   setOpacityVisible(b) {
    this.panel.setOpacityVisible(b);
  }

  /**
   * Returns if the selected color is "adjusting"
   *
   * @return true if the selected color is adjusting, false otherwise
   */
   getValueIsAdjusting() {
    return this.panel.getValueIsAdjusting();
  }

  /**
   * Adds a change listener
   *
   * @param listener The listener
   */
   addChangeListener(listener) {
    this.listeners.push(listener);
  }

   onchange() {
    let color = this.getSelectedColor();
    this.componentOpacity.getStyle().backgroundColor = color.getRGBA_String();
    this.setContainerBorder(color);
    if (!this.getValueIsAdjusting() && this.closeOnChange) {
      this.removeAttribute("open");
      this.invoke("querySelector('summary').focus()");
    }
    let event = new ChangeEvent();
    this.listeners.forEach(listener => {
      if (typeof listener === "function") {
        listener(event);
      } else {
        listener.stateChanged(event);
      }
    });
  }

   setContainerBorder(color) {
    let rgb = new Array();
    let hsl = new Array();
    rgb[0] = color.red;
    rgb[1] = color.green;
    rgb[2] = color.blue;
    Color.RGBtoHSL(rgb, hsl);
    this.container.getStyle().border = "1px solid " + (hsl[2] > 0.5 ? color.darkened(0.1).getRGB_HEX() : color.lighted(0.1).getRGB_HEX());
  }

   setEnabled(b) {
    super.setEnabled(b);
    if (b) {
      this.removeAttribute("tabIndex");
    } else {
      this.setAttribute("tabIndex", "-1");
    }
  }

  /**
   * Sets if the combobox has to be closed on change
   *
   * @param b true to close the combobox on change, false otherwise
   */
   setCloseOnChange(b) {
    this.closeOnChange = b;
  }

  /**
   * Shows a dialog to select the color
   *
   * @param title The title
   * @param color The initial color (it can be null)
   * @param opacityVisible true to make the opacity selectors visible, false
   * otherwise
   * @param extraTabs An associative key/value array of extra tabs (it can be
   * null), key = title, value = the extra tab
   * @param response The function to call on close
   */
  static  showDialog(title, color, opacityVisible, extraTabs, response) {
    let panel = new JSColorPanel();
    if (color) {
      panel.setSelectedColor(color);
    }
    panel.setOpacityVisible(opacityVisible);
    if (extraTabs) {
      Object.keys(extraTabs).forEach(key => panel.addExtraTab("" + key, extraTabs[key]));
    }
    JSOptionPane.showInputDialog(panel, title, (changeListener) => panel.addChangeListener(changeListener), () => true, res => {
      if (res === JSOptionPane.OK_OPTION) {
        response(panel.getSelectedColor());
      }
    });
  }
}
/**
 * The javax.swing.JComboBox clone
 *
 * @author gianpiero.diblasi
 * @param <T> The type
 */
class JSComboBox extends JSDropDown {

   listeners = new Array();

   modelAndRenderer = null;

  /**
   * Creates the object
   */
  constructor() {
    super("ul");
    this.cssAddClass("jscombobox");
    this.appendNodeChild(document.createElement("ul"));
  }

  /**
   * Clone of javax.swing.JComboBox.getSelectedItem
   *
   * @return The selected item
   */
   getSelectedItem() {
    return this.modelAndRenderer.getSelectedElement();
  }

  /**
   * Clone of javax.swing.JComboBox.getSelectedItem
   *
   * @param object The selected item
   */
   setSelectedItem(object) {
    this.modelAndRenderer.setSelectedElement(object);
  }

  /**
   * Sets the model
   *
   * @param modelAndRenderer The model
   */
   setModelAndRenderer(modelAndRenderer) {
    this.modelAndRenderer = modelAndRenderer;
    this.modelAndRenderer.setComboBox(this);
  }

  /**
   * Returns the model
   *
   * @return The model
   */
   getModelAndRenderer() {
    return this.modelAndRenderer;
  }

  /**
   * Clone of javax.swing.JComboBox.addActionListener
   *
   * @param listener The listener
   */
   addActionListener(listener) {
    this.listeners.push(listener);
  }

  /**
   * The method for click events
   *
   * @return null
   */
   onclick() {
    let event = new ActionEvent();
    this.listeners.forEach(listener => {
      if (typeof listener === "function") {
        listener(event);
      } else {
        listener.actionPerformed(event);
      }
    });
    return null;
  }

   setEnabled(b) {
    super.setEnabled(b);
    if (b) {
      this.removeAttribute("tabIndex");
    } else {
      this.setAttribute("tabIndex", "-1");
    }
  }
}
/**
 * The javax.swing.JFrame clone
 *
 * @author gianpiero.diblasi
 */
class JSFrame extends JSComponent {

   contentPane = new JSPanel();

  /**
   * Creates the object
   */
  constructor() {
    super(document.querySelector("body"));
    this.cssAddClass("jsframe");
    this.appendChild(this.contentPane);
    this.contentPane.setLayout(new BorderLayout(0, 0));
  }

  /**
   * Clone of javax.swing.JFrame.setTitle
   *
   * @param title The title
   */
   setTitle(title) {
    if (title) {
      let tag = document.querySelector("title");
      if (!tag) {
        tag = document.createElement("title");
        document.getElementsByTagName("head")[0].appendChild(tag);
      }
      tag.textContent = title;
    }
  }

  /**
   * Clone of javax.swing.JFrame.getContentPane
   *
   * @return The content pane
   */
   getContentPane() {
    return this.contentPane;
  }
}
/**
 * The javax.swing.JLabel clone
 *
 * @author gianpiero.diblasi
 */
class JSLabel extends JSComponent {

  /**
   * Creates the object
   */
  constructor() {
    super(document.createElement("label"));
    this.cssAddClass("jslabel");
  }

  /**
   * Clone of javax.swing.JLabel.setText
   *
   * @param text The text
   */
   setText(text) {
    this.setContent(text);
  }
}
/**
 * The javax.swing.JPanel clone
 *
 * @author gianpiero.diblasi
 */
class JSPanel extends JSComponent {

   layoutManager = null;

  /**
   * Creates the object
   */
  constructor() {
    super(document.createElement("div"));
    this.cssAddClass("jspanel");
    this.setLayout(new FlowLayout(FlowLayout.CENTER, 5, 5));
  }

  /**
   * Clone of javax.swing.JPanel.setLayout
   *
   * @param layoutManager The layout manager
   */
   setLayout(layoutManager) {
    if (this.layoutManager) {
      this.layoutManager.resetPanel(this);
    }
    this.layoutManager = layoutManager;
    this.layoutManager.setPanel(this);
  }

  /**
   * Clone of javax.swing.JPanel.getLayout
   *
   * @return The layout manager
   */
   getLayout() {
    return this.layoutManager;
  }

  /**
   * Clone of javax.swing.JPanel.add
   *
   * @param component The component
   * @param constraints The constraints
   */
   add(component, constraints) {
    this.layoutManager.addInPanel(this, component, constraints);
  }
}
/**
 * The abstract panel to add extra tabs to the JSColorPanel
 *
 * @author gianpiero.diblasi
 */
class JSAbstractColorExtraTabPanel extends JSPanel {

   listeners = new Array();

  /**
   * Returns the selected color
   *
   * @return The selected color
   */
   getSelectedColor() {
  }

  /**
   * Sets the selected color
   *
   * @param color The selected color
   */
   setSelectedColor(color) {
  }

  /**
   * Returns if the selected color is "adjusting"
   *
   * @return true if the selected color is adjusting, false otherwise
   */
   getValueIsAdjusting() {
  }

  /**
   * Adds a change listener
   *
   * @param listener The listener
   */
   addChangeListener(listener) {
    this.listeners.push(listener);
  }

  /**
   * to call to invoke a change event
   */
   onchange() {
    let event = new ChangeEvent();
    this.listeners.forEach(listener => {
      if (typeof listener === "function") {
        listener(event);
      } else {
        listener.stateChanged(event);
      }
    });
  }
}
/**
 * The abstract panel to show colors in a color format
 *
 * @author gianpiero.diblasi
 */
class JSAbstractColorFormatPanel extends JSPanel {

   buttonGroup = new ButtonGroup();

   square = new JSComponent(document.createElement("canvas"));

  /**
   * The rendering context of the square
   */
   ctxSquare = this.square.invoke("getContext('2d')");

   rect = new JSComponent(document.createElement("canvas"));

  /**
   * The rendering context of the rect
   */
   ctxRect = this.rect.invoke("getContext('2d')");

   listeners = new Array();

   squareDown = false;

   rectDown = false;

   valueIsAdjusting = false;

  /**
   * The square size
   */
  static  SQUARE_SIZE = 180;

  /**
   * the rect width
   */
  static  RECT_WIDTH = 25;

  /**
   * The rect height
   */
  static  RECT_HEIGHT = 180;

  /**
   * Creates the object
   */
  constructor() {
    super();
    this.setLayout(new GridBagLayout());
    this.square.setProperty("width", "" + JSAbstractColorFormatPanel.SQUARE_SIZE);
    this.square.setProperty("height", "" + JSAbstractColorFormatPanel.SQUARE_SIZE);
    this.square.getStyle().cursor = "pointer";
    this.square.addEventListener("mousedown", event => this.squareEvent(event, "down"));
    this.square.addEventListener("mousemove", event => this.squareEvent(event, "move"));
    this.square.addEventListener("mouseup", event => this.squareEvent(event, "up"));
    this.add(this.square, new GBC(0, 0).h(7).a(GBC.NORTH).i(0, 0, 0, 5));
    this.rect.setProperty("width", "" + JSAbstractColorFormatPanel.RECT_WIDTH);
    this.rect.setProperty("height", "" + JSAbstractColorFormatPanel.RECT_HEIGHT);
    this.rect.getStyle().cursor = "pointer";
    this.rect.addEventListener("mousedown", event => this.rectEvent(event, "down"));
    this.rect.addEventListener("mousemove", event => this.rectEvent(event, "move"));
    this.rect.addEventListener("mouseup", event => this.rectEvent(event, "up"));
    this.add(this.rect, new GBC(1, 0).h(7).a(GBC.NORTH).i(0, 0, 0, 5));
  }

  /**
   * Adds a radio button
   *
   * @param radio The radio button
   * @param text The text
   * @param selected true to select the radio button, false otherwise
   * @param gridx The grid x
   * @param gridy The grid y
   */
   addRadio(radio, text, selected, gridx, gridy) {
    this.buttonGroup.add(radio);
    radio.setText(text);
    radio.setSelected(selected);
    radio.addActionListener(event => this.drawAll());
    this.add(radio, new GBC(gridx, gridy).a(GBC.WEST));
  }

  /**
   * Adds a slider
   *
   * @param slider The slider
   * @param spinner The connected spinner
   * @param value The value
   * @param max The max value
   * @param gridx The grid x
   * @param gridy The grid y
   */
   addSlider(slider, spinner, value, max, gridx, gridy) {
    slider.setValue(value);
    slider.setMaximum(max);
    slider.getStyle().minWidth = "20rem";
    slider.addChangeListener(event => this.sliderToSpinner(slider, spinner));
    this.add(slider, new GBC(gridx, gridy).w(2).f(GBC.HORIZONTAL).wx(1));
  }

  /**
   * Adds a spinner
   *
   * @param spinner The spinner
   * @param slider The connected slider
   * @param value The value
   * @param max The max value
   * @param gridx The grid x
   * @param gridy The grid y
   */
   addSpinner(spinner, slider, value, max, gridx, gridy) {
    spinner.setModel(new SpinnerNumberModel(value, 0, max, 1));
    spinner.getStyle().minWidth = "3rem";
    spinner.getChilStyleByQuery("input[type=number]").minWidth = "2.5rem";
    spinner.getChilStyleByQuery("input[type=number]").width = "2.5rem";
    spinner.addChangeListener(event => this.spinnerToSlider(spinner, slider));
    this.add(spinner, new GBC(gridx, gridy).a(GBC.EAST));
  }

   sliderToSpinner(slider, spinner) {
    spinner.setValue(slider.getValue());
    this.drawAll();
    this.onchange(slider.getValueIsAdjusting());
  }

   spinnerToSlider(spinner, slider) {
    slider.setValue(spinner.getValue());
    this.drawAll();
    this.onchange(spinner.getValueIsAdjusting());
  }

  /**
   * Draws all objects
   */
   drawAll() {
    this.drawSquare();
    this.drawSquareSelector();
    this.drawRect();
    this.drawRectSelector();
  }

  /**
   * Draws the square
   */
   drawSquare() {
  }

  /**
   * Draws the square selector
   */
   drawSquareSelector() {
  }

  /**
   * Draws the circle selector
   *
   * @param x The x-axis coordinate
   * @param y The y-axis coordinate
   */
   drawCircle(x, y) {
    let dash = new Array();
    this.ctxSquare.beginPath();
    this.ctxSquare.arc(x * JSColorRGBPanel.SQUARE_SIZE, (1 - y) * JSColorRGBPanel.SQUARE_SIZE, 5, 0, 2 * Math.PI);
    this.ctxSquare.closePath();
    this.ctxSquare.strokeStyle = this.getStrokeStyle("black");
    this.ctxSquare.setLineDash(dash);
    this.ctxSquare.stroke();
    dash.push(2.5, 2.5);
    this.ctxSquare.beginPath();
    this.ctxSquare.arc(x * JSColorRGBPanel.SQUARE_SIZE, (1 - y) * JSColorRGBPanel.SQUARE_SIZE, 5, 0, 2 * Math.PI);
    this.ctxSquare.closePath();
    this.ctxSquare.strokeStyle = this.getStrokeStyle("white");
    this.ctxSquare.setLineDash(dash);
    this.ctxSquare.stroke();
  }

  /**
   * Draws the rect
   */
   drawRect() {
  }

  /**
   * Draws the rect selector
   */
   drawRectSelector() {
  }

  /**
   * Draws the line
   *
   * @param y The y-axis coordinate
   */
   drawLine(y) {
    let dash = new Array();
    this.ctxRect.beginPath();
    this.ctxRect.moveTo(0, (1 - y) * JSColorRGBPanel.RECT_HEIGHT);
    this.ctxRect.lineTo(JSColorRGBPanel.RECT_WIDTH, (1 - y) * JSColorRGBPanel.RECT_HEIGHT);
    this.ctxRect.closePath();
    this.ctxRect.strokeStyle = this.getStrokeStyle("black");
    this.ctxRect.setLineDash(dash);
    this.ctxRect.stroke();
    dash.push(2.5, 2.5);
    this.ctxRect.beginPath();
    this.ctxRect.moveTo(0, (1 - y) * JSColorRGBPanel.RECT_HEIGHT);
    this.ctxRect.lineTo(JSColorRGBPanel.RECT_WIDTH, (1 - y) * JSColorRGBPanel.RECT_HEIGHT);
    this.ctxRect.closePath();
    this.ctxRect.strokeStyle = this.getStrokeStyle("white");
    this.ctxRect.setLineDash(dash);
    this.ctxRect.stroke();
  }

  /**
   * Manages a mouse event on the square
   *
   * @param event The mouse event
   * @param type The event type
   */
   squareEvent(event, type) {
  }

  /**
   * Checks if a mouse event can be managed on the square
   *
   * @param type The event type
   * @return true if the mouse event can be managed on the square, false
   * otherwise
   */
   canDoItSquare(type) {
    switch(type) {
      case "down":
        this.squareDown = true;
        return true;
      case "move":
        return this.squareDown;
      case "up":
        this.squareDown = false;
        return true;
      default:
        return false;
    }
  }

  /**
   * Manages a mouse event on the rect
   *
   * @param event The mouse event
   * @param type The event type
   */
   rectEvent(event, type) {
  }

  /**
   * Checks if a mouse event can be managed on the rect
   *
   * @param type The event type
   * @return true if the mouse event can be managed on the square, false
   * otherwise
   */
   canDoItRect(type) {
    switch(type) {
      case "down":
        this.rectDown = true;
        return true;
      case "move":
        return this.rectDown;
      case "up":
        this.rectDown = false;
        return true;
      default:
        return false;
    }
  }

  /**
   * Returns if the selected color is "adjusting"
   *
   * @return true if the selected color is adjusting, false otherwise
   */
   getValueIsAdjusting() {
    return this.valueIsAdjusting;
  }

  /**
   * Adds a change listener
   *
   * @param listener The listener
   */
   addChangeListener(listener) {
    this.listeners.push(listener);
  }

  /**
   * To call to invoke a change event
   *
   * @param b true if the value is adjusting, false otherwise
   */
   onchange(b) {
    this.valueIsAdjusting = b;
    let event = new ChangeEvent();
    this.listeners.forEach(listener => {
      if (typeof listener === "function") {
        listener(event);
      } else {
        listener.stateChanged(event);
      }
    });
  }

  /**
   * Returns the selected color
   *
   * @return The selected color
   */
   getSelectedColor() {
  }

  /**
   * Sets the selected color
   *
   * @param color The selected color
   */
   setSelectedColor(color) {
  }

   getStrokeStyle(style) {
    return style;
  }
}
/**
 * The panel to show colors in RGB format
 *
 * @author gianpiero.diblasi
 */
class JSColorCMYKPanel extends JSAbstractColorFormatPanel {

   cyan = new JSRadioButton();

   cyanSlider = new JSSlider();

   cyanSpinner = new JSSpinner();

   magenta = new JSRadioButton();

   magentaSlider = new JSSlider();

   magentaSpinner = new JSSpinner();

   yellow = new JSRadioButton();

   yellowSlider = new JSSlider();

   yellowSpinner = new JSSpinner();

   blackSlider = new JSSlider();

   blackSpinner = new JSSpinner();

  /**
   * Creates the object
   */
  constructor() {
    super();
    this.addRadio(this.cyan, Translations.JSColorChooser_CYAN, true, 2, 0);
    this.addRadio(this.magenta, Translations.JSColorChooser_MAGENTA, false, 2, 2);
    this.addRadio(this.yellow, Translations.JSColorChooser_YELLOW, false, 2, 4);
    let label = new JSLabel();
    label.setText(Translations.JSColorChooser_BLACK);
    this.add(label, new GBC(2, 6).a(GBC.WEST));
    this.addSlider(this.cyanSlider, this.cyanSpinner, 0, 255, 2, 1);
    this.addSlider(this.magentaSlider, this.magentaSpinner, 0, 255, 2, 3);
    this.addSlider(this.yellowSlider, this.yellowSpinner, 0, 255, 2, 5);
    this.addSlider(this.blackSlider, this.blackSpinner, 0, 255, 2, 7);
    this.addSpinner(this.cyanSpinner, this.cyanSlider, 0, 255, 3, 0);
    this.addSpinner(this.magentaSpinner, this.magentaSlider, 0, 255, 3, 2);
    this.addSpinner(this.yellowSpinner, this.yellowSlider, 0, 255, 3, 4);
    this.addSpinner(this.blackSpinner, this.blackSlider, 0, 255, 3, 6);
    this.drawAll();
  }

   getSelectedColor() {
    let cmyk = new Array();
    let rgb = new Array();
    cmyk[0] = this.cyanSlider.getValue();
    cmyk[1] = this.magentaSlider.getValue();
    cmyk[2] = this.yellowSlider.getValue();
    cmyk[3] = this.blackSlider.getValue();
    Color.CMYKtoRGB(cmyk, rgb);
    return new Color(rgb[0], rgb[1], rgb[2], 255);
  }

   setSelectedColor(color) {
    let rgb = new Array();
    let cmyk = new Array();
    rgb[0] = color.red;
    rgb[1] = color.green;
    rgb[2] = color.blue;
    Color.RGBtoCMYK(rgb, cmyk);
    this.setColor(cmyk[0], cmyk[1], cmyk[2], cmyk[3], false, false);
  }

   drawSquare() {
    let imageData = this.ctxSquare.createImageData(JSColorCMYKPanel.SQUARE_SIZE, JSColorCMYKPanel.SQUARE_SIZE);
    let data = imageData.data;
    let cmyk = new Array();
    let rgb = new Array();
    for (let y = 0; y < JSColorCMYKPanel.SQUARE_SIZE; y++) {
      for (let x = 0; x < JSColorCMYKPanel.SQUARE_SIZE; x++) {
        if (this.cyan.isSelected()) {
          cmyk[0] = this.cyanSlider.getValue();
          cmyk[1] = 255 * x / JSColorCMYKPanel.SQUARE_SIZE;
          cmyk[2] = 255 * y / JSColorCMYKPanel.SQUARE_SIZE;
        } else if (this.magenta.isSelected()) {
          cmyk[0] = 255 * x / JSColorCMYKPanel.SQUARE_SIZE;
          cmyk[1] = this.magentaSlider.getValue();
          cmyk[2] = 255 * y / JSColorCMYKPanel.SQUARE_SIZE;
        } else if (this.yellow.isSelected()) {
          cmyk[0] = 255 * x / JSColorCMYKPanel.SQUARE_SIZE;
          cmyk[1] = 255 * y / JSColorCMYKPanel.SQUARE_SIZE;
          cmyk[2] = this.yellowSlider.getValue();
        }
        cmyk[3] = this.blackSlider.getValue();
        Color.CMYKtoRGB(cmyk, rgb);
        let pos = ((JSColorCMYKPanel.SQUARE_SIZE - y) * JSColorCMYKPanel.SQUARE_SIZE + x) * 4;
        data[pos] = rgb[0];
        data[pos + 1] = rgb[1];
        data[pos + 2] = rgb[2];
        data[pos + 3] = 255;
      }
    }
    this.ctxSquare.putImageData(imageData, 0, 0);
  }

   drawSquareSelector() {
    let x = 0, y = 0;
    if (this.cyan.isSelected()) {
      x = this.magentaSpinner.getValue() / 255;
      y = this.yellowSpinner.getValue() / 255;
    } else if (this.magenta.isSelected()) {
      x = this.cyanSpinner.getValue() / 255;
      y = this.yellowSpinner.getValue() / 255;
    } else if (this.yellow.isSelected()) {
      x = this.cyanSpinner.getValue() / 255;
      y = this.magentaSpinner.getValue() / 255;
    }
    this.drawCircle(x, y);
  }

   drawRect() {
    let imageData = this.ctxRect.createImageData(JSColorCMYKPanel.RECT_WIDTH, JSColorCMYKPanel.RECT_HEIGHT);
    let data = imageData.data;
    let cmyk = new Array();
    let rgb = new Array();
    for (let y = 0; y < JSColorCMYKPanel.RECT_HEIGHT; y++) {
      if (this.cyan.isSelected()) {
        cmyk[0] = 255 * y / JSColorCMYKPanel.RECT_HEIGHT;
        cmyk[1] = this.magentaSlider.getValue();
        cmyk[2] = this.yellowSlider.getValue();
      } else if (this.magenta.isSelected()) {
        cmyk[0] = this.cyanSlider.getValue();
        cmyk[1] = 255 * y / JSColorCMYKPanel.RECT_HEIGHT;
        cmyk[2] = this.yellowSlider.getValue();
      } else if (this.yellow.isSelected()) {
        cmyk[0] = this.cyanSlider.getValue();
        cmyk[1] = this.magentaSlider.getValue();
        cmyk[2] = 255 * y / JSColorCMYKPanel.RECT_HEIGHT;
      }
      cmyk[3] = this.blackSlider.getValue();
      Color.CMYKtoRGB(cmyk, rgb);
      for (let x = 0; x < JSColorCMYKPanel.RECT_WIDTH; x++) {
        let pos = ((JSColorCMYKPanel.RECT_HEIGHT - y) * JSColorCMYKPanel.RECT_WIDTH + x) * 4;
        data[pos] = rgb[0];
        data[pos + 1] = rgb[1];
        data[pos + 2] = rgb[2];
        data[pos + 3] = 255;
      }
    }
    this.ctxRect.putImageData(imageData, 0, 0);
  }

   drawRectSelector() {
    let y = 0;
    if (this.cyan.isSelected()) {
      y = this.cyanSpinner.getValue() / 255;
    } else if (this.magenta.isSelected()) {
      y = this.magentaSpinner.getValue() / 255;
    } else if (this.yellow.isSelected()) {
      y = this.yellowSpinner.getValue() / 255;
    }
    this.drawLine(y);
  }

   squareEvent(event, type) {
    if (!this.canDoItSquare(type)) {
    } else if (this.cyan.isSelected()) {
      this.setColor(this.cyanSlider.getValue(), parseInt(255 * event.offsetX / JSColorCMYKPanel.SQUARE_SIZE), parseInt(255 * (JSColorCMYKPanel.SQUARE_SIZE - event.offsetY) / JSColorCMYKPanel.SQUARE_SIZE), this.blackSlider.getValue(), true, type !== "up");
    } else if (this.magenta.isSelected()) {
      this.setColor(parseInt(255 * event.offsetX / JSColorCMYKPanel.SQUARE_SIZE), this.magentaSlider.getValue(), parseInt(255 * (JSColorCMYKPanel.SQUARE_SIZE - event.offsetY) / JSColorCMYKPanel.SQUARE_SIZE), this.blackSlider.getValue(), true, type !== "up");
    } else if (this.yellow.isSelected()) {
      this.setColor(parseInt(255 * event.offsetX / JSColorCMYKPanel.SQUARE_SIZE), parseInt(255 * (JSColorCMYKPanel.SQUARE_SIZE - event.offsetY) / JSColorCMYKPanel.SQUARE_SIZE), this.yellowSlider.getValue(), this.blackSlider.getValue(), true, type !== "up");
    }
  }

   rectEvent(event, type) {
    if (!this.canDoItRect(type)) {
    } else if (this.cyan.isSelected()) {
      this.setColor(parseInt(255 * (JSColorCMYKPanel.SQUARE_SIZE - event.offsetY) / JSColorCMYKPanel.SQUARE_SIZE), this.magentaSlider.getValue(), this.yellowSlider.getValue(), this.blackSlider.getValue(), true, type !== "up");
    } else if (this.magenta.isSelected()) {
      this.setColor(this.cyanSlider.getValue(), parseInt(255 * (JSColorCMYKPanel.SQUARE_SIZE - event.offsetY) / JSColorCMYKPanel.SQUARE_SIZE), this.yellowSlider.getValue(), this.blackSlider.getValue(), true, type !== "up");
    } else if (this.yellow.isSelected()) {
      this.setColor(this.cyanSlider.getValue(), this.magentaSlider.getValue(), parseInt(255 * (JSColorCMYKPanel.SQUARE_SIZE - event.offsetY) / JSColorCMYKPanel.SQUARE_SIZE), this.blackSlider.getValue(), true, type !== "up");
    }
  }

   setColor(c, m, y, k, call, adjusting) {
    this.cyanSlider.setValue(c);
    this.cyanSpinner.setValue(c);
    this.magentaSlider.setValue(m);
    this.magentaSpinner.setValue(m);
    this.yellowSlider.setValue(y);
    this.yellowSpinner.setValue(y);
    this.blackSlider.setValue(k);
    this.blackSpinner.setValue(k);
    this.drawAll();
    if (call) {
      this.onchange(adjusting);
    }
  }
}
/**
 * The panel to show colors in HSL format
 *
 * @author gianpiero.diblasi
 */
class JSColorHSLPanel extends JSAbstractColorFormatPanel {

   hue = new JSRadioButton();

   hueSlider = new JSSlider();

   hueSpinner = new JSSpinner();

   saturation = new JSRadioButton();

   saturationSlider = new JSSlider();

   saturationSpinner = new JSSpinner();

   lightness = new JSRadioButton();

   lightnessSlider = new JSSlider();

   lightnessSpinner = new JSSpinner();

  /**
   * Creates the object
   */
  constructor() {
    super();
    this.addRadio(this.hue, Translations.JSColorChooser_HUE, true, 2, 0);
    this.addRadio(this.saturation, Translations.JSColorChooser_SATURATION, false, 2, 2);
    this.addRadio(this.lightness, Translations.JSColorChooser_LIGHTNESS, false, 2, 4);
    this.addSlider(this.hueSlider, this.hueSpinner, 0, 360, 2, 1);
    this.addSlider(this.saturationSlider, this.saturationSpinner, 0, 100, 2, 3);
    this.addSlider(this.lightnessSlider, this.lightnessSpinner, 0, 100, 2, 5);
    this.addSpinner(this.hueSpinner, this.hueSlider, 0, 360, 3, 0);
    this.addSpinner(this.saturationSpinner, this.saturationSlider, 0, 100, 3, 2);
    this.addSpinner(this.lightnessSpinner, this.lightnessSlider, 100, 100, 3, 4);
    this.drawAll();
  }

   getSelectedColor() {
    let hsl = new Array();
    let rgb = new Array();
    hsl[0] = this.hueSpinner.getValue() / 360;
    hsl[1] = this.saturationSpinner.getValue() / 100;
    hsl[2] = this.lightnessSpinner.getValue() / 100;
    Color.HSLtoRGB(hsl, rgb);
    return new Color(rgb[0], rgb[1], rgb[2], 255);
  }

   setSelectedColor(color) {
    let rgb = new Array();
    let hsl = new Array();
    rgb[0] = color.red;
    rgb[1] = color.green;
    rgb[2] = color.blue;
    Color.RGBtoHSL(rgb, hsl);
    this.setColor(360 * hsl[0], 100 * hsl[1], 100 * hsl[2], false, false);
  }

   drawSquare() {
    let imageData = this.ctxSquare.createImageData(JSColorHSLPanel.SQUARE_SIZE, JSColorHSLPanel.SQUARE_SIZE);
    let data = imageData.data;
    let hsl = new Array();
    let rgb = new Array();
    for (let y = 0; y < JSColorHSLPanel.SQUARE_SIZE; y++) {
      for (let x = 0; x < JSColorHSLPanel.SQUARE_SIZE; x++) {
        if (this.hue.isSelected()) {
          hsl[0] = this.hueSpinner.getValue() / 360;
          hsl[1] = x / JSColorHSLPanel.SQUARE_SIZE;
          hsl[2] = y / JSColorHSLPanel.SQUARE_SIZE;
        } else if (this.saturation.isSelected()) {
          hsl[0] = x / JSColorHSLPanel.SQUARE_SIZE;
          hsl[1] = this.saturationSpinner.getValue() / 100;
          hsl[2] = y / JSColorHSLPanel.SQUARE_SIZE;
        } else if (this.lightness.isSelected()) {
          hsl[0] = x / JSColorHSLPanel.SQUARE_SIZE;
          hsl[1] = y / JSColorHSLPanel.SQUARE_SIZE;
          hsl[2] = this.lightnessSpinner.getValue() / 100;
        }
        Color.HSLtoRGB(hsl, rgb);
        let pos = ((JSColorHSLPanel.SQUARE_SIZE - y) * JSColorHSLPanel.SQUARE_SIZE + x) * 4;
        data[pos] = rgb[0];
        data[pos + 1] = rgb[1];
        data[pos + 2] = rgb[2];
        data[pos + 3] = 255;
      }
    }
    this.ctxSquare.putImageData(imageData, 0, 0);
  }

   drawSquareSelector() {
    let x = 0, y = 0;
    if (this.hue.isSelected()) {
      x = this.saturationSpinner.getValue() / 100;
      y = this.lightnessSpinner.getValue() / 100;
    } else if (this.saturation.isSelected()) {
      x = this.hueSpinner.getValue() / 360;
      y = this.lightnessSpinner.getValue() / 100;
    } else if (this.lightness.isSelected()) {
      x = this.hueSpinner.getValue() / 360;
      y = this.saturationSpinner.getValue() / 100;
    }
    this.drawCircle(x, y);
  }

   drawRect() {
    let imageData = this.ctxRect.createImageData(JSColorHSLPanel.RECT_WIDTH, JSColorHSLPanel.RECT_HEIGHT);
    let data = imageData.data;
    let hsl = new Array();
    let rgb = new Array();
    for (let y = 0; y < JSColorHSLPanel.RECT_HEIGHT; y++) {
      if (this.hue.isSelected()) {
        hsl[0] = y / JSColorHSLPanel.RECT_HEIGHT;
        hsl[1] = this.saturationSpinner.getValue() / 100;
        hsl[2] = this.lightnessSpinner.getValue() / 100;
      } else if (this.saturation.isSelected()) {
        hsl[0] = this.hueSpinner.getValue() / 360;
        hsl[1] = y / JSColorHSLPanel.RECT_HEIGHT;
        hsl[2] = this.lightnessSpinner.getValue() / 100;
      } else if (this.lightness.isSelected()) {
        hsl[0] = this.hueSpinner.getValue() / 360;
        hsl[1] = this.saturationSpinner.getValue() / 100;
        hsl[2] = y / JSColorHSLPanel.RECT_HEIGHT;
      }
      Color.HSLtoRGB(hsl, rgb);
      for (let x = 0; x < JSColorHSLPanel.RECT_WIDTH; x++) {
        let pos = ((JSColorHSLPanel.RECT_HEIGHT - y) * JSColorHSLPanel.RECT_WIDTH + x) * 4;
        data[pos] = rgb[0];
        data[pos + 1] = rgb[1];
        data[pos + 2] = rgb[2];
        data[pos + 3] = 255;
      }
    }
    this.ctxRect.putImageData(imageData, 0, 0);
  }

   drawRectSelector() {
    let y = 0;
    if (this.hue.isSelected()) {
      y = this.hueSpinner.getValue() / 360;
    } else if (this.saturation.isSelected()) {
      y = this.saturationSpinner.getValue() / 100;
    } else if (this.lightness.isSelected()) {
      y = this.lightnessSpinner.getValue() / 100;
    }
    this.drawLine(y);
  }

   squareEvent(event, type) {
    if (!this.canDoItSquare(type)) {
    } else if (this.hue.isSelected()) {
      this.setColor(this.hueSpinner.getValue(), 100 * event.offsetX / JSColorHSLPanel.SQUARE_SIZE, 100 * (JSColorHSLPanel.SQUARE_SIZE - event.offsetY) / JSColorHSLPanel.SQUARE_SIZE, true, type !== "up");
    } else if (this.saturation.isSelected()) {
      this.setColor(360 * event.offsetX / JSColorHSLPanel.SQUARE_SIZE, this.saturationSpinner.getValue(), 100 * (JSColorHSLPanel.SQUARE_SIZE - event.offsetY) / JSColorHSLPanel.SQUARE_SIZE, true, type !== "up");
    } else if (this.lightness.isSelected()) {
      this.setColor(360 * event.offsetX / JSColorHSLPanel.SQUARE_SIZE, 100 * (JSColorHSLPanel.SQUARE_SIZE - event.offsetY) / JSColorHSLPanel.SQUARE_SIZE, this.lightnessSpinner.getValue(), true, type !== "up");
    }
  }

   rectEvent(event, type) {
    if (!this.canDoItRect(type)) {
    } else if (this.hue.isSelected()) {
      this.setColor(360 * (JSColorHSLPanel.SQUARE_SIZE - event.offsetY) / JSColorHSLPanel.SQUARE_SIZE, this.saturationSpinner.getValue(), this.lightnessSpinner.getValue(), true, type !== "up");
    } else if (this.saturation.isSelected()) {
      this.setColor(this.hueSpinner.getValue(), 100 * (JSColorHSLPanel.SQUARE_SIZE - event.offsetY) / JSColorHSLPanel.SQUARE_SIZE, this.lightnessSpinner.getValue(), true, type !== "up");
    } else if (this.lightness.isSelected()) {
      this.setColor(this.hueSpinner.getValue(), this.saturationSpinner.getValue(), 100 * (JSColorHSLPanel.SQUARE_SIZE - event.offsetY) / JSColorHSLPanel.SQUARE_SIZE, true, type !== "up");
    }
  }

   setColor(h, s, l, call, adjusting) {
    this.hueSlider.setValue(parseInt(h));
    this.hueSpinner.setValue(parseInt(h));
    this.saturationSlider.setValue(parseInt(s));
    this.saturationSpinner.setValue(parseInt(s));
    this.lightnessSlider.setValue(parseInt(l));
    this.lightnessSpinner.setValue(parseInt(l));
    this.drawAll();
    if (call) {
      this.onchange(adjusting);
    }
  }
}
/**
 * The panel to show colors in HSV format
 *
 * @author gianpiero.diblasi
 */
class JSColorHSVPanel extends JSAbstractColorFormatPanel {

   hue = new JSRadioButton();

   hueSlider = new JSSlider();

   hueSpinner = new JSSpinner();

   saturation = new JSRadioButton();

   saturationSlider = new JSSlider();

   saturationSpinner = new JSSpinner();

   value = new JSRadioButton();

   valueSlider = new JSSlider();

   valueSpinner = new JSSpinner();

  /**
   * Creates the object
   */
  constructor() {
    super();
    this.addRadio(this.hue, Translations.JSColorChooser_HUE, true, 2, 0);
    this.addRadio(this.saturation, Translations.JSColorChooser_SATURATION, false, 2, 2);
    this.addRadio(this.value, Translations.JSColorChooser_VALUE, false, 2, 4);
    this.addSlider(this.hueSlider, this.hueSpinner, 0, 360, 2, 1);
    this.addSlider(this.saturationSlider, this.saturationSpinner, 0, 100, 2, 3);
    this.addSlider(this.valueSlider, this.valueSpinner, 0, 100, 2, 5);
    this.addSpinner(this.hueSpinner, this.hueSlider, 0, 360, 3, 0);
    this.addSpinner(this.saturationSpinner, this.saturationSlider, 0, 100, 3, 2);
    this.addSpinner(this.valueSpinner, this.valueSlider, 100, 100, 3, 4);
    this.drawAll();
  }

   getSelectedColor() {
    let hsv = new Array();
    let rgb = new Array();
    hsv[0] = this.hueSpinner.getValue() / 360;
    hsv[1] = this.saturationSpinner.getValue() / 100;
    hsv[2] = this.valueSpinner.getValue() / 100;
    Color.HSVtoRGB(hsv, rgb);
    return new Color(rgb[0], rgb[1], rgb[2], 255);
  }

   setSelectedColor(color) {
    let rgb = new Array();
    let hsv = new Array();
    rgb[0] = color.red;
    rgb[1] = color.green;
    rgb[2] = color.blue;
    Color.RGBtoHSV(rgb, hsv);
    this.setColor(360 * hsv[0], 100 * hsv[1], 100 * hsv[2], false, false);
  }

   drawSquare() {
    let imageData = this.ctxSquare.createImageData(JSColorHSVPanel.SQUARE_SIZE, JSColorHSVPanel.SQUARE_SIZE);
    let data = imageData.data;
    let hsv = new Array();
    let rgb = new Array();
    for (let y = 0; y < JSColorHSVPanel.SQUARE_SIZE; y++) {
      for (let x = 0; x < JSColorHSVPanel.SQUARE_SIZE; x++) {
        if (this.hue.isSelected()) {
          hsv[0] = this.hueSpinner.getValue() / 360;
          hsv[1] = x / JSColorHSVPanel.SQUARE_SIZE;
          hsv[2] = y / JSColorHSVPanel.SQUARE_SIZE;
        } else if (this.saturation.isSelected()) {
          hsv[0] = x / JSColorHSVPanel.SQUARE_SIZE;
          hsv[1] = this.saturationSpinner.getValue() / 100;
          hsv[2] = y / JSColorHSVPanel.SQUARE_SIZE;
        } else if (this.value.isSelected()) {
          hsv[0] = x / JSColorHSVPanel.SQUARE_SIZE;
          hsv[1] = y / JSColorHSVPanel.SQUARE_SIZE;
          hsv[2] = this.valueSpinner.getValue() / 100;
        }
        Color.HSVtoRGB(hsv, rgb);
        let pos = ((JSColorHSVPanel.SQUARE_SIZE - y) * JSColorHSVPanel.SQUARE_SIZE + x) * 4;
        data[pos] = rgb[0];
        data[pos + 1] = rgb[1];
        data[pos + 2] = rgb[2];
        data[pos + 3] = 255;
      }
    }
    this.ctxSquare.putImageData(imageData, 0, 0);
  }

   drawSquareSelector() {
    let x = 0, y = 0;
    if (this.hue.isSelected()) {
      x = this.saturationSpinner.getValue() / 100;
      y = this.valueSpinner.getValue() / 100;
    } else if (this.saturation.isSelected()) {
      x = this.hueSpinner.getValue() / 360;
      y = this.valueSpinner.getValue() / 100;
    } else if (this.value.isSelected()) {
      x = this.hueSpinner.getValue() / 360;
      y = this.saturationSpinner.getValue() / 100;
    }
    this.drawCircle(x, y);
  }

   drawRect() {
    let imageData = this.ctxRect.createImageData(JSColorHSVPanel.RECT_WIDTH, JSColorHSVPanel.RECT_HEIGHT);
    let data = imageData.data;
    let hsv = new Array();
    let rgb = new Array();
    for (let y = 0; y < JSColorHSVPanel.RECT_HEIGHT; y++) {
      if (this.hue.isSelected()) {
        hsv[0] = y / JSColorHSVPanel.RECT_HEIGHT;
        hsv[1] = this.saturationSpinner.getValue() / 100;
        hsv[2] = this.valueSpinner.getValue() / 100;
      } else if (this.saturation.isSelected()) {
        hsv[0] = this.hueSpinner.getValue() / 360;
        hsv[1] = y / JSColorHSVPanel.RECT_HEIGHT;
        hsv[2] = this.valueSpinner.getValue() / 100;
      } else if (this.value.isSelected()) {
        hsv[0] = this.hueSpinner.getValue() / 360;
        hsv[1] = this.saturationSpinner.getValue() / 100;
        hsv[2] = y / JSColorHSVPanel.RECT_HEIGHT;
      }
      Color.HSVtoRGB(hsv, rgb);
      for (let x = 0; x < JSColorHSVPanel.RECT_WIDTH; x++) {
        let pos = ((JSColorHSVPanel.RECT_HEIGHT - y) * JSColorHSVPanel.RECT_WIDTH + x) * 4;
        data[pos] = rgb[0];
        data[pos + 1] = rgb[1];
        data[pos + 2] = rgb[2];
        data[pos + 3] = 255;
      }
    }
    this.ctxRect.putImageData(imageData, 0, 0);
  }

   drawRectSelector() {
    let y = 0;
    if (this.hue.isSelected()) {
      y = this.hueSpinner.getValue() / 360;
    } else if (this.saturation.isSelected()) {
      y = this.saturationSpinner.getValue() / 100;
    } else if (this.value.isSelected()) {
      y = this.valueSpinner.getValue() / 100;
    }
    this.drawLine(y);
  }

   squareEvent(event, type) {
    if (!this.canDoItSquare(type)) {
    } else if (this.hue.isSelected()) {
      this.setColor(this.hueSpinner.getValue(), 100 * event.offsetX / JSColorHSVPanel.SQUARE_SIZE, 100 * (JSColorHSVPanel.SQUARE_SIZE - event.offsetY) / JSColorHSVPanel.SQUARE_SIZE, true, type !== "up");
    } else if (this.saturation.isSelected()) {
      this.setColor(360 * event.offsetX / JSColorHSVPanel.SQUARE_SIZE, this.saturationSpinner.getValue(), 100 * (JSColorHSVPanel.SQUARE_SIZE - event.offsetY) / JSColorHSVPanel.SQUARE_SIZE, true, type !== "up");
    } else if (this.value.isSelected()) {
      this.setColor(360 * event.offsetX / JSColorHSVPanel.SQUARE_SIZE, 100 * (JSColorHSVPanel.SQUARE_SIZE - event.offsetY) / JSColorHSVPanel.SQUARE_SIZE, this.valueSpinner.getValue(), true, type !== "up");
    }
  }

   rectEvent(event, type) {
    if (!this.canDoItRect(type)) {
    } else if (this.hue.isSelected()) {
      this.setColor(360 * (JSColorHSVPanel.SQUARE_SIZE - event.offsetY) / JSColorHSVPanel.SQUARE_SIZE, this.saturationSpinner.getValue(), this.valueSpinner.getValue(), true, type !== "up");
    } else if (this.saturation.isSelected()) {
      this.setColor(this.hueSpinner.getValue(), 100 * (JSColorHSVPanel.SQUARE_SIZE - event.offsetY) / JSColorHSVPanel.SQUARE_SIZE, this.valueSpinner.getValue(), true, type !== "up");
    } else if (this.value.isSelected()) {
      this.setColor(this.hueSpinner.getValue(), this.saturationSpinner.getValue(), 100 * (JSColorHSVPanel.SQUARE_SIZE - event.offsetY) / JSColorHSVPanel.SQUARE_SIZE, true, type !== "up");
    }
  }

   setColor(h, s, v, call, adjusting) {
    this.hueSlider.setValue(parseInt(h));
    this.hueSpinner.setValue(parseInt(h));
    this.saturationSlider.setValue(parseInt(s));
    this.saturationSpinner.setValue(parseInt(s));
    this.valueSlider.setValue(parseInt(v));
    this.valueSpinner.setValue(parseInt(v));
    this.drawAll();
    if (call) {
      this.onchange(adjusting);
    }
  }
}
/**
 * The panel to show colors in RGB format
 *
 * @author gianpiero.diblasi
 */
class JSColorRGBPanel extends JSAbstractColorFormatPanel {

   red = new JSRadioButton();

   redSlider = new JSSlider();

   redSpinner = new JSSpinner();

   green = new JSRadioButton();

   greenSlider = new JSSlider();

   greenSpinner = new JSSpinner();

   blue = new JSRadioButton();

   blueSlider = new JSSlider();

   blueSpinner = new JSSpinner();

  /**
   * Creates the object
   */
  constructor() {
    super();
    this.addRadio(this.red, Translations.JSColorChooser_RED, true, 2, 0);
    this.addRadio(this.green, Translations.JSColorChooser_GREEN, false, 2, 2);
    this.addRadio(this.blue, Translations.JSColorChooser_BLUE, false, 2, 4);
    this.addSlider(this.redSlider, this.redSpinner, 0, 255, 2, 1);
    this.addSlider(this.greenSlider, this.greenSpinner, 0, 255, 2, 3);
    this.addSlider(this.blueSlider, this.blueSpinner, 0, 255, 2, 5);
    this.addSpinner(this.redSpinner, this.redSlider, 0, 255, 3, 0);
    this.addSpinner(this.greenSpinner, this.greenSlider, 0, 255, 3, 2);
    this.addSpinner(this.blueSpinner, this.blueSlider, 0, 255, 3, 4);
    this.drawAll();
  }

   getSelectedColor() {
    return new Color(this.redSlider.getValue(), this.greenSlider.getValue(), this.blueSlider.getValue(), 255);
  }

   setSelectedColor(color) {
    this.setColor(color.red, color.green, color.blue, false, false);
  }

   drawSquare() {
    let imageData = this.ctxSquare.createImageData(JSColorRGBPanel.SQUARE_SIZE, JSColorRGBPanel.SQUARE_SIZE);
    let data = imageData.data;
    for (let y = 0; y < JSColorRGBPanel.SQUARE_SIZE; y++) {
      for (let x = 0; x < JSColorRGBPanel.SQUARE_SIZE; x++) {
        let pos = ((JSColorRGBPanel.SQUARE_SIZE - y) * JSColorRGBPanel.SQUARE_SIZE + x) * 4;
        if (this.red.isSelected()) {
          data[pos] = this.redSlider.getValue();
          data[pos + 1] = 255 * x / JSColorRGBPanel.SQUARE_SIZE;
          data[pos + 2] = 255 * y / JSColorRGBPanel.SQUARE_SIZE;
        } else if (this.green.isSelected()) {
          data[pos] = 255 * x / JSColorRGBPanel.SQUARE_SIZE;
          data[pos + 1] = this.greenSlider.getValue();
          data[pos + 2] = 255 * y / JSColorRGBPanel.SQUARE_SIZE;
        } else if (this.blue.isSelected()) {
          data[pos] = 255 * x / JSColorRGBPanel.SQUARE_SIZE;
          data[pos + 1] = 255 * y / JSColorRGBPanel.SQUARE_SIZE;
          data[pos + 2] = this.blueSlider.getValue();
        }
        data[pos + 3] = 255;
      }
    }
    this.ctxSquare.putImageData(imageData, 0, 0);
  }

   drawSquareSelector() {
    let x = 0, y = 0;
    if (this.red.isSelected()) {
      x = this.greenSpinner.getValue() / 255;
      y = this.blueSpinner.getValue() / 255;
    } else if (this.green.isSelected()) {
      x = this.redSpinner.getValue() / 255;
      y = this.blueSpinner.getValue() / 255;
    } else if (this.blue.isSelected()) {
      x = this.redSpinner.getValue() / 255;
      y = this.greenSpinner.getValue() / 255;
    }
    this.drawCircle(x, y);
  }

   drawRect() {
    let imageData = this.ctxRect.createImageData(JSColorRGBPanel.RECT_WIDTH, JSColorRGBPanel.RECT_HEIGHT);
    let data = imageData.data;
    let rgb = new Array();
    for (let y = 0; y < JSColorRGBPanel.RECT_HEIGHT; y++) {
      if (this.red.isSelected()) {
        rgb[0] = 255 * y / JSColorRGBPanel.RECT_HEIGHT;
        rgb[1] = this.greenSlider.getValue();
        rgb[2] = this.blueSlider.getValue();
      } else if (this.green.isSelected()) {
        rgb[0] = this.redSlider.getValue();
        rgb[1] = 255 * y / JSColorRGBPanel.RECT_HEIGHT;
        rgb[2] = this.blueSlider.getValue();
      } else if (this.blue.isSelected()) {
        rgb[0] = this.redSlider.getValue();
        rgb[1] = this.greenSlider.getValue();
        rgb[2] = 255 * y / JSColorRGBPanel.RECT_HEIGHT;
      }
      for (let x = 0; x < JSColorRGBPanel.RECT_WIDTH; x++) {
        let pos = ((JSColorRGBPanel.RECT_HEIGHT - y) * JSColorRGBPanel.RECT_WIDTH + x) * 4;
        data[pos] = rgb[0];
        data[pos + 1] = rgb[1];
        data[pos + 2] = rgb[2];
        data[pos + 3] = 255;
      }
    }
    this.ctxRect.putImageData(imageData, 0, 0);
  }

   drawRectSelector() {
    let y = 0;
    if (this.red.isSelected()) {
      y = this.redSpinner.getValue() / 255;
    } else if (this.green.isSelected()) {
      y = this.greenSpinner.getValue() / 255;
    } else if (this.blue.isSelected()) {
      y = this.blueSpinner.getValue() / 255;
    }
    this.drawLine(y);
  }

   squareEvent(event, type) {
    if (!this.canDoItSquare(type)) {
    } else if (this.red.isSelected()) {
      this.setColor(this.redSlider.getValue(), parseInt(255 * event.offsetX / JSColorRGBPanel.SQUARE_SIZE), parseInt(255 * (JSColorRGBPanel.SQUARE_SIZE - event.offsetY) / JSColorRGBPanel.SQUARE_SIZE), true, type !== "up");
    } else if (this.green.isSelected()) {
      this.setColor(parseInt(255 * event.offsetX / JSColorRGBPanel.SQUARE_SIZE), this.greenSlider.getValue(), parseInt(255 * (JSColorRGBPanel.SQUARE_SIZE - event.offsetY) / JSColorRGBPanel.SQUARE_SIZE), true, type !== "up");
    } else if (this.blue.isSelected()) {
      this.setColor(parseInt(255 * event.offsetX / JSColorRGBPanel.SQUARE_SIZE), parseInt(255 * (JSColorRGBPanel.SQUARE_SIZE - event.offsetY) / JSColorRGBPanel.SQUARE_SIZE), this.blueSlider.getValue(), true, type !== "up");
    }
  }

   rectEvent(event, type) {
    if (!this.canDoItRect(type)) {
    } else if (this.red.isSelected()) {
      this.setColor(parseInt(255 * (JSColorRGBPanel.SQUARE_SIZE - event.offsetY) / JSColorRGBPanel.SQUARE_SIZE), this.greenSlider.getValue(), this.blueSlider.getValue(), true, type !== "up");
    } else if (this.green.isSelected()) {
      this.setColor(this.redSlider.getValue(), parseInt(255 * (JSColorRGBPanel.SQUARE_SIZE - event.offsetY) / JSColorRGBPanel.SQUARE_SIZE), this.blueSlider.getValue(), true, type !== "up");
    } else if (this.blue.isSelected()) {
      this.setColor(this.redSlider.getValue(), this.greenSlider.getValue(), parseInt(255 * (JSColorRGBPanel.SQUARE_SIZE - event.offsetY) / JSColorRGBPanel.SQUARE_SIZE), true, type !== "up");
    }
  }

   setColor(r, g, b, call, adjusting) {
    this.redSlider.setValue(r);
    this.redSpinner.setValue(r);
    this.greenSlider.setValue(g);
    this.greenSpinner.setValue(g);
    this.blueSlider.setValue(b);
    this.blueSpinner.setValue(b);
    this.drawAll();
    if (call) {
      this.onchange(adjusting);
    }
  }
}
/**
 * The panel to show colors in YUV format
 *
 * @author gianpiero.diblasi
 */
class JSColorYUVPanel extends JSAbstractColorFormatPanel {

   y = new JSRadioButton();

   ySlider = new JSSlider();

   ySpinner = new JSSpinner();

   u = new JSRadioButton();

   uSlider = new JSSlider();

   uSpinner = new JSSpinner();

   v = new JSRadioButton();

   vSlider = new JSSlider();

   vSpinner = new JSSpinner();

  /**
   * Creates the object
   */
  constructor() {
    super();
    this.addRadio(this.y, "Y", true, 2, 0);
    this.addRadio(this.u, "U", false, 2, 2);
    this.addRadio(this.v, "V", false, 2, 4);
    this.addSlider(this.ySlider, this.ySpinner, 0, 100, 2, 1);
    this.addSlider(this.uSlider, this.uSpinner, 0, 100, 2, 3);
    this.addSlider(this.vSlider, this.vSpinner, 0, 100, 2, 5);
    this.addSpinner(this.ySpinner, this.ySlider, 0, 100, 3, 0);
    this.addSpinner(this.uSpinner, this.uSlider, 0, 100, 3, 2);
    this.addSpinner(this.vSpinner, this.vSlider, 100, 100, 3, 4);
    this.drawAll();
  }

   getSelectedColor() {
    let yuv = new Array();
    let rgb = new Array();
    yuv[0] = this.ySpinner.getValue() / 100;
    yuv[1] = this.uSpinner.getValue() / 100;
    yuv[2] = this.vSpinner.getValue() / 100;
    Color.YUVtoRGB(yuv, rgb);
    return new Color(rgb[0], rgb[1], rgb[2], 255);
  }

   setSelectedColor(color) {
    let rgb = new Array();
    let yuv = new Array();
    rgb[0] = color.red;
    rgb[1] = color.green;
    rgb[2] = color.blue;
    Color.RGBtoYUV(rgb, yuv);
    this.setColor(100 * yuv[0], 100 * yuv[1], 100 * yuv[2], false, false);
  }

   drawSquare() {
    let imageData = this.ctxSquare.createImageData(JSColorYUVPanel.SQUARE_SIZE, JSColorYUVPanel.SQUARE_SIZE);
    let data = imageData.data;
    let yuv = new Array();
    let rgb = new Array();
    for (let yy = 0; yy < JSColorYUVPanel.SQUARE_SIZE; yy++) {
      for (let xx = 0; xx < JSColorYUVPanel.SQUARE_SIZE; xx++) {
        if (this.y.isSelected()) {
          yuv[0] = this.ySpinner.getValue() / 100;
          yuv[1] = xx / JSColorYUVPanel.SQUARE_SIZE;
          yuv[2] = yy / JSColorYUVPanel.SQUARE_SIZE;
        } else if (this.u.isSelected()) {
          yuv[0] = xx / JSColorYUVPanel.SQUARE_SIZE;
          yuv[1] = this.uSpinner.getValue() / 100;
          yuv[2] = yy / JSColorYUVPanel.SQUARE_SIZE;
        } else if (this.v.isSelected()) {
          yuv[0] = xx / JSColorYUVPanel.SQUARE_SIZE;
          yuv[1] = yy / JSColorYUVPanel.SQUARE_SIZE;
          yuv[2] = this.vSpinner.getValue() / 100;
        }
        Color.YUVtoRGB(yuv, rgb);
        let pos = ((JSColorYUVPanel.SQUARE_SIZE - yy) * JSColorYUVPanel.SQUARE_SIZE + xx) * 4;
        data[pos] = rgb[0];
        data[pos + 1] = rgb[1];
        data[pos + 2] = rgb[2];
        data[pos + 3] = 255;
      }
    }
    this.ctxSquare.putImageData(imageData, 0, 0);
  }

   drawSquareSelector() {
    let xx = 0, yy = 0;
    if (this.y.isSelected()) {
      xx = this.uSpinner.getValue() / 100;
      yy = this.vSpinner.getValue() / 100;
    } else if (this.u.isSelected()) {
      xx = this.ySpinner.getValue() / 100;
      yy = this.vSpinner.getValue() / 100;
    } else if (this.v.isSelected()) {
      xx = this.ySpinner.getValue() / 100;
      yy = this.uSpinner.getValue() / 100;
    }
    this.drawCircle(xx, yy);
  }

   drawRect() {
    let imageData = this.ctxRect.createImageData(JSColorYUVPanel.RECT_WIDTH, JSColorYUVPanel.RECT_HEIGHT);
    let data = imageData.data;
    let yuv = new Array();
    let rgb = new Array();
    for (let yy = 0; yy < JSColorYUVPanel.RECT_HEIGHT; yy++) {
      if (this.y.isSelected()) {
        yuv[0] = yy / JSColorYUVPanel.RECT_HEIGHT;
        yuv[1] = this.uSpinner.getValue() / 100;
        yuv[2] = this.vSpinner.getValue() / 100;
      } else if (this.u.isSelected()) {
        yuv[0] = this.ySpinner.getValue() / 100;
        yuv[1] = yy / JSColorYUVPanel.RECT_HEIGHT;
        yuv[2] = this.vSpinner.getValue() / 100;
      } else if (this.v.isSelected()) {
        yuv[0] = this.ySpinner.getValue() / 100;
        yuv[1] = this.uSpinner.getValue() / 100;
        yuv[2] = yy / JSColorYUVPanel.RECT_HEIGHT;
      }
      Color.YUVtoRGB(yuv, rgb);
      for (let xx = 0; xx < JSColorYUVPanel.RECT_WIDTH; xx++) {
        let pos = ((JSColorYUVPanel.RECT_HEIGHT - yy) * JSColorYUVPanel.RECT_WIDTH + xx) * 4;
        data[pos] = rgb[0];
        data[pos + 1] = rgb[1];
        data[pos + 2] = rgb[2];
        data[pos + 3] = 255;
      }
    }
    this.ctxRect.putImageData(imageData, 0, 0);
  }

   drawRectSelector() {
    let yy = 0;
    if (this.y.isSelected()) {
      yy = this.ySpinner.getValue() / 100;
    } else if (this.u.isSelected()) {
      yy = this.uSpinner.getValue() / 100;
    } else if (this.v.isSelected()) {
      yy = this.vSpinner.getValue() / 100;
    }
    this.drawLine(yy);
  }

   squareEvent(event, type) {
    if (!this.canDoItSquare(type)) {
    } else if (this.y.isSelected()) {
      this.setColor(this.ySpinner.getValue(), 100 * event.offsetX / JSColorYUVPanel.SQUARE_SIZE, 100 * (JSColorYUVPanel.SQUARE_SIZE - event.offsetY) / JSColorYUVPanel.SQUARE_SIZE, true, type !== "up");
    } else if (this.u.isSelected()) {
      this.setColor(100 * event.offsetX / JSColorYUVPanel.SQUARE_SIZE, this.uSpinner.getValue(), 100 * (JSColorYUVPanel.SQUARE_SIZE - event.offsetY) / JSColorYUVPanel.SQUARE_SIZE, true, type !== "up");
    } else if (this.v.isSelected()) {
      this.setColor(100 * event.offsetX / JSColorYUVPanel.SQUARE_SIZE, 100 * (JSColorYUVPanel.SQUARE_SIZE - event.offsetY) / JSColorYUVPanel.SQUARE_SIZE, this.vSpinner.getValue(), true, type !== "up");
    }
  }

   rectEvent(event, type) {
    if (!this.canDoItRect(type)) {
    } else if (this.y.isSelected()) {
      this.setColor(100 * (JSColorYUVPanel.SQUARE_SIZE - event.offsetY) / JSColorYUVPanel.SQUARE_SIZE, this.uSpinner.getValue(), this.vSpinner.getValue(), true, type !== "up");
    } else if (this.u.isSelected()) {
      this.setColor(this.ySpinner.getValue(), 100 * (JSColorYUVPanel.SQUARE_SIZE - event.offsetY) / JSColorYUVPanel.SQUARE_SIZE, this.vSpinner.getValue(), true, type !== "up");
    } else if (this.v.isSelected()) {
      this.setColor(this.ySpinner.getValue(), this.uSpinner.getValue(), 100 * (JSColorYUVPanel.SQUARE_SIZE - event.offsetY) / JSColorYUVPanel.SQUARE_SIZE, true, type !== "up");
    }
  }

   setColor(y, u, v, call, adjusting) {
    this.ySlider.setValue(parseInt(y));
    this.ySpinner.setValue(parseInt(y));
    this.uSlider.setValue(parseInt(u));
    this.uSpinner.setValue(parseInt(u));
    this.vSlider.setValue(parseInt(v));
    this.vSpinner.setValue(parseInt(v));
    this.drawAll();
    if (call) {
      this.onchange(adjusting);
    }
  }
}
/**
 * The abstract panel to show swatch colors
 *
 * @author gianpiero.diblasi
 */
class JSAbstractColorSwatchesPanel extends JSPanel {

   color = null;

   listeners = new Array();

  /**
   * Creates the object
   *
   * @param rows The row count
   * @param columns The column count
   * @param rawValues The raw color values
   */
  constructor(rows, columns, rawValues) {
    super();
    this.setLayout(new GridLayout(rows, columns, 1, 1));
    for (let index = 0; index < rawValues.length; index += 3) {
      this.addButton(new Color(rawValues[index], rawValues[index + 1], rawValues[index + 2], 255));
    }
  }

   addButton(c) {
    let button = new JSButton();
    button.setBackground(c);
    button.setTooltip(c.red + ", " + c.green + ", " + c.blue);
    let rgb = new Array();
    let hsl = new Array();
    rgb[0] = c.red;
    rgb[1] = c.green;
    rgb[2] = c.blue;
    Color.RGBtoHSL(rgb, hsl);
    button.getStyle().borderColor = hsl[2] > 0.5 ? c.darkened(0.1).getRGB_HEX() : c.lighted(0.1).getRGB_HEX();
    button.addActionListener(event => {
      this.color = c;
      this.onclick();
    });
    this.add(button, null);
  }

  /**
   * Returns the selected color
   *
   * @return The selected color
   */
   getSelectedColor() {
    return this.color;
  }

  /**
   * Adds an action listener
   *
   * @param listener The listener
   */
   addActionListener(listener) {
    this.listeners.push(listener);
  }

   onclick() {
    let event = new ActionEvent();
    this.listeners.forEach(listener => {
      if (typeof listener === "function") {
        listener(event);
      } else {
        listener.actionPerformed(event);
      }
    });
  }
}
/**
 * The panel to show a limited set of swatch colors
 *
 * @author gianpiero.diblasi
 */
class JSColorMiniSwatchesPanel extends JSAbstractColorSwatchesPanel {

  /**
   * Creates the object
   */
  constructor() {
    super(1, 13, JSColorMiniSwatchesPanel.rawValues);
  }

  static  rawValues = new Array(// white
  255, // white
  255, // white
  255, // light gray
  204, // light gray
  204, // light gray
  204, // gray
  136, // gray
  136, // gray
  136, // dark gray
  68, // dark gray
  68, // dark gray
  68, // black
  0, // black
  0, // black
  0, // red
  255, // red
  0, // red
  0, // green
  0, // green
  255, // green
  0, // blue
  0, // blue
  0, // blue
  255, // cyan
  0, // cyan
  255, // cyan
  255, // magenta
  255, // magenta
  0, // magenta
  255, // yellow
  255, // yellow
  255, // yellow
  0, // pink
  255, // pink
  175, // pink
  175, // orange
  255, // orange
  102, // orange
  0);
}
/**
 * The panel to show a large set of swatch colors
 *
 * @author gianpiero.diblasi
 */
class JSColorSwatchesPanel extends JSAbstractColorSwatchesPanel {

  /**
   * Creates the object
   */
  constructor() {
    super(9, 31, JSColorSwatchesPanel.rawValues);
  }

  static  rawValues = new Array(// first row.
  255, // first row.
  255, // first row.
  255, 204, 255, 255, 204, 204, 255, 204, 204, 255, 204, 204, 255, 204, 204, 255, 204, 204, 255, 204, 204, 255, 204, 204, 255, 204, 204, 255, 204, 204, 255, 255, 204, 255, 255, 204, 204, 255, 204, 204, 255, 204, 204, 255, 204, 204, 255, 204, 204, 255, 204, 204, 255, 204, 204, 255, 204, 204, 255, 204, 204, 255, 255, 204, 204, 255, 204, 204, 255, 204, 204, 255, 204, 204, 255, 204, 204, 255, 204, 204, 255, 204, 204, 255, 204, 204, 255, 204, 204, 255, 204, // second row.
  204, // second row.
  204, // second row.
  204, 153, 255, 255, 153, 204, 255, 153, 153, 255, 153, 153, 255, 153, 153, 255, 153, 153, 255, 153, 153, 255, 153, 153, 255, 153, 153, 255, 204, 153, 255, 255, 153, 255, 255, 153, 204, 255, 153, 153, 255, 153, 153, 255, 153, 153, 255, 153, 153, 255, 153, 153, 255, 153, 153, 255, 153, 153, 255, 204, 153, 255, 255, 153, 204, 255, 153, 153, 255, 153, 153, 255, 153, 153, 255, 153, 153, 255, 153, 153, 255, 153, 153, 255, 153, 153, 255, 153, 153, 255, 204, // third row
  204, // third row
  204, // third row
  204, 102, 255, 255, 102, 204, 255, 102, 153, 255, 102, 102, 255, 102, 102, 255, 102, 102, 255, 102, 102, 255, 102, 102, 255, 153, 102, 255, 204, 102, 255, 255, 102, 255, 255, 102, 204, 255, 102, 153, 255, 102, 102, 255, 102, 102, 255, 102, 102, 255, 102, 102, 255, 102, 102, 255, 153, 102, 255, 204, 102, 255, 255, 102, 204, 255, 102, 153, 255, 102, 102, 255, 102, 102, 255, 102, 102, 255, 102, 102, 255, 102, 102, 255, 102, 102, 255, 153, 102, 255, 204, // fourth row
  153, // fourth row
  153, // fourth row
  153, 51, 255, 255, 51, 204, 255, 51, 153, 255, 51, 102, 255, 51, 51, 255, 51, 51, 255, 51, 51, 255, 102, 51, 255, 153, 51, 255, 204, 51, 255, 255, 51, 255, 255, 51, 204, 255, 51, 153, 255, 51, 102, 255, 51, 51, 255, 51, 51, 255, 51, 51, 255, 102, 51, 255, 153, 51, 255, 204, 51, 255, 255, 51, 204, 255, 51, 153, 255, 51, 102, 255, 51, 51, 255, 51, 51, 255, 51, 51, 255, 51, 51, 255, 102, 51, 255, 153, 51, 255, 204, // Fifth row
  153, // Fifth row
  153, // Fifth row
  153, 0, 255, 255, 0, 204, 255, 0, 153, 255, 0, 102, 255, 0, 51, 255, 0, 0, 255, 51, 0, 255, 102, 0, 255, 153, 0, 255, 204, 0, 255, 255, 0, 255, 255, 0, 204, 255, 0, 153, 255, 0, 102, 255, 0, 51, 255, 0, 0, 255, 51, 0, 255, 102, 0, 255, 153, 0, 255, 204, 0, 255, 255, 0, 204, 255, 0, 153, 255, 0, 102, 255, 0, 51, 255, 0, 0, 255, 0, 0, 255, 51, 0, 255, 102, 0, 255, 153, 0, 255, 204, // sixth row
  102, // sixth row
  102, // sixth row
  102, 0, 204, 204, 0, 204, 204, 0, 153, 204, 0, 102, 204, 0, 51, 204, 0, 0, 204, 51, 0, 204, 102, 0, 204, 153, 0, 204, 204, 0, 204, 204, 0, 204, 204, 0, 204, 204, 0, 153, 204, 0, 102, 204, 0, 51, 204, 0, 0, 204, 51, 0, 204, 102, 0, 204, 153, 0, 204, 204, 0, 204, 204, 0, 204, 204, 0, 153, 204, 0, 102, 204, 0, 51, 204, 0, 0, 204, 0, 0, 204, 51, 0, 204, 102, 0, 204, 153, 0, 204, 204, // seventh row
  102, // seventh row
  102, // seventh row
  102, 0, 153, 153, 0, 153, 153, 0, 153, 153, 0, 102, 153, 0, 51, 153, 0, 0, 153, 51, 0, 153, 102, 0, 153, 153, 0, 153, 153, 0, 153, 153, 0, 153, 153, 0, 153, 153, 0, 153, 153, 0, 102, 153, 0, 51, 153, 0, 0, 153, 51, 0, 153, 102, 0, 153, 153, 0, 153, 153, 0, 153, 153, 0, 153, 153, 0, 153, 153, 0, 102, 153, 0, 51, 153, 0, 0, 153, 0, 0, 153, 51, 0, 153, 102, 0, 153, 153, 0, 153, 153, // eigth row
  51, // eigth row
  51, // eigth row
  51, 0, 102, 102, 0, 102, 102, 0, 102, 102, 0, 102, 102, 0, 51, 102, 0, 0, 102, 51, 0, 102, 102, 0, 102, 102, 0, 102, 102, 0, 102, 102, 0, 102, 102, 0, 102, 102, 0, 102, 102, 0, 102, 102, 0, 51, 102, 0, 0, 102, 51, 0, 102, 102, 0, 102, 102, 0, 102, 102, 0, 102, 102, 0, 102, 102, 0, 102, 102, 0, 102, 102, 0, 51, 102, 0, 0, 102, 0, 0, 102, 51, 0, 102, 102, 0, 102, 102, 0, 102, 102, // ninth row
  0, // ninth row
  0, // ninth row
  0, 0, 51, 51, 0, 51, 51, 0, 51, 51, 0, 51, 51, 0, 51, 51, 0, 0, 51, 51, 0, 51, 51, 0, 51, 51, 0, 51, 51, 0, 51, 51, 0, 51, 51, 0, 51, 51, 0, 51, 51, 0, 51, 51, 0, 51, 51, 0, 0, 51, 51, 0, 51, 51, 0, 51, 51, 0, 51, 51, 0, 51, 51, 0, 51, 51, 0, 51, 51, 0, 51, 51, 0, 0, 51, 0, 0, 51, 51, 0, 51, 51, 0, 51, 51, 0, 51, 51, 51, 51, 51);
}
/**
 * The panel to show colors
 *
 * @author gianpiero.diblasi
 */
class JSColorPanel extends JSPanel {

   pane = new JSTabbedPane();

   swatchesPanel = new JSColorSwatchesPanel();

   hsvPanel = new JSColorHSVPanel();

   hslPanel = new JSColorHSLPanel();

   yuvPanel = new JSColorYUVPanel();

   rgbPanel = new JSColorRGBPanel();

   cmykPanel = new JSColorCMYKPanel();

   extraTabs = new Array();

   opacity = new JSLabel();

   opacitySlider = new JSSlider();

   opacitySpinner = new JSSpinner();

   container = new JSComponent(document.createElement("div"));

   component = new JSComponent(document.createElement("div"));

   componentOpacity = new JSComponent(document.createElement("div"));

   listeners = new Array();

   currentTab = null;

   valueIsAdjusting = false;

   opacityVisible = true;

  /**
   * Creates the object
   */
  constructor() {
    super();
    this.cssAddClass("jscolorpanel");
    this.setLayout(new GridBagLayout());
    this.addPanel(Translations.JSColorChooser_PALETTE, this.swatchesPanel);
    this.addPanel("HSV", this.hsvPanel);
    this.addPanel("HSL", this.hslPanel);
    this.addPanel("YUV", this.yuvPanel);
    this.addPanel("RGB", this.rgbPanel);
    this.addPanel("CMYK", this.cmykPanel);
    this.add(this.pane, new GBC(0, 0).w(2).f(GBC.BOTH));
    this.opacity.setText(Translations.JSColorChooser_OPACITY);
    this.add(this.opacity, new GBC(0, 1).a(GBC.WEST));
    this.opacitySlider.setMaximum(255);
    this.opacitySlider.setValue(255);
    this.opacitySlider.getStyle().minWidth = "20rem";
    this.opacitySlider.addChangeListener(event => this.sliderToSpinner(this.opacitySlider, this.opacitySpinner));
    this.add(this.opacitySlider, new GBC(0, 2).w(2).f(GBC.HORIZONTAL));
    this.opacitySpinner.setModel(new SpinnerNumberModel(255, 0, 255, 1));
    this.opacitySpinner.getStyle().minWidth = "3rem";
    this.opacitySpinner.getChilStyleByQuery("input[type=number]").minWidth = "2.5rem";
    this.opacitySpinner.getChilStyleByQuery("input[type=number]").width = "2.5rem";
    this.opacitySpinner.addChangeListener(event => this.spinnerToSlider(this.opacitySpinner, this.opacitySlider));
    this.add(this.opacitySpinner, new GBC(1, 1).a(GBC.EAST));
    let label = new JSLabel();
    label.setText(Translations.JSColorChooser_PREVIEW);
    this.add(label, new GBC(0, 3).a(GBC.WEST).i(5, 0, 2, 0));
    let color = this.getSelectedColor();
    this.component.cssAddClass("jscolorpanel-preview-opaque");
    this.component.getStyle().backgroundColor = color.getRGB_String();
    this.componentOpacity.cssAddClass("jscolorpanel-preview-transparent");
    this.componentOpacity.getStyle().backgroundColor = color.getRGBA_String();
    this.container.cssAddClass("jscolorpanel-preview");
    this.container.appendChild(this.component);
    this.container.appendChild(this.componentOpacity);
    this.setContainerBorder(color);
    this.add(this.container, new GBC(0, 4).w(2).f(GBC.HORIZONTAL));
    this.swatchesPanel.addActionListener(event => {
      let c = this.swatchesPanel.getSelectedColor();
      this.hsvPanel.setSelectedColor(c);
      this.hslPanel.setSelectedColor(c);
      this.yuvPanel.setSelectedColor(c);
      this.rgbPanel.setSelectedColor(c);
      this.cmykPanel.setSelectedColor(c);
      this.extraTabs.forEach(tab => tab.setSelectedColor(c));
      this.onchange(false);
    });
    this.addChangeListenerToPanel(this.hsvPanel, this.hslPanel, this.yuvPanel, this.rgbPanel, this.cmykPanel, "hsv");
    this.addChangeListenerToPanel(this.hslPanel, this.hsvPanel, this.yuvPanel, this.rgbPanel, this.cmykPanel, "hsl");
    this.addChangeListenerToPanel(this.yuvPanel, this.hsvPanel, this.hslPanel, this.rgbPanel, this.cmykPanel, "yuv");
    this.addChangeListenerToPanel(this.rgbPanel, this.hsvPanel, this.yuvPanel, this.hslPanel, this.cmykPanel, "rgb");
    this.addChangeListenerToPanel(this.cmykPanel, this.hsvPanel, this.yuvPanel, this.hslPanel, this.rgbPanel, "cmyk");
  }

  /**
   * Adds an extra tab
   *
   * @param title The title
   * @param panel The extra tab
   */
   addExtraTab(title, panel) {
    this.extraTabs.push(panel);
    this.addPanel(title, panel);
    this.addChangeListenerToExtraPanel(this.extraTabs.length - 1);
  }

   addPanel(title, component) {
    let panel = new JSPanel();
    panel.add(component, null);
    this.pane.addTab(title, panel);
  }

   addChangeListenerToPanel(source, dest1, dest2, dest3, dest4, currentTab) {
    source.addChangeListener(event => {
      if (!source.getValueIsAdjusting()) {
        let color = source.getSelectedColor();
        dest1.setSelectedColor(color);
        dest2.setSelectedColor(color);
        dest3.setSelectedColor(color);
        dest4.setSelectedColor(color);
        this.extraTabs.forEach(tab => tab.setSelectedColor(color));
      }
      this.currentTab = currentTab;
      this.onchange(source.getValueIsAdjusting());
    });
  }

   addChangeListenerToExtraPanel(index) {
    let source = this.extraTabs[index];
    source.addChangeListener(event => {
      if (!source.getValueIsAdjusting()) {
        let color = source.getSelectedColor();
        this.hsvPanel.setSelectedColor(color);
        this.hslPanel.setSelectedColor(color);
        this.yuvPanel.setSelectedColor(color);
        this.rgbPanel.setSelectedColor(color);
        this.cmykPanel.setSelectedColor(color);
        this.extraTabs.filter(tab => tab !== source).forEach(tab => tab.setSelectedColor(color));
      }
      this.currentTab = "extratab" + index;
      this.onchange(source.getValueIsAdjusting());
    });
  }

   sliderToSpinner(slider, spinner) {
    spinner.setValue(slider.getValue());
    this.onchange(slider.getValueIsAdjusting());
  }

   spinnerToSlider(spinner, slider) {
    slider.setValue(spinner.getValue());
    this.onchange(spinner.getValueIsAdjusting());
  }

  /**
   * Returns the selected color
   *
   * @return The selected color
   */
   getSelectedColor() {
    let color = null;
    for (let index = 0; index < this.extraTabs.length; index++) {
      if (this.currentTab === "extratab" + index) {
        color = this.extraTabs[index].getSelectedColor();
      }
    }
    if (!color) {
      switch(this.currentTab) {
        case "hsv":
          color = this.hsvPanel.getSelectedColor();
          break;
        case "hsl":
          color = this.hslPanel.getSelectedColor();
          break;
        case "yuv":
          color = this.yuvPanel.getSelectedColor();
          break;
        case "rgb":
        default:
          color = this.rgbPanel.getSelectedColor();
          break;
        case "cmyk":
          color = this.cmykPanel.getSelectedColor();
          break;
      }
    }
    return new Color(color.red, color.green, color.blue, this.opacityVisible ? this.opacitySlider.getValue() : 255);
  }

  /**
   * Sets the selected color
   *
   * @param color The selected color
   */
   setSelectedColor(color) {
    this.hsvPanel.setSelectedColor(color);
    this.hslPanel.setSelectedColor(color);
    this.yuvPanel.setSelectedColor(color);
    this.rgbPanel.setSelectedColor(color);
    this.cmykPanel.setSelectedColor(color);
    this.extraTabs.forEach(tab => tab.setSelectedColor(color));
    if (this.opacityVisible) {
      this.opacitySlider.setValue(color.alpha);
      this.opacitySpinner.setValue(color.alpha);
    }
    let c = this.getSelectedColor();
    this.component.getStyle().backgroundColor = c.getRGB_String();
    this.componentOpacity.getStyle().backgroundColor = c.getRGBA_String();
    this.setContainerBorder(c);
  }

  /**
   * Sets the visibility of the opacity selectors
   *
   * @param b true to make the opacity selectors visible, false otherwise
   */
   setOpacityVisible(b) {
    this.opacityVisible = b;
    if (this.opacityVisible) {
      this.opacity.getStyle().display = "block";
      this.opacitySpinner.getStyle().display = "grid";
      this.opacitySlider.getStyle().display = "flex";
    } else {
      this.opacity.getStyle().display = "none";
      this.opacitySpinner.getStyle().display = "none";
      this.opacitySlider.getStyle().display = "none";
    }
  }

  /**
   * Returns if the selected color is "adjusting"
   *
   * @return true if the selected color is adjusting, false otherwise
   */
   getValueIsAdjusting() {
    return this.valueIsAdjusting;
  }

  /**
   * Adds a change listener
   *
   * @param listener The listener
   */
   addChangeListener(listener) {
    this.listeners.push(listener);
  }

   onchange(b) {
    let color = this.getSelectedColor();
    this.component.getStyle().backgroundColor = color.getRGB_String();
    this.componentOpacity.getStyle().backgroundColor = color.getRGBA_String();
    this.setContainerBorder(color);
    this.valueIsAdjusting = b;
    let event = new ChangeEvent();
    this.listeners.forEach(listener => {
      if (typeof listener === "function") {
        listener(event);
      } else {
        listener.stateChanged(event);
      }
    });
  }

   setContainerBorder(color) {
    let rgb = new Array();
    let hsl = new Array();
    rgb[0] = color.red;
    rgb[1] = color.green;
    rgb[2] = color.blue;
    Color.RGBtoHSL(rgb, hsl);
    this.container.getStyle().border = "1px solid " + (hsl[2] > 0.5 ? color.darkened(0.1).getRGB_HEX() : color.lighted(0.1).getRGB_HEX());
  }
}
/**
 * The javax.swing.JTabbedPane clone
 *
 * @author gianpiero.diblasi
 */
class JSTabbedPane extends JSPanel {

  static  TOP = 1;

  static  LEFT = 2;

  static  BOTTOM = 3;

  static  RIGHT = 4;

  static  START = 0;

  static  CENTER = 1;

  static  END = 2;

   tabs = null;

   tabsN = new JSComponent(document.createElement("nav"));

   tabsS = new JSComponent(document.createElement("nav"));

   tabsE = new JSComponent(document.createElement("nav"));

   tabsW = new JSComponent(document.createElement("nav"));

   content = new JSPanel();

   contentLayout = new CardLayout(0, 0);

   tabsGroup = new ButtonGroup();

   tabPlacement = JSTabbedPane.TOP;

   listeners = new Array();

  /**
   * Creates the object
   */
  constructor() {
    super();
    this.cssAddClass("jstabbedpane");
    this.setLayout(new BorderLayout(0, 0));
    this.createTab(this.tabsN);
    this.add(this.tabsN, BorderLayout.NORTH);
    this.createTab(this.tabsS);
    this.add(this.tabsS, BorderLayout.SOUTH);
    this.createTab(this.tabsE);
    this.add(this.tabsE, BorderLayout.EAST);
    this.createTab(this.tabsW);
    this.add(this.tabsW, BorderLayout.WEST);
    this.tabs = this.tabsN;
    this.content.setLayout(this.contentLayout);
    this.add(this.content, BorderLayout.CENTER);
  }

   createTab(tab) {
    let ul = document.createElement("ul");
    ul.appendChild(this.createLI());
    ul.appendChild(this.createLI());
    tab.appendNodeChild(ul);
  }

   createLI() {
    let li = document.createElement("li");
    li.style.flexGrow = "1";
    li.style.display = "none";
    return li;
  }

  /**
   * Clone of javax.swing.JTabbedPane.setTabPlacement
   *
   * @param tabPlacement The tab placement
   */
   setTabPlacement(tabPlacement) {
    this.tabPlacement = tabPlacement;
    switch(this.tabPlacement) {
      case JSTabbedPane.TOP:
        this.tabs = this.tabsN;
        break;
      case JSTabbedPane.BOTTOM:
        this.tabs = this.tabsS;
        break;
      case JSTabbedPane.LEFT:
        this.tabs = this.tabsW;
        break;
      case JSTabbedPane.RIGHT:
        this.tabs = this.tabsE;
        break;
    }
  }

  /**
   * Clone of javax.swing.JTabbedPane.getTabPlacement
   *
   * @return The tab placement
   */
   getTabPlacement() {
    return this.tabPlacement;
  }

  /**
   * Sets the tab alignment
   *
   * @param align The alignment (START, CENTER, END)
   */
   setAlign(align) {
    this.tabs.getChilStyleByQuery("nav ul li:first-child").display = "none";
    this.tabs.getChilStyleByQuery("nav ul li:last-child").display = "none";
    switch(align) {
      case JSTabbedPane.START:
        break;
      case JSTabbedPane.CENTER:
        this.tabs.getChilStyleByQuery("nav ul li:first-child").removeProperty("display");
        this.tabs.getChilStyleByQuery("nav ul li:last-child").removeProperty("display");
        break;
      case JSTabbedPane.END:
        this.tabs.getChilStyleByQuery("nav ul li:first-child").removeProperty("display");
        break;
    }
  }

  /**
   * Clone of javax.swing.JTabbedPane.addTab
   *
   * @param title The tab title
   * @param component The added component
   */
   addTab(title, component) {
    let button = new JSRadioButton();
    button.setText(title);
    button.setSelected(this.tabsGroup.getButtonCount() === 0);
    button.addActionListener(event => {
      this.contentLayout.show(this.content, title);
      this.onchange();
    });
    this.tabs.insertNodeBeforeInTree("nav ul", document.createElement("li"), "nav ul li:last-child");
    this.tabs.appendChildInTree("nav ul li:nth-last-child(2)", button);
    this.tabsGroup.add(button);
    this.content.add(component, title);
  }

  /**
   * Clone of javax.swing.JTabbedPane.addChangeListener
   *
   * @param listener The listener
   */
   addChangeListener(listener) {
    this.listeners.push(listener);
  }

   onchange() {
    let event = new ChangeEvent();
    this.listeners.forEach(listener => {
      if (typeof listener === "function") {
        listener(event);
      } else {
        listener.stateChanged(event);
      }
    });
  }
}
/**
 * The javax.swing.JProgressBar clone
 *
 * @author gianpiero.diblasi
 */
class JSProgressBar extends JSComponent {

  static  HORIZONTAL = 0;

  static  VERTICAL = 1;

   label = null;

   progress = null;

   min = 0;

   max = 100;

   value = 0;

   orientation = JSProgressBar.HORIZONTAL;

   indeterminate = false;

   stringPainted = false;

   string = "";

  /**
   * Creates the object
   */
  constructor() {
    super(document.createElement("div"));
    this.cssAddClass("jsprogressbar");
    this.cssAddClass("jsprogressbar-horizontal");
    this.label = document.createElement("label");
    this.label.textContent = "0%";
    this.label.style.minWidth = "0%";
    this.appendNodeChild(this.label);
    this.progress = document.createElement("div");
    this.progress.style.height = "1.7rem";
    this.appendNodeChild(this.progress);
  }

  /**
   * Clone of javax.swing.JProgressBar.setMaximum
   *
   * @param value The value
   */
   setMaximum(value) {
    this.max = value;
    this.setProgress();
  }

  /**
   * Clone of javax.swing.JProgressBar.setMinimum
   *
   * @param value The value
   */
   setMinimum(value) {
    this.min = value;
    this.setProgress();
  }

  /**
   * Clone of javax.swing.JProgressBar.setValue
   *
   * @param value The value
   */
   setValue(value) {
    this.value = value;
    this.setProgress();
  }

  /**
   * Clone of javax.swing.JProgressBar.setIndeterminate
   *
   * @param b true to set an indeterminate progressbar, false otherwise
   */
   setIndeterminate(b) {
    this.indeterminate = b;
    this.setOrientation(this.orientation);
    this.setProgress();
  }

  /**
   * Clone of javax.swing.JProgressBar.setStringPainted
   *
   * @param b true to paint the string, false otherwise
   */
   setStringPainted(b) {
    this.stringPainted = b;
    this.setProgress();
  }

  /**
   * Clone of javax.swing.JProgressBar.setString
   *
   * @param string The string to paint
   */
   setString(string) {
    this.string = string;
    this.setProgress();
  }

  /**
   * Clone of javax.swing.JProgressBar.setOrientation
   *
   * @param orientation The orientation
   */
   setOrientation(orientation) {
    this.orientation = orientation;
    this.cssRemoveClass("jsprogressbar-horizontal");
    this.cssRemoveClass("jsprogressbar-vertical");
    this.label.style.removeProperty("min-width");
    this.label.style.removeProperty("min-height");
    this.progress.style.removeProperty("width");
    this.progress.style.removeProperty("height");
    switch(orientation) {
      case JSProgressBar.HORIZONTAL:
        this.cssAddClass("jsprogressbar-horizontal");
        this.progress.style.height = "1.7rem";
        break;
      case JSProgressBar.VERTICAL:
        this.cssAddClass("jsprogressbar-vertical");
        this.progress.style.width = "1.7rem";
        break;
    }
    this.setProgress();
  }

   setProgress() {
    let valuePerc = new Number(100 * (this.value - this.min) / (this.max - this.min));
    switch(this.orientation) {
      case JSProgressBar.HORIZONTAL:
        this.label.style.minWidth = (this.stringPainted && this.string ? 100 : valuePerc) + "%";
        break;
      case JSProgressBar.VERTICAL:
        this.label.style.minHeight = (this.stringPainted && this.string ? 100 : valuePerc) + "%";
        break;
    }
    this.label.textContent = this.string ? this.string : (valuePerc.toFixed() + "%");
    this.label.style.visibility = this.indeterminate || !this.stringPainted ? "hidden" : "visible";
    if (this.stringPainted && this.string) {
      this.label.style.background = "linear-gradient(to right, var(--main-action-color) " + valuePerc + "%, var(--main-color) " + valuePerc + "%)";
      this.label.style.setProperty("background-clip", "text");
      this.label.style.setProperty("-webkit-text-fill-color", "transparent");
    } else {
      this.label.style.removeProperty("background");
      this.label.style.removeProperty("background-clip");
      this.label.style.removeProperty("-webkit-text-fill-color");
    }
    if (this.indeterminate) {
      this.cssAddClass("jsprogressbar-indeterminate");
      this.getStyle().animationName = "jsprogressbar";
    } else {
      this.cssRemoveClass("jsprogressbar-indeterminate");
      this.getStyle().animationName = "none";
      switch(this.orientation) {
        case JSProgressBar.HORIZONTAL:
          this.getStyle().background = "linear-gradient(to right, var(--main-action-bgcolor) " + valuePerc + "%, var(--main-bgcolor) " + valuePerc + "%)";
          this.progress.style.width = valuePerc + "%";
          break;
        case JSProgressBar.VERTICAL:
          this.getStyle().background = "linear-gradient(to bottom, var(--main-action-bgcolor) " + valuePerc + "%, var(--main-bgcolor) " + valuePerc + "%)";
          this.progress.style.height = valuePerc + "%";
          break;
      }
    }
  }
}
/**
 * The javax.swing.JSlider clone
 *
 * @author gianpiero.diblasi
 */
class JSSlider extends JSComponent {

  static  HORIZONTAL = 0;

  static  VERTICAL = 1;

   modelAndRenderer = null;

   orientation = 0;

   majorTickSpacing = 0;

   paintTicks = false;

   paintLabels = false;

   valueIsAdjusting = false;

   listeners = new Array();

   slider = null;

   dataList = null;

   dataListID = "DataList_" + new Date().getTime() + "_" + parseInt(1000 * Math.random());

  /**
   * Creates the object
   */
  constructor() {
    super(document.createElement("div"));
    this.cssAddClass("jsslider");
    this.cssAddClass("jsslider-horizontal");
    this.slider = document.createElement("input");
    this.slider.setAttribute("type", "range");
    this.slider.setAttribute("list", this.dataListID);
    this.slider.addEventListener("input", event => this.onchange(true));
    this.slider.addEventListener("change", event => this.onchange(false));
    this.appendNodeChild(this.slider);
    this.dataList = document.createElement("datalist");
    this.dataList.id = this.dataListID;
    this.appendNodeChild(this.dataList);
    let div = document.createElement("div");
    div.style.display = "none";
    this.appendNodeChild(div);
  }

  /**
   * Clone of javax.swing.JSlider.addChangeListener
   *
   * @param listener The listener
   */
   addChangeListener(listener) {
    this.listeners.push(listener);
  }

   onchange(b) {
    this.valueIsAdjusting = b;
    let event = new ChangeEvent();
    this.listeners.forEach(listener => {
      if (typeof listener === "function") {
        listener(event);
      } else {
        listener.stateChanged(event);
      }
    });
  }

  /**
   * Clone of javax.swing.JSlider.getValueIsAdjusting
   *
   * @return true if value is adjusting, false otherwise
   */
   getValueIsAdjusting() {
    return this.valueIsAdjusting;
  }

  /**
   * Clone of javax.swing.JSlider.setMaximum
   *
   * @param value The value
   */
   setMaximum(value) {
    this.slider.setAttribute("max", "" + value);
    this.setDatalist();
  }

  /**
   * Clone of javax.swing.JSlider.setMinimum
   *
   * @param value The value
   */
   setMinimum(value) {
    this.slider.setAttribute("min", "" + value);
    this.setDatalist();
  }

  /**
   * Clone of javax.swing.JSlider.setOrientation
   *
   * @param orientation The orientation
   */
   setOrientation(orientation) {
    this.orientation = orientation;
    this.cssRemoveClass("jsslider-horizontal");
    this.cssRemoveClass("jsslider-vertical");
    switch(orientation) {
      case JSSlider.HORIZONTAL:
        this.cssAddClass("jsslider-horizontal");
        break;
      case JSSlider.VERTICAL:
        this.cssAddClass("jsslider-vertical");
        break;
    }
  }

  /**
   * Clone of javax.swing.JSlider.getOrientation
   *
   * @return The orientation
   */
   getOrientation() {
    return this.orientation;
  }

  /**
   * Clone of javax.swing.JSlider.setInverted
   *
   * @param b true to invert the slider, false otherwise
   */
   setInverted(b) {
    if (b) {
      this.cssAddClass("jsslider-inverted");
    } else {
      this.cssRemoveClass("jsslider-inverted");
    }
  }

  /**
   * Clone of javax.swing.JSlider.setPaintTrack
   *
   * @param b true to paint the track, false otherwise
   */
   setPaintTrack(b) {
    if (b) {
      this.slider.classList.remove("no-paint-track");
    } else {
      this.slider.classList.add("no-paint-track");
    }
  }

  /**
   * Clone of javax.swing.JSlider.setValue
   *
   * @param value The value
   */
   setValue(value) {
    this.slider.value = "" + value;
  }

  /**
   * Clone of javax.swing.JSlider.getValue
   *
   * @return The value
   */
   getValue() {
    return this.slider.valueAsNumber;
  }

   setEnabled(b) {
    super.setEnabled(b);
    if (b) {
      this.slider.removeAttribute("disabled");
    } else {
      this.slider.setAttribute("disabled", "disabled");
    }
  }

  /**
   * Clone of javax.swing.JSlider.setMajorTickSpacing
   *
   * @param value The value
   */
   setMajorTickSpacing(value) {
    this.majorTickSpacing = value;
    this.setDatalist();
  }

  /**
   * Clone of javax.swing.JSlider.setPaintTicks
   *
   * @param b true to paint the ticks, false otherwise
   */
   setPaintTicks(b) {
    this.paintTicks = b;
    this.setDatalist();
  }

  /**
   * Clone of javax.swing.JSlider.setPaintLabels
   *
   * @param b true to paint the labels, false otherwise
   */
   setPaintLabels(b) {
    this.paintLabels = b;
    this.setDatalist();
  }

   setDatalist() {
    if (!this.modelAndRenderer) {
      this.dataList.textContent = "";
      this.dataList.style.display = "none";
      if (this.paintTicks && this.majorTickSpacing) {
        if (this.paintLabels) {
          this.dataList.style.display = "flex";
        }
        for (let tick = parseInt(this.slider.getAttribute("min")); tick <= parseInt(this.slider.getAttribute("max")); tick += this.majorTickSpacing) {
          let option = document.createElement("option");
          option.setAttribute("value", "" + tick);
          option.setAttribute("label", "" + tick);
          switch(this.orientation) {
            case JSSlider.HORIZONTAL:
              this.dataList.appendChild(option);
              break;
            case JSSlider.VERTICAL:
              this.dataList.prepend(option);
              break;
          }
        }
      }
    }
  }

  /**
   * Sets the model. When a model is set the following methods have no effect:
   * <ul>
   * <li>setMaximum</li>
   * <li>setMinimum</li>
   * <li>setMajorTickSpacing</li>
   * <li>setPaintTicks</li>
   * <li>setPaintLabels</li>
   * </ul>
   *
   * @param modelAndRenderer The model
   */
   setModelAndRenderer(modelAndRenderer) {
    this.modelAndRenderer = modelAndRenderer;
    this.modelAndRenderer.setSlider(this);
  }

  /**
   * Returns the model
   *
   * @return The model
   */
   getModelAndRenderer() {
    return this.modelAndRenderer;
  }
}
/**
 * The javax.swing.JSpinner clone
 *
 * @author gianpiero.diblasi
 */
class JSSpinner extends JSComponent {

   input = document.createElement("input");

   up = document.createElement("button");

   down = document.createElement("button");

   run = false;

   rand = 0.0;

   valueIsAdjusting = false;

   listeners = new Array();

  /**
   * Creates the object
   */
  constructor() {
    super(document.createElement("div"));
    this.cssAddClass("jsspinner");
    this.input.setAttribute("type", "number");
    this.input.setAttribute("value", "0");
    this.input.style.setProperty("grid-area", "num");
    this.input.addEventListener("input", event => this.onchange(true));
    this.input.addEventListener("change", event => this.onchange(false));
    this.appendNodeChild(this.input);
    this.up.textContent = "\u25B2";
    this.up.style.setProperty("grid-area", "up");
    this.up.tabIndex = -1;
    this.up.addEventListener("mousedown", event => this.spin(true));
    this.up.addEventListener("mouseup", event => this.run = false);
    this.appendNodeChild(this.up);
    this.down.textContent = "\u25BC";
    this.down.style.setProperty("grid-area", "down");
    this.down.tabIndex = -1;
    this.down.addEventListener("mousedown", event => this.spin(false));
    this.down.addEventListener("mouseup", event => this.run = false);
    this.appendNodeChild(this.down);
  }

   spin(isUp) {
    if (this.run) {
      return;
    } else if (isUp) {
      this.input.stepUp();
    } else {
      this.input.stepDown();
    }
    this.run = true;
    this.spinAgain(isUp, 250);
  }

   spinAgain(isUp, delay) {
    this.rand = Math.random();
    let rnd = this.rand;
    setTimeout(() => {
      if (!this.run || rnd !== this.rand) {
        this.onchange(false);
      } else if (isUp) {
        this.input.stepUp();
        this.onchange(true);
        this.spinAgain(isUp, 25);
      } else {
        this.input.stepDown();
        this.onchange(true);
        this.spinAgain(isUp, 25);
      }
    }, delay);
  }

  /**
   * Clone of javax.swing.JSpinner.setModel
   *
   * @param model The model
   */
   setModel(model) {
    model.setJSSpinner(this);
  }

  /**
   * Clone of javax.swing.JSpinner.addChangeListener
   *
   * @param listener The listener
   */
   addChangeListener(listener) {
    this.listeners.push(listener);
  }

   onchange(b) {
    this.valueIsAdjusting = b;
    let event = new ChangeEvent();
    this.listeners.forEach(listener => {
      if (typeof listener === "function") {
        listener(event);
      } else {
        listener.stateChanged(event);
      }
    });
  }

  /**
   * Clone of javax.swing.JSpinner.setValue
   *
   * @param value The value
   */
   setValue(value) {
    this.input.valueAsNumber = value;
  }

  /**
   * Clone of javax.swing.JSpinner.getValue
   *
   * @return The value
   */
   getValue() {
    return this.input.valueAsNumber;
  }

  /**
   * Clone of javax.swing.JSpinner.getValueIsAdjusting
   *
   * @return true if value is adjusting, false otherwise
   */
   getValueIsAdjusting() {
    return this.valueIsAdjusting;
  }

   setEnabled(b) {
    super.setEnabled(b);
    if (b) {
      this.input.removeAttribute("disabled");
      this.up.removeAttribute("disabled");
      this.down.removeAttribute("disabled");
    } else {
      this.input.setAttribute("disabled", "disabled");
      this.up.setAttribute("disabled", "disabled");
      this.down.setAttribute("disabled", "disabled");
    }
  }
}
/**
 * The javax.swing.JTextField clone
 *
 * @author gianpiero.diblasi
 */
class JSTextField extends JSComponent {

   listeners = new Array();

  /**
   * Creates the object
   */
  constructor() {
    super(document.createElement("input"));
    this.cssAddClass("jstextfield");
    this.setAttribute("type", "text");
    this.addEventListener("input", event => this.onclick());
  }

  /**
   * Clone of javax.swing.JTextField.setText
   *
   * @param text The text
   */
   setText(text) {
    this.setProperty("value", text);
  }

  /**
   * Clone of javax.swing.JSTextField.getText
   *
   * @return The text
   */
   getText() {
    return this.getProperty("value");
  }

  /**
   * Clone of javax.swing.JTextField.getText
   *
   * @param b true to make the textfield editable, false otherwise
   */
   setEditable(b) {
    if (b) {
      this.removeAttribute("readonly");
    } else {
      this.setAttribute("readonly", "readonly");
    }
  }

  /**
   * Clone of javax.swing.JTextField.addActionListener, this listener is
   * triggered whenever the text changes
   *
   * @param listener The listener
   */
   addActionListener(listener) {
    this.listeners.push(listener);
  }

   onclick() {
    let event = new ActionEvent();
    this.listeners.forEach(listener => {
      if (typeof listener === "function") {
        listener(event);
      } else {
        listener.actionPerformed(event);
      }
    });
    return null;
  }
}
/**
 * The javax.swing.JFileChooser clone
 *
 * @author gianpiero.diblasi
 */
class JSFileChooser {

  static  SINGLE_SELECTION = 0;

  static  MULTIPLE_SELECTION = 1;

  static  FOLDER_SELECTION = 2;

  static  input = null;

  constructor() {
  }

  /**
   * Shows an open dialog
   *
   * @param allowedFileTypes The allowed file types separated by commas and
   * starting with a dot, eg. '.gif,.jpeg,.png', empty string to set no
   * constraint on the type
   * @param selectionType The selection type
   * @param maximumFileSize The maximum allowed file size in Mbytes, a value
   * less than or equal to 0 to set no constraint on the size
   * @param response The function to call on close
   */
  static  showOpenDialog(allowedFileTypes, selectionType, maximumFileSize, response) {
    document.querySelectorAll("input[type=file]").forEach(element => element.parentElement.removeChild(element));
    JSFileChooser.input = document.createElement("input");
    JSFileChooser.input.setAttribute("type", "file");
    JSFileChooser.input.setAttribute("accept", allowedFileTypes);
    switch(selectionType) {
      case JSFileChooser.SINGLE_SELECTION:
        break;
      case JSFileChooser.MULTIPLE_SELECTION:
        JSFileChooser.input.setAttribute("multiple", "multiple");
        break;
      case JSFileChooser.FOLDER_SELECTION:
        JSFileChooser.input.setAttribute("webkitdirectory", "webkitdirectory");
        break;
    }
    JSFileChooser.input.style.display = "none";
    JSFileChooser.input.onchange = (event) => JSFileChooser.onchange(JSFileChooser.input.files, allowedFileTypes, maximumFileSize, response);
    document.body.appendChild(JSFileChooser.input);
    let event = document.createEvent("MouseEvents");
    event.initEvent("click", false, false);
    JSFileChooser.input.dispatchEvent(event);
  }

  static  onchange(files, allowedFileTypes, maximumFileSize, response) {
    files = JSFileChooser.purgeFiles(files, allowedFileTypes, maximumFileSize);
    document.body.removeChild(JSFileChooser.input);
    if (response) {
      response(files);
    }
    return null;
  }

  static  purgeFiles(files, allowedFileTypes, maximumFileSize) {
    let filesToUpload = new Array();
    for (let index = 0; index < files.length; index++) {
      let sizeOk = maximumFileSize <= 0 || files[index].size / (1024 * 1024) <= maximumFileSize;
      let aft = new String(allowedFileTypes);
      let name = new String(files[index].name);
      let typeOk = aft.length === 0 || aft.indexOf("." + name.split(".").pop().toLowerCase()) !== -1;
      if (sizeOk && typeOk) {
        filesToUpload.push(files[index]);
      }
    }
    return filesToUpload;
  }
}
/**
 * A file selector based on the JavaScript File System Access API
 *
 * @author gianpiero.diblasi
 */
class JSFilePicker {

  static  DB = null;

  static {
    let request = window.indexedDB.open("swing.js-JSFilePickerDB", 1);
    request.onupgradeneeded = event => {
      JSFilePicker.DB = event.target["result"];
      let options = new Object();
      options["keyPath"] = "id";
      JSFilePicker.DB.createObjectStore("handles", options);
      return null;
    };
    request.onsuccess = event => {
      JSFilePicker.DB = event.target["result"];
      return null;
    };
  }

  constructor() {
  }

  /**
   * Shows an open file picker
   *
   * @param options The options
   * @param maximumFileSize The maximum allowed file size in Mbytes, a value
   * less than or equal to 0 to set no constraint on the size
   * @param response The function to call on close
   */
  static  showOpenFilePicker(options, maximumFileSize, response) {
    if (options.id && JSFilePicker.DB) {
      let request = JSFilePicker.DB.transaction("handles", "readonly").objectStore("handles").get(options.id);
      request.onsuccess = event => {
        let result = event.target["result"];
        if (result) {
          options.startIn = result["handle"];
          JSFilePicker.openFilePicker(options, maximumFileSize, response);
        } else {
          eval("delete options.startIn");
          JSFilePicker.openFilePicker(options, maximumFileSize, response);
        }
        return null;
      };
      request.onerror = event => {
        eval("delete options.startIn");
        JSFilePicker.openFilePicker(options, maximumFileSize, response);
        return null;
      };
    } else {
      eval("delete options.startIn");
      JSFilePicker.openFilePicker(options, maximumFileSize, response);
    }
  }

  static  openFilePicker(options, maximumFileSize, response) {
    window.showOpenFilePicker(options).then(handles => {
      if (options.id && JSFilePicker.DB) {
        let transaction = JSFilePicker.DB.transaction("handles", "readwrite");
        transaction.oncomplete = event => {
          JSFilePicker.purgeFileSystemFileHandle(new Array(), handles, options.types, 0, maximumFileSize, response);
          return null;
        };
        let json = new Object();
        json["id"] = options.id;
        json["handle"] = handles[0];
        transaction.objectStore("handles").put(json);
      } else {
        JSFilePicker.purgeFileSystemFileHandle(new Array(), handles, options.types, 0, maximumFileSize, response);
      }
    });
  }

  static  purgeFileSystemFileHandle(finalHandles, handles, types, index, maximumFileSize, response) {
    if (index < handles.length) {
      handles[index].getFile().then(file => {
        let sizeOk = maximumFileSize <= 0 || file.size / (1024 * 1024) <= maximumFileSize;
        let exts = new Array();
        types.forEach(type => Object.keys(type.accept).forEach(key => (type.accept[key]).forEach(ext => exts.push(ext))));
        let name = new String(file.name);
        let typeOk = types.length === 0 || exts.indexOf("." + name.split(".").pop().toLowerCase()) !== -1;
        if (sizeOk && typeOk) {
          finalHandles.push(handles[index]);
        }
        JSFilePicker.purgeFileSystemFileHandle(finalHandles, handles, types, index + 1, maximumFileSize, response);
      });
    } else if (response) {
      response(finalHandles);
    }
  }
}
/**
 * The javax.swing.JOptionPane clone
 *
 * @author gianpiero.diblasi
 */
class JSOptionPane {

  static  DEFAULT_OPTION = -1;

  static  YES_NO_OPTION = 0;

  static  YES_NO_CANCEL_OPTION = 1;

  static  OK_CANCEL_OPTION = 2;

  static  YES_OPTION = 0;

  static  NO_OPTION = 1;

  static  CANCEL_OPTION = 2;

  static  OK_OPTION = 0;

  static  CLOSED_OPTION = -1;

  static  ERROR_MESSAGE = 0;

  static  INFORMATION_MESSAGE = 1;

  static  WARNING_MESSAGE = 2;

  static  QUESTION_MESSAGE = 3;

  static  PLAIN_MESSAGE = -1;

  constructor() {
  }

  /**
   * Shows a message dialog, this method does not stop the code flow
   *
   * @param message The message
   * @param title The title
   * @param messageType The message type
   * @param response The function to call on close
   */
  static  showMessageDialog(message, title, messageType, response) {
    let dialog = JSOptionPane.createDialog(message, title);
    JSOptionPane.addIcon(messageType, dialog);
    JSOptionPane.addButtons(dialog, "OK", response ? value => response() : null);
    dialog.setVisible(true);
  }

  /**
   * Shows a confirm dialog, this method does not stop the code flow
   *
   * @param message The message
   * @param title The title
   * @param optionType The option type
   * @param messageType The message type
   * @param response The function to call on close
   */
  static  showConfirmDialog(message, title, optionType, messageType, response) {
    let dialog = JSOptionPane.createDialog(message, title);
    JSOptionPane.addIcon(messageType, dialog);
    switch(optionType) {
      case JSOptionPane.DEFAULT_OPTION:
        break;
      case JSOptionPane.OK_CANCEL_OPTION:
        JSOptionPane.addButtons(dialog, "OK_CANCEL", response);
        break;
      case JSOptionPane.YES_NO_OPTION:
        JSOptionPane.addButtons(dialog, "YES_NO", response);
        break;
      case JSOptionPane.YES_NO_CANCEL_OPTION:
        JSOptionPane.addButtons(dialog, "YES_NO_CANCEL", response);
        break;
    }
    dialog.setVisible(true);
  }

  /**
   * Shows an input dialog, this method does not stop the code flow
   *
   * @param component The component containing the input to select
   * @param title The title
   * @param addChangeListener The function to call to add a change listener to
   * the component
   * @param isValid The function to call when the component's value changes to
   * verify if the selected value is valid
   * @param response The function to call on close
   */
  static  showInputDialog(component, title, addChangeListener, isValid, response) {
    let dialog = JSOptionPane.createDialog(component, title);
    JSOptionPane.addButtons(dialog, "OK_CANCEL", response);
    JSOptionPane.setOkEnabled(dialog, isValid);
    addChangeListener(event => JSOptionPane.setOkEnabled(dialog, isValid));
    dialog.setVisible(true);
  }

  static  setOkEnabled(dialog, isValid) {
    if (isValid()) {
      dialog.removeChildAttributeByQuery(".jsoptionpane-option-" + JSOptionPane.OK_OPTION, "disabled");
    } else {
      dialog.setChildAttributeByQuery(".jsoptionpane-option-" + JSOptionPane.OK_OPTION, "disabled", "disabled");
    }
  }

  static  createDialog(message, title) {
    let dialog = new JSDialog();
    dialog.getContentPane().setLayout(new BorderLayout(20, 20));
    dialog.cssAddClass("jsoptionpane");
    dialog.setTitle(title);
    if (message instanceof JSComponent) {
      dialog.getContentPane().add(message, BorderLayout.CENTER);
    } else {
      let label = new JSLabel();
      label.cssAddClass("jsoptionpane-label");
      label.setText(message.toString());
      dialog.getContentPane().add(label, BorderLayout.CENTER);
    }
    return dialog;
  }

  static  addIcon(messageType, dialog) {
    let label = new JSLabel();
    switch(messageType) {
      case JSOptionPane.ERROR_MESSAGE:
        dialog.cssAddClass("jsoptionpane-error");
        label.setText("!");
        dialog.getContentPane().add(label, BorderLayout.WEST);
        break;
      case JSOptionPane.INFORMATION_MESSAGE:
        dialog.cssAddClass("jsoptionpane-information");
        label.setText("i");
        dialog.getContentPane().add(label, BorderLayout.WEST);
        break;
      case JSOptionPane.WARNING_MESSAGE:
        dialog.cssAddClass("jsoptionpane-warning");
        label.setText("!");
        dialog.getContentPane().add(label, BorderLayout.WEST);
        break;
      case JSOptionPane.QUESTION_MESSAGE:
        dialog.cssAddClass("jsoptionpane-question");
        label.setText("?");
        dialog.getContentPane().add(label, BorderLayout.WEST);
        break;
      case JSOptionPane.PLAIN_MESSAGE:
        break;
    }
  }

  static  addButtons(dialog, optionType, response) {
    let panel = new JSPanel();
    let RESPONSE = new Object();
    RESPONSE["RESPONSE"] = JSOptionPane.CLOSED_OPTION;
    switch(optionType) {
      case "OK":
        JSOptionPane.addButton(dialog, panel, Translations.JSOptionPane_OK, RESPONSE, JSOptionPane.DEFAULT_OPTION);
        break;
      case "OK_CANCEL":
        JSOptionPane.addButton(dialog, panel, Translations.JSOptionPane_OK, RESPONSE, JSOptionPane.OK_OPTION);
        JSOptionPane.addButton(dialog, panel, Translations.JSOptionPane_CANCEL, RESPONSE, JSOptionPane.CANCEL_OPTION);
        break;
      case "YES_NO":
        JSOptionPane.addButton(dialog, panel, Translations.JSOptionPane_YES, RESPONSE, JSOptionPane.YES_OPTION);
        JSOptionPane.addButton(dialog, panel, Translations.JSOptionPane_NO, RESPONSE, JSOptionPane.NO_OPTION);
        break;
      case "YES_NO_CANCEL":
        JSOptionPane.addButton(dialog, panel, Translations.JSOptionPane_YES, RESPONSE, JSOptionPane.YES_OPTION);
        JSOptionPane.addButton(dialog, panel, Translations.JSOptionPane_NO, RESPONSE, JSOptionPane.NO_OPTION);
        JSOptionPane.addButton(dialog, panel, Translations.JSOptionPane_CANCEL, RESPONSE, JSOptionPane.CANCEL_OPTION);
        break;
    }
    dialog.getContentPane().add(panel, BorderLayout.SOUTH);
    dialog.addWindowClosedListener(event => {
      dialog.dispose();
      if (response) {
        response(RESPONSE["RESPONSE"]);
      }
    });
  }

  static  addButton(dialog, panel, label, RESPONSE, option) {
    let button = new JSButton();
    button.setText(label);
    button.cssAddClass("jsoptionpane-option-" + option);
    button.addActionListener(event => {
      RESPONSE["RESPONSE"] = option;
      dialog.setVisible(false);
    });
    panel.add(button, null);
  }
}
/**
 * The abstract object to model and render a combobox
 *
 * @author gianpiero.diblasi
 * @param <T> The type
 */
class AbstractComboBoxModelAndRenderer {

   combobox = null;

   selected = null;

   elements = new Array();

  /**
   * Sets the combobox managed by this model
   *
   * @param combobox The combobox
   */
   setComboBox(combobox) {
    this.combobox = combobox;
    this.combobox.appendNodeChildInTree("summary", this.render(null, false));
    this.elements.forEach(element => this.addOption(element));
    this.combobox.clearChildContentByQuery("summary");
    this.combobox.appendNodeChildInTree("summary", this.render(this.selected, false));
  }

  /**
   * Returns the selected element
   *
   * @return The selected element
   */
   getSelectedElement() {
    return this.selected;
  }

  /**
   * Sets the selected element
   *
   * @param element The selected element
   */
   setSelectedElement(element) {
    this.selected = null;
    this.elements.forEach(el => {
      try {
        this.selected = el.compareTo(element) ? this.selected : el;
      } catch (ex) {
        this.selected = el === element ? el : this.selected;
      }
    });
    if (this.combobox) {
      this.combobox.clearChildContentByQuery("summary");
      this.combobox.appendNodeChildInTree("summary", this.render(this.selected, false));
    }
  }

  /**
   * Adds an element to this model
   *
   * @param element The element
   */
   addElement(element) {
    this.elements.push(element);
    if (this.combobox) {
      this.addOption(element);
    }
  }

   addOption(element) {
    let li = document.createElement("li");
    li.appendChild(this.render(element, true));
    li.addEventListener("click", event => {
      this.selected = element;
      this.combobox.clearChildContentByQuery("summary");
      this.combobox.appendNodeChildInTree("summary", this.render(element, false));
      this.combobox.removeAttribute("open");
      this.combobox.invoke("querySelector('summary').focus()");
      this.combobox.onclick();
    });
    this.combobox.appendNodeChildInTree("ul", li);
  }

  /**
   * Renders an element
   *
   * @param element The element
   * @param inlist true if the rendered element is added to the list, false
   * otherwise (the rendered element is used to show the selected value)
   * @return The renderer element
   */
   render(element, inlist) {
  }
}
/**
 * The abstract key/value implementation of the AbstractComboBoxModelAndRenderer
 *
 * @author gianpiero.diblasi
 * @param <K> The key type
 * @param <V> The value type
 */
class AbstractKeyValueComboBoxModelAndRenderer extends AbstractComboBoxModelAndRenderer {
}
/**
 * The default implementation of the AbstractComboBoxModelAndRenderer
 *
 * @author gianpiero.diblasi
 * @param <T> The type
 */
class DefaultComboBoxModelAndRenderer extends AbstractComboBoxModelAndRenderer {

   render(element, inlist) {
    let label = document.createElement("label");
    label.textContent = element ? element.toString() : "";
    return label;
  }
}
/**
 * The default key/value implementation of the
 * AbstractKeyValueComboBoxModelAndRenderer
 *
 * @author gianpiero.diblasi
 * @param <K> The key type
 * @param <V> The value type
 */
class DefaultKeyValueComboBoxModelAndRenderer extends AbstractComboBoxModelAndRenderer {

   render(element, inlist) {
    let label = document.createElement("label");
    label.textContent = element ? element.value.toString() : "";
    return label;
  }
}
/**
 * The abstract object to model and render a slider
 *
 * @author gianpiero.diblasi
 * @param <T> The type
 */
class AbstractSliderModelAndRenderer {

   slider = null;

   renderByDataList = false;

   elements = new Array();

  /**
   * Creates the object
   *
   * @param renderByDataList true if this object uses the datalist tag to render
   * data, false otherwise
   */
  constructor(renderByDataList) {
    this.renderByDataList = renderByDataList;
  }

  /**
   * Returns the element at an index
   *
   * @param index The index
   * @return The element
   */
   getElementAt(index) {
    return this.elements[index];
  }

  /**
   * Sets the slider managed by this model
   *
   * @param slider The combobox
   */
   setSlider(slider) {
    this.slider = slider;
    this.setDatalist();
  }

  /**
   * Adds an element to this model
   *
   * @param element The element
   */
   addElement(element) {
    this.elements.push(element);
    if (this.slider) {
      this.setDatalist();
    }
  }

   setDatalist() {
    this.slider.setValue(0);
    this.slider.setMinimum(0);
    this.slider.setMaximum(this.elements.length - 1);
    this.slider.clearChildContentByQuery("datalist");
    this.slider.getChilStyleByQuery("datalist").display = this.renderByDataList ? "flex" : "none";
    this.slider.clearChildContentByQuery("div");
    this.slider.getChilStyleByQuery("div").display = !this.renderByDataList ? "flex" : "none";
    this.elements.forEach((element, index, array) => {
      let option = document.createElement("option");
      option.setAttribute("value", "" + index);
      let rendered = this.render(element, this.slider);
      if (this.renderByDataList) {
        option.setAttribute("label", rendered);
      } else {
        switch(this.slider.getOrientation()) {
          case JSSlider.HORIZONTAL:
            this.slider.appendNodeChildInTree("div", rendered);
            break;
          case JSSlider.VERTICAL:
            this.slider.prependNodeChildInTree("div", rendered);
            break;
        }
      }
      switch(this.slider.getOrientation()) {
        case JSSlider.HORIZONTAL:
          this.slider.appendNodeChildInTree("datalist", option);
          break;
        case JSSlider.VERTICAL:
          this.slider.prependNodeChildInTree("datalist", option);
          break;
      }
    });
  }

  /**
   * Renders an element
   *
   * @param element The element
   * @param slider The slider
   * @return The renderer element
   */
   render(element, slider) {
  }
}
/**
 * The default implementation of the AbstractSliderModelAndRenderer
 *
 * @author gianpiero.diblasi
 * @param <T> The type
 */
class DefaultSliderModelAndRenderer extends AbstractSliderModelAndRenderer {

  /**
   * Creates the object
   */
  constructor() {
    super(true);
  }

   render(element, slider) {
    return element.toString();
  }
}
/**
 * An AbstractSliderModelAndRenderer able to render an HTML image
 *
 * @author gianpiero.diblasi
 * @param <T> The image producer
 * @param <S> The type
 */
class HTMLImageSliderModelAndRenderer extends AbstractSliderModelAndRenderer {

  /**
   * Creates the object
   */
  constructor() {
    super(false);
  }

   render(element, slider) {
    let img = element.produce();
    img.addEventListener("load", event => {
      switch(slider.getOrientation()) {
        case JSSlider.HORIZONTAL:
          slider.getChilStyleByQuery("input").marginLeft = (img.width / 2) + "px";
          slider.getChilStyleByQuery("input").marginRight = (img.width / 2) + "px";
          break;
        case JSSlider.VERTICAL:
          slider.getChilStyleByQuery("input").marginTop = (img.height / 2) + "px";
          slider.getChilStyleByQuery("input").marginBottom = (img.height / 2) + "px";
          break;
      }
    });
    return img;
  }
}
/**
 * The javax.swing.SpinnerNumberModel clone
 *
 * @author gianpiero.diblasi
 */
class SpinnerNumberModel {

   value = 0.0;

   minimum = 0.0;

   maximum = 0.0;

   stepSize = 0.0;

  /**
   * Creates the object
   *
   * @param value The value
   * @param minimum The minimum value
   * @param maximum The maximum value
   * @param stepSize The step
   */
  constructor(value, minimum, maximum, stepSize) {
    this.value = value;
    this.minimum = minimum;
    this.maximum = maximum;
    this.stepSize = stepSize;
  }

  /**
   * Sets the spinner managed by this model
   *
   * @param spinner The spinner
   */
   setJSSpinner(spinner) {
    spinner.setChildAttributeByQuery("input", "value", "" + this.value);
    spinner.setChildAttributeByQuery("input", "max", "" + this.maximum);
    spinner.setChildAttributeByQuery("input", "min", "" + this.minimum);
    spinner.setChildAttributeByQuery("input", "step", "" + this.stepSize);
  }
}
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
    this._roundness = roundness + "rem";
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
/**
 * The abstract object able to produce an HTML image element based on a value
 *
 * @author gianpiero.diblasi
 * @param <T> The value type
 */
class AbstractHTMLImageProducer {

   value = null;

  /**
   * Creates the object
   *
   * @param value The value
   */
  constructor(value) {
    this.value = value;
  }

  /**
   * Produces an HTML image element
   *
   * @return An HTML image element
   */
   produce() {
  }

  /**
   * Returns the value
   *
   * @return The value
   */
   getValue() {
    return this.value;
  }
}
/**
 * The default implementation of the AbstractHTMLImageProducer based on an
 * source (URL, base64, etc.)
 *
 * @author gianpiero.diblasi
 * @param <T> The value type
 */
class DefaultHTMLImageProducer extends AbstractHTMLImageProducer {

   src = null;

  /**
   * Creates the object
   *
   * @param value The value
   * @param src The source of the HTML image element (URL, base64, etc.)
   */
  constructor(value, src) {
    super(value);
    this.src = src;
  }

   produce() {
    let img = document.createElement("img");
    img.src = this.src;
    return img;
  }
}
/**
 * The options used when opening a file
 *
 * @author gianpiero.diblasi
 */
class FilePickerOptions {

   id = null;

   suggestedName = null;

   startIn = null;

   multiple = false;

   types = new Array();

   excludeAcceptAllOption = false;
}
/**
 * The types in the options used when opening a file
 *
 * @author gianpiero.diblasi
 */
class FilePickerOptionsType {

   description = null;

   accept = new Object();

   pushAccept(mime, extensions) {
    this.accept[mime] = extensions;
  }
}
/**
 * The simulation of the FileSystemHandle object
 *
 * @author gianpiero.diblasi
 */
class FileSystemHandle {

   kind = "";

   name = "";

   isSameEntry(fileSystemHandle) {
  }
}
/**
 * The simulation of the FileSystemFileHandle object
 *
 * @author gianpiero.diblasi
 */
class FileSystemFileHandle extends FileSystemHandle {

   getFile() {
  }

   createWritable(options) {
  }
}
/**
 * The options used when getting a FileSystemHandle
 *
 * @author gianpiero.diblasi
 */
class FileSystemHandleGetOptions {

   create = false;
}
/**
 * The options used when removing a FileSystemHandle
 *
 * @author gianpiero.diblasi
 */
class FileSystemHandleRemoveOptions {

   recursive = false;
}
/**
 * The options used when creating a FileSystemWritableFileStream
 *
 * @author gianpiero.diblasi
 */
class FileSystemWritableFileStreamCreateOptions {

   keepExistingData = false;
}
/**
 * The simulation of the WritableStream object
 *
 * @author gianpiero.diblasi
 */
class WritableStream {

   locked = false;

   getWriter() {
  }

   close() {
  }

   abort(reason) {
  }
}
/**
 * The simulation of the FileSystemWritableFileStream object
 *
 * @author gianpiero.diblasi
 */
class FileSystemWritableFileStream extends WritableStream {

   write(data) {
  }

   seek(position) {
  }

   truncate(size) {
  }
}
/**
 * The simulation of the WritableStreamDefaultWriter object
 *
 * @author gianpiero.diblasi
 */
class WritableStreamDefaultWriter {

   ready = null;

   closed = null;

   desiredSize = 0;

   write(chunk) {
  }

   close() {
  }

   abort(reason) {
  }

   releaseLock() {
  }
}
/**
 * A key/value object
 *
 * @author gianpiero.diblasi
 * @param <K> The key type
 * @param <V> The value type
 */
class KeyValue extends Comparable {

   key = null;

   value = null;

  /**
   * Creates the object
   *
   * @param key The key
   * @param value The value
   */
  constructor(key, value) {
    super();
    this.key = key;
    this.value = value;
  }

   compareTo(other) {
    try {
      return this.key.compareTo(other.key);
    } catch (ex) {
      let result = 0;
      eval("result = this.key < other.key ? -1 : this.key > other.key ? +1 : 0");
      return result;
    }
  }
}
/**
 * The object managing the translations, currently only the English and Italian
 * languages are managed
 *
 * @author gianpiero.diblasi
 */
class Translations {

  static  JSOptionPane_OK = "";

  static  JSOptionPane_YES = "";

  static  JSOptionPane_NO = "";

  static  JSOptionPane_CANCEL = "";

  static  JSColorChooser_HUE = "";

  static  JSColorChooser_SATURATION = "";

  static  JSColorChooser_VALUE = "";

  static  JSColorChooser_LIGHTNESS = "";

  static  JSColorChooser_RED = "";

  static  JSColorChooser_GREEN = "";

  static  JSColorChooser_BLUE = "";

  static  JSColorChooser_CYAN = "";

  static  JSColorChooser_MAGENTA = "";

  static  JSColorChooser_YELLOW = "";

  static  JSColorChooser_BLACK = "";

  static  JSColorChooser_OPACITY = "";

  static  JSColorChooser_PALETTE = "";

  static  JSColorChooser_PREVIEW = "";

  static {
    switch(navigator.language.substring(0, 2)) {
      case "en":
      default:
        Translations.setEnglish();
        break;
      case "it":
        Translations.setItalian();
        break;
    }
  }

  constructor() {
  }

  /**
   * Sets the English language
   */
  static  setEnglish() {
    Translations.JSOptionPane_OK = "OK";
    Translations.JSOptionPane_YES = "Yes";
    Translations.JSOptionPane_NO = "No";
    Translations.JSOptionPane_CANCEL = "Cancel";
    Translations.JSColorChooser_HUE = "Hue";
    Translations.JSColorChooser_SATURATION = "Saturation";
    Translations.JSColorChooser_VALUE = "Value";
    Translations.JSColorChooser_LIGHTNESS = "Lightness";
    Translations.JSColorChooser_RED = "Red";
    Translations.JSColorChooser_GREEN = "Green";
    Translations.JSColorChooser_BLUE = "Blue";
    Translations.JSColorChooser_CYAN = "Cyan";
    Translations.JSColorChooser_MAGENTA = "Magenta";
    Translations.JSColorChooser_YELLOW = "Yellow";
    Translations.JSColorChooser_BLACK = "Black";
    Translations.JSColorChooser_OPACITY = "Opacity";
    Translations.JSColorChooser_PALETTE = "Palette";
    Translations.JSColorChooser_PREVIEW = "Preview";
  }

  /**
   * Sets the Italian language
   */
  static  setItalian() {
    Translations.JSOptionPane_OK = "OK";
    Translations.JSOptionPane_YES = "Si";
    Translations.JSOptionPane_NO = "No";
    Translations.JSOptionPane_CANCEL = "Annulla";
    Translations.JSColorChooser_HUE = "Tonalit\u00E0";
    Translations.JSColorChooser_SATURATION = "Saturazione";
    Translations.JSColorChooser_VALUE = "Valore";
    Translations.JSColorChooser_LIGHTNESS = "Luminosit\u00E0";
    Translations.JSColorChooser_RED = "Rosso";
    Translations.JSColorChooser_GREEN = "Verde";
    Translations.JSColorChooser_BLUE = "Blu";
    Translations.JSColorChooser_CYAN = "Ciano";
    Translations.JSColorChooser_MAGENTA = "Magenta";
    Translations.JSColorChooser_YELLOW = "Giallo";
    Translations.JSColorChooser_BLACK = "Nero";
    Translations.JSColorChooser_OPACITY = "Opacit\u00E0";
    Translations.JSColorChooser_PALETTE = "Tavolozza";
    Translations.JSColorChooser_PREVIEW = "Anteprima";
  }
}
