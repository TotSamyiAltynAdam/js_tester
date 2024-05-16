Array.prototype.snail = function(rowsCount, colsCount) {
    if(rowsCount * colsCount !== this.length) return [];
    let res = new Array(rowsCount).fill(null).map(() => []);
    for(let row = 0; row < colsCount; row++){
        for(let col = 0; col < rowsCount; col++){
            res[(row & 1) ? rowsCount - 1 - col : col].push(this[row * rowsCount + col]);
        }
    }
    return res;
};

const arr = [1,2,3,4];
const newArr = arr.snail(1,4); // [[1,2,3,4]]
console.log(newArr);