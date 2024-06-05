package simulation.dom;

import def.dom.Window;
import def.js.Array;
import def.js.Promise;
import simulation.js.$FileSystemDirectoryHandle;
import simulation.js.$FileSystemFileHandle;
import simulation.js.$Object;

/**
 * The simulation of the Window object
 *
 * @author gianpiero.diblasi
 */
public class $Window extends Window {

  public Promise<Array<$FileSystemFileHandle>> showOpenFilePicker($Object options) {
    return null;
  }

  public Promise<Array<$FileSystemDirectoryHandle>> showDirectoryPicker($Object options) {
    return null;
  }

  public Promise<$FileSystemFileHandle> showSaveFilePicker($Object options) {
    return null;
  }
}
