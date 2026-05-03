const exams=[80,75,60,90,95];

console.log(exams.every(exam=>exam>50));

console.log(exams.some(exam=>exam>90));

function allEvens(hairetsu){
    return hairetsu.every(n=>n%2===0);
}

console.log(allEvens(exams));