const getSquare = (num) => {
    return Math.pow(num,2)
};
const getRoot = (num) => {
    return Math.sqrt(num)
};
console.log(getRoot(-100))
module.exports = {getSquare,getRoot};