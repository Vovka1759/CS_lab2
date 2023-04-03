export function intToBinaryArray(n, size) {
  let x = 0;
  while (n > 2**x) {
    if(size<x+1){
      return [false];
    }
    x++;
  }
    let binary = [];
    while (n > 0) {
      binary.push(n % 2 === 1);
      n = Math.floor(n / 2);
    }
    if (binary.length === 0) {
      binary.push(false);
    }
    return new Array(size - binary.length).fill(false).concat(binary.reverse());
}

export function binaryArrayToInt(binaryArray) {
    let n = 0;
    for (let i = binaryArray.length - 1; i >= 0; i--) {
      if (binaryArray[i]) {
        n += Math.pow(2, binaryArray.length - 1 - i);
      }
    }
    return n;
}
export function binaryArrayToString(binaryArray) {
  return binaryArray.map(b=> b? "1":"0").join('');
}
export function xor(bit1, bit2) {
  return (bit1 && !bit2) || (!bit1 && bit2);
}
export function add(a, b) {
  if (a.length != b.length) {
    return [false];
  }
  let carry = false;
  const result = Array(a.length).fill(false);
  for (let i = a.length - 1; i >= 0; i--) {
    if (!xor(a[i], b[i])) {
      if (a[i]) {
        result[i] = carry;
        carry = true;
      }
      else{
        result[i] = carry;

          carry = false;
 
      }
    }
    else{
      if (carry) {
        result[i] = false;
      }
      else{
        result[i] = true;
      }
    }
  }
  if (carry) {
    result.unshift(true);
  }
  return result;
}
export function sub(a, b) {
  if (!isGreaterOrEqual(a,b)) {
    return[false]
  }
  let borrow = false;
  let result = a.slice();
  for (let i = a.length - 1; i >= 0; i--) {
    if (!xor(result[i],b[i])) {
      result[i] = borrow;
    }
    else{
      if (result[i]) {
        if (borrow) {
          result[i] = false;
          borrow = false;
        }
      }
      else{
        result[i] = !borrow; 
        borrow = true;
      }
    }
  }
  return result;
}
export function isGreaterOrEqual(a, b) {
  if (a.length > b.length) {
    return true;
  } else if (a.length < b.length) {
    return false;
  }
  for (let i = 0; i < a.length; i++) {
    if (xor(a[i],b[i])) {
      if (b[i]==true) {
        return false;
      }
      else{
        return true;
      } 
    }
  }
  return true;
}

export function multiply(a, b) {
  if (a.length != b.length) {
    return [false];
  }
  let result = new Array(a.length).fill(false).concat(b);
  for (let i = 0; i < b.length; i++) {
    console.log(`i=${i} result = ${result}\na = ${a.concat(new Array(b.length).fill(false))}`);
    if (result[result.length - 1]) {
      result = add(result, a.concat(new Array(result.length - b.length).fill(false)))
    }
  
  result.pop();
  result.unshift(false);
  }
  return result;
}