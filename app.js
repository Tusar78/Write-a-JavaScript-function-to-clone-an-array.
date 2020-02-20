// Es5 Version
function arrClone (arr) {
    return arr.slice(0)
}
console.log(arrClone([1,2,3,4]))
console.log(arrClone([1,2,[3,4]]))

// ES6 Version
let arrClone = inp => inp.slice(0)
console.log(arrClone([1,2,3,4]))
console.log(arrClone([1,2,[3,4]]))
