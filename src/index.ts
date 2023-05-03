import fs from 'fs';


const matches = fs.readFileSync('football.csv', { encoding: 'utf-8' }).split('\n').map((row) => row.split(','));

console.log(matches);

const manUnitedWins = matches.reduce((manUnitedWins, match) => {
  const manchesterName = 'Man United'
  if ((match[1] === manchesterName && match[5] === 'H') || (match[2] === manchesterName && match[5] === 'A')) {
    return manUnitedWins + 1
  }
  return manUnitedWins
}, 0)

console.log(`Man United won ${manUnitedWins} games`);