export const commaSeparator = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

export const getLength = (number) => {
    return number.toString().length;
}

export const getDenominator = (val) => {
    let one = [1]
    let zeros = new Array(val).fill(0);
    let denominator = one.concat(zeros).join('');
    return parseInt(denominator, 10);
}

export const getRandomAmount = (val) => {
    let randomNumber;
  
    if(val <= 1000000){
        if(val <= 100){
            randomNumber = Math.floor(Math.random()*100) + 10;
        }else{
            let length = getLength(val) - 2;
            let subtract = getDenominator(length);
            randomNumber = Math.floor(Math.random()*val) + subtract;
        }
    }else{
        randomNumber = Math.floor(Math.random()*1000000) + 100000;
    }
    return randomNumber;
} 

export const getRandomPrice = () => {
    return Math.floor(Math.random()*400);
} 

export const getRandomProfitLoss = () => {
    return Math.floor(Math.random()*20) - 10;
} 

export const getRandomLetters = () => {
    let Letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let slots =  Math.floor(Math.random()*3) + 2;
    let a = Array.apply(null, Array(slots)).map(()=>Letters.charAt(Math.floor(Math.random() * Letters.length))).join('')
    return a;
} 

export const getRandomPercent = () => {
    return  (Math.random()*100).toFixed(2);
} 

export const getRandomMove = () => {
    return  +(Math.random()*16).toFixed() + 1;
} 

export const getRandomCellValue = () => {
    return  +(Math.random()*9).toFixed(1) + 1;
} 

export const getArrayOfRounds = (val) => {
    let array = new Array(val).fill(0);
    array.map((el,i) => array[i] = i+1)
    return array;
} 

export const getRandomStrategyVal = () => {
    return  +(Math.random()*1).toFixed() + 1;
} 

const getAllValuesOfAPlayer = (playerResult, option) => {
    let arrayOfValues = [];
    switch(option) {
        case "playerLeft":
            playerResult.map(el => {
                arrayOfValues.push(el.playerLeft.value)
            })
            return arrayOfValues.reduce((a,b)=>a+b);
        case "playerTop":
            playerResult.map(el => {
                arrayOfValues.push(el.playerTop.value)
            })
            return arrayOfValues.reduce((a,b)=>a+b);
    }
    
} 


export const getStrategyModelingResult = (plLeft, plTop) => {
    let plLeftSumOfValues = getAllValuesOfAPlayer(plLeft, "playerLeft");
    let plTopSumOfValues = getAllValuesOfAPlayer(plTop, "playerTop");
    console.log("OOP", plLeftSumOfValues, plTopSumOfValues)
    let sum = +(plLeftSumOfValues + plTopSumOfValues).toFixed();
    return sum;
}