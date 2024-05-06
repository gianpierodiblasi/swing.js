package javascript.swing;

import static def.dom.Globals.console;
import java.awt.BorderLayout;
import javascript.SwingJS;
import javascript.swing.colorchooser.JSColorCMYKPanel;
import javascript.swing.colorchooser.JSColorHSLPanel;
import javascript.swing.colorchooser.JSColorHSVPanel;
import javascript.swing.colorchooser.JSColorMiniSwatchesPanel;
import javascript.swing.colorchooser.JSColorRGBPanel;
import javascript.swing.colorchooser.JSColorSwatchesPanel;
import javascript.swing.colorchooser.JSColorYUVPanel;
import javax.swing.JCheckBox;
import javax.swing.JPanel;

/**
 *
 * @author gianpiero.diblasi
 */
@SuppressWarnings("serial")
public class TestJFrame9 extends javax.swing.JFrame {

  /**
   * Creates new form TestFrame3
   */
  public TestJFrame9() {
    super();
    this.initComponents();
    this.postInitComponents();
  }

  private void postInitComponents() {
    JSColorMiniSwatchesPanel miniSwatchesPanel = new JSColorMiniSwatchesPanel();
    ((JSPanel) SwingJS.convert(this.jPanel2)).add(miniSwatchesPanel, null);

    JSColorSwatchesPanel swatchesPanel = new JSColorSwatchesPanel();
    ((JSPanel) SwingJS.convert(this.jPanel2)).add(swatchesPanel, null);

    JSColorHSVPanel hsvPanel = new JSColorHSVPanel();
    ((JSPanel) SwingJS.convert(this.jPanel2)).add(hsvPanel, null);

    JSColorHSLPanel hslPanel = new JSColorHSLPanel();
    ((JSPanel) SwingJS.convert(this.jPanel2)).add(hslPanel, null);

    JSColorRGBPanel rgbPanel = new JSColorRGBPanel();
    ((JSPanel) SwingJS.convert(this.jPanel2)).add(rgbPanel, null);

    JSColorCMYKPanel cmykPanel = new JSColorCMYKPanel();
    ((JSPanel) SwingJS.convert(this.jPanel2)).add(cmykPanel, null);

    JSColorYUVPanel yuvPanel = new JSColorYUVPanel();
    ((JSPanel) SwingJS.convert(this.jPanel2)).add(yuvPanel, null);

    miniSwatchesPanel.addActionListener(event -> {
      console.log(miniSwatchesPanel.getSelectedColor().getRGB_HEX());

      hsvPanel.setSelectedColor(miniSwatchesPanel.getSelectedColor());
      hslPanel.setSelectedColor(miniSwatchesPanel.getSelectedColor());
      rgbPanel.setSelectedColor(miniSwatchesPanel.getSelectedColor());
      cmykPanel.setSelectedColor(miniSwatchesPanel.getSelectedColor());
      yuvPanel.setSelectedColor(miniSwatchesPanel.getSelectedColor());
    });

    swatchesPanel.addActionListener(event -> {
      console.log(swatchesPanel.getSelectedColor().getRGB_HEX());

      hsvPanel.setSelectedColor(swatchesPanel.getSelectedColor());
      hslPanel.setSelectedColor(swatchesPanel.getSelectedColor());
      rgbPanel.setSelectedColor(swatchesPanel.getSelectedColor());
      cmykPanel.setSelectedColor(swatchesPanel.getSelectedColor());
      yuvPanel.setSelectedColor(swatchesPanel.getSelectedColor());
    });

    hsvPanel.addChangeListener(event -> {
      if (this.jCheckBox1.isSelected() || !hsvPanel.getValueIsAdjusting()) {
        console.log(hsvPanel.getSelectedColor().getRGB_HEX());

        hslPanel.setSelectedColor(hsvPanel.getSelectedColor());
        rgbPanel.setSelectedColor(hsvPanel.getSelectedColor());
        cmykPanel.setSelectedColor(hsvPanel.getSelectedColor());
        yuvPanel.setSelectedColor(hsvPanel.getSelectedColor());
      }
    });

    hslPanel.addChangeListener(event -> {
      if (this.jCheckBox1.isSelected() || !hslPanel.getValueIsAdjusting()) {
        console.log(hslPanel.getSelectedColor().getRGB_HEX());

        hsvPanel.setSelectedColor(hslPanel.getSelectedColor());
        rgbPanel.setSelectedColor(hslPanel.getSelectedColor());
        cmykPanel.setSelectedColor(hslPanel.getSelectedColor());
        yuvPanel.setSelectedColor(hslPanel.getSelectedColor());
      }
    });

    rgbPanel.addChangeListener(event -> {
      if (this.jCheckBox1.isSelected() || !rgbPanel.getValueIsAdjusting()) {
        console.log(rgbPanel.getSelectedColor().getRGB_HEX());

        hsvPanel.setSelectedColor(rgbPanel.getSelectedColor());
        hslPanel.setSelectedColor(rgbPanel.getSelectedColor());
        cmykPanel.setSelectedColor(rgbPanel.getSelectedColor());
        yuvPanel.setSelectedColor(rgbPanel.getSelectedColor());
      }
    });

    cmykPanel.addChangeListener(event -> {
      if (this.jCheckBox1.isSelected() || !cmykPanel.getValueIsAdjusting()) {
        console.log(cmykPanel.getSelectedColor().getRGB_HEX());

        hsvPanel.setSelectedColor(cmykPanel.getSelectedColor());
        hslPanel.setSelectedColor(cmykPanel.getSelectedColor());
        rgbPanel.setSelectedColor(cmykPanel.getSelectedColor());
        yuvPanel.setSelectedColor(cmykPanel.getSelectedColor());
      }
    });
    
    yuvPanel.addChangeListener(event -> {
      if (this.jCheckBox1.isSelected() || !yuvPanel.getValueIsAdjusting()) {
        console.log(yuvPanel.getSelectedColor().getRGB_HEX());

        hsvPanel.setSelectedColor(yuvPanel.getSelectedColor());
        hslPanel.setSelectedColor(yuvPanel.getSelectedColor());
        rgbPanel.setSelectedColor(yuvPanel.getSelectedColor());
        cmykPanel.setSelectedColor(yuvPanel.getSelectedColor());
      }
    });
  }

  /**
   * This method is called from within the constructor to initialize the form.
   * WARNING: Do NOT modify this code. The content of this method is always
   * regenerated by the Form Editor.
   */
  @SuppressWarnings("unchecked")
  // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
  private void initComponents() {

    jPanel1 = new JPanel();
    jCheckBox1 = new JCheckBox();
    jPanel2 = new JPanel();

    setTitle("Test Color Chooser");

    jCheckBox1.setSelected(true);
    jCheckBox1.setText("realtime");
    jPanel1.add(jCheckBox1);

    getContentPane().add(jPanel1, BorderLayout.PAGE_START);
    getContentPane().add(jPanel2, BorderLayout.CENTER);
  }// </editor-fold>//GEN-END:initComponents

  // Variables declaration - do not modify//GEN-BEGIN:variables
  private JCheckBox jCheckBox1;
  private JPanel jPanel1;
  private JPanel jPanel2;
  // End of variables declaration//GEN-END:variables
}
