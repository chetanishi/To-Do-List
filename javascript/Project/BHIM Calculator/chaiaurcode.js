const form=document.querySelector('form');

form.addEventListener('submit',function(e)
{
    e.preventDefault();

    const height=parseInt(document.querySelector('#height').value);

    const weight= parseInt(document.querySelector('#weight').value);

    const results=document.querySelector('#results')

 if(height==='' || height < 0 || isNaN(height))
 {
    result.innerHTML=`Plz Give A Valid Height ${height}`;
    result.style.color='red';
 }

 else if(weight==='' || weight<0 || isNaN(weight))
 {
    const result= `Plz give a valid weight ${weight}`;
   
 }

 else{
     const bmi = (weight / ((height * height) / 10000)).toFixed(2)
     results.innerHTML = `<span>${bmi}</span>`;
 }



});