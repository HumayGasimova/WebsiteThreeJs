export const commaSeparator = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

export const getRandomCoordianteX = () => {
    return  Math.random()*window.innerWidth;
} 

export const getRandomCoordianteY = () => {
    return  Math.random()* (window.innerHeight - 35);
} 

export const getRandomVelocity = () => {
    return  (Math.random() - 0.5) * 50;
} 

