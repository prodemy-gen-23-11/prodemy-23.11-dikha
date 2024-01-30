
let produkImg = document.getElementById('produk')
let mainProdukImg = produkImg.getElementsByTagName('div')[0].getElementsByTagName('img')[0]
let childProdukImg = produkImg.getElementsByTagName('div')[1].getElementsByTagName('img')

function klik(num){
    mainProdukImg.setAttribute('src',childProdukImg[num].src)
}