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
  var i = 0;
  while(i < facts.length) {
    result.push(facts[i] + "!!!");
    i++;
  }
  return result;
}

function iLoveTheBeatles(x) {
  var result = [];
  for(; x > 0; x--) {
    result.push("I love the Beatles!");
  }
  return result;
}