const loadquotes=() =>{
    fetch('https://api.kanye.rest/')
    .then(res =>res.json())
    .then(data=>display(data))
}
const display= quote=>{
const quoteelement=document.getElementById('quote');
quoteelement.innerText=quote.quote;
}