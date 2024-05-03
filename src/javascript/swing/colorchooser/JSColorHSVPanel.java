package javascript.swing.colorchooser;

import static def.dom.Globals.document;
import def.dom.ImageData;
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
import javascript.util.Translations;
import simulation.dom.$CanvasRenderingContext2D;
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

  private static final int SQUARE_SIZE = 361;
  private static final int RECT_WIDTH = 50;
  private static final int RECT_HEIGHT = 361;

  public JSColorHSVPanel() {
    super();

    GridBagConstraints gridBagConstraints;

    this.setLayout(new GridBagLayout());
    this.buttonGroup.add(this.hue);
    this.buttonGroup.add(this.saturation);
    this.buttonGroup.add(this.value);

    this.hue.setText(Translations.JSColorChooser_HUE);
    this.hue.setSelected(true);
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 2;
    gridBagConstraints.gridy = 0;
    gridBagConstraints.anchor = GridBagConstraints.LINE_START;
    this.add(this.hue, gridBagConstraints);

    this.saturation.setText(Translations.JSColorChooser_SATURATION);
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 2;
    gridBagConstraints.gridy = 2;
    gridBagConstraints.anchor = GridBagConstraints.LINE_START;
    this.add(this.saturation, gridBagConstraints);

    this.value.setText(Translations.JSColorChooser_VALUE);
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 2;
    gridBagConstraints.gridy = 4;
    gridBagConstraints.anchor = GridBagConstraints.LINE_START;
    this.add(this.value, gridBagConstraints);

    this.hueSlider.setMaximum(360);
    this.hueSlider.setValue(0);
    this.hueSlider.addChangeListener(event -> this.sliderToSpinner(this.hueSlider, this.hueSpinner));
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 2;
    gridBagConstraints.gridy = 1;
    gridBagConstraints.gridwidth = 2;
    gridBagConstraints.fill = GridBagConstraints.HORIZONTAL;
    gridBagConstraints.weightx = 1;
    this.add(this.hueSlider, gridBagConstraints);

    this.satutationSlider.setValue(0);
    this.satutationSlider.addChangeListener(event -> this.sliderToSpinner(this.satutationSlider, this.saturationSpinner));
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 2;
    gridBagConstraints.gridy = 3;
    gridBagConstraints.gridwidth = 2;
    gridBagConstraints.fill = GridBagConstraints.HORIZONTAL;
    gridBagConstraints.weightx = 1;
    this.add(this.satutationSlider, gridBagConstraints);

    this.valueSlider.setValue(100);
    this.valueSlider.addChangeListener(event -> this.sliderToSpinner(this.valueSlider, this.valueSpinner));
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 2;
    gridBagConstraints.gridy = 5;
    gridBagConstraints.gridwidth = 2;
    gridBagConstraints.fill = GridBagConstraints.HORIZONTAL;
    gridBagConstraints.weightx = 1;
    this.add(this.valueSlider, gridBagConstraints);

    this.hueSpinner.setModel(new SpinnerNumberModel(0, 0, 360, 1));
    this.hueSpinner.addChangeListener(event -> this.spinnerToSlider(this.hueSpinner, this.hueSlider));
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 3;
    gridBagConstraints.gridy = 0;
    gridBagConstraints.anchor = GridBagConstraints.LINE_END;
    this.add(this.hueSpinner, gridBagConstraints);

    this.saturationSpinner.setModel(new SpinnerNumberModel(0, 0, 100, 1));
    this.saturationSpinner.addChangeListener(event -> this.spinnerToSlider(this.saturationSpinner, this.satutationSlider));
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 3;
    gridBagConstraints.gridy = 2;
    gridBagConstraints.anchor = GridBagConstraints.LINE_END;
    this.add(this.saturationSpinner, gridBagConstraints);

    this.valueSpinner.setModel(new SpinnerNumberModel(100, 0, 100, 1));
    this.valueSpinner.addChangeListener(event -> this.spinnerToSlider(this.valueSpinner, this.valueSlider));
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 3;
    gridBagConstraints.gridy = 4;
    gridBagConstraints.anchor = GridBagConstraints.LINE_END;
    this.add(this.valueSpinner, gridBagConstraints);

    this.square.setProperty("width", "" + JSColorHSVPanel.SQUARE_SIZE);
    this.square.setProperty("height", "" + JSColorHSVPanel.SQUARE_SIZE);
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 0;
    gridBagConstraints.gridy = 0;
    gridBagConstraints.gridheight = 7;
    gridBagConstraints.insets = new Insets(0, 0, 0, 5);
    this.add(this.square, gridBagConstraints);

    this.rect.setProperty("width", "" + JSColorHSVPanel.RECT_WIDTH);
    this.rect.setProperty("height", "" + JSColorHSVPanel.RECT_HEIGHT);
    gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = 1;
    gridBagConstraints.gridy = 0;
    gridBagConstraints.gridheight = 7;
    gridBagConstraints.insets = new Insets(0, 0, 0, 5);
    this.add(this.rect, gridBagConstraints);

    this.drawSquare();
    this.drawRect();
  }

  private void sliderToSpinner(JSSlider slider, JSSpinner spinner) {
    spinner.setValue(slider.getValue());
  }

  private void spinnerToSlider(JSSpinner spinner, JSSlider slider) {
    slider.setValue((int) spinner.getValue());
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
          hsv.$set(1, x / 360);
          hsv.$set(2, y / 360);
          Color.HSVtoRGB(hsv, rgb);

          double pos = ((JSColorHSVPanel.SQUARE_SIZE - y) * JSColorHSVPanel.SQUARE_SIZE + x) * 4;
          data.$set(pos, rgb.$get(0));
          data.$set(pos + 1, rgb.$get(1));
          data.$set(pos + 2, rgb.$get(2));
          data.$set(pos + 3, 255);
        } else if (this.saturation.isSelected()) {
        } else if (this.value.isSelected()) {
        }
      }
    }

    this.ctxSquare.putImageData(imageData, 0, 0);
  }

  private void drawRect() {
    ImageData imageData = this.ctxRect.createImageData(JSColorHSVPanel.RECT_WIDTH, JSColorHSVPanel.RECT_HEIGHT);
    $Uint8Array data = ($Uint8Array) imageData.data;

    Array<Double> hsv = new Array<>();
    Array<Integer> rgb = new Array<>();

    for (double y = 0; y < JSColorHSVPanel.RECT_HEIGHT; y++) {
      if (this.hue.isSelected()) {
        hsv.$set(0, y / (JSColorHSVPanel.RECT_HEIGHT - 1));
        hsv.$set(1, 1.0);
        hsv.$set(2, 1.0);
        Color.HSVtoRGB(hsv, rgb);
      } else if (this.saturation.isSelected()) {
      } else if (this.value.isSelected()) {
      }

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
}
