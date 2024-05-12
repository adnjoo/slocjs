import fs from "fs";
import path from "path";

import { EXTENSIONS } from "./types";

const DEFAULT_DIRS_TO_EXCLUDE = [
  "node_modules",
  ".next",
  ".git",
  ".vscode",
  ".vercel",
];

export const countLinesOfCode = (
  dirPath: string,
  extensions: EXTENSIONS[],
  dirsToExclude: string[] = DEFAULT_DIRS_TO_EXCLUDE
): number => {
  try {
    const files = fs.readdirSync(dirPath);
    let totalLines = 0;

    files.forEach((file: string) => {
      const filePath = path.join(dirPath, file);
      const stats = fs.statSync(filePath);

      if (stats.isDirectory() && !dirsToExclude.includes(file)) {
        totalLines += countLinesOfCode(filePath, extensions, dirsToExclude);
      } else if (extensions.some((ext) => file.endsWith(ext))) {
        const content = fs.readFileSync(filePath, "utf-8");
        const lines = content
          .split("\n")
          .filter((line: string) => line.trim() !== "").length;
        totalLines += lines;
      }
    });

    return totalLines;
  } catch (err) {
    console.error("Error:", err);
    return 0;
  }
};
