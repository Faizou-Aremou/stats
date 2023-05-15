import { MatchData } from "../MatchData";
import { MatchResult } from "../MatchResult";
import { Analyzer } from "../Summary";

export class WinAnalysis implements Analyzer<MatchData>{

  constructor(public teamName: string) {
  }

  run(matches: MatchData[]): string {
    return `Team ${this.teamName} won ${this.analysis(matches)} games`;
  }

  private analysis(matches: MatchData[]): number {
    return matches.reduce((wins, match) => {
      if ((match[1] === this.teamName && match[5] === MatchResult.HomeWin)
        || (match[2] === this.teamName && match[5] === MatchResult.AwayWin)) {
        return wins + 1;
      }
      return wins;
    }, 0);
  }
}