// add solution here
function theBeatlesPlay(musicians, instruments) {
  var result = [];
  for(var i = 0; i < musicians.length; i++) {
    result.push(musicians[i] + " plays " + instruments[i]);
  }
  return result;
}

function johnLennonFacts(facts) {
  var result = [];
  facts.forEach(fact => {
    result.push(fact + "!!!")
  })
  return result;
}

function iLoveTheBeatles(x) {
  var result = [];
  for(; x > 0; x--) {
    result.push();
  }
  return result;
}