function makeBetweenFunc(min,max){
    return function(num){
        return num>= min && num<=max;
    }
}

console.log(makeBetweenFunc(50,100)(70));