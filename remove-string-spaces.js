//Simple, remove the spaces from the string, then return the resultant string.

let x = 'Hello world';
function noSpace(){
    console.log('\n');
    console.log(x.replace(/\s/g, ''));
  }
  noSpace();