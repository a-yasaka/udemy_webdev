setTimeout(()=>{
    console.log('yahoo!');
},3000);

const id=setInterval(()=>{
    console.log('yahoo repeat!');
},1000);

setTimeout(()=>{
    clearInterval(id);
},10000);