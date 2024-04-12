
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
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

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

    Map<String, String> origins = new HashMap<>();
    Map<String, List<String>> derived = new HashMap<>();

    Files.find(in.toPath(), 999, (p, bfa) -> bfa.isRegularFile() && p.getFileName().toString().matches(".*\\.js")).forEach(path -> {
      try {
        String content = Files.readString(path);
        int indexStart = content.indexOf("class ");
        int indexStop = content.indexOf(' ', indexStart + 6);
        String name = content.substring(indexStart + 6, indexStop);

        indexStart = content.indexOf(" extends ");
        indexStop = content.indexOf(' ', indexStart + 9);

        if (indexStart != -1) {
          String parentName = content.substring(indexStart + 9, indexStop);
          if (!derived.containsKey(parentName)) {
            derived.put(parentName, new ArrayList<>());
          }
          derived.get(parentName).add(content);
        } else {
          origins.put(name, content);
        }
      } catch (IOException ex) {
        ex.printStackTrace();
      }
    });

    System.out.println("writing " + in + " into " + out);
    origins.entrySet().forEach(entry -> {
      try {
        Files.write(outPath, entry.getValue().getBytes(), StandardOpenOption.CREATE, StandardOpenOption.APPEND);

        if (derived.containsKey(entry.getKey())) {
          derived.get(entry.getKey()).forEach(content -> {
            try {
              Files.write(outPath, content.getBytes(), StandardOpenOption.CREATE, StandardOpenOption.APPEND);
            } catch (IOException ex) {
              ex.printStackTrace();
            }
          });
        }
      } catch (IOException ex) {
        ex.printStackTrace();
      }
    });
  }

  public static void main(String[] args) throws Exception {
    switch (args[0]) {
      case "w":
        BuildJS.watch(new File(args[1]), new File(args[2]));
        break;
      case "b":
        BuildJS.write(new File(args[1]), new File(args[2]));
    }
  }
}
