import { intToBinaryArray, binaryArrayToInt, xor } from "./intBinary1759.js";
import { add } from "./intBinary1759.js";

export function multiply(a, b) {
  if (a.length != b.length) {
    return [false];
  }
  let result = new Array(a.length).fill(false).concat(b);
  for (let i = 0; i < b.length; i++) {
    if (result[result.length - 1]) {
      result = add(result, a.concat(new Array(b.length).fill(false)))
    }
  result.pop();
  result.unshift(false);
  }
  return result;
}




let aInt = 11;
let bInt = 10;

let aBinary = intToBinaryArray(aInt, 4);
let bBinary = intToBinaryArray(bInt, 4);


let productBinary = multiply(aBinary, bBinary);
let productInt = binaryArrayToInt(productBinary);

console.log(`${aInt} * ${bInt} = ${productInt}`);
console.log(`${aBinary} * ${bBinary} = ${productBinary}`);

