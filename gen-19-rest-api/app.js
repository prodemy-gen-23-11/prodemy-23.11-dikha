
// fetch('https://dummyjson.com/carts')
// .then(res => res.json())
// .then(json => console.log(json))

const axios = require('axios').default;
console.log(comments);

async function getCarts() {
    try {
        const response = await axios.get('https://dummyjson.com/comments');
        console.log(response.data.comments);    
    } catch (error) {
        console.log(error);
    }
}
getCarts();