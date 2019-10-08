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
    return  parseInt(denominator, 10);
}

export const getRandomAmount = (val) => {
    let length = getLength(val) - 2;
    let subtract = getDenominator(length);

    return  Math.floor(Math.random()*val) + subtract;
} 
