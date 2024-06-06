package javascript.util.fsa;

import def.dom.Blob;
import def.js.ArrayBuffer;
import def.js.DataView;
import def.js.Promise;
import jdk.nashorn.internal.runtime.arrays.TypedArrayData;

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
