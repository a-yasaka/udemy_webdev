numbers=[1,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

const newNumbers=numbers.filter((n)=>{
    return n>15;
});

console.log(newNumbers);

const newNumbers2=numbers
    .filter(n=>n>15)
    .map(n=>n*2);

console.log(newNumbers2);