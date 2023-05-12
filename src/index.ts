import { CsvFileReaderService } from "./CsvFileReader.service";
import { MatchData } from "./MatchData";
import { MatchResult } from "./MatchResult";
import { dateStringToDate } from "./utils";
const fileParser = (fileData: string[][]): MatchData[] => {
  return fileData.map((row) => [dateStringToDate(row[0]), row[1], row[2], parseInt(row[3]), parseInt(row[4]), row[5] as MatchResult, row[6]] as MatchData);
}
const footMatchReader = new CsvFileReaderService('football.csv', fileParser);
const matches = footMatchReader.read();
console.log(matches);

const manUnitedWins = 0

console.log(`Man United won ${manUnitedWins} games`);