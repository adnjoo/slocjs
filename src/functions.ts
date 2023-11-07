import fs from 'fs';

import { EXTENSIONS } from "./types";

export const countLinesOfCode = (path: string, extensions: EXTENSIONS[]) => {
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