// Es5 Version
function arrClone (arr) {
    return arr.slice(0)
}
console.log(arrClone([1,2,3,4]))
console.log(arrClone([1,2,[3,4]]))