const array=[1,2,3,4];
const array1=[5,6,7];
const array2=[8,9];

// console.log(array.splice(0,3,5));
// console.log(array);


// function myfun(...num)
// {
//     let num1=0;
//     for(let i=0; i<num.length; i++)
//       num1=num1+num[i];
//      return num1;
// }

// console.log(myfun(10,20));

const obj={name:'abc',age:22,email:'abc@gmail.com'}
// function myfun(myobj)
// {
//   for(let key in myobj)
//     console.log(key,':',myobj[key]);
// }


//  myfun(obj);


const stringarry=['a','b','c']
let i=0;
// while(i<stringarry.length)
// {
//   console.log(stringarry[i]);
//   i++;
// }

// do{
//   console.log(stringarry[i]);
//   i++;
// }
//  while(i<stringarry.length);

//  console.log(a);
//  var a='hello';
 
let myarray=[10,20,30];

let m=myarray.map((num) => num+10)
.filter((num)=> num>=30)
.reduce((num,acc)=> num+acc,0);

// console.log(m);

myarray.forEach(function myfun(num){
  console.log(num);
})


