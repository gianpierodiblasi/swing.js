package javascript.util.fsa;

import def.js.Array;

/**
 * The options used when opening/saving a file
 *
 * @author gianpiero.diblasi
 */
public class FilePickerOptions {

  public String id;
  public String suggestedName;
  public FileSystemHandle startIn;
  public boolean multiple;
  public Array<FilePickerOptionsType> types = new Array<>();
  public boolean excludeAcceptAllOption;
}
