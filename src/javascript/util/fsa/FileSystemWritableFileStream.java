package javascript.util.fsa;

import def.js.Promise;

/**
 * The simulation of the FileSystemWritableFileStream object
 *
 * @author gianpiero.diblasi
 */
public interface FileSystemWritableFileStream extends WritableStream {

  public Promise<Void> write(Object data);

  public Promise<Void> seek(int position);

  public Promise<Void> truncate(int size);
}
