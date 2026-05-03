function sumAll(){
    console.log(arguments);
}

sumAll(1,2,3);

function sumAll2(...nums){
    console.log(arguments);
    const total=nums.reduce((ans,arg)=>ans+arg);
    console.log(total);
}

sumAll2(1,2,3);