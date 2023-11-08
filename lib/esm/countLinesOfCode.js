"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.countLinesOfCode = void 0;
const fs_1 = __importDefault(require("fs"));
const countLinesOfCode = (path, extensions) => {
    try {
        const files = fs_1.default.readdirSync(path);
        let totalLines = 0;
        files.forEach((file) => {
            const filePath = `${path}/${file}`;
            const stats = fs_1.default.statSync(filePath);
            if (stats.isDirectory() && !file.startsWith("node_modules")) {
                totalLines += (0, exports.countLinesOfCode)(filePath, extensions);
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
