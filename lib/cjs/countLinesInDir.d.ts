import { EXTENSIONS } from "./types";
/**
 * Returns number of lines of code in a directory
 * @param dirPath
 * @returns string
 */
export declare function countLinesInDir(dirPath: string, extensions?: EXTENSIONS[], exclude?: string[]): string;
