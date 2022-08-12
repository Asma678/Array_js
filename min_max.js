function arrayMin(arr) {
    let value = 0;
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
          value = arr[i];
          arr[i] = arr[j];
          arr[j] = value;
        }
      }
    }
    return arr[0];
  }
  
  function arrayMax(arr) {
    let value = 0;
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] < arr[j]) {
         value = arr[i];
          arr[i] = arr[j];
          arr[j] = value;
        }
      }
    }
    return arr[0];
  }
