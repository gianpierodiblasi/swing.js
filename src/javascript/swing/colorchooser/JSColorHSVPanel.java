package javascript.swing.colorchooser;

import def.dom.CanvasGradient;
import def.dom.CanvasPattern;
import static def.dom.Globals.document;
import def.dom.ImageData;
import def.dom.MouseEvent;
import def.js.Array;
import javascript.awt.Color;
import javascript.awt.GridBagConstraints;
import javascript.awt.GridBagLayout;
import javascript.awt.Insets;
import javascript.swing.ButtonGroup;
import javascript.swing.JSComponent;
import javascript.swing.JSPanel;
import javascript.swing.JSRadioButton;
import javascript.swing.JSSlider;
import javascript.swing.JSSpinner;
import javascript.swing.SpinnerNumberModel;
import javascript.swing.event.ChangeEvent;
import javascript.swing.event.ChangeListener;
import javascript.util.Translations;
import jsweet.util.union.Union4;
import simulation.dom.$CanvasRenderingContext2D;
import static simulation.js.$Globals.$typeof;
import static simulation.js.$Globals.parseInt;
import simulation.js.$Uint8Array;

/**
 * The panel to show colors in HSV format
 *
 * @author gianpiero.diblasi
 */
public class JSColorHSVPanel extends JSPanel {

  private final ButtonGroup buttonGroup = new ButtonGroup();
  private final JSRadioButton hue = new JSRadioButton();
  private final JSSlider hueSlider = new JSSlider();
  private final JSSpinner hueSpinner = new JSSpinner();
  private final JSRadioButton saturation = new JSRadioButton();
  private final JSSlider satutationSlider = new JSSlider();
  private final JSSpinner saturationSpinner = new JSSpinner();
  private final JSRadioButton value = new JSRadioButton();
  private final JSSlider valueSlider = new JSSlider();
  private final JSSpinner valueSpinner = new JSSpinner();

  private final JSComponent square = new JSComponent(document.createElement("canvas"));
  private final $CanvasRenderingContext2D ctxSquare = this.square.invoke("getContext('2d')");

  private final JSComponent rect = new JSComponent(document.createElement("canvas"));
  private final $CanvasRenderingContext2D ctxRect = this.rect.invoke("getContext('2d')");

  private final Array<ChangeListener> listeners = new Array<>();

  private boolean squareDown;
  private boolean rectDown;

  private static final int SQUARE_SIZE = 180;
  private static final int RECT_WIDTH = 25;
  private static final int RECT_HEIGHT = 180;

  public JSColorHSVPanel() {
    super();

    GridBagConstraints gridBagConstraints;

    this.setLayout(new GridBagLayout());
    this.buttonGroup.add(this.hue);
    this.buttonGroup.add(this.saturation);
    this.buttonGroup.add(this.value);

    this.hue.setText(Translations.JSColorChooser_HUE);
    this.hue.setSelected(true);
    this.hue.addActionListener(event -> this.drawAll());
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 2;
    gridBagConstraints.gridy = 0;
    gridBagConstraints.anchor = GridBagConstraints.LINE_START;
    this.add(this.hue, gridBagConstraints);

    this.saturation.setText(Translations.JSColorChooser_SATURATION);
    this.saturation.addActionListener(event -> this.drawAll());
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 2;
    gridBagConstraints.gridy = 2;
    gridBagConstraints.anchor = GridBagConstraints.LINE_START;
    this.add(this.saturation, gridBagConstraints);

    this.value.setText(Translations.JSColorChooser_VALUE);
    this.value.addActionListener(event -> this.drawAll());
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 2;
    gridBagConstraints.gridy = 4;
    gridBagConstraints.anchor = GridBagConstraints.LINE_START;
    this.add(this.value, gridBagConstraints);

    this.hueSlider.setMaximum(360);
    this.hueSlider.setValue(0);
    this.hueSlider.getStyle().minWidth = "20rem";
    this.hueSlider.addChangeListener(event -> this.sliderToSpinner(this.hueSlider, this.hueSpinner));
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 2;
    gridBagConstraints.gridy = 1;
    gridBagConstraints.gridwidth = 2;
    gridBagConstraints.fill = GridBagConstraints.HORIZONTAL;
    gridBagConstraints.weightx = 1;
    this.add(this.hueSlider, gridBagConstraints);

    this.satutationSlider.setValue(0);
    this.satutationSlider.getStyle().minWidth = "20rem";
    this.satutationSlider.addChangeListener(event -> this.sliderToSpinner(this.satutationSlider, this.saturationSpinner));
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 2;
    gridBagConstraints.gridy = 3;
    gridBagConstraints.gridwidth = 2;
    gridBagConstraints.fill = GridBagConstraints.HORIZONTAL;
    gridBagConstraints.weightx = 1;
    this.add(this.satutationSlider, gridBagConstraints);

    this.valueSlider.setValue(100);
    this.valueSlider.getStyle().minWidth = "20rem";
    this.valueSlider.addChangeListener(event -> this.sliderToSpinner(this.valueSlider, this.valueSpinner));
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 2;
    gridBagConstraints.gridy = 5;
    gridBagConstraints.gridwidth = 2;
    gridBagConstraints.fill = GridBagConstraints.HORIZONTAL;
    gridBagConstraints.weightx = 1;
    this.add(this.valueSlider, gridBagConstraints);

    this.hueSpinner.setModel(new SpinnerNumberModel(0, 0, 360, 1));
    this.hueSpinner.getStyle().minWidth = "3rem";
    this.hueSpinner.addChangeListener(event -> this.spinnerToSlider(this.hueSpinner, this.hueSlider));
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 3;
    gridBagConstraints.gridy = 0;
    gridBagConstraints.anchor = GridBagConstraints.LINE_END;
    this.add(this.hueSpinner, gridBagConstraints);

    this.saturationSpinner.setModel(new SpinnerNumberModel(0, 0, 100, 1));
    this.saturationSpinner.getStyle().minWidth = "3rem";
    this.saturationSpinner.addChangeListener(event -> this.spinnerToSlider(this.saturationSpinner, this.satutationSlider));
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 3;
    gridBagConstraints.gridy = 2;
    gridBagConstraints.anchor = GridBagConstraints.LINE_END;
    this.add(this.saturationSpinner, gridBagConstraints);

    this.valueSpinner.setModel(new SpinnerNumberModel(100, 0, 100, 1));
    this.valueSpinner.getStyle().minWidth = "3rem";
    this.valueSpinner.addChangeListener(event -> this.spinnerToSlider(this.valueSpinner, this.valueSlider));
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 3;
    gridBagConstraints.gridy = 4;
    gridBagConstraints.anchor = GridBagConstraints.LINE_END;
    this.add(this.valueSpinner, gridBagConstraints);

    this.square.setProperty("width", "" + JSColorHSVPanel.SQUARE_SIZE);
    this.square.setProperty("height", "" + JSColorHSVPanel.SQUARE_SIZE);
    this.square.getStyle().cursor = "pointer";
    this.square.addEventListener("mousedown", event -> this.squareEvent((MouseEvent) event, "down"));
    this.square.addEventListener("mousemove", event -> this.squareEvent((MouseEvent) event, "move"));
    this.square.addEventListener("mouseup", event -> this.squareEvent((MouseEvent) event, "up"));
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 0;
    gridBagConstraints.gridy = 0;
    gridBagConstraints.gridheight = 7;
    gridBagConstraints.insets = new Insets(0, 0, 0, 5);
    this.add(this.square, gridBagConstraints);

    this.rect.setProperty("width", "" + JSColorHSVPanel.RECT_WIDTH);
    this.rect.setProperty("height", "" + JSColorHSVPanel.RECT_HEIGHT);
    this.rect.getStyle().cursor = "pointer";
    this.rect.addEventListener("mousedown", event -> this.rectEvent((MouseEvent) event, "down"));
    this.rect.addEventListener("mousemove", event -> this.rectEvent((MouseEvent) event, "move"));
    this.rect.addEventListener("mouseup", event -> this.rectEvent((MouseEvent) event, "up"));
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 1;
    gridBagConstraints.gridy = 0;
    gridBagConstraints.gridheight = 7;
    gridBagConstraints.insets = new Insets(0, 0, 0, 5);
    this.add(this.rect, gridBagConstraints);

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

    this.setColor(360 * hsv.$get(0), 100 * hsv.$get(1), 100 * hsv.$get(2));
  }

  /**
   * Adds a change listener
   *
   * @param listener The listener
   */
  public void addChangeListener(ChangeListener listener) {
    this.listeners.push(listener);
  }

  private void onchange() {
    ChangeEvent event = new ChangeEvent();

    this.listeners.forEach(listener -> {
      if ($typeof(listener, "function")) {
        listener.$apply(event);
      } else {
        listener.stateChanged(event);
      }
    });
  }

  private void sliderToSpinner(JSSlider slider, JSSpinner spinner) {
    spinner.setValue(slider.getValue());
    this.drawAll();
    this.onchange();
  }

  private void spinnerToSlider(JSSpinner spinner, JSSlider slider) {
    slider.setValue((int) spinner.getValue());
    this.drawAll();
    this.onchange();
  }

  private void drawAll() {
    this.drawSquare();
    this.drawSquareSelector();
    this.drawRect();
    this.drawRectSelector();
  }

  private void drawSquare() {
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

  private void drawSquareSelector() {
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

  private void drawRect() {
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

  private void drawRectSelector() {
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

  private void squareEvent(MouseEvent event, String type) {
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
      this.setColor(this.hueSpinner.getValue(), 100 * event.offsetX / JSColorHSVPanel.SQUARE_SIZE, 100 * (JSColorHSVPanel.SQUARE_SIZE - event.offsetY) / JSColorHSVPanel.SQUARE_SIZE);
    } else if (this.saturation.isSelected()) {
      this.setColor(360 * event.offsetX / JSColorHSVPanel.SQUARE_SIZE, this.saturationSpinner.getValue(), 100 * (JSColorHSVPanel.SQUARE_SIZE - event.offsetY) / JSColorHSVPanel.SQUARE_SIZE);
    } else if (this.value.isSelected()) {
      this.setColor(360 * event.offsetX / JSColorHSVPanel.SQUARE_SIZE, 100 * (JSColorHSVPanel.SQUARE_SIZE - event.offsetY) / JSColorHSVPanel.SQUARE_SIZE, this.valueSpinner.getValue());
    }
  }

  private void rectEvent(MouseEvent event, String type) {
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
      this.setColor(360 * (JSColorHSVPanel.SQUARE_SIZE - event.offsetY) / JSColorHSVPanel.SQUARE_SIZE, this.saturationSpinner.getValue(), this.valueSpinner.getValue());
    } else if (this.saturation.isSelected()) {
      this.setColor(this.hueSpinner.getValue(), 100 * (JSColorHSVPanel.SQUARE_SIZE - event.offsetY) / JSColorHSVPanel.SQUARE_SIZE, this.valueSpinner.getValue());
    } else if (this.value.isSelected()) {
      this.setColor(this.hueSpinner.getValue(), this.saturationSpinner.getValue(), 100 * (JSColorHSVPanel.SQUARE_SIZE - event.offsetY) / JSColorHSVPanel.SQUARE_SIZE);
    }
  }

  private void setColor(double h, double s, double v) {
    this.hueSlider.setValue(parseInt(h));
    this.hueSpinner.setValue(parseInt(h));

    this.satutationSlider.setValue(parseInt(s));
    this.saturationSpinner.setValue(parseInt(s));

    this.valueSlider.setValue(parseInt(v));
    this.valueSpinner.setValue(parseInt(v));

    this.drawAll();
    this.onchange();
  }

  private String getStrokeStyle(String style) {
    return style;
  }

  private Union4<String, CanvasGradient, CanvasPattern, java.lang.Object> $getStrokeStyle(String style) {
    return null;
  }
}
