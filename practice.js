const countries=()=>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res=>res.json())
    .then(data=>getcountries(data))
}
const getcountries=data=>{
const display=document.getElementById('country')
data.forEach(country => {
    const div=document.createElement('div');
    div.classList.add('country');
    div.innerHTML=`<h4>${country.name}</h4>
    <p>${country.capital}</p>
    <button onclick="countrydetail('${country.name}')">Country-Details</button>`
    display.appendChild(div);
        
    
    
});
}
const countrydetail=user=>{
    const url=`https://restcountries.eu/rest/v2/name/${user}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>detail(data[0]))
}
const detail=data=>{
    const adder=document.getElementById('country-detail');
    adder.innerHTML=`
    <h5>${data.name}</h5>
    <p>${data.capital}</p>
    <p>${data.population}</p>
    <img width="200px" src="${data.flag}">
    
    
    `;
}