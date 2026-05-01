// try{
//     hello.toUpperCase();
// }catch{
//     console.log('errorが起きた');
// }

// console.log('何はともあれ実行した');

function shout(msg){
    try{
        console.log(msg.toUpperCase().repeat(3));
    }catch(e){
        console.log(e);
        console.log('文字列入れろ');
    }
}

shout(12345);