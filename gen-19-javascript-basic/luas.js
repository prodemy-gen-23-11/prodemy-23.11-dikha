
function luasPersegi(panjang) {
    console.log("Luas Persegi dengan panjang:",panjang, " adalah: ",panjang*panjang) 
}

function luasPersegiPanjang(panjang, lebar) {
    console.log("Luas Persegi Panjang dengan Panjang:", panjang, " . Lebar: ",lebar, "Adalah: ",panjang*lebar)
}

function luasSegitiga(alas, tinggi){
    console.log("Luas Segitiga dengan Alas: ",alas, " . dan Tinggi: ", tinggi, " . Adalah: ",0.5*alas*tinggi)
}

function luasLingkaran(r) {
    console.log("Luas Lingkaran dengan Jari-jari: ",r, " . adalah: ",Math.PI*Math.pow(r,2))
}

luasPersegi(2)
luasPersegiPanjang(5,10)
luasSegitiga(10, 5)
luasLingkaran(10)