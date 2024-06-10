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
 * The panel to show colors in HSL format
 *
 * @author gianpiero.diblasi
 */
public class JSColorHSLPanel extends JSAbstractColorFormatPanel {

  private final JSRadioButton hue = new JSRadioButton();
  private final JSSlider hueSlider = new JSSlider();
  private final JSSpinner hueSpinner = new JSSpinner();
  private final JSRadioButton saturation = new JSRadioButton();
  private final JSSlider saturationSlider = new JSSlider();
  private final JSSpinner saturationSpinner = new JSSpinner();
  private final JSRadioButton lightness = new JSRadioButton();
  private final JSSlider lightnessSlider = new JSSlider();
  private final JSSpinner lightnessSpinner = new JSSpinner();

  /**
   * Creates the object
   */
  public JSColorHSLPanel() {
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

  @Override
  public Color getSelectedColor() {
    Array<Double> hsl = new Array<>();
    Array<Integer> rgb = new Array<>();

    hsl.$set(0, this.hueSpinner.getValue() / 360);
    hsl.$set(1, this.saturationSpinner.getValue() / 100);
    hsl.$set(2, this.lightnessSpinner.getValue() / 100);
    Color.HSLtoRGB(hsl, rgb);

    return new Color(rgb.$get(0), rgb.$get(1), rgb.$get(2), 255);
  }

  @Override
  public void setSelectedColor(Color color) {
    Array<Integer> rgb = new Array<>();
    Array<Double> hsl = new Array<>();

    rgb.$set(0, color.red);
    rgb.$set(1, color.green);
    rgb.$set(2, color.blue);
    Color.RGBtoHSL(rgb, hsl);

    this.setColor(360 * hsl.$get(0), 100 * hsl.$get(1), 100 * hsl.$get(2), false, false);
  }

  @Override
  protected void drawSquare() {
    ImageData imageData = this.ctxSquare.createImageData(JSColorHSLPanel.SQUARE_SIZE, JSColorHSLPanel.SQUARE_SIZE);
    $Uint8Array data = ($Uint8Array) imageData.data;

    Array<Double> hsl = new Array<>();
    Array<Integer> rgb = new Array<>();

    for (double y = 0; y < JSColorHSLPanel.SQUARE_SIZE; y++) {
      for (double x = 0; x < JSColorHSLPanel.SQUARE_SIZE; x++) {
        if (this.hue.isSelected()) {
          hsl.$set(0, this.hueSpinner.getValue() / 360);
          hsl.$set(1, x / JSColorHSLPanel.SQUARE_SIZE);
          hsl.$set(2, y / JSColorHSLPanel.SQUARE_SIZE);
        } else if (this.saturation.isSelected()) {
          hsl.$set(0, x / JSColorHSLPanel.SQUARE_SIZE);
          hsl.$set(1, this.saturationSpinner.getValue() / 100);
          hsl.$set(2, y / JSColorHSLPanel.SQUARE_SIZE);
        } else if (this.lightness.isSelected()) {
          hsl.$set(0, x / JSColorHSLPanel.SQUARE_SIZE);
          hsl.$set(1, y / JSColorHSLPanel.SQUARE_SIZE);
          hsl.$set(2, this.lightnessSpinner.getValue() / 100);
        }
        Color.HSLtoRGB(hsl, rgb);

        double pos = ((JSColorHSLPanel.SQUARE_SIZE - y) * JSColorHSLPanel.SQUARE_SIZE + x) * 4;
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

  @Override
  protected void drawRect() {
    ImageData imageData = this.ctxRect.createImageData(JSColorHSLPanel.RECT_WIDTH, JSColorHSLPanel.RECT_HEIGHT);
    $Uint8Array data = ($Uint8Array) imageData.data;

    Array<Double> hsl = new Array<>();
    Array<Integer> rgb = new Array<>();

    for (double y = 0; y < JSColorHSLPanel.RECT_HEIGHT; y++) {
      if (this.hue.isSelected()) {
        hsl.$set(0, y / JSColorHSLPanel.RECT_HEIGHT);
        hsl.$set(1, this.saturationSpinner.getValue() / 100);
        hsl.$set(2, this.lightnessSpinner.getValue() / 100);
      } else if (this.saturation.isSelected()) {
        hsl.$set(0, this.hueSpinner.getValue() / 360);
        hsl.$set(1, y / JSColorHSLPanel.RECT_HEIGHT);
        hsl.$set(2, this.lightnessSpinner.getValue() / 100);
      } else if (this.lightness.isSelected()) {
        hsl.$set(0, this.hueSpinner.getValue() / 360);
        hsl.$set(1, this.saturationSpinner.getValue() / 100);
        hsl.$set(2, y / JSColorHSLPanel.RECT_HEIGHT);
      }
      Color.HSLtoRGB(hsl, rgb);

      for (double x = 0; x < JSColorHSLPanel.RECT_WIDTH; x++) {
        double pos = ((JSColorHSLPanel.RECT_HEIGHT - y) * JSColorHSLPanel.RECT_WIDTH + x) * 4;
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
    } else if (this.lightness.isSelected()) {
      y = this.lightnessSpinner.getValue() / 100;
    }

    this.drawLine(y);
  }

  @Override
  @SuppressWarnings("StringEquality")
  protected void squareEvent(MouseEvent event, String type) {
    if (!this.canDoItSquare(event, type)) {
    } else if (this.hue.isSelected()) {
      this.setColor(this.hueSpinner.getValue(), 100 * event.offsetX / JSColorHSLPanel.SQUARE_SIZE, 100 * (JSColorHSLPanel.SQUARE_SIZE - event.offsetY) / JSColorHSLPanel.SQUARE_SIZE, true, type != "up");
    } else if (this.saturation.isSelected()) {
      this.setColor(360 * event.offsetX / JSColorHSLPanel.SQUARE_SIZE, this.saturationSpinner.getValue(), 100 * (JSColorHSLPanel.SQUARE_SIZE - event.offsetY) / JSColorHSLPanel.SQUARE_SIZE, true, type != "up");
    } else if (this.lightness.isSelected()) {
      this.setColor(360 * event.offsetX / JSColorHSLPanel.SQUARE_SIZE, 100 * (JSColorHSLPanel.SQUARE_SIZE - event.offsetY) / JSColorHSLPanel.SQUARE_SIZE, this.lightnessSpinner.getValue(), true, type != "up");
    }
  }

  @Override
  @SuppressWarnings("StringEquality")
  protected void rectEvent(MouseEvent event, String type) {
    if (!this.canDoItRect(event, type)) {
    } else if (this.hue.isSelected()) {
      this.setColor(360 * (JSColorHSLPanel.SQUARE_SIZE - event.offsetY) / JSColorHSLPanel.SQUARE_SIZE, this.saturationSpinner.getValue(), this.lightnessSpinner.getValue(), true, type != "up");
    } else if (this.saturation.isSelected()) {
      this.setColor(this.hueSpinner.getValue(), 100 * (JSColorHSLPanel.SQUARE_SIZE - event.offsetY) / JSColorHSLPanel.SQUARE_SIZE, this.lightnessSpinner.getValue(), true, type != "up");
    } else if (this.lightness.isSelected()) {
      this.setColor(this.hueSpinner.getValue(), this.saturationSpinner.getValue(), 100 * (JSColorHSLPanel.SQUARE_SIZE - event.offsetY) / JSColorHSLPanel.SQUARE_SIZE, true, type != "up");
    }
  }

  private void setColor(double h, double s, double l, boolean call, boolean adjusting) {
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
