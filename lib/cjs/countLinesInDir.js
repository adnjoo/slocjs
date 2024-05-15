"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countLinesInDir = void 0;
const types_1 = require("./types");
const countLinesOfCode_1 = require("./countLinesOfCode");
// const rootPath = process.cwd();
// const srcPath = path.join(rootPath, "src"); // TODO: https://github.com/adnjoo/slocjs/issues/2
// const extensionsToCount = [EXTENSIONS.JS, EXTENSIONS.TS, EXTENSIONS.TSX]; // TODO: https://github.com/adnjoo/slocjs/issues/5
// const linesOfCode = countLinesOfCode(srcPath, extensionsToCount);
/**
 * Returns number of lines of code in a directory
 * @param dirPath
 * @returns string
 */
function countLinesInDir(dirPath, extensions, exclude) {
    const extensionsToCount = extensions || Object.values(types_1.EXTENSIONS);
    const linesOfCode = (0, countLinesOfCode_1.countLinesOfCode)(dirPath, extensionsToCount, exclude);
    return `SLOC: ${linesOfCode}`;
}
exports.countLinesInDir = countLinesInDir;
