// add solution here
// Lab Problem 1: theBeatlesPlay

function theBeatlesPlay(arrMus, arrInst) {
  var array = [];
  for(let i = 0; i > arrMus.length; i++) {
    array.push(arrMus[i] + ' plays ' + arrInst[i]);
  }
  return array;
}


//Add exclamation points to the end of each strings
// -- works
function johnLennonFacts(array) {
  let i = 0
  while(i < array.length) {
    array[i] = `${array[i]}!!!`;
    i++
  }
  return array;
}

//returning an array with the string 'I love the Beatles'

function iLoveTheBeatles(num) {
  var array = [];
  let i = 0;
  function incrementVariable() {
    i = i + 1;
    return i;
  }
  do {
    array.push('I love the Beatles!');
  } while (incrementVariable() < num);
}
