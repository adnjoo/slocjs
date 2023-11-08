"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.countLinesInDir = void 0;
const path_1 = __importDefault(require("path"));
const types_1 = require("./types");
const countLinesOfCode_1 = require("./countLinesOfCode");
const exclude = ["node_modules", ".next", ".git", ".vscode", ".vercel"]; // TODO: https://github.com/adnjoo/slocjs/issues/4
const rootPath = process.cwd();
const srcPath = path_1.default.join(rootPath, "src"); // TODO: https://github.com/adnjoo/slocjs/issues/2
const extensionsToCount = [types_1.EXTENSIONS.JS, types_1.EXTENSIONS.TS, types_1.EXTENSIONS.TSX]; // TODO: https://github.com/adnjoo/slocjs/issues/5
const linesOfCode = (0, countLinesOfCode_1.countLinesOfCode)(srcPath, extensionsToCount);
/**
 * Returns number of lines of code in a directory
 * @param dirPath
 * @returns string
 */
function countLinesInDir(dirPath) {
    const extensionsToCount = [types_1.EXTENSIONS.JS, types_1.EXTENSIONS.TS, types_1.EXTENSIONS.TSX]; // TODO: https://github.com/adnjoo/slocjs/issues/5
    const linesOfCode = (0, countLinesOfCode_1.countLinesOfCode)(dirPath, extensionsToCount);
    return `SLOC: ${linesOfCode}`;
}
exports.countLinesInDir = countLinesInDir;
;
