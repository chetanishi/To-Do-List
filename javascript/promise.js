const firstpromise=new Promise(function(resolve,reject)
{
    setTimeout(function(){
        console.log('Asyn task is completed')
        resolve()
    }, 2000)
})

firstpromise.then(function(){
    console.log('promised consumed');
    
})


const second=new Promise(function(resolve,reject)
{
    setTimeout(function(){
        console.log('Asynchronous task is executed successfully');
        resolve();
        
    }, 3000)
})

second.then(function(){
    console.log('promised are consumed');
    
})