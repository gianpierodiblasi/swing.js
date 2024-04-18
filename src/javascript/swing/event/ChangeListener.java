package javascript.swing.event;

/**
 * The javax.swing.event.ChangeListener clone
 *
 * @author gianpiero.diblasi
 */
public interface ChangeListener {

  /**
   * Clone of javax.swing.event.ChangeListener.stateChanged
   *
   * @param event The event
   */
  public void stateChanged(ChangeEvent event);

  /**
   * Used to perform lambda calls
   *
   * @param event The event
   */
  public default void $apply(ChangeEvent event) {
  }
}
