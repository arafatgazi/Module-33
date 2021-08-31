const searchfood=()=>{
    const formfield=document.getElementById('input-field');
    const formfielstext=formfield.value;
    console.log(formfielstext);
    formfield.value='';
    if(formfielstext ==''){
        const div1=document.createElement('div');
        div1.innerHTML=`<p class="mx-auto">Please type something</p>`
        display.appendChild(div1);
    }
   else{
    const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${formfielstext}`;
    fetch(url)
    .then(res=>res.json())
    .then(data =>  displatsearchresult(data.meals))
   }
}
const displatsearchresult=meals=>{
    const display=document.getElementById('adder');
    // je innerhtml add hbe ta remove hoe jabe jdi onno ekta search kri 
    // display.innerHTML='';
    // or 
    display.textContent='';
      if(meals.length== 0){
            const div1=document.createElement('div');
            div1.innerHTML=`<p>Page not found</p>`
            display.appendChild(div1);
        
        }
       

  else{
    meals.forEach(meal => {
      
        
        //   else{
            const div=document.createElement('div')
            div.classList.add('col');
            // jdi string hto tahale (``)backtrick use krte hto .id numeber tai use kra hoi ni 
            div.innerHTML=`   <div onclick="loadmealdetail(${meal.idMeal})" class="card h-100">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${meal.strMeal}</h5>
              <p class="card-text">${meal.strInstructions.slice(0,300)}.</p>
            </div>
          </div>`
          display.appendChild(div);
        
        });
  }

   
}
const loadmealdetail=idmel=>{
const url=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idmel}`
fetch(url)
.then(res=>res.json())
.then(data=> displaymeal(data.meals[0]));
}
const displaymeal=meal=>{
    const mealdetails=document.getElementById('display');
    const div=document.createElement('div');
    div.innerHTML=` <div class="card mb-3" style="max-width: 540px;">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="${meal.strMealThumb}" class="img-fluid rounded-start" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
          <p class="card-text">${meal.strInstructions.slice(0,100)}.</p>
        </div>
      </div>
    </div>
  </div>`
  mealdetails.appendChild(div);

}
