const fruit=['apple','banana','mango'];
const myfruit=fruit.forEach(function(fruits){
    // console.log(fruits);
})

// console.log(myfruit);

const filter=fruit.filter(function(fruits){
    return fruits==='apple';
//    return console.log(fruits==='apple');
     
})

// console.log(filter);

const string=[];

fruit.forEach((fruits) => {
  if(fruits==='apple' || fruits==='mango')
  {
    string.push(fruits);
  }

})
// console.log(string);

const myarray=[
  {name:'abc',age:22,email:'abc@gmail.com'},
  {
    name:'pqr',age:26,email:'pqr@gamil.com'
  },

  {name:'xyz',age:22,email:'xyz@gmail.com'}
]

const newarray=myarray.filter((array)=> array.age==22 && array.email==='abc@gmail.com')

// console.log(newarray);


// Map

const num=[1,2,3,4,5,6,7,8,9,10];

const newop=num.map((mynum)=> mynum+5)
  // console.log(newop);

// Chaining.
const newnum=num
            .map((mynum)=> mynum+10)
            .map((mynum)=> mynum*5)
            .filter((mynum)=> mynum>40)

            // console.log(newnum);

      // reduce

      const num1=[1,2,3,4,5,6];
      const initialval=0;

      const reduce=num1.reduce((acc,num)=> acc+num,initialval);
      // console.log(reduce);

      const myobj=[
        {
          subject:'Java',
          price:199
        },
        {
          subject:'Cpp',
          price:599
        },
        {
          subject:'Python',
          price:999
        }
      ]

       const sum=myobj.reduce((acc,myobj)=> {return acc+myobj.price},0)
      //  console.log(sum);