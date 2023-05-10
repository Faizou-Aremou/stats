import fs from 'fs';
export class CsvFileReaderService<T> {
  private data: T[] = []
  constructor(public filename: string, fileParser: (fileData: string[][]) => T[]) {
    this.data = fileParser(fs.readFileSync(filename, { encoding: 'utf-8' }).split('\n').map((row) => row.split(',')))
  }
  read(): T[] {
    return this.data;
  }
}