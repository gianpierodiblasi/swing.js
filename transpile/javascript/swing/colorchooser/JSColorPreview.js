/**
 * The preview of a color
 *
 * @author gianpiero.diblasi
 */
class JSColorPreview extends JSComponent {

   component = new JSComponent(document.createElement("div"));

   componentOpacity = new JSComponent(document.createElement("div"));

  /**
   * Creates the object
   */
  constructor() {
    super(document.createElement("div"));
    this.cssAddClass("jscolorpreview");
    this.component.cssAddClass("jscolorpreview-opaque");
    this.componentOpacity.cssAddClass("jscolorpreview-transparent");
    this.appendChild(this.component);
    this.appendChild(this.componentOpacity);
  }

   setColor(color) {
    this.component.getStyle().backgroundColor = color.getRGB_String();
    this.componentOpacity.getStyle().backgroundColor = color.getRGBA_String();
    let rgb = new Array();
    let hsl = new Array();
    rgb[0] = color.red;
    rgb[1] = color.green;
    rgb[2] = color.blue;
    Color.RGBtoHSL(rgb, hsl);
    this.getStyle().border = "1px solid " + (hsl[2] > 0.5 ? color.darkened(0.1).getRGB_HEX() : color.lighted(0.1).getRGB_HEX());
  }
}
