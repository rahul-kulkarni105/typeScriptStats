import { MatchReader } from './MatchReader';
import { Summary } from './Summary';

// Create an object that satisfies the 'DataReader' interface
// const csvFileReader = new CsvFileReader('football.csv');

// Create an instance of MatchReader and pass in something satisfying
// the 'DataReader' interface
const matchReader = MatchReader.fromCsv('football.csv');
const summary = Summary.winsAnalysisWithHtmlReport('Man United');

// matchReader.matches
matchReader.load();
summary.buildAnaPrintReport(matchReader.matches);
