const searchfood=()=>{
    const getvalue=document.getElementById('input-field');
    const getvaluetext=getvalue.value;
    getvalue.value='';
    if(getvaluetext == ''){
        const add=document.getElementById('adder');
        const div=document.createElement('div');
        div.innerHTML=`<p>Hey,type Something</p>
        `
        add.appendChild(div);
    }
   else{
    const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${getvaluetext}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>display(data.meals))
   }
   
}
const display=meals=>{
    const add=document.getElementById('adder');
    add.innerHTML='';
    
    meals.forEach(meal => {
        const div=document.createElement('div')
        div.classList.add('col');
        // jdi string hto tahale (``)backtrick use krte hto .id numeber tai use kra hoi ni 
        div.innerHTML=`   <div onclick=" displayone(${meal.idMeal})" class="card h-100">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
          <p class="card-text">${meal.strInstructions.slice(0,300)}.</p>
        </div>
      </div>`
      add.appendChild(div);
    });
}
const displayone=id=>{
    
    const url=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>displaytwo(data.meals[0]))

}
const displaytwo=data=>{
     const display=document.getElementById('display');
     display.innerHTML='';
         const div=document.createElement('div');
    div.innerHTML=`
    <div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${data.strMealThumb}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${data.strMeal}</h5>
        <p class="card-text">${data.strInstructions.slice(0,200)}.</p>
        
      </div>
    </div>
  </div>
</div>`
    display.appendChild(div);

}