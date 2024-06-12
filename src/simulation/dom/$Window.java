package simulation.dom;

import def.dom.Window;
import def.js.Array;
import def.js.Promise;
import javascript.util.fsa.DirectoryPickerOptions;
import javascript.util.fsa.FilePickerOptions;
import javascript.util.fsa.FileSystemDirectoryHandle;
import javascript.util.fsa.FileSystemFileHandle;

/**
 * The simulation of the Window object
 *
 * @author gianpiero.diblasi
 */
public class $Window extends Window {

  public Promise<FileSystemDirectoryHandle> showDirectoryPicker(DirectoryPickerOptions options) {
    return null;
  }

  public Promise<Array<FileSystemFileHandle>> showOpenFilePicker(FilePickerOptions options) {
    return null;
  }

  public Promise<FileSystemFileHandle> showSaveFilePicker(FilePickerOptions options) {
    return null;
  }
}
