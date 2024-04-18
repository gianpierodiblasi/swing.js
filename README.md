# swing.js
An ES6 implementation of the Java Swing API (WORK IN PROGRESS!)

## Description
![swing-js.png](https://github.com/gianpierodiblasi/swing.js/blob/master/readme/swing-js.png?raw=true)

NOTE:
- spiegare come funziona il PLAF
<!-- ### Special Use Cases
There are some special use cases to perform typical JS/CSS tasks by means of Java-like code:
- class *JComponent*
  - methods
    - *setName*: this method sets the name of the component to the specified string, the name is used also as ID of the HTML element
    - *getName*: this method gets the name of the component, the name is also the ID of the HTML element
    - *putClientProperty*: in general this method adds an arbitrary key/value "client property" to this component, with the following exceptions
      1. if *key* = "class-list" (or the constant value *JComponent.CLASS_LIST*) then this method throws an exception (the key is a reserved word and cannot be used)
      2. if *key* = "add-class-list" (or the constant value *JComponent.ADD_CLASS_LIST*) then this method adds the *value* parameter to the class list of the HTML element
      3. if *key* = "remove-class-list" (or the constant value *JComponent.REMOVE_CLASS_LIST*) then this method removes the *value* parameter from the class list of the HTML element
      4. if *key* = "toggle-class-list" (or the constant value *JComponent.TOGGLE_CLASS_LIST*) then this method toggles the *value* parameter in the class list of the HTML element (if *value* is set removes it, otherwise adds it)
    - *getClientProperty*: in general this method returns the value of the property with the specified key, but if *key* = "class-list" (or the constant value *JComponent.CLASS_LIST*) then this method returns the class list of the HTML element
- class *JComboBox*
  - methods
    - *putClientProperty*: in general this method calls the *super.putClientProperty* implementation, with the following exception: if *key* = "model-and-renderer" (or the constant value *giada.swing.JComboBox.MODEL_AND_RENDERER*) then this method sets an object able to model and render the JComboBox
    - *getClientProperty*: in general this method calls the *super.getClientProperty* implementation, with the following exception: if *key* = "model-and-renderer" (or the constant value *giada.swing.JComboBox.MODEL_AND_RENDERER*) then this method gets an object able to model and render the JComboBox
  - model and renderer: to model and render the JComboBox, do not use the *javax.swing* classes and in alternative use a class extending *giada.swing.MnR.AbstractComboBoxModelAndRenderer* (for example *giada.swing.MnR.DefaultComboBoxModelAndRenderer*);
    the object has to be set/get by means of the methods *putClientProperty*/*getClientProperty* as described above
- class *JSlider*
  - methods
    - *putClientProperty*: in general this method calls the *super.putClientProperty* implementation, with the following exception: if *key* = "model-and-renderer" (or the constant value *giada.swing.JSlider.MODEL_AND_RENDERER*) then this method sets an object able to model and render the JSlider
    - *getClientProperty*: in general this method calls the *super.getClientProperty* implementation, with the following exception: if *key* = "model-and-renderer" (or the constant value *giada.swing.JSlider.MODEL_AND_RENDERER*) then this method gets an object able to model and render the JSlider
  - model and renderer: usually a slider is used to set numeric value, but if a class extending *giada.swing.MnR.AbstractSliderModelAndRenderer* (for example *giada.swing.MnR.DefaultSliderModelAndRenderer*) is used, then a custom modelling and rendering is obtained;
    the object has to be set/get by means of the methods *putClientProperty*/*getClientProperty* as described above. When a renderer is set the following methods have no effect:
    - *setMaximum*
    - *setMinimum*
    - *setMajorTickSpacing*
    - *setPaintTicks*
    - *setPaintLabels*-->

## Dependencies
- josetta - [link](https://github.com/gianpierodiblasi/josetta)
- jsweet-core - [link](https://repository.jsweet.org/artifactory/libs-release-local/org/jsweet/jsweet-core/)

## Build
swing.js is developed in NetBeans as an ANT project. In order to perform a build you can use ANT [link](https://ant.apache.org/), NetBeans [link](https://netbeans.apache.org/) or any IDE compatible with ANT.

## Donate
If you would like to support the development of this and/or other projects, consider making a [donation](https://www.paypal.com/donate/?business=HCDX9BAEYDF4C&no_recurring=0&currency_code=EUR).