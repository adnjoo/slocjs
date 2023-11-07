import path from "path";

import { EXTENSIONS } from "./types";
import { countLinesOfCode } from "./functions";

const exclude = ["node_modules", ".next", ".git", ".vscode", ".vercel"]; // TODO: https://github.com/adnjoo/slocjs/issues/4
const rootPath = process.cwd();
const srcPath = path.join(rootPath, "src"); // TODO: https://github.com/adnjoo/slocjs/issues/2
const extensionsToCount = [EXTENSIONS.JS, EXTENSIONS.TS, EXTENSIONS.TSX]; // TODO: https://github.com/adnjoo/slocjs/issues/5
const linesOfCode = countLinesOfCode(srcPath, extensionsToCount);

//
/**
 * Returns number of lines of code in a directory
 * @param dirPath
 * @returns string
 */
export function countLinesInDir(dirPath: string): string {
  const extensionsToCount = [EXTENSIONS.JS, EXTENSIONS.TS, EXTENSIONS.TSX]; // TODO: https://github.com/adnjoo/slocjs/issues/5
  const linesOfCode = countLinesOfCode(dirPath, extensionsToCount);
  return `SLOC: ${linesOfCode}`;
}

// const readmeFile = path.join(rootPath, 'README.md'); // TODO: https://github.com/adnjoo/slocjs/issues/6
// fs.readFile(readmeFile, 'utf-8', function (err: any, data: any) {
//   if (err) {
//     return console.log(err);
//   }

//   const replace = 'SLOC:';
//   const newContent = `${replace} ${linesOfCode}`;

//   const result = data.replace(
//     new RegExp('^' + replace + '.*', 'm'),
//     newContent
//   );

//   fs.writeFile(readmeFile, result, 'utf-8', function (err: any) {
//     if (err) return console.log(err);
//     console.log(`Updated ${readmeFile} with SLOC: ${linesOfCode}`);
//   });
// });

export default {
  countLinesInDir,
};
