// Koordinat sekolah (ganti sesuai lokasi sebenarnya)

const map = L.map('map').setView([-7.3313,110.5082],18);

// OpenStreetMap

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{

    attribution:'© OpenStreetMap'

}).addTo(map);


// Marker Lokasi

const locations=[

{
name:"Gerbang Utama",
lat:-7.3315,
lng:110.5080,
desc:"Pintu masuk utama sekolah"
},

{
name:"Ruang Guru",
lat:-7.3312,
lng:110.5078,
desc:"Tempat guru bekerja"
},

{
name:"Perpustakaan",
lat:-7.3311,
lng:110.5082,
desc:"Tempat membaca buku"
},

{
name:"Laboratorium Komputer",
lat:-7.3308,
lng:110.5079,
desc:"Praktikum komputer"
},

{
name:"Kantin",
lat:-7.3317,
lng:110.5084,
desc:"Tempat makan siswa"
},

{
name:"Mushola",
lat:-7.3314,
lng:110.5085,
desc:"Tempat ibadah"
},

{
name:"Lapangan",
lat:-7.3310,
lng:110.5086,
desc:"Lapangan upacara dan olahraga"
}

];


locations.forEach(function(item){

L.marker([item.lat,item.lng])

.addTo(map)

.bindPopup(
"<h3>"+item.name+"</h3>"+
"<p>"+item.desc+"</p>"
);

});

function zoomToLocation(lat,lng){

map.setView([lat,lng],20);

}