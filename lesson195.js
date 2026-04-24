let command=prompt('コマンド？new,list,delete,quit');
let todos=[];

while(command!=='quit'){
    switch(command){
        case 'new':
            new_todo=prompt('what do you add to list?');
            todos.push(new_todo);
            console.log('todoを追加しました');
            break;
        case 'list':
            for(let i=0; i<todos.length; i++){
                console.log(`${i+1}:${todos[i]}`);
            }
            break;
        case 'delete':
            delete_id=prompt('whitch do you delete?');
            console.log(`${todos[delete_id]}を削除します。`);
            todos.splice(delete_id-1,1);
            break;
    }
    command=prompt('コマンド？');
}