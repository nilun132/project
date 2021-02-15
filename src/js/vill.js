function showdata_vill(data_vill) {
    let village = document.querySelector('#village');
    data_vill.forEach(val => {
        let myvill = document.createElement('li');
        myvill.innerText = `${val.vill_name} ${val.vill_name_en}`;
        village.appendChild(myvill);
    });
}
fetch('https://address.mounoydev.com/v1/laos/get-village/103')
    .then(Response_vill => Response_vill.json())
    .then(data_vill => showdata_vill(data_vill));
