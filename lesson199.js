let guess=prompt('せいやのギャグは？');
const ans='イニミニレカピカレーライオニメカチカロニパパランパンプッシュ';
console.log(ans.slice(testGuess(guess)));

function testGuess(word){
    let i;
    for(i=0; (i<word.length) || (i<ans.length); i++){
        if(guess[i]!==ans[i]){
            break;
        }
    }
    return i;
}