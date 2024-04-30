package javascript.awt.event;

/**
 * The listener of window closed
 *
 * @author gianpiero.diblasi
 */
public interface WindowClosedListener {

  /**
   * Invoked when a window has been closed
   *
   * @param event The event
   */
  public void windowClosed(WindowEvent event);

  /**
   * Used to perform lambda calls
   *
   * @param event The event
   */
  public default void $apply(WindowEvent event) {
  }
}
