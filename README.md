# swing.js
An ES6 implementation of the Java Swing API (WORK IN PROGRESS!)

## Description
![swing-js.png](https://github.com/gianpierodiblasi/swing.js/blob/master/readme/swing-js.png?raw=true)

swing.js is my personal attempt to bring the power of Java Swing API to the web. swing.js is used in my other
projects so its development follows my needs in those projects. As a result, only a very small fraction of all
Java Swing specifications are correctly handled.

swing.js is ***NOT*** a production ready tool; if you need a professional Java Swing replacements for the web then
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
been introduced to power up them (see the [documentation]() for major details).

swing.js follows the same philosophy introduced in Java Swing about the so called pluggable Look and Feel (PLAF); a Look and Feel completely changes the
visual aspect of all components can be use used to highly customize the UI.
PLAF has to be set before the creation of the first component (this is mandatory) by means of the following code snippet
```java
LookAndFeel.CURRENT = ...;
```
Two PLAF are available in swing.js (but others can be easily added):
- DefaulLookAndFeel: it is a very basic PLAF without any customization
- BootstapLookAndFeel: it is a PLAF based on [Bootstrap](https://getbootstrap.com/)

Some components provide special methods to customize the UI (switch, toggle, etc.) but the result is highly related to the used PLAF.

## How To Use

## Dependencies
- josetta - [link](https://github.com/gianpierodiblasi/josetta)
- jsweet-core - [link](https://repository.jsweet.org/artifactory/libs-release-local/org/jsweet/jsweet-core/)

## Build
swing.js is developed in NetBeans as an ANT project. In order to perform a build you can use ANT [link](https://ant.apache.org/), NetBeans [link](https://netbeans.apache.org/) or any IDE compatible with ANT.

## Donate
If you would like to support the development of this and/or other projects, consider making a [donation](https://www.paypal.com/donate/?business=HCDX9BAEYDF4C&no_recurring=0&currency_code=EUR).