import { countLinesOfCode } from "./countLinesOfCode";
import { countLinesInDir } from "./countLinesInDir";
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
export { countLinesInDir, countLinesOfCode, };
