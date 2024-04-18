package javascript.swing;

/**
 * The javax.swing.SpinnerNumberModel clone
 *
 * @author gianpiero.diblasi
 */
public class SpinnerNumberModel {

  private final double value;
  private final double minimum;
  private final double maximum;
  private final double stepSize;

  public SpinnerNumberModel(double value, double minimum, double maximum, double stepSize) {
    this.value = value;
    this.minimum = minimum;
    this.maximum = maximum;
    this.stepSize = stepSize;
  }

  /**
   * Sets the spinner managed by this model
   * @param spinner The spinner
   */
  public void setJSSpinner(JSSpinner spinner) {
    spinner.element.setAttribute("value", "" + this.value);
    spinner.element.setAttribute("max", "" + this.maximum);
    spinner.element.setAttribute("min", "" + this.minimum);
    spinner.element.setAttribute("step", "" + this.stepSize);
  }
}
