import { WinAnalysis } from "./analyzers/WinsAnalysis";
import { CsvFileReaderService } from "./CsvFileReader.service";
import { MatchData } from "./MatchData";
import { MatchResult } from "./MatchResult";
import { ConsoleReport } from "./reportTargets/Console-report";
import { HtmlReport } from "./reportTargets/Html-report";
import { Summary } from "./Summary";
import { dateStringToDate } from "./utils";
const fileParser = (fileData: string[][]): MatchData[] => {
  return fileData.map((row) => [dateStringToDate(row[0]), row[1], row[2], parseInt(row[3]), parseInt(row[4]), row[5] as MatchResult, row[6]] as MatchData);
}
const footMatchReader = new CsvFileReaderService('football.csv', fileParser);
const matches = footMatchReader.read();
const matchSummary = new Summary(new WinAnalysis('Man United'), new ConsoleReport());
const matchSummaryInHtml = new Summary(new WinAnalysis('Man United'), new HtmlReport());
matchSummary.buildAndPrintReport(matches);
matchSummaryInHtml.buildAndPrintReport(matches);
