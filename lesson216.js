// const cats=['tora','sakura','mugi'];
// const capCats=cats.map(function(cat){return cat.toUpperCase();});
// for(capCat of capCats){
//     console.log(capCat);
// }

const cats=['tora','sakura','mugi'];
const catCap=function(cat){
    return cat.toUpperCase();
}
const capCats=cats.map(catCap);
for(capCat of capCats){
    console.log(capCat);
}