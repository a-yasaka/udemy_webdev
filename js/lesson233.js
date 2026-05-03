user={
    firstName:'tora',
    lastName:'yasaka'
}

function fullName({firstName,lastName}){
    return `${lastName} ${firstName}`;
}

console.log(fullName(user));