/**
 * The javax.swing.JColorChooser clone
 *
 * @author gianpiero.diblasi
 */
class JSColorChooser {

  static  input = null;

  constructor() {
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
    JSColorChooser.input["value"] = color ? color.getRGB_HEX() : "";
    JSColorChooser.input.onchange = (event) => JSColorChooser.onchange(JSColorChooser.input.value, response);
    document.body.appendChild(JSColorChooser.input);
    let event = document.createEvent("MouseEvents");
    event.initEvent("click", false, false);
    JSColorChooser.input.dispatchEvent(event);
  }

  static  onchange(value, response) {
    document.body.removeChild(JSColorChooser.input);
    if (response) {
      response(Color.fromRGB_HEX(value));
    }
    return null;
  }
}
