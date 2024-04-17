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

   setJSpinner(spinner) {
    spinner.element.setAttribute("value", "" + this.value);
    spinner.element.setAttribute("max", "" + this.maximum);
    spinner.element.setAttribute("min", "" + this.minimum);
    spinner.element.setAttribute("step", "" + this.stepSize);
  }
}
