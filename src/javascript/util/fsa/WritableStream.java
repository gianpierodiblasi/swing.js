package javascript.util.fsa;

import def.js.Promise;

/**
 * The simulation of the WritableStream object
 *
 * @author gianpiero.diblasi
 */
public interface WritableStream {

  public boolean locked = false;

  public WritableStreamDefaultWriter getWriter();

  public Promise<Void> close();

  public Promise<String> abort(String reason);
}
