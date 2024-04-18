package javascript.awt.event;

/**
 * The java.awt.event.ActionListener clone
 *
 * @author gianpiero.diblasi
 */
public interface ActionListener {

  /**
   * Clone of java.awt.event.ActionListener.actionPerformed
   *
   * @param event The event
   */
  public void actionPerformed(ActionEvent event);

  /**
   * Used to perform lambda calls
   *
   * @param event The event
   */
  public default void $apply(ActionEvent event) {
  }
}
