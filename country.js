const getcountry=()=>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res=>res.json())
    .then(data=>countries(data))
}
const countries=data=>{
// const all=data.name;
const adder=document.getElementById('country');
// for(const country of data){
//     const p=document.createElement('p');
//     p.innerText=`${country.name} ${country.capital}`;
//     adder.appendChild(p);
// }
// for loop er poriborte 
data.forEach(country => {
    const div=document.createElement('div');
    div.classList.add('country');
    // const h3=document.createElement('h3');
    // h3.innerText=country.name;
    // div.appendChild(h3);
    // const p=document.createElement('p')
    // p.innerText=` ${country.capital}`;
    // div.appendChild(p);
    // load country er oi parameter hbe jeta variable ...ar jdi variable na thake tahale age double coutation thakle single courtation die declare krte hbe 
    div.innerHTML=`<h3>${country.name}</h3>
    <p>${country.capital}</p>
    <button onclick="loadcountryname('${country.name}')">Details</button>`
    adder.appendChild(div);
    
});

}
const loadcountryname=name=>{
    const url=`https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>getdisplay(data[0]));
}
const getdisplay=get=>{
    const countrydiv=document.getElementById('country-detail');
    // console.log(get)
    countrydiv.innerHTML=`<h5>${get.name}</h5>
    <p>${get.population}</p>
    <img src="${get.flag}">`

};