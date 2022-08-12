const findEvenOdd = (N, Arr) => 
{
    let oddN=0;
    let evenN=0;
    let B=[2];
    for(let i=0; i<N; i++){
      if(Arr[i]%2 ===0 ){
      evenN+=Arr[i];
    }
    else{
      oddN+=Arr[i]
    }
    }
    B[0]=evenN;
    B[1]=oddN;
    return B;
    
};
 