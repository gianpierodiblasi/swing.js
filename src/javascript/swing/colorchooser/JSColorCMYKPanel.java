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
public class JSColorCMYKPanel extends JSAbstractColorFormatPanel {

  private final JSRadioButton cyan = new JSRadioButton();
  private final JSSlider cyanSlider = new JSSlider();
  private final JSSpinner cyanSpinner = new JSSpinner();
  private final JSRadioButton magenta = new JSRadioButton();
  private final JSSlider magentaSlider = new JSSlider();
  private final JSSpinner magentaSpinner = new JSSpinner();
  private final JSRadioButton yellow = new JSRadioButton();
  private final JSSlider yellowSlider = new JSSlider();
  private final JSSpinner yellowSpinner = new JSSpinner();
  private final JSSlider blackSlider = new JSSlider();
  private final JSSpinner blackSpinner = new JSSpinner();

  /**
   * Creates the object
   */
  public JSColorCMYKPanel() {
    super();

    this.addRadio(this.cyan, Translations.JSColorChooser_CYAN, true, 2, 0);
    this.addRadio(this.magenta, Translations.JSColorChooser_MAGENTA, false, 2, 2);
    this.addRadio(this.yellow, Translations.JSColorChooser_YELLOW, false, 2, 4);
    this.addSlider(this.cyanSlider, this.cyanSpinner, 0, 255, 2, 1);
    this.addSlider(this.magentaSlider, this.magentaSpinner, 0, 255, 2, 3);
    this.addSlider(this.yellowSlider, this.yellowSpinner, 0, 255, 2, 5);
    this.addSpinner(this.cyanSpinner, this.cyanSlider, 0, 255, 3, 0);
    this.addSpinner(this.magentaSpinner, this.magentaSlider, 0, 255, 3, 2);
    this.addSpinner(this.yellowSpinner, this.yellowSlider, 0, 255, 3, 4);

    this.drawAll();
  }

  /**
   * Returns the selected color
   *
   * @return The selected color
   */
  public Color getSelectedColor() {
    Array<Integer> cmyk = new Array<>();
    Array<Integer> rgb = new Array<>();

    cmyk.$set(0, this.cyanSlider.getValue());
    cmyk.$set(1, this.magentaSlider.getValue());
    cmyk.$set(2, this.yellowSlider.getValue());
    cmyk.$set(3, this.blackSlider.getValue());
    Color.CMYKtoRGB(cmyk, rgb);

    return new Color(rgb.$get(0), rgb.$get(1), rgb.$get(2), 255);
  }

  /**
   * Sets the selected color
   *
   * @param color The selected color
   */
  public void setSelectedColor(Color color) {
    Array<Integer> rgb = new Array<>();
    Array<Integer> cmyk = new Array<>();

    rgb.$set(0, color.red);
    rgb.$set(1, color.green);
    rgb.$set(2, color.blue);
    Color.RGBtoCMYK(rgb, cmyk);

    this.setColor(cmyk.$get(0), cmyk.$get(1), cmyk.$get(2), cmyk.$get(3), false);
  }

  @Override
  protected void drawSquare() {
    ImageData imageData = this.ctxSquare.createImageData(JSColorCMYKPanel.SQUARE_SIZE, JSColorCMYKPanel.SQUARE_SIZE);
    $Uint8Array data = ($Uint8Array) imageData.data;

    Array<Integer> cmyk = new Array<>();
    Array<Integer> rgb = new Array<>();

    for (int y = 0; y < JSColorCMYKPanel.SQUARE_SIZE; y++) {
      for (int x = 0; x < JSColorCMYKPanel.SQUARE_SIZE; x++) {
        if (this.cyan.isSelected()) {
          cmyk.$set(0, this.cyanSlider.getValue());
          cmyk.$set(1, x / JSColorCMYKPanel.SQUARE_SIZE);
          cmyk.$set(2, y / JSColorCMYKPanel.SQUARE_SIZE);
        } else if (this.magenta.isSelected()) {
          cmyk.$set(0, x / JSColorCMYKPanel.SQUARE_SIZE);
          cmyk.$set(1, this.magentaSlider.getValue());
          cmyk.$set(2, y / JSColorCMYKPanel.SQUARE_SIZE);
        } else if (this.yellow.isSelected()) {
          cmyk.$set(0, x / JSColorCMYKPanel.SQUARE_SIZE);
          cmyk.$set(1, y / JSColorCMYKPanel.SQUARE_SIZE);
          cmyk.$set(2, this.yellowSlider.getValue());
        }
        cmyk.$set(3, this.blackSlider.getValue());
        Color.CMYKtoRGB(cmyk, rgb);

        double pos = ((JSColorCMYKPanel.SQUARE_SIZE - y) * JSColorCMYKPanel.SQUARE_SIZE + x) * 4;
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

  @Override
  protected void drawRect() {
    ImageData imageData = this.ctxRect.createImageData(JSColorCMYKPanel.RECT_WIDTH, JSColorCMYKPanel.RECT_HEIGHT);
    $Uint8Array data = ($Uint8Array) imageData.data;

    Array<Integer> cmyk = new Array<>();
    Array<Integer> rgb = new Array<>();

    for (int y = 0; y < JSColorCMYKPanel.RECT_HEIGHT; y++) {
      if (this.cyan.isSelected()) {
        cmyk.$set(0, 255 * y / JSColorCMYKPanel.RECT_HEIGHT);
        cmyk.$set(1, 0);
        cmyk.$set(2, 0);
      } else if (this.magenta.isSelected()) {
        cmyk.$set(0, 0);
        cmyk.$set(1, 255 * y / JSColorCMYKPanel.RECT_HEIGHT);
        cmyk.$set(2, 0);
      } else if (this.yellow.isSelected()) {
        cmyk.$set(0, 0);
        cmyk.$set(1, 0);
        cmyk.$set(2, 255 * y / JSColorCMYKPanel.RECT_HEIGHT);
      }
      cmyk.$set(3, this.blackSlider.getValue());
      Color.CMYKtoRGB(cmyk, rgb);

      for (double x = 0; x < JSColorCMYKPanel.RECT_WIDTH; x++) {
        double pos = ((JSColorCMYKPanel.RECT_HEIGHT - y) * JSColorCMYKPanel.RECT_WIDTH + x) * 4;
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
    if (this.cyan.isSelected()) {
      y = this.cyanSpinner.getValue() / 255;
    } else if (this.magenta.isSelected()) {
      y = this.magentaSpinner.getValue() / 255;
    } else if (this.yellow.isSelected()) {
      y = this.yellowSpinner.getValue() / 255;
    }

    this.drawLine(y);
  }

  @Override
  protected void squareEvent(MouseEvent event, String type) {
    if (!this.canDoItSquare(type)) {
    } else if (this.cyan.isSelected()) {
      this.setColor(this.cyanSlider.getValue(), parseInt(255 * event.offsetX / JSColorCMYKPanel.SQUARE_SIZE), parseInt(255 * (JSColorCMYKPanel.SQUARE_SIZE - event.offsetY) / JSColorCMYKPanel.SQUARE_SIZE), this.blackSlider.getValue(), true);
    } else if (this.magenta.isSelected()) {
      this.setColor(parseInt(255 * event.offsetX / JSColorCMYKPanel.SQUARE_SIZE), this.magentaSlider.getValue(), parseInt(255 * (JSColorCMYKPanel.SQUARE_SIZE - event.offsetY) / JSColorCMYKPanel.SQUARE_SIZE), this.blackSlider.getValue(), true);
    } else if (this.yellow.isSelected()) {
      this.setColor(parseInt(255 * event.offsetX / JSColorCMYKPanel.SQUARE_SIZE), parseInt(255 * (JSColorCMYKPanel.SQUARE_SIZE - event.offsetY) / JSColorCMYKPanel.SQUARE_SIZE), this.yellowSlider.getValue(), this.blackSlider.getValue(), true);
    }
  }

  @Override
  protected void rectEvent(MouseEvent event, String type) {
    if (!this.canDoItRect(type)) {
    } else if (this.cyan.isSelected()) {
      this.setColor(parseInt(255 * (JSColorCMYKPanel.SQUARE_SIZE - event.offsetY) / JSColorCMYKPanel.SQUARE_SIZE), this.magentaSlider.getValue(), this.yellowSlider.getValue(), this.blackSlider.getValue(), true);
    } else if (this.magenta.isSelected()) {
      this.setColor(this.cyanSlider.getValue(), parseInt(255 * (JSColorCMYKPanel.SQUARE_SIZE - event.offsetY) / JSColorCMYKPanel.SQUARE_SIZE), this.yellowSlider.getValue(), this.blackSlider.getValue(), true);
    } else if (this.yellow.isSelected()) {
      this.setColor(this.cyanSlider.getValue(), this.magentaSlider.getValue(), parseInt(255 * (JSColorCMYKPanel.SQUARE_SIZE - event.offsetY) / JSColorCMYKPanel.SQUARE_SIZE), this.blackSlider.getValue(), true);
    }
  }

  private void setColor(int c, int m, int y, int k, boolean call) {
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
      this.onchange();
    }
  }
}
