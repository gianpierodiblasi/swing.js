package giada.awt.event;

/**
 * The java.awt.event.ActionListener clone
 *
 * @author gianpiero.diblasi
 */
public interface ActionListener {

  public void actionPerformed(ActionEvent event);

  public default void $apply(ActionEvent event) {
  }
}
