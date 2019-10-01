export const commaSeparator = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

export const getlength = (number) => {
    return number.toString().length;
}

export const getDenominator = (val) => {
    let one = [1]
    let zeros = new Array(val).fill(0);
    let denominator = one.concat(zeros).join('');
    return  parseInt(denominator, 10);
}
