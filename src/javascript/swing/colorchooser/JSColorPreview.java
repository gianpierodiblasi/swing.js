package javascript.swing.colorchooser;

import static def.dom.Globals.document;
import def.js.Array;
import javascript.awt.Color;
import javascript.swing.JSComponent;

/**
 * The preview of a color
 *
 * @author gianpiero.diblasi
 */
public class JSColorPreview extends JSComponent {

  private final JSComponent component = new JSComponent(document.createElement("div"));
  private final JSComponent componentOpacity = new JSComponent(document.createElement("div"));

  /**
   * Creates the object
   */
  public JSColorPreview() {
    super(document.createElement("div"));
    this.cssAddClass("jscolorpreview");

    this.component.cssAddClass("jscolorpreview-opaque");
    this.componentOpacity.cssAddClass("jscolorpreview-transparent");

    this.appendChild(this.component);
    this.appendChild(this.componentOpacity);
  }

  public void setColor(Color color) {
    this.component.getStyle().backgroundColor = color.getRGB_String();
    this.componentOpacity.getStyle().backgroundColor = color.getRGBA_String();

    Array<Integer> rgb = new Array<>();
    Array<Double> hsl = new Array<>();
    rgb.$set(0, color.red);
    rgb.$set(1, color.green);
    rgb.$set(2, color.blue);
    Color.RGBtoHSL(rgb, hsl);
    this.getStyle().border = "1px solid " + (hsl.$get(2) > 0.5 ? color.darkened(0.1).getRGB_HEX() : color.lighted(0.1).getRGB_HEX());
  }
}
