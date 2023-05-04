import fs from 'fs';
export class CsvFileReaderService {
  data: string[][] = []

  constructor(public filename: string) {
    this.data = fs.readFileSync('football.csv', { encoding: 'utf-8' }).split('\n').map((row) => row.split(','));
  }

  read(): string[][] {
    return this.data;
  }
}