import path from "path";

import { EXTENSIONS } from "./types";
import { countLinesOfCode } from "./countLinesOfCode";

// const rootPath = process.cwd();
// const srcPath = path.join(rootPath, "src"); // TODO: https://github.com/adnjoo/slocjs/issues/2
// const extensionsToCount = [EXTENSIONS.JS, EXTENSIONS.TS, EXTENSIONS.TSX]; // TODO: https://github.com/adnjoo/slocjs/issues/5
// const linesOfCode = countLinesOfCode(srcPath, extensionsToCount);

/**
 * Returns number of lines of code in a directory
 * @param dirPath
 * @returns string
 */
export function countLinesInDir(
  dirPath: string,
  extensions?: EXTENSIONS[],
  exclude?: string[]
): string {
  const extensionsToCount = extensions || Object.values(EXTENSIONS);
  const linesOfCode = countLinesOfCode(dirPath, extensionsToCount, exclude);
  return `SLOC: ${linesOfCode}`;
}
