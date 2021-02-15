
function showdata_dr(data_dr){
    let district = document.querySelector('#district');
    data_dr.forEach(val => {
        let mydr = document.createElement('li');
        mydr.innerText = `${val.dr_name} ${val.dr_name_en}`;
         district.appendChild(mydr);
    })
}
fetch('https://address.mounoydev.com/v1/laos/get-dristric/1')
    .then(Response_dr => Response_dr.json())
    .then(data_dr => showdata_dr(data_dr));

