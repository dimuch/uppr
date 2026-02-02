import { watchFile, unwatchFile } from "node:fs";
import { spawn } from "node:child_process";

/**
 * Watches a file and runs `npm run build` on change.
 *
 * @param {string} filePath - Path to the file to watch.
 * @param {number} [debounceMs=100] - Debounce interval to avoid rapid rebuilds.
 */
export function watchAndBuild(filePath, debounceMs = 5000) {
  let timeout = null;

  const onChange = (curr, prev) => {
    // Only trigger if modification timestamp changed
    console.log('checking for the changes', curr, prev);
    if (curr.mtimeMs === prev.mtimeMs) return;

    // Debounce rapid events
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      console.log(`Change detected in ${filePath}. Running build...`);
      runBuild();
    }, debounceMs);
  };

  // Start watching
  watchFile(filePath, { interval: 200 }, onChange);
  console.log(`Watching ${filePath} for changes...`);

  return () => {
    unwatchFile(filePath, onChange);
    if (timeout) clearTimeout(timeout);
    console.log(`Stopped watching ${filePath}`);
  };
}

/**
 * Executes "npm run build" and logs stdout/stderr.
 */
function runBuild() {
  const build = spawn("npm", ["run", "restart"], {
    stdio: "inherit",
    shell: true
  });

  build.on("exit", code => {
    console.log(`Build process exited with code ${code}`);
  });

  build.on("error", err => {
    console.error("Build process error:", err);
  });
}

watchAndBuild('./components/articles/index.js')