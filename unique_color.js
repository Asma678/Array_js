function Unique_Shirts (arr,N) {

    let unique_shirts = arr.filter((value) =>arr.indexOf(value)===arr.lastIndexOf(value));
      return unique_shirts.length;
  }
  