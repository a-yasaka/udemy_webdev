numbers=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

console.log(numbers.reduce((first,second)=>first+second));

//3の倍数で最大の値

const maxByThree=numbers.reduce((initial,candidate)=>{
    if(initial%3!==0 && candidate%3!==0){
        return NaN;
    }else if(initial%3===0 && candidate%3===0){
        return Math.max(initial,candidate);
    }else if(initial%3===0){
        return initial;
    }else if(candidate%3===0){
        return candidate;
    }
});

console.log(maxByThree);