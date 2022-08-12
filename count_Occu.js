
const findCount = (N, K, Arr) => 
{
     let c=0;
    for(let i=0 ; i<N ; i++ ){
      if(Arr[i] === K){
         c+=1;
          } 
             }
              return c; 
};