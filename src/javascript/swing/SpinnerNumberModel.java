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

  /**
   * Creates the object
   *
   * @param value The value
   * @param minimum The minimum value
   * @param maximum The maximum value
   * @param stepSize The step
   */
  public SpinnerNumberModel(double value, double minimum, double maximum, double stepSize) {
    this.value = value;
    this.minimum = minimum;
    this.maximum = maximum;
    this.stepSize = stepSize;
  }

  /**
   * Sets the spinner managed by this model
   *
   * @param spinner The spinner
   */
  public void setJSSpinner(JSSpinner spinner) {
    spinner.setChildAttributeByQuery("input", "value", "" + this.value);
    spinner.setChildAttributeByQuery("input", "max", "" + this.maximum);
    spinner.setChildAttributeByQuery("input", "min", "" + this.minimum);
    spinner.setChildAttributeByQuery("input", "step", "" + this.stepSize);
  }
}
