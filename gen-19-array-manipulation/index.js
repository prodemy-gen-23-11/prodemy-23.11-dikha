const products = [
    {
        id: 3,
        title: "Samsung Universe 9",
        brand: "Samsung",
        category: "smartphones"
    },
    {
        id: 7,
        title: "Samsung Galaxy Book",
        brand: "Samsung",
        category: "laptops"
    }
];

function addProducts() {
    const lastId = products[products.length - 1].id;
    products.push({
        id: lastId + 1,
        title: "Samsung Smart TV",
        brand: "Samsung",
        category: "tv"
    })
    console.log("After Add Products:");
    console.table(products);
}

function editProdcuts(id) {
    products.forEach((item) => {
        if (item.id === id) {
            item.title = "LG Smart TV";
            item.brand = "LG";
        }
    })
    console.log(`After Edit Products: (id:${id})`);
    console.table(products);
}

function deleteProducts(id) {

    const n = products.filter((item) => item.id != id);
    console.log(`After Delete Products: (id:${id})`);
    console.table(n);
}

console.log("Before Add Products:");
console.table(products);
addProducts();
editProdcuts(8);
deleteProducts(8);