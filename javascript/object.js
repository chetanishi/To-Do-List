const obj={
      name:'abc',
      email:'abc@gmail.com',
      city :'surat'
}


const obj1=obj;
// console.log(obj);
// console.log(obj1);

 obj1.name='pqr'
// console.log(obj1.name);
// console.log(obj.name);


// console.log(obj.name);
// console.log(obj['name']);

Object.freeze(obj);
obj.name='xyz';
console.log(obj.name);



//   obj.myfun= function()
//  {
//     return `hello my name is ${this.name}`;
//  }  

//  console.log(obj.myfun());

//  myfun function return all information from obj variable.

//  obj.myfun = function() {
//     return `Info: ${Object.entries(this)
//         .filter(([key]) => key !== 'myfun')
//         .map(([key, value]) => `${key}: ${value}`)
//         .join(', ')}`
// }

// console.log(obj.myfun());