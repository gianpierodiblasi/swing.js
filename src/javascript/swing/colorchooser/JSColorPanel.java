package javascript.swing.colorchooser;

import static def.dom.Globals.document;
import def.js.Array;
import javascript.awt.Color;
import javascript.awt.GBC;
import javascript.awt.GridBagLayout;
import javascript.swing.JSComponent;
import javascript.swing.JSLabel;
import javascript.swing.JSPanel;
import javascript.swing.JSSlider;
import javascript.swing.JSSpinner;
import javascript.swing.JSTabbedPane;
import javascript.swing.SpinnerNumberModel;
import javascript.swing.event.ChangeEvent;
import javascript.swing.event.ChangeListener;
import javascript.util.Translations;
import static simulation.js.$Globals.$exists;
import static simulation.js.$Globals.$typeof;

/**
 * The panel to show colors
 *
 * @author gianpiero.diblasi
 */
public class JSColorPanel extends JSPanel {

  private final JSTabbedPane pane = new JSTabbedPane();
  private final JSColorSwatchesPanel swatchesPanel = new JSColorSwatchesPanel();
  private final JSColorHSVPanel hsvPanel = new JSColorHSVPanel();
  private final JSColorHSLPanel hslPanel = new JSColorHSLPanel();
  private final JSColorYUVPanel yuvPanel = new JSColorYUVPanel();
  private final JSColorRGBPanel rgbPanel = new JSColorRGBPanel();
  private final JSColorCMYKPanel cmykPanel = new JSColorCMYKPanel();
  private final Array<JSAbstractColorExtraTabPanel> extraTabs = new Array<>();

  private final JSLabel opacity = new JSLabel();
  private final JSSlider opacitySlider = new JSSlider();
  private final JSSpinner opacitySpinner = new JSSpinner();
  private final JSComponent container = new JSComponent(document.createElement("div"));
  private final JSComponent component = new JSComponent(document.createElement("div"));
  private final JSComponent componentOpacity = new JSComponent(document.createElement("div"));

  private final Array<ChangeListener> listeners = new Array<>();

  private String currentTab;
  private boolean valueIsAdjusting;
  private boolean opacityVisible = true;

  /**
   * Creates the object
   */
  public JSColorPanel() {
    super();
    this.cssAddClass("jscolorpanel");
    this.setLayout(new GridBagLayout());

    this.addPanel(Translations.JSColorChooser_PALETTE, this.swatchesPanel);
    this.addPanel("HSV", this.hsvPanel);
    this.addPanel("HSL", this.hslPanel);
    this.addPanel("YUV", this.yuvPanel);
    this.addPanel("RGB", this.rgbPanel);
    this.addPanel("CMYK", this.cmykPanel);

    this.add(this.pane, new GBC(0, 0).w(2).f(GBC.BOTH));

    this.opacity.setText(Translations.JSColorChooser_OPACITY);
    this.add(this.opacity, new GBC(0, 1).a(GBC.WEST));

    this.opacitySlider.setMaximum(255);
    this.opacitySlider.setValue(255);
    this.opacitySlider.getStyle().minWidth = "20rem";
    this.opacitySlider.addChangeListener(event -> this.sliderToSpinner(this.opacitySlider, this.opacitySpinner));
    this.add(this.opacitySlider, new GBC(0, 2).w(2).f(GBC.HORIZONTAL));

    this.opacitySpinner.setModel(new SpinnerNumberModel(255, 0, 255, 1));
    this.opacitySpinner.getStyle().minWidth = "3rem";
    this.opacitySpinner.getChilStyleByQuery("input[type=number]").minWidth = "2.5rem";
    this.opacitySpinner.getChilStyleByQuery("input[type=number]").width = "2.5rem";
    this.opacitySpinner.addChangeListener(event -> this.spinnerToSlider(this.opacitySpinner, this.opacitySlider));
    this.add(this.opacitySpinner, new GBC(1, 1).a(GBC.EAST));

    JSLabel label = new JSLabel();
    label.setText(Translations.JSColorChooser_PREVIEW);
    this.add(label, new GBC(0, 3).a(GBC.WEST).i(5, 0, 2, 0));

    Color color = this.getSelectedColor();
    this.component.cssAddClass("jscolorpanel-preview-opaque");
    this.component.getStyle().backgroundColor = color.getRGB_String();

    this.componentOpacity.cssAddClass("jscolorpanel-preview-transparent");
    this.componentOpacity.getStyle().backgroundColor = color.getRGBA_String();

    this.container.cssAddClass("jscolorpanel-preview");
    this.container.appendChild(this.component);
    this.container.appendChild(this.componentOpacity);
    this.setContainerBorder(color);
    this.add(this.container, new GBC(0, 4).w(2).f(GBC.HORIZONTAL));

    this.swatchesPanel.addActionListener(event -> {
      Color c = this.swatchesPanel.getSelectedColor();
      this.hsvPanel.setSelectedColor(c);
      this.hslPanel.setSelectedColor(c);
      this.yuvPanel.setSelectedColor(c);
      this.rgbPanel.setSelectedColor(c);
      this.cmykPanel.setSelectedColor(c);
      this.extraTabs.forEach(tab -> tab.setSelectedColor(c));

      this.onchange(false);
    });

    this.addChangeListenerToPanel(this.hsvPanel, this.hslPanel, this.yuvPanel, this.rgbPanel, this.cmykPanel, "hsv");
    this.addChangeListenerToPanel(this.hslPanel, this.hsvPanel, this.yuvPanel, this.rgbPanel, this.cmykPanel, "hsl");
    this.addChangeListenerToPanel(this.yuvPanel, this.hsvPanel, this.hslPanel, this.rgbPanel, this.cmykPanel, "yuv");
    this.addChangeListenerToPanel(this.rgbPanel, this.hsvPanel, this.yuvPanel, this.hslPanel, this.cmykPanel, "rgb");
    this.addChangeListenerToPanel(this.cmykPanel, this.hsvPanel, this.yuvPanel, this.hslPanel, this.rgbPanel, "cmyk");
  }

  /**
   * Adds an extra tab
   *
   * @param title The title
   * @param panel The extra tab
   */
  public void addExtraTab(String title, JSAbstractColorExtraTabPanel panel) {
    this.extraTabs.push(panel);
    this.addPanel(title, panel);
    this.addChangeListenerToExtraPanel(this.extraTabs.length - 1);
  }

  private void addPanel(String title, JSComponent component) {
    JSPanel panel = new JSPanel();
    panel.add(component, null);
    this.pane.addTab(title, panel);
  }

  private void addChangeListenerToPanel(JSAbstractColorFormatPanel source, JSAbstractColorFormatPanel dest1, JSAbstractColorFormatPanel dest2, JSAbstractColorFormatPanel dest3, JSAbstractColorFormatPanel dest4, String currentTab) {
    source.addChangeListener(event -> {
      if (!source.getValueIsAdjusting()) {
        Color color = source.getSelectedColor();
        dest1.setSelectedColor(color);
        dest2.setSelectedColor(color);
        dest3.setSelectedColor(color);
        dest4.setSelectedColor(color);
        this.extraTabs.forEach(tab -> tab.setSelectedColor(color));
      }

      this.currentTab = currentTab;
      this.onchange(source.getValueIsAdjusting());
    });
  }

  private void addChangeListenerToExtraPanel(int index) {
    JSAbstractColorExtraTabPanel source = this.extraTabs.$get(index);
    source.addChangeListener(event -> {
      if (!source.getValueIsAdjusting()) {
        Color color = source.getSelectedColor();
        this.hsvPanel.setSelectedColor(color);
        this.hslPanel.setSelectedColor(color);
        this.yuvPanel.setSelectedColor(color);
        this.rgbPanel.setSelectedColor(color);
        this.cmykPanel.setSelectedColor(color);
        this.extraTabs.filter(tab -> tab != source).forEach(tab -> tab.setSelectedColor(color));
      }

      this.currentTab = "extratab" + index;
      this.onchange(source.getValueIsAdjusting());
    });
  }

  private void sliderToSpinner(JSSlider slider, JSSpinner spinner) {
    spinner.setValue(slider.getValue());
    this.onchange(slider.getValueIsAdjusting());
  }

  private void spinnerToSlider(JSSpinner spinner, JSSlider slider) {
    slider.setValue((int) spinner.getValue());
    this.onchange(spinner.getValueIsAdjusting());
  }

  /**
   * Returns the selected color
   *
   * @return The selected color
   */
  @SuppressWarnings({"StringEquality", "null"})
  public Color getSelectedColor() {
    Color color = null;
    for (int index = 0; index < this.extraTabs.length; index++) {
      if (this.currentTab == "extratab" + index) {
        color = this.extraTabs.$get(index).getSelectedColor();
      }
    }

    if (!$exists(color)) {
      switch (this.currentTab) {
        case "hsv":
          color = this.hsvPanel.getSelectedColor();
          break;
        case "hsl":
          color = this.hslPanel.getSelectedColor();
          break;
        case "yuv":
          color = this.yuvPanel.getSelectedColor();
          break;
        case "rgb":
        default:
          color = this.rgbPanel.getSelectedColor();
          break;
        case "cmyk":
          color = this.cmykPanel.getSelectedColor();
          break;
      }
    }

    return new Color(color.red, color.green, color.blue, this.opacityVisible ? this.opacitySlider.getValue() : 255);
  }

  /**
   * Sets the selected color
   *
   * @param color The selected color
   */
  public void setSelectedColor(Color color) {
    this.hsvPanel.setSelectedColor(color);
    this.hslPanel.setSelectedColor(color);
    this.yuvPanel.setSelectedColor(color);
    this.rgbPanel.setSelectedColor(color);
    this.cmykPanel.setSelectedColor(color);
    this.extraTabs.forEach(tab -> tab.setSelectedColor(color));

    if (this.opacityVisible) {
      this.opacitySlider.setValue(color.alpha);
      this.opacitySpinner.setValue(color.alpha);
    }

    Color c = this.getSelectedColor();
    this.component.getStyle().backgroundColor = c.getRGB_String();
    this.componentOpacity.getStyle().backgroundColor = c.getRGBA_String();
    this.setContainerBorder(c);
  }

  /**
   * Sets the visibility of the opacity selectors
   *
   * @param b true to make the opacity selectors visible, false otherwise
   */
  public void setOpacityVisible(boolean b) {
    this.opacityVisible = b;
    if (this.opacityVisible) {
      this.opacity.getStyle().display = "block";
      this.opacitySpinner.getStyle().display = "grid";
      this.opacitySlider.getStyle().display = "flex";
    } else {
      this.opacity.getStyle().display = "none";
      this.opacitySpinner.getStyle().display = "none";
      this.opacitySlider.getStyle().display = "none";
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

  private void onchange(boolean b) {
    Color color = this.getSelectedColor();
    this.component.getStyle().backgroundColor = color.getRGB_String();
    this.componentOpacity.getStyle().backgroundColor = color.getRGBA_String();
    this.setContainerBorder(color);

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

  private void setContainerBorder(Color color) {
    Array<Integer> rgb = new Array<>();
    Array<Double> hsl = new Array<>();
    rgb.$set(0, color.red);
    rgb.$set(1, color.green);
    rgb.$set(2, color.blue);
    Color.RGBtoHSL(rgb, hsl);
    this.container.getStyle().border = "1px solid " + (hsl.$get(2) > 0.5 ? color.darkened(0.1).getRGB_HEX() : color.lighted(0.1).getRGB_HEX());
  }
}
