const feline={family:'ネコ科',legs:4};
const canine={family:'イヌ科',bark:true};
const catDog={...canine,...feline};
const dogCat={...feline,...canine};

console.log(catDog);
console.log(dogCat);

const formData={email:'hoge@hoge.com',password:'secret',username:'hoge'};

// formData.id='1234';
// formData.isVerified=false;

const newFormData={...formData,id:'1234',isVerified:false};

console.log(formData);
console.log(newFormData);