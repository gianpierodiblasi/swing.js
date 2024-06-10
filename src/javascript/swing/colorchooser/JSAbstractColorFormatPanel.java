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

  /**
   * The rendering context of the square
   */
  protected final $CanvasRenderingContext2D ctxSquare = this.square.invoke("getContext('2d')");

  private final JSComponent rect = new JSComponent(document.createElement("canvas"));

  /**
   * The rendering context of the rect
   */
  protected final $CanvasRenderingContext2D ctxRect = this.rect.invoke("getContext('2d')");

  private final Array<ChangeListener> listeners = new Array<>();

  private boolean squareDown;
  private boolean rectDown;
  private boolean valueIsAdjusting;

  /**
   * The square size
   */
  protected static final int SQUARE_SIZE = 180;

  /**
   * the rect width
   */
  protected static final int RECT_WIDTH = 25;

  /**
   * The rect height
   */
  protected static final int RECT_HEIGHT = 180;

  /**
   * Creates the object
   */
  protected JSAbstractColorFormatPanel() {
    super();
    this.setLayout(new GridBagLayout());

    this.square.setProperty("width", "" + JSAbstractColorFormatPanel.SQUARE_SIZE);
    this.square.setProperty("height", "" + JSAbstractColorFormatPanel.SQUARE_SIZE);
    this.square.getStyle().cursor = "pointer";
    this.square.addEventListener("mouseenter", event -> this.squareEvent((MouseEvent) event, "enter"));
    this.square.addEventListener("mouseleave", event -> this.squareEvent((MouseEvent) event, "leave"));
    this.square.addEventListener("mousedown", event -> this.squareEvent((MouseEvent) event, "down"));
    this.square.addEventListener("mousemove", event -> this.squareEvent((MouseEvent) event, "move"));
    this.square.addEventListener("mouseup", event -> this.squareEvent((MouseEvent) event, "up"));
    this.add(this.square, new GBC(0, 0).h(7).a(GBC.NORTH).i(0, 0, 0, 5));

    this.rect.setProperty("width", "" + JSAbstractColorFormatPanel.RECT_WIDTH);
    this.rect.setProperty("height", "" + JSAbstractColorFormatPanel.RECT_HEIGHT);
    this.rect.getStyle().cursor = "pointer";
    this.rect.addEventListener("mouseenter", event -> this.rectEvent((MouseEvent) event, "enter"));
    this.rect.addEventListener("mouseleave", event -> this.rectEvent((MouseEvent) event, "leave"));
    this.rect.addEventListener("mousedown", event -> this.rectEvent((MouseEvent) event, "down"));
    this.rect.addEventListener("mousemove", event -> this.rectEvent((MouseEvent) event, "move"));
    this.rect.addEventListener("mouseup", event -> this.rectEvent((MouseEvent) event, "up"));
    this.add(this.rect, new GBC(1, 0).h(7).a(GBC.NORTH).i(0, 0, 0, 5));
  }

  /**
   * Adds a radio button
   *
   * @param radio The radio button
   * @param text The text
   * @param selected true to select the radio button, false otherwise
   * @param gridx The grid x
   * @param gridy The grid y
   */
  protected void addRadio(JSRadioButton radio, String text, boolean selected, int gridx, int gridy) {
    this.buttonGroup.add(radio);

    radio.setText(text);
    radio.setSelected(selected);
    radio.addActionListener(event -> this.drawAll());
    this.add(radio, new GBC(gridx, gridy).a(GBC.WEST));
  }

  /**
   * Adds a slider
   *
   * @param slider The slider
   * @param spinner The connected spinner
   * @param value The value
   * @param max The max value
   * @param gridx The grid x
   * @param gridy The grid y
   */
  protected void addSlider(JSSlider slider, JSSpinner spinner, int value, int max, int gridx, int gridy) {
    slider.setValue(value);
    slider.setMaximum(max);
    slider.getStyle().minWidth = "20rem";
    slider.addChangeListener(event -> this.sliderToSpinner(slider, spinner));
    this.add(slider, new GBC(gridx, gridy).w(2).f(GBC.HORIZONTAL).wx(1));
  }

  /**
   * Adds a spinner
   *
   * @param spinner The spinner
   * @param slider The connected slider
   * @param value The value
   * @param max The max value
   * @param gridx The grid x
   * @param gridy The grid y
   */
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

  /**
   * Draws all objects
   */
  protected void drawAll() {
    this.drawSquare();
    this.drawSquareSelector();
    this.drawRect();
    this.drawRectSelector();
  }

  /**
   * Draws the square
   */
  protected abstract void drawSquare();

  /**
   * Draws the square selector
   */
  protected abstract void drawSquareSelector();

  /**
   * Draws the circle selector
   *
   * @param x The x-axis coordinate
   * @param y The y-axis coordinate
   */
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

  /**
   * Draws the rect
   */
  protected abstract void drawRect();

  /**
   * Draws the rect selector
   */
  protected abstract void drawRectSelector();

  /**
   * Draws the line
   *
   * @param y The y-axis coordinate
   */
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

  /**
   * Manages a mouse event on the square
   *
   * @param event The mouse event
   * @param type The event type
   */
  protected abstract void squareEvent(MouseEvent event, String type);

  /**
   * Checks if a mouse event can be managed on the square
   *
   * @param event The mouse event
   * @param type The event type
   * @return true if the mouse event can be managed on the square, false
   * otherwise
   */
  protected boolean canDoItSquare(MouseEvent event, String type) {
    switch (type) {
      case "enter":
        this.squareDown = event.buttons == 1;
        return this.squareDown;
      case "down":
        this.squareDown = true;
        return this.squareDown;
      case "move":
        return this.squareDown;
      case "up":
        this.squareDown = false;
        return !this.squareDown;
      case "leave":
        this.squareDown = false;
        return this.squareDown;
      default:
        return false;
    }
  }

  /**
   * Manages a mouse event on the rect
   *
   * @param event The mouse event
   * @param type The event type
   */
  protected abstract void rectEvent(MouseEvent event, String type);

  /**
   * Checks if a mouse event can be managed on the rect
   *
   * @param event The mouse event
   * @param type The event type
   * @return true if the mouse event can be managed on the square, false
   * otherwise
   */
  protected boolean canDoItRect(MouseEvent event, String type) {
    switch (type) {
      case "enter":
        this.rectDown = event.buttons == 1;
        return this.rectDown;
      case "down":
        this.rectDown = true;
        return this.rectDown;
      case "move":
        return this.rectDown;
      case "up":
        this.rectDown = false;
        return !this.rectDown;
      case "leave":
        this.rectDown = false;
        return this.rectDown;
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

  /**
   * To call to invoke a change event
   *
   * @param b true if the value is adjusting, false otherwise
   */
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
