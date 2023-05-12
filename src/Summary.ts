export interface Analyzer<T> {
  run: (matches: T[]) => string;
}

export interface OutputTarget {
  print: (report: string) => void;
}

export class Summary<T> {
  constructor(public analyzer: Analyzer<T>, public outputTarget: OutputTarget) {
  }

  buildAndPrintReport(analyzed: T[]): void {
    const output = this.analyzer.run(analyzed);
    this.outputTarget.print(output);
  }
}