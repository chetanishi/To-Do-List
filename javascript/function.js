function myfun(name)
{
   
    return `${name}`
}

// console.log(myfun('chetan'));


function fun(num1,num2)
{
    return num1+num2
    // console.log(num1*num2);
    
}

// console.log(fun(2,3));


// single parameter give multiple argument

function myfun1(...num)
{
    return num
}

// console.log(myfun1(10,20,30,40));


myobj={name:'chetan',hobby:'cricket',age:22}

function myobjfun(anyobj)
{
    // return anyobj.myobj
    console.log(`The name is ${anyobj.name} and hobby is ${anyobj.hobby}`);
    
}

// myobjfun(myobj)

// Nested function

function fun1()
{
    let name='outer fun'
    function fun2()
    {
        let name1='inner fun'
        console.log(name);
        console.log(name1);
        
    }
   
    
    fun2()
}

// fun1()


// arrow functionṇ

let arrow= (num1,num2) =>
{
    return num1+num2
    
}


// console.log( arrow(4,1));

// IIFE

// (function fun2(name)
// {
//     console.log(`Hello ${name}`)
// }
// ('chetan'))




function myfun(name='xyz')
{
    // console.log('Hello');
    return `hello my name is ${name}` ;
}

//    myfun();
    // console.log(myfun());


    // function are created in object.
    const obj=
    {
        name:'abc',
        email:'abc@gmail.com',
        city:'surat',
        myfun: function()
        {
            console.log(this);
            console.log(`Hello my name is ${this.name}`);
             

        }
    }

    // obj.myfun();
    // obj.name='pqr';
    // obj.myfun();


   function objfun(anyobj)
   {
      console.log(`the name of city : ${anyobj.city}.`);
   }

    // objfun(obj);

  // Arrow function

  const arrowfun=() =>{
    console.log('hello');
  }
  
    // arrowfun();

    const myarrowfun = (name) =>
    {
        return console.log(`the name ${name}`);
    }

    // myarrowfun('chetan');

    const inlinefun = (num1,num2) =>  ({sum : num1+num2})
        // console.log(inlinefun(2,1));


        // const fun= function()
        // {
        //      return `Hii everybody`;
        // }

        //    fun();    // function only excuted not print any value beacuse we doesn't use a print statment.
        // console.log(fun());


        const num=[10,20,30,40];
        for (const iterate in num) {
           
            // console.log(key,':',num[iterate]); 
            //   console.log(num[iterate]);   
            
        }


        for (const element of num) {
            // console.log(element);
        }



        const myobj01=  {"name":'abc',    "age":21}
        for (const key in myobj01) {
        //    console.log(key,':',myobj01[key]);
        }

        for (const key of Object.keys(myobj01)) {

            // console.log(key,':',myobj01[key]);
        }

       