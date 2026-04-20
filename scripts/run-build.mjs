import { spawn } from "node:child_process";

const modeArg = process.argv[2];
if (!["--with-prerender", "--without-prerender"].includes(modeArg)) {
  console.error("Usage: node scripts/run-build.mjs --with-prerender|--without-prerender");
  process.exit(1);
}

const runCommand = (command) =>
  new Promise((resolve, reject) => {
    const child = spawn(command, {
      stdio: "inherit",
      env: process.env,
      shell: true,
    });

    child.on("exit", (code, signal) => {
      if (signal) {
        process.kill(process.pid, signal);
        return;
      }

      if ((code ?? 1) !== 0) {
        reject(new Error(`Command failed: ${command}`));
        return;
      }

      resolve();
    });
  });

try {
  await runCommand("npx vite build");

  if (modeArg === "--with-prerender") {
    await runCommand("npx vite build --ssr src/entry-server.jsx --outDir dist/server --emptyOutDir false");
    await runCommand("node scripts/prerender-ssr.mjs");
  }
} catch (error) {
  console.error(error.message);
  process.exit(1);
}
