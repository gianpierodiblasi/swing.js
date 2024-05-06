package javascript.swing.colorchooser;

import def.dom.ImageData;
import def.dom.MouseEvent;
import def.js.Array;
import javascript.awt.Color;
import javascript.swing.JSRadioButton;
import javascript.swing.JSSlider;
import javascript.swing.JSSpinner;
import static simulation.js.$Globals.parseInt;
import simulation.js.$Uint8Array;

/**
 * The panel to show colors in YUV format
 *
 * @author gianpiero.diblasi
 */
public class JSColorYUVPanel extends JSAbstractColorFormatPanel {

  private final JSRadioButton y = new JSRadioButton();
  private final JSSlider ySlider = new JSSlider();
  private final JSSpinner ySpinner = new JSSpinner();
  private final JSRadioButton u = new JSRadioButton();
  private final JSSlider uSlider = new JSSlider();
  private final JSSpinner uSpinner = new JSSpinner();
  private final JSRadioButton v = new JSRadioButton();
  private final JSSlider vSlider = new JSSlider();
  private final JSSpinner vSpinner = new JSSpinner();

  /**
   * Creates the object
   */
  public JSColorYUVPanel() {
    super();

    this.addRadio(this.y, "Y", true, 2, 0);
    this.addRadio(this.u, "U", false, 2, 2);
    this.addRadio(this.v, "V", false, 2, 4);
    this.addSlider(this.ySlider, this.ySpinner, 0, 100, 2, 1);
    this.addSlider(this.uSlider, this.uSpinner, 0, 100, 2, 3);
    this.addSlider(this.vSlider, this.vSpinner, 0, 100, 2, 5);
    this.addSpinner(this.ySpinner, this.ySlider, 0, 100, 3, 0);
    this.addSpinner(this.uSpinner, this.uSlider, 0, 100, 3, 2);
    this.addSpinner(this.vSpinner, this.vSlider, 100, 100, 3, 4);

    this.drawAll();
  }

  @Override
  public Color getSelectedColor() {
    Array<Double> yuv = new Array<>();
    Array<Integer> rgb = new Array<>();

    yuv.$set(0, this.ySpinner.getValue() / 100);
    yuv.$set(1, this.uSpinner.getValue() / 100);
    yuv.$set(2, this.vSpinner.getValue() / 100);
    Color.YUVtoRGB(yuv, rgb);

    return new Color(rgb.$get(0), rgb.$get(1), rgb.$get(2), 255);
  }

  @Override
  public void setSelectedColor(Color color) {
    Array<Integer> rgb = new Array<>();
    Array<Double> yuv = new Array<>();

    rgb.$set(0, color.red);
    rgb.$set(1, color.green);
    rgb.$set(2, color.blue);
    Color.RGBtoYUV(rgb, yuv);

    this.setColor(100 * yuv.$get(0), 100 * yuv.$get(1), 100 * yuv.$get(2), false, false);
  }

  @Override
  protected void drawSquare() {
    ImageData imageData = this.ctxSquare.createImageData(JSColorYUVPanel.SQUARE_SIZE, JSColorYUVPanel.SQUARE_SIZE);
    $Uint8Array data = ($Uint8Array) imageData.data;

    Array<Double> yuv = new Array<>();
    Array<Integer> rgb = new Array<>();

    for (double yy = 0; yy < JSColorYUVPanel.SQUARE_SIZE; yy++) {
      for (double xx = 0; xx < JSColorYUVPanel.SQUARE_SIZE; xx++) {
        if (this.y.isSelected()) {
          yuv.$set(0, this.ySpinner.getValue() / 100);
          yuv.$set(1, xx / JSColorYUVPanel.SQUARE_SIZE);
          yuv.$set(2, yy / JSColorYUVPanel.SQUARE_SIZE);
        } else if (this.u.isSelected()) {
          yuv.$set(0, xx / JSColorYUVPanel.SQUARE_SIZE);
          yuv.$set(1, this.uSpinner.getValue() / 100);
          yuv.$set(2, yy / JSColorYUVPanel.SQUARE_SIZE);
        } else if (this.v.isSelected()) {
          yuv.$set(0, xx / JSColorYUVPanel.SQUARE_SIZE);
          yuv.$set(1, yy / JSColorYUVPanel.SQUARE_SIZE);
          yuv.$set(2, this.vSpinner.getValue() / 100);
        }
        Color.YUVtoRGB(yuv, rgb);

        double pos = ((JSColorYUVPanel.SQUARE_SIZE - yy) * JSColorYUVPanel.SQUARE_SIZE + xx) * 4;
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
    double xx = 0, yy = 0;
    if (this.y.isSelected()) {
      xx = this.uSpinner.getValue() / 100;
      yy = this.vSpinner.getValue() / 100;
    } else if (this.u.isSelected()) {
      xx = this.ySpinner.getValue() / 100;
      yy = this.vSpinner.getValue() / 100;
    } else if (this.v.isSelected()) {
      xx = this.ySpinner.getValue() / 100;
      yy = this.uSpinner.getValue() / 100;
    }

    this.drawCircle(xx, yy);
  }

  @Override
  protected void drawRect() {
    ImageData imageData = this.ctxRect.createImageData(JSColorYUVPanel.RECT_WIDTH, JSColorYUVPanel.RECT_HEIGHT);
    $Uint8Array data = ($Uint8Array) imageData.data;

    Array<Double> yuv = new Array<>();
    Array<Integer> rgb = new Array<>();

    for (double yy = 0; yy < JSColorYUVPanel.RECT_HEIGHT; yy++) {
      if (this.y.isSelected()) {
        yuv.$set(0, yy / JSColorYUVPanel.RECT_HEIGHT);
        yuv.$set(1, this.uSpinner.getValue() / 100);
        yuv.$set(2, this.vSpinner.getValue() / 100);
      } else if (this.u.isSelected()) {
        yuv.$set(0, this.ySpinner.getValue() / 100);
        yuv.$set(1, yy / JSColorYUVPanel.RECT_HEIGHT);
        yuv.$set(2, this.vSpinner.getValue() / 100);
      } else if (this.v.isSelected()) {
        yuv.$set(0, this.ySpinner.getValue() / 100);
        yuv.$set(1, this.uSpinner.getValue() / 100);
        yuv.$set(2, yy / JSColorYUVPanel.RECT_HEIGHT);
      }
      Color.YUVtoRGB(yuv, rgb);

      for (double xx = 0; xx < JSColorYUVPanel.RECT_WIDTH; xx++) {
        double pos = ((JSColorYUVPanel.RECT_HEIGHT - yy) * JSColorYUVPanel.RECT_WIDTH + xx) * 4;
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
    double yy = 0;
    if (this.y.isSelected()) {
      yy = this.ySpinner.getValue() / 100;
    } else if (this.u.isSelected()) {
      yy = this.uSpinner.getValue() / 100;
    } else if (this.v.isSelected()) {
      yy = this.vSpinner.getValue() / 100;
    }

    this.drawLine(yy);
  }

  @Override
  @SuppressWarnings("StringEquality")
  protected void squareEvent(MouseEvent event, String type) {
    if (!this.canDoItSquare(type)) {
    } else if (this.y.isSelected()) {
      this.setColor(this.ySpinner.getValue(), 100 * event.offsetX / JSColorYUVPanel.SQUARE_SIZE, 100 * (JSColorYUVPanel.SQUARE_SIZE - event.offsetY) / JSColorYUVPanel.SQUARE_SIZE, true, type != "up");
    } else if (this.u.isSelected()) {
      this.setColor(100 * event.offsetX / JSColorYUVPanel.SQUARE_SIZE, this.uSpinner.getValue(), 100 * (JSColorYUVPanel.SQUARE_SIZE - event.offsetY) / JSColorYUVPanel.SQUARE_SIZE, true, type != "up");
    } else if (this.v.isSelected()) {
      this.setColor(100 * event.offsetX / JSColorYUVPanel.SQUARE_SIZE, 100 * (JSColorYUVPanel.SQUARE_SIZE - event.offsetY) / JSColorYUVPanel.SQUARE_SIZE, this.vSpinner.getValue(), true, type != "up");
    }
  }

  @Override
  @SuppressWarnings("StringEquality")
  protected void rectEvent(MouseEvent event, String type) {
    if (!this.canDoItRect(type)) {
    } else if (this.y.isSelected()) {
      this.setColor(100 * (JSColorYUVPanel.SQUARE_SIZE - event.offsetY) / JSColorYUVPanel.SQUARE_SIZE, this.uSpinner.getValue(), this.vSpinner.getValue(), true, type != "up");
    } else if (this.u.isSelected()) {
      this.setColor(this.ySpinner.getValue(), 100 * (JSColorYUVPanel.SQUARE_SIZE - event.offsetY) / JSColorYUVPanel.SQUARE_SIZE, this.vSpinner.getValue(), true, type != "up");
    } else if (this.v.isSelected()) {
      this.setColor(this.ySpinner.getValue(), this.uSpinner.getValue(), 100 * (JSColorYUVPanel.SQUARE_SIZE - event.offsetY) / JSColorYUVPanel.SQUARE_SIZE, true, type != "up");
    }
  }

  private void setColor(double y, double u, double v, boolean call, boolean adjusting) {
    this.ySlider.setValue(parseInt(y));
    this.ySpinner.setValue(parseInt(y));

    this.uSlider.setValue(parseInt(u));
    this.uSpinner.setValue(parseInt(u));

    this.vSlider.setValue(parseInt(v));
    this.vSpinner.setValue(parseInt(v));

    this.drawAll();

    if (call) {
      this.onchange(adjusting);
    }
  }
}
