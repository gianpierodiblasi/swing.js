package javascript.util.fsa;

import def.js.Array;
import def.js.Object;

/**
 * The types in the options used when opening a file
 *
 * @author gianpiero.diblasi
 */
public class OpenFilePickerOptionsType {

  public String description;
  public Object accept = new Object();

  public void pushAccept(String mime, Array<String> extensions) {
    this.accept.$set(mime, extensions);
  }
}
