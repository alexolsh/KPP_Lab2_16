var map = L.map('map').setView([49.206840, 28.286109], 14);

L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=KOPCr68ziDMCDbZRtAD7', {
  maxZoom: 18,
  tileSize: 512,
  zoomOffset: -1,
}).addTo(map);

async function getWeather(lat, lon) {
  const apiKey = '53d7149f0bbe1e9ad79bf54fd9b0049f';
  const request = await fetch('https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={apiKey}');
  const response = await request.json();
  console.log(response);
}

var markerIcon = L.icon({
  iconUrl: 'assets/leaf-green.png',
  iconSize: [50, 50],
  iconAnchor: [25, 25],
})

L.marker([49.206840, 28.286109], {
  title: 'Zemlynka',
  icon: markerIcon
}).addTo(map);

L.marker([49.233957512047716, 28.45890970478878], {
  title: 'Trahodrom',
  icon: markerIcon
}).addTo(map);

 getWeather(49.206840, 28.286109);
