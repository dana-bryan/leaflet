var mymap = L.map('southflorida').setView([26.653026, -80.200786], 11.22);

L.tileLayer('https://api.mapbox.com/styles/v1/danabryan/ck2xhan9a0jws1cnzrcgzrpnv/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZGFuYWJyeWFuIiwiYSI6ImNrMnhncjBjdDBiYjYzanJzNjEyYWNxeXMifQ.7zaDEQ3kz0MDRkds2wBVXQ', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18
}).addTo(mymap);

let home = L.marker([26.785803, -80.270320]).addTo(mymap);
let mall = L.marker([26.673164, -80.246437]).addTo(mymap);
let church = L.marker([26.619941, -80.124041]).addTo(mymap);
let waterpark = L.marker([26.771447, -80.107455]).addTo(mymap);

home.bindPopup("<b>Home</b><br>This is where I lived from ages 14 to 18. It is also where I spent most of my time.").openPopup();

mall.bindPopup("<b>Wellington Mall</b><br>I went shopping here with friends and family.");

church.bindPopup("<b>Greenacres Church of God of Prophecy</b><br>Every Sunday, I would go to church here.");

waterpark.bindPopup("<b>Rapids Water Park</b><br>My sister used to take me to this water park for my birthday. It has 42 slides and attractions!");
