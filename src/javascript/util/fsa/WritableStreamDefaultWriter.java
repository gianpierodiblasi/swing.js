package javascript.util.fsa;

import def.js.Promise;

/**
 * The simulation of the WritableStreamDefaultWriter object
 *
 * @author gianpiero.diblasi
 */
public interface WritableStreamDefaultWriter {

  public Promise<Void> ready = null;
  public Promise<Void> closed = null;
  public int desiredSize = 0;

  public Promise<Void> write(Object chunk);

  public Promise<Void> close();

  public Promise<Void> abort(String reason);

  public void releaseLock();
}
