/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
  'use strict';
  const ps = pattern.split('');
  const ws = str.split(' ');
  if (ps.length !== ws.length) {
    return false;
  }
  const mapP2W = {};
  const mapW2P = {};
  for (var i = 0; i < ps.length; i++) {
    const w = ws[i];
    const p = ps[i];
    if (!mapP2W[p] && !mapW2P[w]) {
      mapP2W[p] = w;
      mapW2P[w] = p;
    } else if (mapP2W[p] !== w || mapW2P[w] !== p) {
      return false;
    }
  }
  return true;
};

export default wordPattern;