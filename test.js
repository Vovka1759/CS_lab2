import { add, xor, isGreaterOrEqual, sub, binaryArrayToInt, multiply } from "./intBinary1759.js";

// let a = [true,true,true,true,false,true,true,false,true,true,true,false,true,false,false,true,false,true,true,true,true,false,false,true];
// let b = [true,true,true,true,false,true,true,false,true,true,true,false,true,false,false,true,false,true,true,true,true,false,false,true];
const a = [true, false, true];  // Represents the binary number 101
const b = [false, true, false]; // Represents the binary number 010

function multiplyBinaryNumbers(binaryNum1, binaryNum2) {
    const n1 = binaryNum1.length;
    const n2 = binaryNum2.length;
    const result = new Array(n1 + n2).fill(false);
    
    // Iterate through binaryNum2 from right to left
    for (let i = n2 - 1; i >= 0; i--) {
      let carry = false;
      // Iterate through binaryNum1 from right to left
      for (let j = n1 - 1; j >= 0; j--) {
        const product = binaryNum1[j] && binaryNum2[i];
        const sum = result[i + j + 1] + (product ? 1 : 0) + (carry ? 1 : 0);
        carry = sum > 1;
        result[i + j + 1] = sum % 2 === 1;
        result[i + j] += carry ? 1 : 0;
        carry = carry && result[i + j] === true;
        result[i + j] = result[i + j] % 2 === 1;
      }
      result[i] += carry ? 1 : 0;
    }
    
    // Remove leading zeros
    let i = 0;
    while (i < result.length - 1 && result[i] === false) {
      i++;
    }
    
    return result.slice(i);
  }
  
  
let c = multiplyBinaryNumbers(a,b);
console.log(c);
console.log(`${binaryArrayToInt(a)} * ${binaryArrayToInt(b)} = ${binaryArrayToInt(c)}`);