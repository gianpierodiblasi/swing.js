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
    spinner.setAttribute("value", "" + this.value);
    spinner.setAttribute("max", "" + this.maximum);
    spinner.setAttribute("min", "" + this.minimum);
    spinner.setAttribute("step", "" + this.stepSize);
  }
}
