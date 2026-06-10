import { execSync } from "node:child_process";

const seeds = [
  "scripts/seed-case-studies.ts",
  "scripts/seed-industries.ts",
  "scripts/seed-blog.ts",
  "scripts/seed-site-content.ts",
];

for (const script of seeds) {
  execSync(`bun --env-file=.env.local run ${script}`, {
    stdio: "inherit",
    cwd: process.cwd(),
  });
}

console.log("All seeds complete.");
