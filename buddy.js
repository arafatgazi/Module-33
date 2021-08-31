const getbuddies=()=>{
    fetch('https://randomuser.me/api/?results=10')
    .then(res=>res.json())
    .then(data=>display(data))

}
const display=data=>{
    const buddies=data.results;
    const add=document.getElementById('buddy')
    for(const buddy of buddies){
        const p=document.createElement('p');
        p.innerText=`name:${buddy.name.first} ${buddy.email}`
        add.appendChild(p);
    }

}