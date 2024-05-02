/**
 * The javax.swing.JColorChooser clone
 *
 * @author gianpiero.diblasi
 */
class JSColorChooser extends AbstractButton {

  static  input = null;

  /**
   * Creates a button-like color chooser
   */
  constructor() {
    super(document.createElement("input"));
    this.setAttribute("type", "color");
    this.cssAddClass("jscolorchooser");
    this.addEventListener("change", event => this.onclick());
  }

  /**
   * Sets the text
   *
   * @param text The text
   */
   setText(text) {
    this.setAttribute("text-value", text);
  }

  /**
   * Set the content area filled
   *
   * @param b true to fill the area, false otherwise
   */
   setContentAreaFilled(b) {
    if (b) {
      this.cssRemoveClass("jscolorchooser-outline");
    } else {
      this.cssAddClass("jscolorchooser-outline");
    }
  }

  /**
   * Sets the color
   *
   * @param color The color
   */
   setColor(color) {
    this.setProperty("value", color ? color.getHEX() : "");
  }

  /**
   * Returns the color
   *
   * @return The color
   */
   getColor() {
    return Color.fromHEX(this.getProperty("value"));
  }

  /**
   * Shows a dialog to select the color
   *
   * @param color The initial color
   * @param response The function to call on close
   */
  static  showDialog(color, response) {
    document.querySelectorAll(".jscolorchooser-static").forEach(element => element.parentElement.removeChild(element));
    JSColorChooser.input = document.createElement("input");
    JSColorChooser.input.classList.add("jscolorchooser-static");
    JSColorChooser.input.setAttribute("type", "color");
    JSColorChooser.input.style.display = "none";
    JSColorChooser.input["value"] = color ? color.getHEX() : "";
    JSColorChooser.input.onchange = (event) => JSColorChooser.onchange(JSColorChooser.input.value, response);
    document.body.appendChild(JSColorChooser.input);
    let event = document.createEvent("MouseEvents");
    event.initEvent("click", false, false);
    JSColorChooser.input.dispatchEvent(event);
  }

  static  onchange(value, response) {
    document.body.removeChild(JSColorChooser.input);
    if (response) {
      response(Color.fromHEX(value));
    }
    return null;
  }
}
