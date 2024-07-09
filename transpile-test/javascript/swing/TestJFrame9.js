/**
 * @author gianpiero.diblasi
 */
class TestJFrame9 extends JFrame {

  /**
   * Creates new form TestFrame3
   */
  constructor() {
    super();
    this.initComponents();
    this.postInitComponents();
  }

   postInitComponents() {
    for (let i = 0; i < 100; i++) {
      Color.pushHistory(new Color(parseInt(255 * Math.random()), parseInt(255 * Math.random()), parseInt(255 * Math.random()), parseInt(255 * Math.random())));
    }
    let miniSwatchesPanel = new JSColorMiniSwatchesPanel();
    (SwingJS.convert(this.jPanel2)).add(miniSwatchesPanel, null);
    let swatchesPanel = new JSColorSwatchesPanel();
    (SwingJS.convert(this.jPanel2)).add(swatchesPanel, null);
    let hsvPanel = new JSColorHSVPanel();
    (SwingJS.convert(this.jPanel2)).add(hsvPanel, null);
    let hslPanel = new JSColorHSLPanel();
    (SwingJS.convert(this.jPanel2)).add(hslPanel, null);
    let rgbPanel = new JSColorRGBPanel();
    (SwingJS.convert(this.jPanel2)).add(rgbPanel, null);
    let cmykPanel = new JSColorCMYKPanel();
    (SwingJS.convert(this.jPanel2)).add(cmykPanel, null);
    let yuvPanel = new JSColorYUVPanel();
    (SwingJS.convert(this.jPanel2)).add(yuvPanel, null);
    let historyPanel = new JSColorHistoryPanel();
    historyPanel.getStyle().maxHeight = "200px";
    (SwingJS.convert(this.jPanel2)).add(historyPanel, null);
    miniSwatchesPanel.addActionListener(event => {
      console.log(miniSwatchesPanel.getSelectedColor().getRGB_HEX());
      hsvPanel.setSelectedColor(miniSwatchesPanel.getSelectedColor());
      hslPanel.setSelectedColor(miniSwatchesPanel.getSelectedColor());
      rgbPanel.setSelectedColor(miniSwatchesPanel.getSelectedColor());
      cmykPanel.setSelectedColor(miniSwatchesPanel.getSelectedColor());
      yuvPanel.setSelectedColor(miniSwatchesPanel.getSelectedColor());
    });
    swatchesPanel.addActionListener(event => {
      console.log(swatchesPanel.getSelectedColor().getRGB_HEX());
      hsvPanel.setSelectedColor(swatchesPanel.getSelectedColor());
      hslPanel.setSelectedColor(swatchesPanel.getSelectedColor());
      rgbPanel.setSelectedColor(swatchesPanel.getSelectedColor());
      cmykPanel.setSelectedColor(swatchesPanel.getSelectedColor());
      yuvPanel.setSelectedColor(swatchesPanel.getSelectedColor());
    });
    hsvPanel.addChangeListener(event => {
      if (this.jCheckBox1.isSelected() || !hsvPanel.getValueIsAdjusting()) {
        console.log(hsvPanel.getSelectedColor().getRGB_HEX());
        hslPanel.setSelectedColor(hsvPanel.getSelectedColor());
        rgbPanel.setSelectedColor(hsvPanel.getSelectedColor());
        cmykPanel.setSelectedColor(hsvPanel.getSelectedColor());
        yuvPanel.setSelectedColor(hsvPanel.getSelectedColor());
      }
    });
    hslPanel.addChangeListener(event => {
      if (this.jCheckBox1.isSelected() || !hslPanel.getValueIsAdjusting()) {
        console.log(hslPanel.getSelectedColor().getRGB_HEX());
        hsvPanel.setSelectedColor(hslPanel.getSelectedColor());
        rgbPanel.setSelectedColor(hslPanel.getSelectedColor());
        cmykPanel.setSelectedColor(hslPanel.getSelectedColor());
        yuvPanel.setSelectedColor(hslPanel.getSelectedColor());
      }
    });
    rgbPanel.addChangeListener(event => {
      if (this.jCheckBox1.isSelected() || !rgbPanel.getValueIsAdjusting()) {
        console.log(rgbPanel.getSelectedColor().getRGB_HEX());
        hsvPanel.setSelectedColor(rgbPanel.getSelectedColor());
        hslPanel.setSelectedColor(rgbPanel.getSelectedColor());
        cmykPanel.setSelectedColor(rgbPanel.getSelectedColor());
        yuvPanel.setSelectedColor(rgbPanel.getSelectedColor());
      }
    });
    cmykPanel.addChangeListener(event => {
      if (this.jCheckBox1.isSelected() || !cmykPanel.getValueIsAdjusting()) {
        console.log(cmykPanel.getSelectedColor().getRGB_HEX());
        hsvPanel.setSelectedColor(cmykPanel.getSelectedColor());
        hslPanel.setSelectedColor(cmykPanel.getSelectedColor());
        rgbPanel.setSelectedColor(cmykPanel.getSelectedColor());
        yuvPanel.setSelectedColor(cmykPanel.getSelectedColor());
      }
    });
    yuvPanel.addChangeListener(event => {
      if (this.jCheckBox1.isSelected() || !yuvPanel.getValueIsAdjusting()) {
        console.log(yuvPanel.getSelectedColor().getRGB_HEX());
        hsvPanel.setSelectedColor(yuvPanel.getSelectedColor());
        hslPanel.setSelectedColor(yuvPanel.getSelectedColor());
        rgbPanel.setSelectedColor(yuvPanel.getSelectedColor());
        cmykPanel.setSelectedColor(yuvPanel.getSelectedColor());
      }
    });
    historyPanel.addActionListener(event => {
      console.log(historyPanel.getSelectedColor().getRGB_HEX());
      hsvPanel.setSelectedColor(historyPanel.getSelectedColor());
      hslPanel.setSelectedColor(historyPanel.getSelectedColor());
      rgbPanel.setSelectedColor(historyPanel.getSelectedColor());
      cmykPanel.setSelectedColor(historyPanel.getSelectedColor());
      yuvPanel.setSelectedColor(historyPanel.getSelectedColor());
    });
  }

  /**
   * This method is called from within the constructor to initialize the form.
   * WARNING: Do NOT modify this code. The content of this method is always
   * regenerated by the Form Editor.
   */
   initComponents() {
    this.jPanel1 = new JPanel();let jPanel1 = this.jPanel1;
    this.jCheckBox1 = new JCheckBox();let jCheckBox1 = this.jCheckBox1;
    this.jPanel2 = new JPanel();let jPanel2 = this.jPanel2;
    this.setTitle("Test Color Chooser");
    jCheckBox1.setSelected(true);
    jCheckBox1.setText("realtime");
    jPanel1.add(jCheckBox1);
    this.getContentPane().add(jPanel1, BorderLayout.PAGE_START);
    this.getContentPane().add(jPanel2, BorderLayout.CENTER);
  }

  // </editor-fold>//GEN-END:initComponents
  // Variables declaration - do not modify//GEN-BEGIN:variables
   jCheckBox1 = null;

   jPanel1 = null;

   jPanel2 = null;
  // End of variables declaration//GEN-END:variables
}
