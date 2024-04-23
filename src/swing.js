document.addEventListener("click", (event) => document.querySelectorAll("details").forEach(detail => !detail.contains(event.target) ? detail.removeAttribute("open") : ""));
