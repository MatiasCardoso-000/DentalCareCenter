import { spawn } from "bun";
import { watch } from "fs";

let proc: Bun.Process | null = null;
let timeout: NodeJS.Timeout | null = null;

const start = () => {
  if (proc) proc.kill();
  console.clear();
  console.log("🚀 Ejecutando index.ts...\n");

  proc = spawn(["bun", "run", "src/index.ts"], {
    stdout: "inherit",
    stderr: "inherit",
  });
};

watch("src/", { recursive: true }, (event, filename) => {
  if (filename && filename.endsWith(".ts")) {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      start();
    }, 100); // espera 100ms antes de reiniciar, por si vienen múltiples eventos seguidos
  }
});

start();
