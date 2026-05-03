// const cats=['tora','sakura','mugi'];
// cats.forEach(function (el){
//     console.log(el);
// });

// for(el of cats){
//     console.log(el);
// };

movies=[
    {title:'Alien',score:90},
    {title:'Goonies',score:40}
];

for(movie of movies){
    console.log(`${movie.title}は${movie.score}点でやんす！`);
}