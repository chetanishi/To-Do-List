let myarray01=[10,20,30,40];
// console.log(myarray01);
// console.log(Array.isArray([10]));
// console.log(typeof(myarray01));   //Object


let a=[1];
let b=[2];
let c=[3];
let d=[...a,...b,...c];
// console.log(d);



let x=10;
let y=20
// console.log(Array.from([x,y]));


    
   let myarray=[10,20,30,40];
   let myarray1=[50,60,70];
   let myarray2=[80,90,100];

  //  console.log(myarray.concat(myarray1));
  //  console.log(...myarray,...myarray1,...myarray2);
  //  console.log(Array.isArray([10]));
  //  console.log(myarray.splice(0,0,4));
  //  console.log(myarray);

  //  console.log(myarray[0]);
  //  console.log(myarray.push(50));
  //  console.log(myarray.pop());
  //  console.log(myarray.unshift(5));
  //  console.log(myarray);
  //  console.log(myarray.shift());


  let newarray=[10,20,30,40];
for(let array in newarray)
{
   //  console.log(newarray[array]);
}

for( let i=0; i<newarray.length; i++)
  console.log(newarray[i]);



//  Callback function.

// function hello(name){
//             console.log("Hello ",name);
//         }

//  function greet(callback)
//         {
//             callback('chetan');
//         }

//         greet(hello);