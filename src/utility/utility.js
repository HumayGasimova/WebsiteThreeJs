export const commaSeparator = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

export const getRandomCoordianteX = (radius) => {
    return  Math.random()* (window.innerWidth - radius * 2) + radius;
} 

export const getRandomCoordianteY = (radius) => {
    return  Math.random()* ((window.innerHeight - 35) - radius * 2) + radius;
} 

export const getRandomVelocity = () => {
    return  (Math.random() - 0.5) * 50;
} 

export const getRandomRadius = () => {
    return  (Math.random() * 99) + 1;
} 

export const getArrayOfCircles = (val) => {
    let array = new Array(val).fill(0);
    // array.map((el,i) => array[i] = i+1)
    return array;
} 

export const getRandomColor = () => {
    return  Math.random() * 255;
} 

export const getRandomAlfa = () => {
    return  Math.random();
} 

export const getArrayOfDots = (val) => {
    let array = new Array(val).fill(0);
    let updateChosen;
    // array.map((el,i) => array[i] = i+1)
    return array.map((el,i) => {
        if(i === 0){
            updateChosen = true;
        }else{
            updateChosen = false;
        }
        return {
            id: i + 1,
            chosen: updateChosen
        }
    });
} 
