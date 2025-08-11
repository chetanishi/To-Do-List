// const promise=new Promise(function(resolve,reject){

//     setTimeout(function(){
//         console.log("Good Morning Everybody");
//          resolve();
//     } ,1000)        // Promise are Execute after One Second.
// })

// promise.then(function(){
//     console.log('Task is completed');
// })

        // OR

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('Async Task is completed');
//         resolve();
//     },1000)
// }).then(function(){
//     console.log("Ok function is working");
// })


// const promiseOne= new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({'Name':'Chetan','Email':'abc@gmail.com'})
//     } ,1000)
// }).then(function(data){
//         console.log(data);
//         console.log(data.Name);
//         console.log(data.Email);
// })

new Promise(function(resolve,reject){
    setTimeout(function(){
    let error=false;
    if(!error)
    {
        resolve({name:'chetan',age:21,Email:'abc@gmail.com'})
    }
    else{
        console.log("ERROR : Something went wrong");
    }
    },1000)
}).then(function(data){
    console.log(data);
    return data;
}).then(function(obj){
    console.log(obj.name);
    return obj;
}).then(function(myobj){
    console.log(myobj.Email);
    return myobj;
}).then(function(Age){

    console.log(Age.age);

}).catch(function(){
    console.log("Error: is occured");

}).finally(function(){
    
    console.log("Either promise resolve or reject");
})