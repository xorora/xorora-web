import { readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const TARGET_DIRS = ["app", "components", "lib"];
const EXTENSIONS = new Set([".tsx", ".ts", ".css"]);

function walk(dir: string, files: string[] = []): string[] {
  for (const entry of readdirSync(dir)) {
    const path = join(dir, entry);
    const stat = statSync(path);
    if (stat.isDirectory()) {
      walk(path, files);
    } else if (EXTENSIONS.has(path.slice(path.lastIndexOf(".")))) {
      files.push(path);
    }
  }
  return files;
}

const BROKEN_UTILITY_FIXES: Array<[RegExp, string]> = [
  [/gapx-/g, "gap-x-"],
  [/minw-/g, "min-w-"],
  [/minh-\[/g, "min-h-["],
  [/maxh-\[/g, "max-h-["],
  [/maxw-\[/g, "max-w-["],
  [/bordert-\[/g, "border-t-["],
  [/borderl-\[/g, "border-l-["],
  [/roundedt-\[/g, "rounded-t-["],
  [/gridcols-\[/g, "grid-cols-["],
  [/backdropblur-\[/g, "backdrop-blur-["],
  [/scalex-\[/g, "scale-x-["],
  [/translatex-\[/g, "translate-x-["],
];

const WRONGLY_NEGATED_UTILITIES = [
  "min-h",
  "max-h",
  "max-w",
  "border-t",
  "border-l",
  "rounded-t",
  "grid-cols",
  "backdrop-blur",
];

function fixBrokenNegations(content: string): string {
  let result = content;

  for (const [pattern, replacement] of BROKEN_UTILITY_FIXES) {
    result = result.replace(pattern, replacement);
  }

  for (const utility of WRONGLY_NEGATED_UTILITIES) {
    const escaped = utility.replace(/-/g, "\\-");
    result = result.replace(
      new RegExp(`((?:[a-z][\\w-]*:)*)${escaped}-\\[-([^\\]]+)\\]`, "g"),
      (_match, variants: string, value: string) =>
        `${variants}${utility}-[${value}]`,
    );
  }

  return result;
}

function canonicalize(content: string): string {
  let result = content;

  result = result.replace(/duration-\[(\d+)ms\]/g, "duration-$1");

  result = result.replace(
    /(^|[\s"'`,])-([\w-]+)-\[([^\]]+)\]/g,
    (_match, prefix: string, utility: string, value: string) => {
      const normalizedValue = value.startsWith("-") ? value : `-${value}`;
      return `${prefix}${utility}-[${normalizedValue}]`;
    },
  );

  return result;
}

let changedFiles = 0;

for (const dir of TARGET_DIRS) {
  for (const file of walk(join(ROOT, dir))) {
    const original = readFileSync(file, "utf8");
    const updated = canonicalize(fixBrokenNegations(original));

    if (updated !== original) {
      writeFileSync(file, updated);
      changedFiles += 1;
      console.log(`updated ${file.replace(`${ROOT}/`, "")}`);
    }
  }
}

console.log(`\nDone. Updated ${changedFiles} files.`);
