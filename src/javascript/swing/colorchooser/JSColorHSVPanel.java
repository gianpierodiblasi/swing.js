package javascript.swing.colorchooser;

import def.dom.ImageData;
import def.dom.MouseEvent;
import def.js.Array;
import javascript.awt.Color;
import javascript.swing.JSRadioButton;
import javascript.swing.JSSlider;
import javascript.swing.JSSpinner;
import javascript.util.Translations;
import static simulation.js.$Globals.parseInt;
import simulation.js.$Uint8Array;

/**
 * The panel to show colors in HSV format
 *
 * @author gianpiero.diblasi
 */
public class JSColorHSVPanel extends JSAbstractColorFormatPanel {

  private final JSRadioButton hue = new JSRadioButton();
  private final JSSlider hueSlider = new JSSlider();
  private final JSSpinner hueSpinner = new JSSpinner();
  private final JSRadioButton saturation = new JSRadioButton();
  private final JSSlider satutationSlider = new JSSlider();
  private final JSSpinner saturationSpinner = new JSSpinner();
  private final JSRadioButton value = new JSRadioButton();
  private final JSSlider valueSlider = new JSSlider();
  private final JSSpinner valueSpinner = new JSSpinner();

  private boolean squareDown;
  private boolean rectDown;

  /**
   * Creates the object
   */
  public JSColorHSVPanel() {
    super();

    this.addRadio(this.hue, Translations.JSColorChooser_HUE, true, 2, 0);
    this.addRadio(this.saturation, Translations.JSColorChooser_SATURATION, false, 2, 2);
    this.addRadio(this.value, Translations.JSColorChooser_VALUE, false, 2, 4);
    this.addSlider(this.hueSlider, this.hueSpinner, 0, 360, 2, 1);
    this.addSlider(this.satutationSlider, this.saturationSpinner, 0, 100, 2, 1);
    this.addSlider(this.valueSlider, this.valueSpinner, 0, 100, 2, 1);
    this.addSpinner(this.hueSpinner, this.hueSlider, 0, 360, 3, 0);
    this.addSpinner(this.saturationSpinner, this.satutationSlider, 0, 100, 3, 2);
    this.addSpinner(this.valueSpinner, this.valueSlider, 100, 100, 3, 4);

    this.drawAll();
  }

  /**
   * Returns the selected color
   *
   * @return The selected color
   */
  public Color getSelectedColor() {
    Array<Double> hsv = new Array<>();
    Array<Integer> rgb = new Array<>();

    hsv.$set(0, this.hueSpinner.getValue() / 360);
    hsv.$set(1, this.saturationSpinner.getValue() / 100);
    hsv.$set(2, this.valueSpinner.getValue() / 100);
    Color.HSVtoRGB(hsv, rgb);

    return new Color(rgb.$get(0), rgb.$get(1), rgb.$get(2), 255);
  }

  /**
   * Sets the selected color
   *
   * @param color The selected color
   */
  public void setSelectedColor(Color color) {
    Array<Integer> rgb = new Array<>();
    Array<Double> hsv = new Array<>();

    rgb.$set(0, color.red);
    rgb.$set(1, color.green);
    rgb.$set(2, color.blue);
    Color.RGBtoHSV(rgb, hsv);

    this.setColor(360 * hsv.$get(0), 100 * hsv.$get(1), 100 * hsv.$get(2), false);
  }

  @Override
  protected void drawSquare() {
    ImageData imageData = this.ctxSquare.createImageData(JSColorHSVPanel.SQUARE_SIZE, JSColorHSVPanel.SQUARE_SIZE);
    $Uint8Array data = ($Uint8Array) imageData.data;

    Array<Double> hsv = new Array<>();
    Array<Integer> rgb = new Array<>();

    for (double y = 0; y < JSColorHSVPanel.SQUARE_SIZE; y++) {
      for (double x = 0; x < JSColorHSVPanel.SQUARE_SIZE; x++) {
        if (this.hue.isSelected()) {
          hsv.$set(0, this.hueSpinner.getValue() / 360);
          hsv.$set(1, x / JSColorHSVPanel.SQUARE_SIZE);
          hsv.$set(2, y / JSColorHSVPanel.SQUARE_SIZE);
        } else if (this.saturation.isSelected()) {
          hsv.$set(0, x / JSColorHSVPanel.SQUARE_SIZE);
          hsv.$set(1, this.saturationSpinner.getValue() / 100);
          hsv.$set(2, y / JSColorHSVPanel.SQUARE_SIZE);
        } else if (this.value.isSelected()) {
          hsv.$set(0, x / JSColorHSVPanel.SQUARE_SIZE);
          hsv.$set(1, y / JSColorHSVPanel.SQUARE_SIZE);
          hsv.$set(2, this.valueSpinner.getValue() / 100);
        }
        Color.HSVtoRGB(hsv, rgb);

        double pos = ((JSColorHSVPanel.SQUARE_SIZE - y) * JSColorHSVPanel.SQUARE_SIZE + x) * 4;
        data.$set(pos, rgb.$get(0));
        data.$set(pos + 1, rgb.$get(1));
        data.$set(pos + 2, rgb.$get(2));
        data.$set(pos + 3, 255);
      }
    }

    this.ctxSquare.putImageData(imageData, 0, 0);
  }

  @Override
  protected void drawSquareSelector() {
    double x = 0, y = 0;
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

    Array<Double> dash = new Array<>();

    this.ctxSquare.beginPath();
    this.ctxSquare.arc(x * JSColorHSVPanel.SQUARE_SIZE, (1 - y) * JSColorHSVPanel.SQUARE_SIZE, 5, 0, 2 * Math.PI);
    this.ctxSquare.closePath();
    this.ctxSquare.strokeStyle = this.$getStrokeStyle("black");
    this.ctxSquare.setLineDash(dash);
    this.ctxSquare.stroke();

    dash.push(2.5, 2.5);

    this.ctxSquare.beginPath();
    this.ctxSquare.arc(x * JSColorHSVPanel.SQUARE_SIZE, (1 - y) * JSColorHSVPanel.SQUARE_SIZE, 5, 0, 2 * Math.PI);
    this.ctxSquare.closePath();
    this.ctxSquare.strokeStyle = this.$getStrokeStyle("white");
    this.ctxSquare.setLineDash(dash);
    this.ctxSquare.stroke();
  }

  @Override
  protected void drawRect() {
    ImageData imageData = this.ctxRect.createImageData(JSColorHSVPanel.RECT_WIDTH, JSColorHSVPanel.RECT_HEIGHT);
    $Uint8Array data = ($Uint8Array) imageData.data;

    Array<Double> hsv = new Array<>();
    Array<Integer> rgb = new Array<>();

    for (double y = 0; y < JSColorHSVPanel.RECT_HEIGHT; y++) {
      if (this.hue.isSelected()) {
        hsv.$set(0, y / JSColorHSVPanel.RECT_HEIGHT);
        hsv.$set(1, 1.0);
        hsv.$set(2, 1.0);
      } else if (this.saturation.isSelected()) {
        hsv.$set(0, this.hueSpinner.getValue() / 360);
        hsv.$set(1, y / JSColorHSVPanel.RECT_HEIGHT);
        hsv.$set(2, 1.0);
      } else if (this.value.isSelected()) {
        hsv.$set(0, this.hueSpinner.getValue() / 360);
        hsv.$set(1, 1.0);
        hsv.$set(2, y / JSColorHSVPanel.RECT_HEIGHT);
      }
      Color.HSVtoRGB(hsv, rgb);

      for (double x = 0; x < JSColorHSVPanel.RECT_WIDTH; x++) {
        double pos = ((JSColorHSVPanel.RECT_HEIGHT - y) * JSColorHSVPanel.RECT_WIDTH + x) * 4;
        data.$set(pos, rgb.$get(0));
        data.$set(pos + 1, rgb.$get(1));
        data.$set(pos + 2, rgb.$get(2));
        data.$set(pos + 3, 255);
      }
    }

    this.ctxRect.putImageData(imageData, 0, 0);
  }

  @Override
  protected void drawRectSelector() {
    double y = 0;
    if (this.hue.isSelected()) {
      y = this.hueSpinner.getValue() / 360;
    } else if (this.saturation.isSelected()) {
      y = this.saturationSpinner.getValue() / 100;
    } else if (this.value.isSelected()) {
      y = this.valueSpinner.getValue() / 100;
    }

    Array<Double> dash = new Array<>();

    this.ctxRect.beginPath();
    this.ctxRect.moveTo(0, (1 - y) * JSColorHSVPanel.RECT_HEIGHT);
    this.ctxRect.lineTo(JSColorHSVPanel.RECT_WIDTH, (1 - y) * JSColorHSVPanel.RECT_HEIGHT);
    this.ctxRect.closePath();
    this.ctxRect.strokeStyle = this.$getStrokeStyle("black");
    this.ctxRect.setLineDash(dash);
    this.ctxRect.stroke();

    dash.push(2.5, 2.5);

    this.ctxRect.beginPath();
    this.ctxRect.moveTo(0, (1 - y) * JSColorHSVPanel.RECT_HEIGHT);
    this.ctxRect.lineTo(JSColorHSVPanel.RECT_WIDTH, (1 - y) * JSColorHSVPanel.RECT_HEIGHT);
    this.ctxRect.closePath();
    this.ctxRect.strokeStyle = this.$getStrokeStyle("white");
    this.ctxRect.setLineDash(dash);
    this.ctxRect.stroke();
  }

  @Override
  protected void squareEvent(MouseEvent event, String type) {
    boolean doit = false;
    switch (type) {
      case "down":
        this.squareDown = true;
        doit = true;
        break;
      case "move":
        doit = this.squareDown;
        break;
      case "up":
        this.squareDown = false;
        doit = true;
        break;
    }

    if (!doit) {
    } else if (this.hue.isSelected()) {
      this.setColor(this.hueSpinner.getValue(), 100 * event.offsetX / JSColorHSVPanel.SQUARE_SIZE, 100 * (JSColorHSVPanel.SQUARE_SIZE - event.offsetY) / JSColorHSVPanel.SQUARE_SIZE, true);
    } else if (this.saturation.isSelected()) {
      this.setColor(360 * event.offsetX / JSColorHSVPanel.SQUARE_SIZE, this.saturationSpinner.getValue(), 100 * (JSColorHSVPanel.SQUARE_SIZE - event.offsetY) / JSColorHSVPanel.SQUARE_SIZE, true);
    } else if (this.value.isSelected()) {
      this.setColor(360 * event.offsetX / JSColorHSVPanel.SQUARE_SIZE, 100 * (JSColorHSVPanel.SQUARE_SIZE - event.offsetY) / JSColorHSVPanel.SQUARE_SIZE, this.valueSpinner.getValue(), true);
    }
  }

  @Override
  protected void rectEvent(MouseEvent event, String type) {
    boolean doit = false;
    switch (type) {
      case "down":
        this.rectDown = true;
        doit = true;
        break;
      case "move":
        doit = this.rectDown;
        break;
      case "up":
        this.rectDown = false;
        doit = true;
        break;
    }

    if (!doit) {
    } else if (this.hue.isSelected()) {
      this.setColor(360 * (JSColorHSVPanel.SQUARE_SIZE - event.offsetY) / JSColorHSVPanel.SQUARE_SIZE, this.saturationSpinner.getValue(), this.valueSpinner.getValue(), true);
    } else if (this.saturation.isSelected()) {
      this.setColor(this.hueSpinner.getValue(), 100 * (JSColorHSVPanel.SQUARE_SIZE - event.offsetY) / JSColorHSVPanel.SQUARE_SIZE, this.valueSpinner.getValue(), true);
    } else if (this.value.isSelected()) {
      this.setColor(this.hueSpinner.getValue(), this.saturationSpinner.getValue(), 100 * (JSColorHSVPanel.SQUARE_SIZE - event.offsetY) / JSColorHSVPanel.SQUARE_SIZE, true);
    }
  }

  private void setColor(double h, double s, double v, boolean call) {
    this.hueSlider.setValue(parseInt(h));
    this.hueSpinner.setValue(parseInt(h));

    this.satutationSlider.setValue(parseInt(s));
    this.saturationSpinner.setValue(parseInt(s));

    this.valueSlider.setValue(parseInt(v));
    this.valueSpinner.setValue(parseInt(v));

    this.drawAll();

    if (call) {
      this.onchange();
    }
  }
}
