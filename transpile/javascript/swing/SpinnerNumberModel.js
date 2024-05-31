/**
 * The javax.swing.SpinnerNumberModel clone
 *
 * @author gianpiero.diblasi
 */
class SpinnerNumberModel {

   value = 0.0;

   minimum = 0.0;

   maximum = 0.0;

   stepSize = 0.0;

  /**
   * Creates the object
   *
   * @param value The value
   * @param minimum The minimum value
   * @param maximum The maximum value
   * @param stepSize The step
   */
  constructor(value, minimum, maximum, stepSize) {
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
   setJSSpinner(spinner) {
    spinner.setChildAttributeByQuery("input", "value", "" + this.value);
    spinner.setChildAttributeByQuery("input", "max", "" + this.maximum);
    spinner.setChildAttributeByQuery("input", "min", "" + this.minimum);
    spinner.setChildAttributeByQuery("input", "step", "" + this.stepSize);
  }
}
