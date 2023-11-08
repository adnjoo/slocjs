import fs from "fs";
export const countLinesOfCode = (path, extensions) => {
    try {
        const files = fs.readdirSync(path);
        let totalLines = 0;
        files.forEach((file) => {
            const filePath = `${path}/${file}`;
            const stats = fs.statSync(filePath);
            if (stats.isDirectory() && !file.startsWith("node_modules")) {
                totalLines += countLinesOfCode(filePath, extensions);
            }
            else if (extensions.some((ext) => file.endsWith(ext))) {
                const content = fs.readFileSync(filePath, "utf-8");
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
