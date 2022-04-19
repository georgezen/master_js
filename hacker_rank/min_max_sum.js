'use strict';

function miniMaxSum(arr) {
    // Write your code here
    let restador = 0;
    let max= 0,min= 0;
    let result = bubbleSort(arr);
    let igual = 0;
    let contador_igual = 0;
    for(let i = 0;i <  result.length;i ++){
        
        if(result[i] >= 1 &&result[i] <= Math.pow(10, 9)){
            if(result[i] != result[0]){
            min += result[i];
            } 
        
            if(result[i] != result[4]){
                max += result[i];
            }  
            
            igual = result[0];
            if(igual == result[i]){
                contador_igual ++;
                igual = result[i];
            }
        }
        
    }
    if(contador_igual == result.length){
        console.log(result[0] * 4+" "+result[0] * 4);
    }else{
        
        console.log(max+" "+min);
    }
}

const bubbleSort = arr => {
  const l = arr.length;
  for (let i = 0; i < l; i++ ) {
    for (let j = 0; j < l - 1 - i; j++ ) {
      if ( arr[ j ] > arr[ j + 1 ] ) {
        [ arr[ j ], arr[ j + 1 ] ] = [ arr[ j + 1 ], arr[ j ] ];
      }
    }
  }

  return arr;
};


miniMaxSum([1,2,3,4,5]);