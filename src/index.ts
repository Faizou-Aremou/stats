import { CsvFileReaderService } from "./CsvFileReader.service";


const reader = new CsvFileReaderService('football.csv');
const matches = reader.read();
console.log(matches);

enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D'
}

const manUnitedWins = matches.reduce((manUnitedWins, match) => {
  const manchesterName = 'Man United'
  if ((match[1] === manchesterName && match[5] === 'H') || (match[2] === manchesterName && match[5] === 'A')) {
    return manUnitedWins + 1
  }
  return manUnitedWins
}, 0)

console.log(`Man United won ${manUnitedWins} games`);