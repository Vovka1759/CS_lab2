import { intToBinaryArray, binaryArrayToInt, xor, isGreaterOrEqual, sub } from "./intBinary1759.js";

function div(a, b) {
  let quotient = [];
  let remainder = [...a];
  let i = 0;
  let test = [...b];
  while(test[test.length - 1] == false){
    test.pop();
  }
  while(isGreaterOrEqual(remainder,new Array(remainder.length - test.length).fill(false).concat(test))){    
    let subtr;
    if (i===0) {
      subtr = b.concat(new Array(remainder.length - b.length).fill(false))
    }
    subtr = new Array(i).fill(false).concat(b.concat(new Array(remainder.length - b.length - i).fill(false)));
    if (isGreaterOrEqual(remainder, subtr)) {
      quotient.push(true);
      remainder = sub(remainder, subtr);
    }
    else{
      quotient.push(false);
    }
    i++;
  }
  if (i%2==0) {
    quotient.push(false);
  }
  return [quotient, remainder];
}





let aInt = 55;
let bInt = 6;

let aBinary = intToBinaryArray(aInt, 16);
let bBinary = intToBinaryArray(bInt, 8);

let [quotientBinary, remainderBinary] = div(aBinary, bBinary);
let quotientInt = binaryArrayToInt(quotientBinary);
let remainderInt = binaryArrayToInt(remainderBinary);

console.log(`${aBinary} / ${bBinary} = ${quotientBinary} and ${remainderBinary}`);
console.log(`${aInt} / ${bInt} = ${quotientInt} and ${remainderInt}`);

// console.log(isGreaterOrEqual([false,false,false,false,false,false,false,true],new Array([false,false,false,false,false,false,false,true].length - intToBinaryArray(5, 4).length).fill(false).concat(intToBinaryArray(5, 4))));
