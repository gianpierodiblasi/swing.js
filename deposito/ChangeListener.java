package giada.swing.event;

/**
 * The javax.swing.event.ChangeListener clone
 *
 * @author gianpiero.diblasi
 */
public interface ChangeListener {

  public void stateChanged(ChangeEvent event);

  public default void $apply(ChangeEvent event) {
  }
}
