export default function appendToEachArrayValue(array, appendString) {
    const returnArray =[];
    for (var idx of array) {
      returnArray.push(appendString + idx);
    }
  
    return returnArray;
  }