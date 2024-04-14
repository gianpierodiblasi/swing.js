package giada.swing;

import static def.dom.Globals.console;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

/**
 *
 * @author gianpiero.diblasi
 */
public class TestJFrame1ActionListener implements ActionListener {

  @Override
  public void actionPerformed(ActionEvent event) {
    console.log("FROM LISTENER");
  }
}
