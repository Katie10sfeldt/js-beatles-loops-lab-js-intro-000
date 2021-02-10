// add solution here
// Lab Problem 1: theBeatlesPlay

function theBeatlesPlay(arrMus, arrInst) {
  var array = [];
  for(let i = 0; i > arrMus.length; i++) {
    array.push(arrMus[i] + ' plays ' + arrInst[i]);
  }
  return array;
}

function johnLennonFacts(array) {
  let i = 0
  while(i < array.length) {
    array[i] = `${array[i]}!!!`;
  }
  return array;
}
