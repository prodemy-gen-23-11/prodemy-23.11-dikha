/* let person = {
    nama : "aku",
    age : 5,
    mixBread : false,
    characteristic : {
        color : "brown",
        eyecolor : "black"
    }
}

console.log(person);
console.log(person.nama);
console.log(person['nama']);
person.age = 7;
console.log(person) */

/* const dog = new Object();
dog.name = "ulala";
dog.age = 5;

console.log(dog) */


/* const hamster = {}
hamster.name = "priiitt"
console.log(hamster) */


/* const person = {
    namaDepan : "aiueo",
    namaBelakang : "kakikukeko",
    age : 5,
    mixBread : false,
    fullname : function(){
        return this.namaDepan + " " + this.namaBelakang;
    }
}

console.log(person.fullname()) */

/* const cat = {
    nama : "oyen"
}

let ccat2 = cat.nama
let ccat1 = cat
ccat1.nama = "bleki"

ccat2 = "iyaa"
console.log(cat.nama)
console.log(ccat1.nama)
console.log(ccat2)
 */

function Animal(nama, umur, kategori){
    this.nama = nama;
    this.umur = umur;
    this.kategori = kategori;
}

const kucing = new Animal("mpus", 16, "karnivora")
console.log(kucing);


const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
readline.question('New Name?  ', name => {
    kucing.nama = name;
    console.log(kucing);
    readline.close();
});



