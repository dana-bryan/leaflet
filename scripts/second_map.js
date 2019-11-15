var mymap = L.map('floridattractions').setView([27.360351, -80.149896], 6.3);

L.tileLayer('https://api.mapbox.com/styles/v1/danabryan/ck2xhan9a0jws1cnzrcgzrpnv/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZGFuYWJyeWFuIiwiYSI6ImNrMnhncjBjdDBiYjYzanJzNjEyYWNxeXMifQ.7zaDEQ3kz0MDRkds2wBVXQ', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18
}).addTo(mymap);

for (let i=0; i< places.length; i++ ) {
  L.marker( [places[i].latitude, places[i].longitude ] )
  .bindPopup( '<h3>' + places[i].placeName + '</h3>' + '<p>' +
      places[i].description + '</p>')
  .addTo( mymap );
}
