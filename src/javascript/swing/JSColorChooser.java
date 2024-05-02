package javascript.swing;

import def.dom.Event;
import static def.dom.Globals.document;
import javascript.awt.Color;
import simulation.dom.$HTMLElement;
import simulation.js.$Apply_1_Void;
import static simulation.js.$Globals.$exists;

/**
 * The javax.swing.JColorChooser clone
 *
 * @author gianpiero.diblasi
 */
public class JSColorChooser extends AbstractButton {

  private static $HTMLElement input;

  /**
   * Creates a button-like color chooser
   */
  public JSColorChooser() {
    super(document.createElement("input"));
    this.setAttribute("type", "color");

    this.cssAddClass("jscolorchooser");
    this.addEventListener("change", event -> this.onclick());
  }

  /**
   * Sets the text
   *
   * @param text The text
   */
  public void setText(String text) {
    this.setAttribute("text-value", text);
  }

  /**
   * Set the content area filled
   *
   * @param b true to fill the area, false otherwise
   */
  public void setContentAreaFilled(boolean b) {
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
  public void setColor(Color color) {
    this.setProperty("value", $exists(color) ? color.getHEX() : "");
  }

  /**
   * Returns the color
   *
   * @return The color
   */
  public Color getColor() {
    return Color.fromHEX(this.getProperty("value"));
  }

  /**
   * Shows a dialog to select the color
   *
   * @param color The initial color
   * @param response The function to call on close
   */
  public static void showDialog(Color color, $Apply_1_Void<Color> response) {
    document.querySelectorAll(".jscolorchooser-static").forEach(element -> element.parentElement.removeChild(element));

    JSColorChooser.input = ($HTMLElement) document.createElement("input");
    JSColorChooser.input.classList.add("jscolorchooser-static");
    JSColorChooser.input.setAttribute("type", "color");
    JSColorChooser.input.style.display = "none";
    JSColorChooser.input.$set("value", $exists(color) ? color.getHEX() : "");
    JSColorChooser.input.onchange = (event) -> JSColorChooser.onchange(JSColorChooser.input.value, response);

    document.body.appendChild(JSColorChooser.input);

    Event event = document.createEvent("MouseEvents");
    event.initEvent("click", false, false);
    JSColorChooser.input.dispatchEvent(event);
  }

  private static Object onchange(String value, $Apply_1_Void<Color> response) {
    document.body.removeChild(JSColorChooser.input);

    if ($exists(response)) {
      response.$apply(Color.fromHEX(value));
    }
    return null;
  }
}
