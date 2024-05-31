package javascript.swing.colorchooser;

import def.dom.CanvasGradient;
import def.dom.CanvasPattern;
import static def.dom.Globals.document;
import def.dom.MouseEvent;
import def.js.Array;
import javascript.awt.Color;
import javascript.awt.GBC;
import javascript.awt.GridBagLayout;
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
import static simulation.js.$Globals.$typeof;

/**
 * The abstract panel to show colors in a color format
 *
 * @author gianpiero.diblasi
 */
public abstract class JSAbstractColorFormatPanel extends JSPanel {

  private final ButtonGroup buttonGroup = new ButtonGroup();
  private final JSComponent square = new JSComponent(document.createElement("canvas"));
  protected final $CanvasRenderingContext2D ctxSquare = this.square.invoke("getContext('2d')");

  private final JSComponent rect = new JSComponent(document.createElement("canvas"));
  protected final $CanvasRenderingContext2D ctxRect = this.rect.invoke("getContext('2d')");

  private final Array<ChangeListener> listeners = new Array<>();

  private boolean squareDown;
  private boolean rectDown;
  private boolean valueIsAdjusting;

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
    this.add(this.square, new GBC(0, 0).h(7).a(GBC.NORTH).i(0, 0, 0, 5));

    this.rect.setProperty("width", "" + JSAbstractColorFormatPanel.RECT_WIDTH);
    this.rect.setProperty("height", "" + JSAbstractColorFormatPanel.RECT_HEIGHT);
    this.rect.getStyle().cursor = "pointer";
    this.rect.addEventListener("mousedown", event -> this.rectEvent((MouseEvent) event, "down"));
    this.rect.addEventListener("mousemove", event -> this.rectEvent((MouseEvent) event, "move"));
    this.rect.addEventListener("mouseup", event -> this.rectEvent((MouseEvent) event, "up"));
    this.add(this.rect, new GBC(1, 0).h(7).a(GBC.NORTH).i(0, 0, 0, 5));
  }

  protected void addRadio(JSRadioButton radio, String text, boolean selected, int gridx, int gridy) {
    this.buttonGroup.add(radio);

    radio.setText(text);
    radio.setSelected(selected);
    radio.addActionListener(event -> this.drawAll());
    this.add(radio, new GBC(gridx, gridy).a(GBC.WEST));
  }

  protected void addSlider(JSSlider slider, JSSpinner spinner, int value, int max, int gridx, int gridy) {
    slider.setValue(value);
    slider.setMaximum(max);
    slider.getStyle().minWidth = "20rem";
    slider.addChangeListener(event -> this.sliderToSpinner(slider, spinner));
    this.add(slider, new GBC(gridx, gridy).w(2).f(GBC.HORIZONTAL).wx(1));
  }

  protected void addSpinner(JSSpinner spinner, JSSlider slider, int value, int max, int gridx, int gridy) {
    spinner.setModel(new SpinnerNumberModel(value, 0, max, 1));
    spinner.getStyle().minWidth = "3rem";
    spinner.getChilStyleByQuery("input[type=number]").minWidth = "2.5rem";
    spinner.getChilStyleByQuery("input[type=number]").width = "2.5rem";
    spinner.addChangeListener(event -> this.spinnerToSlider(spinner, slider));

    this.add(spinner, new GBC(gridx, gridy).a(GBC.EAST));
  }

  private void sliderToSpinner(JSSlider slider, JSSpinner spinner) {
    spinner.setValue(slider.getValue());
    this.drawAll();
    this.onchange(slider.getValueIsAdjusting());
  }

  private void spinnerToSlider(JSSpinner spinner, JSSlider slider) {
    slider.setValue((int) spinner.getValue());
    this.drawAll();
    this.onchange(spinner.getValueIsAdjusting());
  }

  protected void drawAll() {
    this.drawSquare();
    this.drawSquareSelector();
    this.drawRect();
    this.drawRectSelector();
  }

  protected abstract void drawSquare();

  protected abstract void drawSquareSelector();

  protected void drawCircle(double x, double y) {
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

  protected abstract void drawRect();

  protected abstract void drawRectSelector();

  protected void drawLine(double y) {
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

  protected abstract void squareEvent(MouseEvent event, String type);

  protected boolean canDoItSquare(String type) {
    switch (type) {
      case "down":
        this.squareDown = true;
        return true;
      case "move":
        return this.squareDown;
      case "up":
        this.squareDown = false;
        return true;
      default:
        return false;
    }
  }

  protected abstract void rectEvent(MouseEvent event, String type);

  protected boolean canDoItRect(String type) {
    switch (type) {
      case "down":
        this.rectDown = true;
        return true;
      case "move":
        return this.rectDown;
      case "up":
        this.rectDown = false;
        return true;
      default:
        return false;
    }
  }

  /**
   * Returns if the selected color is "adjusting"
   *
   * @return true if the selected color is adjusting, false otherwise
   */
  public boolean getValueIsAdjusting() {
    return this.valueIsAdjusting;
  }

  /**
   * Adds a change listener
   *
   * @param listener The listener
   */
  public void addChangeListener(ChangeListener listener) {
    this.listeners.push(listener);
  }

  protected void onchange(boolean b) {
    this.valueIsAdjusting = b;
    ChangeEvent event = new ChangeEvent();

    this.listeners.forEach(listener -> {
      if ($typeof(listener, "function")) {
        listener.$apply(event);
      } else {
        listener.stateChanged(event);
      }
    });
  }

  /**
   * Returns the selected color
   *
   * @return The selected color
   */
  public abstract Color getSelectedColor();

  /**
   * Sets the selected color
   *
   * @param color The selected color
   */
  public abstract void setSelectedColor(Color color);

  private String getStrokeStyle(String style) {
    return style;
  }

  private Union4<String, CanvasGradient, CanvasPattern, java.lang.Object> $getStrokeStyle(String style) {
    return null;
  }
}
