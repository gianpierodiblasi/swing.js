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
public class JSColorChooser {

  private static $HTMLElement input;

  private JSColorChooser() {
  }

  /**
   * Shows a dialog to select the color
   *
   * @param color The initial color
   * @param response The function to call on close
   */
  public static void showDialog(Color color, $Apply_1_Void<Color> response) {
    document.querySelectorAll("input[type=color]").forEach(element -> element.parentElement.removeChild(element));

    JSColorChooser.input = ($HTMLElement) document.createElement("input");
    JSColorChooser.input.setAttribute("type", "color");
    JSColorChooser.input.style.display = "none";
    if ($exists(color)) {
      JSColorChooser.input.$set("value", color.getHEX());
    }
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
