// 8kyu - Parse float

// Write function parseFloat (for Javascript parseF) which takes a string and 
// returns a number or Nothing (for Python None, for Javascript null) if 
// conversion is not possible.

function parseF(s) {
  return (isNaN(parseFloat(s))) ? null : parseFloat(s);
}