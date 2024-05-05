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
    let miniSwatchesPanel = new JSColorMiniSwatchesPanel();
    miniSwatchesPanel.addActionListener(event => console.log(miniSwatchesPanel.getSelectedColor().getRGB_HEX()));
    (SwingJS.convert(this.jPanel2)).add(miniSwatchesPanel, null);
    let swatchesPanel = new JSColorSwatchesPanel();
    swatchesPanel.addActionListener(event => console.log(swatchesPanel.getSelectedColor().getRGB_HEX()));
    (SwingJS.convert(this.jPanel2)).add(swatchesPanel, null);
    let hsvPanel = new JSColorHSVPanel();
    hsvPanel.addChangeListener(event => console.log(hsvPanel.getSelectedColor().getRGB_HEX()));
    (SwingJS.convert(this.jPanel2)).add(hsvPanel, null);
    let hslPanel = new JSColorHSLPanel();
    hslPanel.addChangeListener(event => console.log(hslPanel.getSelectedColor().getRGB_HEX()));
    (SwingJS.convert(this.jPanel2)).add(hslPanel, null);
    let rgbPanel = new JSColorRGBPanel();
    rgbPanel.addChangeListener(event => console.log(rgbPanel.getSelectedColor().getRGB_HEX()));
    (SwingJS.convert(this.jPanel2)).add(rgbPanel, null);
    let cmykPanel = new JSColorCMYKPanel();
    cmykPanel.addChangeListener(event => console.log(cmykPanel.getSelectedColor().getRGB_HEX()));
    (SwingJS.convert(this.jPanel2)).add(cmykPanel, null);
    miniSwatchesPanel.addActionListener(event => hsvPanel.setSelectedColor(miniSwatchesPanel.getSelectedColor()));
    miniSwatchesPanel.addActionListener(event => hslPanel.setSelectedColor(miniSwatchesPanel.getSelectedColor()));
    miniSwatchesPanel.addActionListener(event => rgbPanel.setSelectedColor(miniSwatchesPanel.getSelectedColor()));
    miniSwatchesPanel.addActionListener(event => cmykPanel.setSelectedColor(miniSwatchesPanel.getSelectedColor()));
    swatchesPanel.addActionListener(event => hsvPanel.setSelectedColor(swatchesPanel.getSelectedColor()));
    swatchesPanel.addActionListener(event => hslPanel.setSelectedColor(swatchesPanel.getSelectedColor()));
    swatchesPanel.addActionListener(event => rgbPanel.setSelectedColor(swatchesPanel.getSelectedColor()));
    swatchesPanel.addActionListener(event => cmykPanel.setSelectedColor(swatchesPanel.getSelectedColor()));
    hsvPanel.addChangeListener(event => hslPanel.setSelectedColor(hsvPanel.getSelectedColor()));
    hsvPanel.addChangeListener(event => rgbPanel.setSelectedColor(hsvPanel.getSelectedColor()));
    hsvPanel.addChangeListener(event => cmykPanel.setSelectedColor(hsvPanel.getSelectedColor()));
    hslPanel.addChangeListener(event => hsvPanel.setSelectedColor(hslPanel.getSelectedColor()));
    hslPanel.addChangeListener(event => rgbPanel.setSelectedColor(hslPanel.getSelectedColor()));
    hslPanel.addChangeListener(event => cmykPanel.setSelectedColor(hslPanel.getSelectedColor()));
    rgbPanel.addChangeListener(event => hsvPanel.setSelectedColor(rgbPanel.getSelectedColor()));
    rgbPanel.addChangeListener(event => hslPanel.setSelectedColor(rgbPanel.getSelectedColor()));
    rgbPanel.addChangeListener(event => cmykPanel.setSelectedColor(rgbPanel.getSelectedColor()));
    cmykPanel.addChangeListener(event => hsvPanel.setSelectedColor(cmykPanel.getSelectedColor()));
    cmykPanel.addChangeListener(event => hslPanel.setSelectedColor(cmykPanel.getSelectedColor()));
    cmykPanel.addChangeListener(event => rgbPanel.setSelectedColor(cmykPanel.getSelectedColor()));
  }

  /**
   * This method is called from within the constructor to initialize the form.
   * WARNING: Do NOT modify this code. The content of this method is always
   * regenerated by the Form Editor.
   */
   initComponents() {
    this.jPanel1 = new JPanel();let jPanel1 = this.jPanel1;
    this.jButton4 = new JButton();let jButton4 = this.jButton4;
    this.jButton5 = new JButton();let jButton5 = this.jButton5;
    this.jPanel2 = new JPanel();let jPanel2 = this.jPanel2;
    this.setTitle("Test Color Chooser");
    jButton4.setText("Choose Color");
    jButton4.addActionListener((p1, p2, p3, p4, p5, p6, p7, p8, p9, p10) => this.jButton4ActionPerformed(p1, p2, p3, p4, p5, p6, p7, p8, p9, p10));
    jPanel1.add(jButton4);
    jButton5.setText("Choose Color With Default");
    jButton5.addActionListener((p1, p2, p3, p4, p5, p6, p7, p8, p9, p10) => this.jButton5ActionPerformed(p1, p2, p3, p4, p5, p6, p7, p8, p9, p10));
    jPanel1.add(jButton5);
    this.getContentPane().add(jPanel1, BorderLayout.PAGE_START);
    this.getContentPane().add(jPanel2, BorderLayout.CENTER);
  }

  // </editor-fold>//GEN-END:initComponents
   jButton4ActionPerformed(evt) {
    // GEN-FIRST:event_jButton4ActionPerformed
    // this.choose(null);
  }

  // GEN-LAST:event_jButton4ActionPerformed
   jButton5ActionPerformed(evt) {
    // GEN-FIRST:event_jButton5ActionPerformed
    // this.choose(new Color(255, 0, 0,255));
  }

  // GEN-LAST:event_jButton5ActionPerformed
  // private void open(int selectionType) {
  // JSFileChooser.showOpenDialog(".gif,.png,.jpeg,.jpg", selectionType, 0, files -> {
  // document.querySelectorAll("img").forEach(img -> img.parentElement.removeChild(img));
  // 
  // files.forEach(file -> {
  // FileReader fileReader = new FileReader();
  // fileReader.onload = event -> {
  // $Image img = ($Image) document.createElement("img");
  // img.src = (String) fileReader.result;
  // 
  // document.querySelector(".center").appendChild(img);
  // return null;
  // };
  // fileReader.readAsDataURL(file);
  // });
  // });
  // }
  // private void choose(Color color) {
  // JSColorChooser.showDialog(color, c -> {
  // document.querySelectorAll("img").forEach(img -> img.parentElement.removeChild(img));
  // $Image img = ($Image) document.createElement("img");
  // img.width = 100;
  // img.height = 100;
  // img.style.background = c.getRGB_HEX();
  // document.querySelector(".center").appendChild(img);
  // });
  // }
  // Variables declaration - do not modify//GEN-BEGIN:variables
   jButton4 = null;

   jButton5 = null;

   jPanel1 = null;

   jPanel2 = null;
  // End of variables declaration//GEN-END:variables
}
