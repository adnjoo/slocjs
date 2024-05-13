"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countLinesInDir = void 0;
const types_1 = require("./types");
const countLinesOfCode_1 = require("./countLinesOfCode");
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
function countLinesInDir(dirPath, exclude) {
    const extensionsToCount = [types_1.EXTENSIONS.JS, types_1.EXTENSIONS.TS, types_1.EXTENSIONS.TSX]; // TODO: https://github.com/adnjoo/slocjs/issues/5
    const linesOfCode = (0, countLinesOfCode_1.countLinesOfCode)(dirPath, extensionsToCount, exclude);
    return `SLOC: ${linesOfCode}`;
}
exports.countLinesInDir = countLinesInDir;
;
