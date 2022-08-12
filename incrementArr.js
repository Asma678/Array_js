const Inc_Arr = (array, N) => {
  
    let arr = [];
    for (let i = 0; i < N; i++) {
      arr.push(array[i] + 1);
    }
    console.log(arr.join(" "));
  };
