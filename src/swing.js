document.addEventListener("click", (event) => document.querySelectorAll("details").forEach(detail => !detail.contains(event.target) ? detail.removeAttribute("open") : ""));
class Comparable {

  compareTo(other) {
    return 0;
  }
}

async function FileSystemDirectoryHandle_getEntries(handle, apply) {
  var entries = [];
  for await (let [key, value] of handle.entries()) {
    entries[key] = value;
  }
  apply(entries);
}
async function FileSystemDirectoryHandle_getEntriesIterator(handle, apply) {
  for await (let [key, value] of handle.entries()) {
    apply(key, value);
  }
}

async function FileSystemDirectoryHandle_getKeys(handle, apply) {
  var keys = [];
  for await (let key of handle.keys()) {
    keys.push(key);
  }
  apply(keys);
}
async function FileSystemDirectoryHandle_getKeysIterator(handle, apply) {
  for await (let key of handle.keys()) {
    apply(key);
  }
}

async function FileSystemDirectoryHandle_getValues(handle, apply) {
  var values = [];
  for await (let value of handle.values()) {
    values.push(value);
  }
  apply(values);
}
async function FileSystemDirectoryHandle_getValuesIterator(handle, apply) {
  for await (let value of handle.values()) {
    apply(value);
  }
}