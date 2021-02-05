//1st Method
function symmetricDifferenceOne(arr1, arr2) {
    let newArr = []; 
    
    for (let i = 0; i <= arr1.length; i++) {
      if (arr2.indexOf(arr1[i]) === -1) {
        newArr.push(arr1[i]);
      }
    }
    for (let j = 0; j <= arr2.length; j++) {
      if (arr1.indexOf(arr2[j]) === -1) {
        newArr.push(arr2[j])
      }
    }
  
    return newArr.filter(Boolean);
  }

//2nd Method
function symmetricDifferenceTwo(arr1, arr2) {
  return arr1
  .concat(arr2)
  .filter(val => !arr1.includes(val) || !arr2.includes(val));
}