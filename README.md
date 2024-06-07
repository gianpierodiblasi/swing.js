# swing.js
An ES6 implementation of the Java Swing API (WORK IN PROGRESS!)

## Description
![swing-js.png](https://github.com/gianpierodiblasi/swing.js/blob/master/readme/swing-js.png?raw=true)

swing.js is my personal attempt to bring the power of Java Swing API to the web. swing.js is used in my other
projects so its development follows my needs in those projects. As a result, only a very small fraction of all
Java Swing specifications are correctly handled.

swing.js is ***NOT*** a production ready tool; if you need a professional Java Swing replacement for the web then
here is a list of options:
- JS Swing - [link](https://jsswing.sourceforge.net/)
- SwingJS - [link](https://chemapps.stolaf.edu/swingjs/site/swingjs/examples/about.html)
- j4ts-awt-swing - [link](https://github.com/j4ts/j4ts-awt-swing)
- Webswing - [link](https://www.webswing.org/en)

## Why JavaScript?
I'm a Java developer, I love Java, I love NetBeans, I love everything in Java, but sadly Java for desktop (and browser) is a mess.
On the other hand it is very difficult for an old style Java Swing developer to project UI for the web.
So, I decided to rewrite Java Swing in JavaScript (to be more precise in ES6).
Only a very limited portion of the Java Swing API has been rewritten (the portion I need for...) and for some objects new methods have
been introduced to power up them (see the [documentation](https://gianpierodiblasi.github.io/swing.js/docs/index.html) and
[test](https://gianpierodiblasi.github.io/swing.js/html-test/javascript/swing/TestJFrame.html) for major details).
To distinguish "native" methods and new methods see the [documentation](https://gianpierodiblasi.github.io/swing.js/docs/index.html),
if a method is a clone of a corresponding native method then it is documented as follows
```java
/**
 * Clone of javax.swing.<class>.<method>
 *
 */
```

If a method is not available in the original class then a complete documentation is available.

swing.js allows to customize some UI parameters such as fonts and colors, and some components provide special methods to customize the UI
(see the [documentation](https://gianpierodiblasi.github.io/swing.js/docs/index.html) and [test](https://gianpierodiblasi.github.io/swing.js/html-test/javascript/swing/TestJFrame.html)
for major details).

## How To Use
swing.js can be used in two different ways: as a JavaScript library or as a Java library.

### swing.js as a JavaScript Library
If you want to use swing.js as a JavaScript library then simply add it to your project and start to write your UIs in JavaScript with a Java Swing-like approach.
To do this, reference the *swing-bundle-\<version\>.js* and *swing-bundle-\<version\>.css* files (or the corresponding minified versions) available in the build folder.

### swing.js as a Java Library
If you want to use swing.js as a Java library then add the *swing-bundle-\<version\>.jar* file to your classpath, write your Java code and then transpille it by means of (for example)
[josetta](https://github.com/gianpierodiblasi/josetta) (swing.js itself has been written in Java and transpilled in JavaScript by using [josetta](https://github.com/gianpierodiblasi/josetta)).
If you want you can also create your UIs by means of a visual IDE (for example the [NetBeans](https://netbeans.apache.org/) GUI Builder, codename Matisse).
The code provided in the test folder shows some use examples (the resulting output can be tested in the [test](https://gianpierodiblasi.github.io/swing.js/html-test/javascript/swing/TestJFrame.html)).

## Translations
Currently only the English and Italian languages are managed.

## Test
swing.js has been tested on:
- Windows
  - chrome 124
  - edge 124
  - firefox 125 (JSFilePicker is not supported)
- Android
  - chrome 124 (JSFilePicker is not supported)
  - edge 124 (JSFilePicker is not supported)

## Dependencies
- josetta - [link](https://github.com/gianpierodiblasi/josetta)
- jsweet-core - [link](https://repository.jsweet.org/artifactory/libs-release-local/org/jsweet/jsweet-core/)

## Build
swing.js is developed in NetBeans as an ANT project. In order to perform a build you can use [ANT](https://ant.apache.org/), [NetBeans](https://netbeans.apache.org/) or any IDE compatible with ANT.

## Donate
If you would like to support the development of this and/or other projects, consider making a [donation](https://www.paypal.com/donate/?business=HCDX9BAEYDF4C&no_recurring=0&currency_code=EUR).