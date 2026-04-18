import { spawn } from "node:child_process";

const modeArg = process.argv[2];
const env = { ...process.env };

if (modeArg === "--with-prerender") {
  env.FORCE_PRERENDER = "1";
  delete env.DISABLE_PRERENDER;
} else if (modeArg === "--without-prerender") {
  env.DISABLE_PRERENDER = "1";
  delete env.FORCE_PRERENDER;
} else {
  console.error("Usage: node scripts/run-build.mjs --with-prerender|--without-prerender");
  process.exit(1);
}

const child = spawn("npx vite build", {
  stdio: "inherit",
  env,
  shell: true,
});

child.on("exit", (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
    return;
  }

  process.exit(code ?? 1);
});
