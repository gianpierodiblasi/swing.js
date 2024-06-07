package javascript.util.fsa;

import def.js.Array;

/**
 * The options used when opening a file
 *
 * @author gianpiero.diblasi
 */
public class OpenFilePickerOptions {

  public String id;
  public FileSystemHandle startIn;
  public boolean multiple;
  public Array<OpenFilePickerOptionsType> types = new Array<>();
  public boolean excludeAcceptAllOption;
}
