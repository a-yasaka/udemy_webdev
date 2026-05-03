const person={
    firstN: "Taro",
    lastN: "Yamada",
    fullN: function(){
        return `${this.firstN} ${this.lastN}`;
    }
}

console.log(person.fullN());