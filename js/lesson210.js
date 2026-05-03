// const myMath={
//     PI: 3.14,
//     square: function(num){
//         return num * num;
//     },
//     cube: function(num){
//         return num * num * num;
//     }
// }

const myMath={
    PI:3.14,
    square(n){return n*n},
    cube(n){return n*n*n}
}

console.log(myMath.PI);
console.log(myMath.square(5));
console.log(myMath.cube(3));