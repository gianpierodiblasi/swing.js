package giada.awt;

import giada.swing.JComponent;

/**
 * the java.awt.BoxLayout clone
 *
 * @author gianpiero.diblasi
 */
public class BoxLayout extends LayoutManager {

  public static final int X_AXIS = 0;
  public static final int Y_AXIS = 1;
  public static final int LINE_AXIS = 2;
  public static final int PAGE_AXIS = 3;

  public final int axis;

  public BoxLayout(JComponent target, int axis) {
    super("boxlayout");

    this.axis = axis;
  }
}
