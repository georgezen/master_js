'use strict';

function birthdayCakeCandles(candles) {
    let max = 0;
    let cont = 0;
    let igual = 0;
    
    if(candles.length >= 1 && candles.length <= Math.pow(10,5)){
        
        max = Math.max(...candles);
        for(let i = 0; i < candles.length;i++){
            if(candles[i] >= 1 && candles[i] <= Math.pow(10,7)){
                if(max == candles[i]){
                    cont ++;
                }
            }
        }
    }
    
    return cont;

}

birthdayCakeCandles([3,2,1,3]);