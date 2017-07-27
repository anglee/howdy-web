import { expect } from 'chai';
import findItinerary from './leetOJ-332_Reconstruct-Itinerary';


describe('leetOJ-332_Reconstruct-Itinerary', () => {
  it('should work with given example 1', () => {
    const input = [["MUC", "LHR"], ["JFK", "MUC"], ["SFO", "SJC"], ["LHR", "SFO"]];
    const expected = ["JFK", "MUC", "LHR", "SFO", "SJC"];
    expect(findItinerary(input)).to.deep.equal(expected);
  });
  it('should work with given example 2', () => {
    const input = [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]];
    const expected = ["JFK","ATL","JFK","SFO","ATL","SFO"];
    expect(findItinerary(input)).to.deep.equal(expected);
  });
  it('should work with test case 1', () => {
    const input = [["JFK","SFO"],["SFO", "JFK"]];
    const expected = ["JFK","SFO","JFK"];
    expect(findItinerary(input)).to.deep.equal(expected);
  });
  it('should work with test case 2', () => {
    const input = [["JFK","KUL"],["JFK","NRT"],["NRT","JFK"]];
    const expected = ["JFK","NRT","JFK", "KUL"];
    expect(findItinerary(input)).to.deep.equal(expected);
  });
  it('should work with test case 3', () => {
    const input = [["AXA","EZE"],["EZE","AUA"],["ADL","JFK"],["ADL","TIA"],["AUA","AXA"],["EZE","TIA"],["EZE","TIA"],["AXA","EZE"],["EZE","ADL"],["ANU","EZE"],["TIA","EZE"],["JFK","ADL"],["AUA","JFK"],["JFK","EZE"],["EZE","ANU"],["ADL","AUA"],["ANU","AXA"],["AXA","ADL"],["AUA","JFK"],["EZE","ADL"],["ANU","TIA"],["AUA","JFK"],["TIA","JFK"],["EZE","AUA"],["AXA","EZE"],["AUA","ANU"],["ADL","AXA"],["EZE","ADL"],["AUA","ANU"],["AXA","EZE"],["TIA","AUA"],["AXA","EZE"],["AUA","SYD"],["ADL","JFK"],["EZE","AUA"],["ADL","ANU"],["AUA","TIA"],["ADL","EZE"],["TIA","JFK"],["AXA","ANU"],["JFK","AXA"],["JFK","ADL"],["ADL","EZE"],["AXA","TIA"],["JFK","AUA"],["ADL","EZE"],["JFK","ADL"],["ADL","AXA"],["TIA","AUA"],["AXA","JFK"],["ADL","AUA"],["TIA","JFK"],["JFK","ADL"],["JFK","ADL"],["ANU","AXA"],["TIA","AXA"],["EZE","JFK"],["EZE","AXA"],["ADL","TIA"],["JFK","AUA"],["TIA","EZE"],["EZE","ADL"],["JFK","ANU"],["TIA","AUA"],["EZE","ADL"],["ADL","JFK"],["ANU","AXA"],["AUA","AXA"],["ANU","EZE"],["ADL","AXA"],["ANU","AXA"],["TIA","ADL"],["JFK","ADL"],["JFK","TIA"],["AUA","ADL"],["AUA","TIA"],["TIA","JFK"],["EZE","JFK"],["AUA","ADL"],["ADL","AUA"],["EZE","ANU"],["ADL","ANU"],["AUA","AXA"],["AXA","TIA"],["AXA","TIA"],["ADL","AXA"],["EZE","AXA"],["AXA","JFK"],["JFK","AUA"],["ANU","ADL"],["AXA","TIA"],["ANU","AUA"],["JFK","EZE"],["AXA","ADL"],["TIA","EZE"],["JFK","AXA"],["AXA","ADL"],["EZE","AUA"],["AXA","ANU"],["ADL","EZE"],["AUA","EZE"]];
    const expected = ["JFK", "ADL", "ANU", "ADL", "ANU", "AUA", "ADL", "AUA", "ADL", "AUA", "ANU", "AXA", "ADL", "AUA", "ANU", "AXA", "ADL", "AXA", "ADL", "AXA", "ANU", "AXA", "ANU", "AXA", "EZE", "ADL", "AXA", "EZE", "ADL", "AXA", "EZE", "ADL", "EZE", "ADL", "EZE", "ADL", "EZE", "ANU", "EZE", "ANU", "EZE", "AUA", "AXA", "EZE", "AUA", "AXA", "EZE", "AUA", "AXA", "JFK", "ADL", "EZE", "AUA", "EZE", "AXA", "JFK", "ADL", "JFK", "ADL", "JFK", "ADL", "JFK", "ADL", "TIA", "ADL", "TIA", "AUA", "JFK", "ANU", "TIA", "AUA", "JFK", "AUA", "JFK", "AUA", "TIA", "AUA", "TIA", "AXA", "TIA", "EZE", "AXA", "TIA", "EZE", "JFK", "AXA", "TIA", "EZE", "JFK", "AXA", "TIA", "JFK", "EZE", "TIA", "JFK", "EZE", "TIA", "JFK", "TIA", "JFK", "AUA", "SYD"];
    expect(findItinerary(input)).to.deep.equal(expected);
  });

  it('should work with test case 4', () => {
    const input = [
      ["JFK","B"],
      ["B", "C"],
      ["C", "F"],
      ["F", "G"],
      ["G", "H"],
      ["H", "C"],
    ];
    const expected = ["JFK","B","C", "F", "G", "H", "C"];
    expect(findItinerary(input)).to.deep.equal(expected);
  });

  it('should work with test case 5', () => {
    const input = [
      ["JFK","B"],
      ["B", "C"],
      ["C", "F"],
      ["F", "G"],
      ["G", "H"],
      ["H", "C"],
      ["C", "D"],
      ["D", "X"],
      ["X", "Y"],
      ["Y", "D"],
      ["D", "E"],
    ];
    const expected = ["JFK","B","C", "F", "G", "H", "C", "D", "X", "Y", "D", "E"];
    expect(findItinerary(input)).to.deep.equal(expected);
  });
});
