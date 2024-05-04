package javascript.swing.colorchooser;

import def.dom.CanvasGradient;
import def.dom.CanvasPattern;
import static def.dom.Globals.document;
import def.dom.MouseEvent;
import def.js.Array;
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
import jsweet.util.union.Union4;
import simulation.dom.$CanvasRenderingContext2D;
import static simulation.js.$Globals.$exists;
import static simulation.js.$Globals.$typeof;

/**
 * The abstract panel to show colors in a color format
 *
 * @author gianpiero.diblasi
 */
public abstract class JSAbstractColorFormatPanel extends JSPanel {

  private final ButtonGroup buttonGroup = new ButtonGroup();
  protected final JSComponent square = new JSComponent(document.createElement("canvas"));
  protected final $CanvasRenderingContext2D ctxSquare = this.square.invoke("getContext('2d')");

  protected final JSComponent rect = new JSComponent(document.createElement("canvas"));
  protected final $CanvasRenderingContext2D ctxRect = this.rect.invoke("getContext('2d')");

  private final Array<ChangeListener> listeners = new Array<>();

  protected static final int SQUARE_SIZE = 180;
  protected static final int RECT_WIDTH = 25;
  protected static final int RECT_HEIGHT = 180;

  protected JSAbstractColorFormatPanel() {
    super();
    this.setLayout(new GridBagLayout());
    
    this.square.setProperty("width", "" + JSAbstractColorFormatPanel.SQUARE_SIZE);
    this.square.setProperty("height", "" + JSAbstractColorFormatPanel.SQUARE_SIZE);
    this.square.getStyle().cursor = "pointer";
    this.square.addEventListener("mousedown", event -> this.squareEvent((MouseEvent) event, "down"));
    this.square.addEventListener("mousemove", event -> this.squareEvent((MouseEvent) event, "move"));
    this.square.addEventListener("mouseup", event -> this.squareEvent((MouseEvent) event, "up"));
    this.addComponent(this.square, 0, 0, 1, 7, GridBagConstraints.CENTER, GridBagConstraints.NONE, 0, 0, new Insets(0, 0, 0, 5));

    this.rect.setProperty("width", "" + JSAbstractColorFormatPanel.RECT_WIDTH);
    this.rect.setProperty("height", "" + JSAbstractColorFormatPanel.RECT_HEIGHT);
    this.rect.getStyle().cursor = "pointer";
    this.rect.addEventListener("mousedown", event -> this.rectEvent((MouseEvent) event, "down"));
    this.rect.addEventListener("mousemove", event -> this.rectEvent((MouseEvent) event, "move"));
    this.rect.addEventListener("mouseup", event -> this.rectEvent((MouseEvent) event, "up"));
    this.addComponent(this.rect, 1, 0, 1, 7, GridBagConstraints.CENTER, GridBagConstraints.NONE, 0, 0, new Insets(0, 0, 0, 5));
  }

  protected void addRadio(JSRadioButton radio, String text, boolean selected, int gridx, int gridy) {
    this.buttonGroup.add(radio);
    
    radio.setText(text);
    radio.setSelected(true);
    radio.addActionListener(event -> this.drawAll());
    this.addComponent(radio, gridx, gridy, 1, 1, GridBagConstraints.LINE_START, GridBagConstraints.NONE, 0, 0, null);
  }

  protected void addSlider(JSSlider slider, JSSpinner spinner, int value, int max, int gridx, int gridy) {
    slider.setValue(value);
    slider.setMaximum(max);
    slider.getStyle().minWidth = "20rem";
    slider.addChangeListener(event -> this.sliderToSpinner(slider, spinner));
    this.addComponent(slider, gridx, gridy, 2, 1, GridBagConstraints.CENTER, GridBagConstraints.HORIZONTAL, 1, 0, null);
  }

  protected void addSpinner(JSSpinner spinner, JSSlider slider, int value, int max, int gridx, int gridy) {
    spinner.setModel(new SpinnerNumberModel(value, 0, max, 1));
    spinner.getStyle().minWidth = "3rem";
    spinner.addChangeListener(event -> this.spinnerToSlider(spinner, slider));

    this.addComponent(spinner, gridx, gridy, 1, 1, GridBagConstraints.LINE_END, GridBagConstraints.NONE, 0, 0, null);
  }

  private void addComponent(JSComponent component, int gridx, int gridy, int gridwidth, int gridheight, int anchor, int fill, double weightx, double weighty, Insets insets) {
    GridBagConstraints gridBagConstraints = new GridBagConstraints();
    gridBagConstraints.gridx = gridx;
    gridBagConstraints.gridy = gridy;
    gridBagConstraints.gridwidth = gridwidth;
    gridBagConstraints.gridheight = gridheight;
    gridBagConstraints.anchor = anchor;
    gridBagConstraints.fill = fill;
    gridBagConstraints.weightx = weightx;
    gridBagConstraints.weighty = weighty;

    if ($exists(insets)) {
      gridBagConstraints.insets = insets;
    }

    this.add(component, gridBagConstraints);
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

  protected void drawAll() {
    this.drawSquare();
    this.drawSquareSelector();
    this.drawRect();
    this.drawRectSelector();
  }

  protected abstract void drawSquare();

  protected abstract void drawSquareSelector();

  protected abstract void drawRect();

  protected abstract void drawRectSelector();

  protected abstract void squareEvent(MouseEvent event, String type);

  protected abstract void rectEvent(MouseEvent event, String type);

  /**
   * Adds a change listener
   *
   * @param listener The listener
   */
  public void addChangeListener(ChangeListener listener) {
    this.listeners.push(listener);
  }

  protected void onchange() {
    ChangeEvent event = new ChangeEvent();

    this.listeners.forEach(listener -> {
      if ($typeof(listener, "function")) {
        listener.$apply(event);
      } else {
        listener.stateChanged(event);
      }
    });
  }

  protected String getStrokeStyle(String style) {
    return style;
  }

  protected Union4<String, CanvasGradient, CanvasPattern, java.lang.Object> $getStrokeStyle(String style) {
    return null;
  }
}
