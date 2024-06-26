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
 * The panel to show colors in RGB format
 *
 * @author gianpiero.diblasi
 */
public class JSColorRGBPanel extends JSAbstractColorFormatPanel {

  private final JSRadioButton red = new JSRadioButton();
  private final JSSlider redSlider = new JSSlider();
  private final JSSpinner redSpinner = new JSSpinner();
  private final JSRadioButton green = new JSRadioButton();
  private final JSSlider greenSlider = new JSSlider();
  private final JSSpinner greenSpinner = new JSSpinner();
  private final JSRadioButton blue = new JSRadioButton();
  private final JSSlider blueSlider = new JSSlider();
  private final JSSpinner blueSpinner = new JSSpinner();

  /**
   * Creates the object
   */
  public JSColorRGBPanel() {
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

  @Override
  public Color getSelectedColor() {
    return new Color(this.redSlider.getValue(), this.greenSlider.getValue(), this.blueSlider.getValue(), 255);
  }

  @Override
  public void setSelectedColor(Color color) {
    this.setColor(color.red, color.green, color.blue, false, false);
  }

  @Override
  protected void drawSquare() {
    ImageData imageData = this.ctxSquare.createImageData(JSColorRGBPanel.SQUARE_SIZE, JSColorRGBPanel.SQUARE_SIZE);
    $Uint8Array data = ($Uint8Array) imageData.data;

    for (int y = 0; y < JSColorRGBPanel.SQUARE_SIZE; y++) {
      for (int x = 0; x < JSColorRGBPanel.SQUARE_SIZE; x++) {
        double pos = ((JSColorRGBPanel.SQUARE_SIZE - y) * JSColorRGBPanel.SQUARE_SIZE + x) * 4;

        if (this.red.isSelected()) {
          data.$set(pos, this.redSlider.getValue());
          data.$set(pos + 1, 255 * x / JSColorRGBPanel.SQUARE_SIZE);
          data.$set(pos + 2, 255 * y / JSColorRGBPanel.SQUARE_SIZE);
        } else if (this.green.isSelected()) {
          data.$set(pos, 255 * x / JSColorRGBPanel.SQUARE_SIZE);
          data.$set(pos + 1, this.greenSlider.getValue());
          data.$set(pos + 2, 255 * y / JSColorRGBPanel.SQUARE_SIZE);
        } else if (this.blue.isSelected()) {
          data.$set(pos, 255 * x / JSColorRGBPanel.SQUARE_SIZE);
          data.$set(pos + 1, 255 * y / JSColorRGBPanel.SQUARE_SIZE);
          data.$set(pos + 2, this.blueSlider.getValue());
        }

        data.$set(pos + 3, 255);
      }
    }

    this.ctxSquare.putImageData(imageData, 0, 0);
  }

  @Override
  protected void drawSquareSelector() {
    double x = 0, y = 0;
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

  @Override
  protected void drawRect() {
    ImageData imageData = this.ctxRect.createImageData(JSColorRGBPanel.RECT_WIDTH, JSColorRGBPanel.RECT_HEIGHT);
    $Uint8Array data = ($Uint8Array) imageData.data;

    Array<Integer> rgb = new Array<>();

    for (int y = 0; y < JSColorRGBPanel.RECT_HEIGHT; y++) {
      if (this.red.isSelected()) {
        rgb.$set(0, 255 * y / JSColorRGBPanel.RECT_HEIGHT);
        rgb.$set(1, this.greenSlider.getValue());
        rgb.$set(2, this.blueSlider.getValue());
      } else if (this.green.isSelected()) {
        rgb.$set(0, this.redSlider.getValue());
        rgb.$set(1, 255 * y / JSColorRGBPanel.RECT_HEIGHT);
        rgb.$set(2, this.blueSlider.getValue());
      } else if (this.blue.isSelected()) {
        rgb.$set(0, this.redSlider.getValue());
        rgb.$set(1, this.greenSlider.getValue());
        rgb.$set(2, 255 * y / JSColorRGBPanel.RECT_HEIGHT);
      }

      for (double x = 0; x < JSColorRGBPanel.RECT_WIDTH; x++) {
        double pos = ((JSColorRGBPanel.RECT_HEIGHT - y) * JSColorRGBPanel.RECT_WIDTH + x) * 4;
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
    if (this.red.isSelected()) {
      y = this.redSpinner.getValue() / 255;
    } else if (this.green.isSelected()) {
      y = this.greenSpinner.getValue() / 255;
    } else if (this.blue.isSelected()) {
      y = this.blueSpinner.getValue() / 255;
    }

    this.drawLine(y);
  }

  @Override
  @SuppressWarnings("StringEquality")
  protected void squareEvent(MouseEvent event, String type) {
    if (!this.canDoItSquare(event, type)) {
    } else if (this.red.isSelected()) {
      this.setColor(this.redSlider.getValue(), parseInt(255 * event.offsetX / JSColorRGBPanel.SQUARE_SIZE), parseInt(255 * (JSColorRGBPanel.SQUARE_SIZE - event.offsetY) / JSColorRGBPanel.SQUARE_SIZE), true, type != "up");
    } else if (this.green.isSelected()) {
      this.setColor(parseInt(255 * event.offsetX / JSColorRGBPanel.SQUARE_SIZE), this.greenSlider.getValue(), parseInt(255 * (JSColorRGBPanel.SQUARE_SIZE - event.offsetY) / JSColorRGBPanel.SQUARE_SIZE), true, type != "up");
    } else if (this.blue.isSelected()) {
      this.setColor(parseInt(255 * event.offsetX / JSColorRGBPanel.SQUARE_SIZE), parseInt(255 * (JSColorRGBPanel.SQUARE_SIZE - event.offsetY) / JSColorRGBPanel.SQUARE_SIZE), this.blueSlider.getValue(), true, type != "up");
    }
  }

  @Override
  @SuppressWarnings("StringEquality")
  protected void rectEvent(MouseEvent event, String type) {
    if (!this.canDoItRect(event, type)) {
    } else if (this.red.isSelected()) {
      this.setColor(parseInt(255 * (JSColorRGBPanel.SQUARE_SIZE - event.offsetY) / JSColorRGBPanel.SQUARE_SIZE), this.greenSlider.getValue(), this.blueSlider.getValue(), true, type != "up");
    } else if (this.green.isSelected()) {
      this.setColor(this.redSlider.getValue(), parseInt(255 * (JSColorRGBPanel.SQUARE_SIZE - event.offsetY) / JSColorRGBPanel.SQUARE_SIZE), this.blueSlider.getValue(), true, type != "up");
    } else if (this.blue.isSelected()) {
      this.setColor(this.redSlider.getValue(), this.greenSlider.getValue(), parseInt(255 * (JSColorRGBPanel.SQUARE_SIZE - event.offsetY) / JSColorRGBPanel.SQUARE_SIZE), true, type != "up");
    }
  }

  private void setColor(int r, int g, int b, boolean call, boolean adjusting) {
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
