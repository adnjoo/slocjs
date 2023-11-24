import path from "path";

import { EXTENSIONS } from "./types";
import { countLinesOfCode } from "./countLinesOfCode";

// const exclude = ["node_modules", ".next", ".git", ".vscode", ".vercel"]; // TODO: https://github.com/adnjoo/slocjs/issues/4
// const rootPath = process.cwd();
// const srcPath = path.join(rootPath, "src"); // TODO: https://github.com/adnjoo/slocjs/issues/2
// const extensionsToCount = [EXTENSIONS.JS, EXTENSIONS.TS, EXTENSIONS.TSX]; // TODO: https://github.com/adnjoo/slocjs/issues/5
// const linesOfCode = countLinesOfCode(srcPath, extensionsToCount);

/**
 * Returns number of lines of code in a directory
 * @param dirPath
 * @returns string
 */
export function countLinesInDir(dirPath: string): string {
  const extensionsToCount = [EXTENSIONS.JS, EXTENSIONS.TS, EXTENSIONS.TSX]; // TODO: https://github.com/adnjoo/slocjs/issues/5
  const linesOfCode = countLinesOfCode(dirPath, extensionsToCount);
  return `SLOC: ${linesOfCode}`;
};
