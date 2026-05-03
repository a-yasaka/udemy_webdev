function greet(name,msg='Hi',suffix='!!'){
    return `${msg} ${name}${suffix}`;
}

console.log(greet('yamada','yahoo!','.'));
console.log(greet('yamada'));
console.log(greet('yamada',undefined,'?'));
// console.log(greet('yamada',,'????'));