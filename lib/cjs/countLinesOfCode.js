"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.countLinesOfCode = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const DEFAULT_DIRS_TO_EXCLUDE = [
    "node_modules",
    ".next",
    ".git",
    ".vscode",
    ".vercel",
];
const countLinesOfCode = (dirPath, extensions, dirsToExclude = DEFAULT_DIRS_TO_EXCLUDE) => {
    try {
        const files = fs_1.default.readdirSync(dirPath);
        let totalLines = 0;
        files.forEach((file) => {
            const filePath = path_1.default.join(dirPath, file);
            const stats = fs_1.default.statSync(filePath);
            if (stats.isDirectory() && !dirsToExclude.includes(file)) {
                totalLines += (0, exports.countLinesOfCode)(filePath, extensions, dirsToExclude);
            }
            else if (extensions.some((ext) => file.endsWith(ext))) {
                const content = fs_1.default.readFileSync(filePath, "utf-8");
                const lines = content
                    .split("\n")
                    .filter((line) => line.trim() !== "").length;
                totalLines += lines;
            }
        });
        return totalLines;
    }
    catch (err) {
        console.error("Error:", err);
        return 0;
    }
};
exports.countLinesOfCode = countLinesOfCode;
