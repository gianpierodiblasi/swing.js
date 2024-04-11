
import java.io.File;
import java.io.IOException;
import java.nio.file.FileSystems;
import java.nio.file.FileVisitResult;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.SimpleFileVisitor;
import java.nio.file.StandardOpenOption;
import java.nio.file.StandardWatchEventKinds;
import java.nio.file.WatchKey;
import java.nio.file.WatchService;
import java.nio.file.attribute.BasicFileAttributes;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

public class BuildJS {

  @SuppressWarnings({"UseOfSystemOutOrSystemErr", "CallToPrintStackTrace", "MismatchedQueryAndUpdateOfCollection"})
  private static void watch(File in, File out) throws Exception {
    System.out.println("watching " + in + " into " + out);

    Map<WatchKey, Path> map = new HashMap<>();
    WatchService watchService = FileSystems.getDefault().newWatchService();
    map.put(in.toPath().register(watchService, StandardWatchEventKinds.ENTRY_CREATE, StandardWatchEventKinds.ENTRY_MODIFY, StandardWatchEventKinds.ENTRY_DELETE), in.toPath());

    Files.walkFileTree(in.toPath(), new SimpleFileVisitor<Path>() {
      @Override
      public FileVisitResult preVisitDirectory(Path path, BasicFileAttributes attrs) throws IOException {
        map.put(path.register(watchService, StandardWatchEventKinds.ENTRY_CREATE, StandardWatchEventKinds.ENTRY_MODIFY, StandardWatchEventKinds.ENTRY_DELETE), path);
        return FileVisitResult.CONTINUE;
      }
    });

    while (true) {
      WatchKey watchKey = watchService.take();

      watchKey.pollEvents().forEach(event -> {
        try {
          BuildJS.write(in, out);
        } catch (IOException ex) {
          ex.printStackTrace();
        }
      });

      watchKey.reset();
    }
  }

  @SuppressWarnings({"UseOfSystemOutOrSystemErr", "CallToPrintStackTrace"})
  private static void write(File in, File out) throws IOException {
    out.delete();
    Path outPath = out.toPath();

    List<String> rows = Files.
            find(in.toPath(), 999, (p, bfa) -> bfa.isRegularFile() && p.getFileName().toString().matches(".*\\.js")).
            flatMap(path -> {
              try {
                return Files.readAllLines(path).stream();
              } catch (IOException ex) {
                ex.printStackTrace();
                return null;
              }
            }).collect(Collectors.toList());

    System.out.println("writing " + in + " into " + out);
    Files.write(outPath, rows, StandardOpenOption.CREATE);
  }

  public static void main(String[] args) throws Exception {
    BuildJS.watch(new File(args[0]), new File(args[1]));
  }
}
