import { add, xor, isGreaterOrEqual, sub, multiply, binaryArrayToInt, intToBinaryArray, binaryArrayToString } from "./intBinary1759.js";
function decimalToIEEE754(decimal) {
    const buffer = new ArrayBuffer(4);
    const floatView = new Float32Array(buffer);
    const intView = new Uint32Array(buffer);
    floatView[0] = decimal;
    const binaryString = intView[0].toString(2).padStart(32, '0');
    return binaryString.split('').map((bit) => bit === '1');
}
function IEEE754ToDecimal(binaryArray) {
    const binaryString = binaryArray.map((bit) => bit ? '1' : '0').join('');
    const buffer = new ArrayBuffer(4);
    const intView = new Uint32Array(buffer);
    const floatView = new Float32Array(buffer);
    intView[0] = parseInt(binaryString, 2);
    return floatView[0];
}

function multiplyIEEE754(num1, num2) {
    let sign1 = num1[0];
    let sign2 = num2[0];

    let exponent1 = num1.slice(1, 9);
    let exponent2 = num2.slice(1, 9);

    let mantissa1 = num1.slice(9);
    let mantissa2 = num2.slice(9);

    let newSign;
    let newExponent;
    let newMantissa;
    newSign = xor(sign1, sign2);
    newExponent = addExponents(exponent1,exponent2);
    newMantissa = multiplyBinaryNumbers(mantissa1,mantissa2).slice(1,24);
    return [newSign].concat(newExponent).concat(newMantissa);
}

function multiplyBinaryNumbers (binaryString1, binaryString2){
    let int1 = binaryArrayToInt([true].concat(binaryString1));
    let int2 = binaryArrayToInt([true].concat(binaryString2));
    return intToBinaryArray(int1 * int2, 48);
}
  

function addExponents(exponent1, exponent2) {
    let b127 = [false, true, true, true, true, true, true, true];
    let diff = isGreaterOrEqual(exponent1,b127) ? sub(exponent1,b127) : sub(b127, exponent1);
    return add(isGreaterOrEqual(exponent1,b127) ? add(exponent2, diff) : sub(diff, exponent2),[false, false, false, false, false, false, false, true]);
}
const decimal1 = 123.456;
const binary1 = decimalToIEEE754(decimal1);
const decimal2 = 123.456;
const binary2 = decimalToIEEE754(decimal2);
const productBinary = multiplyIEEE754(binary1,binary2);
const productInt = IEEE754ToDecimal(productBinary)
console.log(`${decimal1} * ${decimal2} = ${productInt}`); 
console.log(`${binaryArrayToString(binary1)} * ${binaryArrayToString(binary2)} = ${binaryArrayToString(productBinary)}`); 
