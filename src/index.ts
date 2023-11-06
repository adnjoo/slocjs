import fs from 'fs';
import path from 'path';
import { EXTENSIONS } from "./types";

const exclude = ['node_modules', '.next', '.git', '.vscode', '.vercel']; // TODO: https://github.com/adnjoo/slocjs/issues/4

const countLinesOfCode = (path: string, extensions: EXTENSIONS[]) => {
  try {
    const files = fs.readdirSync(path);
    let totalLines = 0;

    files.forEach((file: string) => {
      const filePath = `${path}/${file}`;
      const stats = fs.statSync(filePath);

      if (stats.isDirectory() && !file.startsWith('node_modules')) {
        totalLines += countLinesOfCode(filePath, extensions);
      } else if (extensions.some((ext) => file.endsWith(ext))) {
        const content = fs.readFileSync(filePath, 'utf-8');
        const lines = content
          .split('\n')
          .filter((line: string) => line.trim() !== '').length;
        totalLines += lines;
      }
    });

    return totalLines;
  } catch (err) {
    console.error('Error:', err);
    return 0;
  }
};

const rootPath = process.cwd();
// const srcPath = '../src/'; // TODO: https://github.com/adnjoo/slocjs/issues/2
const srcPath = path.join(rootPath, 'src');
const extensionsToCount = [EXTENSIONS.JS, EXTENSIONS.TS, EXTENSIONS.TSX]; // TODO: https://github.com/adnjoo/slocjs/issues/5
const linesOfCode = countLinesOfCode(srcPath, extensionsToCount);

const readmeFile = path.join(rootPath, 'README.md'); // TODO: https://github.com/adnjoo/slocjs/issues/6
fs.readFile(readmeFile, 'utf-8', function (err: any, data: any) {
  if (err) {
    return console.log(err);
  }

  const replace = 'SLOC:';
  const newContent = `${replace} ${linesOfCode}`;

  const result = data.replace(
    new RegExp('^' + replace + '.*', 'm'),
    newContent
  );

  fs.writeFile(readmeFile, result, 'utf-8', function (err: any) {
    if (err) return console.log(err);
    console.log(`Updated ${readmeFile} with SLOC: ${linesOfCode}`);
  });
});
