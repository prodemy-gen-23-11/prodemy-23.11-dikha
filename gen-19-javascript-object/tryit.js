
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
console.log(person);
console.log(person['namaDepan']);
console.log(person.namaDepan);
console.log(person.nama);
person.age = 7;
console.log(person)
console.log(person.fullname())
 */

/* function Animal(nama, umur, kategori){
    this.nama = nama;
    this.umur = umur;
    this.kategori = kategori;
}
function Tambahan(produk){
    this.produk = produk;
}

let animal1 = new Animal("kucing", 12, "karnivora")
const animal2 = new Animal("kambing", 16, "herbivora")
const animal3 = new Animal("sapi", 14, "herbivora")

let arrayKu = [animal1, animal2];
arrayKu.push(animal3);
console.log(arrayKu);

animal1 = {...animal1, ...new Tambahan("daging")};
console.log(animal1);

let {nama, umur, kategori, produk} = animal1;
console.log(nama, " ", umur, " ", kategori, " ",produk); */

let catty = {
    nama : "mpus",
    kategori : "karnivora",
    karakteristik : {
        tinggi : 15,
        panjang : 25,
        berat : 3
    }
}
/* const berat = catty?.karakteristik?.berat;
console.log(berat);
const jumlahKaki = catty?.karakteristik?.jumlahKaki;
console.log(jumlahKaki); */


/* const cat = {
    nama : "oyen"
}

let ccat2 = cat.nama
let ccat1 = cat
ccat1.nama = "bleki"

ccat2 = "iyaa"
console.log(cat.nama)
console.log(ccat1.nama)
console.log(ccat2) */


/* const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
readline.question('New Name?  ', input => {
    myVal = input;
    console.log(kucing);
    readline.close();
});
 */


function getInputFromTerminal(message){
    const prompt = require('prompt-sync')({sigint:true});
    return prompt(message);
}

function Animal(nama, umur, kategori){
    this.nama = nama;
    this.umur = umur;
    this.kategori = kategori;
}
const kucing = new Animal("kucing", 16, "karnivora")
console.log(kucing);

for (let property in kucing){
    console.log()
    const pilihan = (getInputFromTerminal(`Ingin Merubah ${property}?(y/n):`).toLowerCase()=='y' ? true : false );
    if(pilihan){
        kucing[property] = getInputFromTerminal(`Masukkan Nilai Baru Untuk ${property}: `);
    }
}

console.log(kucing);



