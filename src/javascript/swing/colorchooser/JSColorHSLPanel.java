package javascript.swing.colorchooser;

import def.dom.ImageData;
import def.dom.MouseEvent;
import def.js.Array;
import javascript.awt.Color;
import javascript.awt.GridBagConstraints;
import javascript.awt.GridBagLayout;
import javascript.swing.ButtonGroup;
import javascript.swing.JSRadioButton;
import javascript.swing.JSSlider;
import javascript.swing.JSSpinner;
import javascript.swing.SpinnerNumberModel;
import javascript.util.Translations;
import static simulation.js.$Globals.parseInt;
import simulation.js.$Uint8Array;

/**
 * The panel to show colors in HSL format
 *
 * @author gianpiero.diblasi
 */
public class JSColorHSLPanel extends JSAbstractColorFormatPanel {

  private final ButtonGroup buttonGroup = new ButtonGroup();
  private final JSRadioButton hue = new JSRadioButton();
  private final JSSlider hueSlider = new JSSlider();
  private final JSSpinner hueSpinner = new JSSpinner();
  private final JSRadioButton saturation = new JSRadioButton();
  private final JSSlider satutationSlider = new JSSlider();
  private final JSSpinner saturationSpinner = new JSSpinner();
  private final JSRadioButton lightness = new JSRadioButton();
  private final JSSlider lightnessSlider = new JSSlider();
  private final JSSpinner lightnessSpinner = new JSSpinner();

  private boolean squareDown;
  private boolean rectDown;

  /**
   * Creates the object
   */
  public JSColorHSLPanel() {
    super();

    this.setLayout(new GridBagLayout());
    this.buttonGroup.add(this.hue);
    this.buttonGroup.add(this.saturation);
    this.buttonGroup.add(this.lightness);

    this.hue.setText(Translations.JSColorChooser_HUE);
    this.hue.setSelected(true);
    this.hue.addActionListener(event -> this.drawAll());
    this.addComponent(this.hue, 2, 0, 1, 1, GridBagConstraints.LINE_START, GridBagConstraints.NONE, 0, 0, null);

    this.saturation.setText(Translations.JSColorChooser_SATURATION);
    this.saturation.addActionListener(event -> this.drawAll());
    this.addComponent(this.saturation, 2, 2, 1, 1, GridBagConstraints.LINE_START, GridBagConstraints.NONE, 0, 0, null);

    this.lightness.setText(Translations.JSColorChooser_LIGHTNESS);
    this.lightness.addActionListener(event -> this.drawAll());
    this.addComponent(this.lightness, 2, 4, 1, 1, GridBagConstraints.LINE_START, GridBagConstraints.NONE, 0, 0, null);

    this.hueSlider.setMaximum(360);
    this.hueSlider.setValue(0);
    this.hueSlider.getStyle().minWidth = "20rem";
    this.hueSlider.addChangeListener(event -> this.sliderToSpinner(this.hueSlider, this.hueSpinner));
    this.addComponent(this.hueSlider, 2, 1, 2, 1, GridBagConstraints.CENTER, GridBagConstraints.HORIZONTAL, 1, 0, null);

    this.satutationSlider.setValue(0);
    this.satutationSlider.getStyle().minWidth = "20rem";
    this.satutationSlider.addChangeListener(event -> this.sliderToSpinner(this.satutationSlider, this.saturationSpinner));
    this.addComponent(this.satutationSlider, 2, 3, 2, 1, GridBagConstraints.CENTER, GridBagConstraints.HORIZONTAL, 1, 0, null);

    this.lightnessSlider.setValue(100);
    this.lightnessSlider.getStyle().minWidth = "20rem";
    this.lightnessSlider.addChangeListener(event -> this.sliderToSpinner(this.lightnessSlider, this.lightnessSpinner));
    this.addComponent(this.lightnessSlider, 2, 5, 2, 1, GridBagConstraints.CENTER, GridBagConstraints.HORIZONTAL, 1, 0, null);

    this.hueSpinner.setModel(new SpinnerNumberModel(0, 0, 360, 1));
    this.hueSpinner.getStyle().minWidth = "3rem";
    this.hueSpinner.addChangeListener(event -> this.spinnerToSlider(this.hueSpinner, this.hueSlider));
    this.addComponent(this.hueSpinner, 3, 0, 1, 1, GridBagConstraints.LINE_END, GridBagConstraints.NONE, 0, 0, null);

    this.saturationSpinner.setModel(new SpinnerNumberModel(0, 0, 100, 1));
    this.saturationSpinner.getStyle().minWidth = "3rem";
    this.saturationSpinner.addChangeListener(event -> this.spinnerToSlider(this.saturationSpinner, this.satutationSlider));
    this.addComponent(this.saturationSpinner, 3, 2, 1, 1, GridBagConstraints.LINE_END, GridBagConstraints.NONE, 0, 0, null);

    this.lightnessSpinner.setModel(new SpinnerNumberModel(100, 0, 100, 1));
    this.lightnessSpinner.getStyle().minWidth = "3rem";
    this.lightnessSpinner.addChangeListener(event -> this.spinnerToSlider(this.lightnessSpinner, this.lightnessSlider));
    this.addComponent(this.lightnessSpinner, 3, 4, 1, 1, GridBagConstraints.LINE_END, GridBagConstraints.NONE, 0, 0, null);

    this.drawAll();
  }

  /**
   * Returns the selected color
   *
   * @return The selected color
   */
  public Color getSelectedColor() {
    Array<Double> hsl = new Array<>();
    Array<Integer> rgb = new Array<>();

    hsl.$set(0, this.hueSpinner.getValue() / 360);
    hsl.$set(1, this.saturationSpinner.getValue() / 100);
    hsl.$set(2, this.lightnessSpinner.getValue() / 100);
    Color.HSLtoRGB(hsl, rgb);

    return new Color(rgb.$get(0), rgb.$get(1), rgb.$get(2), 255);
  }

  /**
   * Sets the selected color
   *
   * @param color The selected color
   */
  public void setSelectedColor(Color color) {
    Array<Integer> rgb = new Array<>();
    Array<Double> hsl = new Array<>();

    rgb.$set(0, color.red);
    rgb.$set(1, color.green);
    rgb.$set(2, color.blue);
    Color.RGBtoHSL(rgb, hsl);

    this.setColor(360 * hsl.$get(0), 100 * hsl.$get(1), 100 * hsl.$get(2), false);
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

    Array<Double> dash = new Array<>();

    this.ctxSquare.beginPath();
    this.ctxSquare.arc(x * JSColorHSLPanel.SQUARE_SIZE, (1 - y) * JSColorHSLPanel.SQUARE_SIZE, 5, 0, 2 * Math.PI);
    this.ctxSquare.closePath();
    this.ctxSquare.strokeStyle = this.$getStrokeStyle("black");
    this.ctxSquare.setLineDash(dash);
    this.ctxSquare.stroke();

    dash.push(2.5, 2.5);

    this.ctxSquare.beginPath();
    this.ctxSquare.arc(x * JSColorHSLPanel.SQUARE_SIZE, (1 - y) * JSColorHSLPanel.SQUARE_SIZE, 5, 0, 2 * Math.PI);
    this.ctxSquare.closePath();
    this.ctxSquare.strokeStyle = this.$getStrokeStyle("white");
    this.ctxSquare.setLineDash(dash);
    this.ctxSquare.stroke();
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
        hsl.$set(1, 1.0);
        hsl.$set(2, 0.5);
      } else if (this.saturation.isSelected()) {
        hsl.$set(0, this.hueSpinner.getValue() / 360);
        hsl.$set(1, y / JSColorHSLPanel.RECT_HEIGHT);
        hsl.$set(2, 0.5);
      } else if (this.lightness.isSelected()) {
        hsl.$set(0, this.hueSpinner.getValue() / 360);
        hsl.$set(1, 1.0);
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

    Array<Double> dash = new Array<>();

    this.ctxRect.beginPath();
    this.ctxRect.moveTo(0, (1 - y) * JSColorHSLPanel.RECT_HEIGHT);
    this.ctxRect.lineTo(JSColorHSLPanel.RECT_WIDTH, (1 - y) * JSColorHSLPanel.RECT_HEIGHT);
    this.ctxRect.closePath();
    this.ctxRect.strokeStyle = this.$getStrokeStyle("black");
    this.ctxRect.setLineDash(dash);
    this.ctxRect.stroke();

    dash.push(2.5, 2.5);

    this.ctxRect.beginPath();
    this.ctxRect.moveTo(0, (1 - y) * JSColorHSLPanel.RECT_HEIGHT);
    this.ctxRect.lineTo(JSColorHSLPanel.RECT_WIDTH, (1 - y) * JSColorHSLPanel.RECT_HEIGHT);
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
      this.setColor(this.hueSpinner.getValue(), 100 * event.offsetX / JSColorHSLPanel.SQUARE_SIZE, 100 * (JSColorHSLPanel.SQUARE_SIZE - event.offsetY) / JSColorHSLPanel.SQUARE_SIZE, true);
    } else if (this.saturation.isSelected()) {
      this.setColor(360 * event.offsetX / JSColorHSLPanel.SQUARE_SIZE, this.saturationSpinner.getValue(), 100 * (JSColorHSLPanel.SQUARE_SIZE - event.offsetY) / JSColorHSLPanel.SQUARE_SIZE, true);
    } else if (this.lightness.isSelected()) {
      this.setColor(360 * event.offsetX / JSColorHSLPanel.SQUARE_SIZE, 100 * (JSColorHSLPanel.SQUARE_SIZE - event.offsetY) / JSColorHSLPanel.SQUARE_SIZE, this.lightnessSpinner.getValue(), true);
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
      this.setColor(360 * (JSColorHSLPanel.SQUARE_SIZE - event.offsetY) / JSColorHSLPanel.SQUARE_SIZE, this.saturationSpinner.getValue(), this.lightnessSpinner.getValue(), true);
    } else if (this.saturation.isSelected()) {
      this.setColor(this.hueSpinner.getValue(), 100 * (JSColorHSLPanel.SQUARE_SIZE - event.offsetY) / JSColorHSLPanel.SQUARE_SIZE, this.lightnessSpinner.getValue(), true);
    } else if (this.lightness.isSelected()) {
      this.setColor(this.hueSpinner.getValue(), this.saturationSpinner.getValue(), 100 * (JSColorHSLPanel.SQUARE_SIZE - event.offsetY) / JSColorHSLPanel.SQUARE_SIZE, true);
    }
  }

  private void setColor(double h, double s, double l, boolean call) {
    this.hueSlider.setValue(parseInt(h));
    this.hueSpinner.setValue(parseInt(h));

    this.satutationSlider.setValue(parseInt(s));
    this.saturationSpinner.setValue(parseInt(s));

    this.lightnessSlider.setValue(parseInt(l));
    this.lightnessSpinner.setValue(parseInt(l));

    this.drawAll();

    if (call) {
      this.onchange();
    }
  }
}
