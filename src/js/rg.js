function showdata(data){
    let region = document.querySelector('#region');
    data.forEach(val => {
        let myEl = document.createElement('li');
        myEl.innerText = `- ${val.pr_name} (${val.pr_name_en})`;
        region.appendChild(myEl);
    })
}

fetch('https://address.mounoydev.com/v1/laos/get-province')
    .then(Response => Response.json())
    .then(data => showdata(data));