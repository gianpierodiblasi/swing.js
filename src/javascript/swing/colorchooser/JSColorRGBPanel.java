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
 * The panel to show colors in RGB format
 *
 * @author gianpiero.diblasi
 */
public class JSColorRGBPanel extends JSPanel {

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

  public JSColorRGBPanel() {
    super();

    GridBagConstraints gridBagConstraints;

    this.setLayout(new GridBagLayout());
    this.buttonGroup.add(this.red);
    this.buttonGroup.add(this.green);
    this.buttonGroup.add(this.blue);

    this.red.setText(Translations.JSColorChooser_RED);
    this.red.setSelected(true);
    this.red.addActionListener(event -> this.drawAll());
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 2;
    gridBagConstraints.gridy = 0;
    gridBagConstraints.anchor = GridBagConstraints.LINE_START;
    this.add(this.red, gridBagConstraints);

    this.green.setText(Translations.JSColorChooser_GREEN);
    this.green.addActionListener(event -> this.drawAll());
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 2;
    gridBagConstraints.gridy = 2;
    gridBagConstraints.anchor = GridBagConstraints.LINE_START;
    this.add(this.green, gridBagConstraints);

    this.blue.setText(Translations.JSColorChooser_BLUE);
    this.blue.addActionListener(event -> this.drawAll());
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 2;
    gridBagConstraints.gridy = 4;
    gridBagConstraints.anchor = GridBagConstraints.LINE_START;
    this.add(this.blue, gridBagConstraints);

    this.redSlider.setMaximum(255);
    this.redSlider.setValue(0);
    this.redSlider.getStyle().minWidth = "20rem";
    this.redSlider.addChangeListener(event -> this.sliderToSpinner(this.redSlider, this.redSpinner));
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 2;
    gridBagConstraints.gridy = 1;
    gridBagConstraints.gridwidth = 2;
    gridBagConstraints.fill = GridBagConstraints.HORIZONTAL;
    gridBagConstraints.weightx = 1;
    this.add(this.redSlider, gridBagConstraints);

    this.greenSlider.setMaximum(255);
    this.greenSlider.setValue(0);
    this.greenSlider.getStyle().minWidth = "20rem";
    this.greenSlider.addChangeListener(event -> this.sliderToSpinner(this.greenSlider, this.greenSpinner));
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 2;
    gridBagConstraints.gridy = 3;
    gridBagConstraints.gridwidth = 2;
    gridBagConstraints.fill = GridBagConstraints.HORIZONTAL;
    gridBagConstraints.weightx = 1;
    this.add(this.greenSlider, gridBagConstraints);

    this.blueSlider.setMaximum(255);
    this.blueSlider.setValue(0);
    this.blueSlider.getStyle().minWidth = "20rem";
    this.blueSlider.addChangeListener(event -> this.sliderToSpinner(this.blueSlider, this.blueSpinner));
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 2;
    gridBagConstraints.gridy = 5;
    gridBagConstraints.gridwidth = 2;
    gridBagConstraints.fill = GridBagConstraints.HORIZONTAL;
    gridBagConstraints.weightx = 1;
    this.add(this.blueSlider, gridBagConstraints);

    this.redSpinner.setModel(new SpinnerNumberModel(0, 0, 255, 1));
    this.redSpinner.getStyle().minWidth = "3rem";
    this.redSpinner.addChangeListener(event -> this.spinnerToSlider(this.redSpinner, this.redSlider));
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 3;
    gridBagConstraints.gridy = 0;
    gridBagConstraints.anchor = GridBagConstraints.LINE_END;
    this.add(this.redSpinner, gridBagConstraints);

    this.greenSpinner.setModel(new SpinnerNumberModel(0, 0, 255, 1));
    this.greenSpinner.getStyle().minWidth = "3rem";
    this.greenSpinner.addChangeListener(event -> this.spinnerToSlider(this.greenSpinner, this.greenSlider));
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 3;
    gridBagConstraints.gridy = 2;
    gridBagConstraints.anchor = GridBagConstraints.LINE_END;
    this.add(this.greenSpinner, gridBagConstraints);

    this.blueSpinner.setModel(new SpinnerNumberModel(0, 0, 255, 1));
    this.blueSpinner.getStyle().minWidth = "3rem";
    this.blueSpinner.addChangeListener(event -> this.spinnerToSlider(this.blueSpinner, this.blueSlider));
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 3;
    gridBagConstraints.gridy = 4;
    gridBagConstraints.anchor = GridBagConstraints.LINE_END;
    this.add(this.blueSpinner, gridBagConstraints);

    this.square.setProperty("width", "" + JSColorRGBPanel.SQUARE_SIZE);
    this.square.setProperty("height", "" + JSColorRGBPanel.SQUARE_SIZE);
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

    this.rect.setProperty("width", "" + JSColorRGBPanel.RECT_WIDTH);
    this.rect.setProperty("height", "" + JSColorRGBPanel.RECT_HEIGHT);
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

  private void drawSquareSelector() {
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

  private void drawRect() {
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

  private void drawRectSelector() {
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
    } else if (this.red.isSelected()) {
      this.setColor(this.redSlider.getValue(), parseInt(255 * event.offsetX / JSColorRGBPanel.SQUARE_SIZE), parseInt(255 * (JSColorRGBPanel.SQUARE_SIZE - event.offsetY) / JSColorRGBPanel.SQUARE_SIZE), true);
    } else if (this.green.isSelected()) {
      this.setColor(parseInt(255 * event.offsetX / JSColorRGBPanel.SQUARE_SIZE), this.greenSlider.getValue(), parseInt(255 * (JSColorRGBPanel.SQUARE_SIZE - event.offsetY) / JSColorRGBPanel.SQUARE_SIZE), true);
    } else if (this.blue.isSelected()) {
      this.setColor(parseInt(255 * event.offsetX / JSColorRGBPanel.SQUARE_SIZE), parseInt(255 * (JSColorRGBPanel.SQUARE_SIZE - event.offsetY) / JSColorRGBPanel.SQUARE_SIZE), this.blueSlider.getValue(), true);
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

  private String getStrokeStyle(String style) {
    return style;
  }

  private Union4<String, CanvasGradient, CanvasPattern, java.lang.Object> $getStrokeStyle(String style) {
    return null;
  }
}
