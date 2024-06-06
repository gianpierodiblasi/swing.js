package javascript.util.fsa;

import def.js.Promise;

/**
 * The simulation of the FileSystemHandle object
 *
 * @author gianpiero.diblasi
 */
public interface FileSystemHandle {

  public String kind = "";
  public String name = "";

  public Promise<Boolean> isSameEntry(FileSystemHandle fileSystemHandle);
}
