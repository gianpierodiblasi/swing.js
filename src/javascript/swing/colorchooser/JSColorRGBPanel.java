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
 * The panel to show colors in RGB format
 *
 * @author gianpiero.diblasi
 */
public class JSColorRGBPanel extends JSAbstractColorFormatPanel {

  private final ButtonGroup buttonGroup = new ButtonGroup();
  private final JSRadioButton red = new JSRadioButton();
  private final JSSlider redSlider = new JSSlider();
  private final JSSpinner redSpinner = new JSSpinner();
  private final JSRadioButton green = new JSRadioButton();
  private final JSSlider greenSlider = new JSSlider();
  private final JSSpinner greenSpinner = new JSSpinner();
  private final JSRadioButton blue = new JSRadioButton();
  private final JSSlider blueSlider = new JSSlider();
  private final JSSpinner blueSpinner = new JSSpinner();

  private boolean squareDown;
  private boolean rectDown;

  /**
   * Creates the object
   */
  public JSColorRGBPanel() {
    super();

    this.setLayout(new GridBagLayout());
    this.buttonGroup.add(this.red);
    this.buttonGroup.add(this.green);
    this.buttonGroup.add(this.blue);

    this.red.setText(Translations.JSColorChooser_RED);
    this.red.setSelected(true);
    this.red.addActionListener(event -> this.drawAll());
    this.addComponent(this.red, 2, 0, 1, 1, GridBagConstraints.LINE_START, GridBagConstraints.NONE, 0, 0, null);

    this.green.setText(Translations.JSColorChooser_GREEN);
    this.green.addActionListener(event -> this.drawAll());
    this.addComponent(this.green, 2, 2, 1, 1, GridBagConstraints.LINE_START, GridBagConstraints.NONE, 0, 0, null);

    this.blue.setText(Translations.JSColorChooser_BLUE);
    this.blue.addActionListener(event -> this.drawAll());
    this.addComponent(this.blue, 2, 4, 1, 1, GridBagConstraints.LINE_START, GridBagConstraints.NONE, 0, 0, null);

    this.redSlider.setMaximum(255);
    this.redSlider.setValue(0);
    this.redSlider.getStyle().minWidth = "20rem";
    this.redSlider.addChangeListener(event -> this.sliderToSpinner(this.redSlider, this.redSpinner));
    this.addComponent(this.redSlider, 2, 1, 2, 1, GridBagConstraints.CENTER, GridBagConstraints.HORIZONTAL, 1, 0, null);

    this.greenSlider.setMaximum(255);
    this.greenSlider.setValue(0);
    this.greenSlider.getStyle().minWidth = "20rem";
    this.greenSlider.addChangeListener(event -> this.sliderToSpinner(this.greenSlider, this.greenSpinner));
    this.addComponent(this.greenSlider, 2, 3, 2, 1, GridBagConstraints.CENTER, GridBagConstraints.HORIZONTAL, 1, 0, null);

    this.blueSlider.setMaximum(255);
    this.blueSlider.setValue(0);
    this.blueSlider.getStyle().minWidth = "20rem";
    this.blueSlider.addChangeListener(event -> this.sliderToSpinner(this.blueSlider, this.blueSpinner));
    this.addComponent(this.blueSlider, 2, 5, 2, 1, GridBagConstraints.CENTER, GridBagConstraints.HORIZONTAL, 1, 0, null);

    this.redSpinner.setModel(new SpinnerNumberModel(0, 0, 255, 1));
    this.redSpinner.getStyle().minWidth = "3rem";
    this.redSpinner.addChangeListener(event -> this.spinnerToSlider(this.redSpinner, this.redSlider));
    this.addComponent(this.redSpinner, 3, 0, 1, 1, GridBagConstraints.LINE_END, GridBagConstraints.NONE, 0, 0, null);

    this.greenSpinner.setModel(new SpinnerNumberModel(0, 0, 255, 1));
    this.greenSpinner.getStyle().minWidth = "3rem";
    this.greenSpinner.addChangeListener(event -> this.spinnerToSlider(this.greenSpinner, this.greenSlider));
    this.addComponent(this.greenSpinner, 3, 2, 1, 1, GridBagConstraints.LINE_END, GridBagConstraints.NONE, 0, 0, null);

    this.blueSpinner.setModel(new SpinnerNumberModel(0, 0, 255, 1));
    this.blueSpinner.getStyle().minWidth = "3rem";
    this.blueSpinner.addChangeListener(event -> this.spinnerToSlider(this.blueSpinner, this.blueSlider));
    this.addComponent(this.blueSpinner, 3, 4, 1, 1, GridBagConstraints.LINE_END, GridBagConstraints.NONE, 0, 0, null);

    this.drawAll();
  }

  /**
   * Returns the selected color
   *
   * @return The selected color
   */
  public Color getSelectedColor() {
    return new Color(this.redSlider.getValue(), this.greenSlider.getValue(), this.blueSlider.getValue(), 255);
  }

  /**
   * Sets the selected color
   *
   * @param color The selected color
   */
  public void setSelectedColor(Color color) {
    this.setColor(color.red, color.green, color.blue, false);
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

    Array<Double> dash = new Array<>();

    this.ctxSquare.beginPath();
    this.ctxSquare.arc(x * JSColorRGBPanel.SQUARE_SIZE, (1 - y) * JSColorRGBPanel.SQUARE_SIZE, 5, 0, 2 * Math.PI);
    this.ctxSquare.closePath();
    this.ctxSquare.strokeStyle = this.$getStrokeStyle("black");
    this.ctxSquare.setLineDash(dash);
    this.ctxSquare.stroke();

    dash.push(2.5, 2.5);

    this.ctxSquare.beginPath();
    this.ctxSquare.arc(x * JSColorRGBPanel.SQUARE_SIZE, (1 - y) * JSColorRGBPanel.SQUARE_SIZE, 5, 0, 2 * Math.PI);
    this.ctxSquare.closePath();
    this.ctxSquare.strokeStyle = this.$getStrokeStyle("white");
    this.ctxSquare.setLineDash(dash);
    this.ctxSquare.stroke();
  }

  @Override
  protected void drawRect() {
    ImageData imageData = this.ctxRect.createImageData(JSColorRGBPanel.RECT_WIDTH, JSColorRGBPanel.RECT_HEIGHT);
    $Uint8Array data = ($Uint8Array) imageData.data;

    Array<Integer> rgb = new Array<>();

    for (int y = 0; y < JSColorRGBPanel.RECT_HEIGHT; y++) {
      if (this.red.isSelected()) {
        rgb.$set(0, 255 * y / JSColorRGBPanel.RECT_HEIGHT);
        rgb.$set(1, 0);
        rgb.$set(2, 0);
      } else if (this.green.isSelected()) {
        rgb.$set(0, 0);
        rgb.$set(1, 255 * y / JSColorRGBPanel.RECT_HEIGHT);
        rgb.$set(2, 0);
      } else if (this.blue.isSelected()) {
        rgb.$set(0, 0);
        rgb.$set(1, 0);
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

    Array<Double> dash = new Array<>();

    this.ctxRect.beginPath();
    this.ctxRect.moveTo(0, (1 - y) * JSColorRGBPanel.RECT_HEIGHT);
    this.ctxRect.lineTo(JSColorRGBPanel.RECT_WIDTH, (1 - y) * JSColorRGBPanel.RECT_HEIGHT);
    this.ctxRect.closePath();
    this.ctxRect.strokeStyle = this.$getStrokeStyle("black");
    this.ctxRect.setLineDash(dash);
    this.ctxRect.stroke();

    dash.push(2.5, 2.5);

    this.ctxRect.beginPath();
    this.ctxRect.moveTo(0, (1 - y) * JSColorRGBPanel.RECT_HEIGHT);
    this.ctxRect.lineTo(JSColorRGBPanel.RECT_WIDTH, (1 - y) * JSColorRGBPanel.RECT_HEIGHT);
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
    } else if (this.red.isSelected()) {
      this.setColor(this.redSlider.getValue(), parseInt(255 * event.offsetX / JSColorRGBPanel.SQUARE_SIZE), parseInt(255 * (JSColorRGBPanel.SQUARE_SIZE - event.offsetY) / JSColorRGBPanel.SQUARE_SIZE), true);
    } else if (this.green.isSelected()) {
      this.setColor(parseInt(255 * event.offsetX / JSColorRGBPanel.SQUARE_SIZE), this.greenSlider.getValue(), parseInt(255 * (JSColorRGBPanel.SQUARE_SIZE - event.offsetY) / JSColorRGBPanel.SQUARE_SIZE), true);
    } else if (this.blue.isSelected()) {
      this.setColor(parseInt(255 * event.offsetX / JSColorRGBPanel.SQUARE_SIZE), parseInt(255 * (JSColorRGBPanel.SQUARE_SIZE - event.offsetY) / JSColorRGBPanel.SQUARE_SIZE), this.blueSlider.getValue(), true);
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
    } else if (this.red.isSelected()) {
      this.setColor(parseInt(255 * (JSColorRGBPanel.SQUARE_SIZE - event.offsetY) / JSColorRGBPanel.SQUARE_SIZE), this.greenSlider.getValue(), this.blueSlider.getValue(), true);
    } else if (this.green.isSelected()) {
      this.setColor(this.redSlider.getValue(), parseInt(255 * (JSColorRGBPanel.SQUARE_SIZE - event.offsetY) / JSColorRGBPanel.SQUARE_SIZE), this.blueSlider.getValue(), true);
    } else if (this.blue.isSelected()) {
      this.setColor(this.redSlider.getValue(), this.greenSlider.getValue(), parseInt(255 * (JSColorRGBPanel.SQUARE_SIZE - event.offsetY) / JSColorRGBPanel.SQUARE_SIZE), true);
    }
  }

  private void setColor(int r, int g, int b, boolean call) {
    this.redSlider.setValue(r);
    this.redSpinner.setValue(r);

    this.greenSlider.setValue(g);
    this.greenSpinner.setValue(g);

    this.blueSlider.setValue(b);
    this.blueSpinner.setValue(b);

    this.drawAll();

    if (call) {
      this.onchange();
    }
  }
}
