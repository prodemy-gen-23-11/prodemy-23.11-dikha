import React from 'react';
import { Heart, ShoppingCart } from 'tabler-icons-react';
import Ladiva from '../images/produk/Ladiva.jpg';
import Button from './Button';
import RadioColors from './RadioColors';



function ProductCard(){
    return (
        <section className='flex flex-row items-center py-24'>
            <div>
                <img className='rounded-lg hover:scale-105' src={Ladiva} width="70%" />
            </div>
            <div className=''>
                <Description />
                <Colors/>
                <div className='flex items-center gap-x-7 py-7'>
                    <Button className="bg-green-300 hover:bg-green-500" onClick={() => addProdukToCart(produk)}>
                        <ShoppingCart />
                        Add To Cart
                    </Button>
                    <Button className="bg-sky-300 hover:bg-sky-500" onClick={() => addProdukToWhistlist(produk)}>
                        <Heart />
                        Add To Whistlist
                    </Button>
                </div>
            </div>
        </section>
    );
};

function addProdukToCart(props) {
    console.log({...props, fungsi:"cart"});
};

function addProdukToWhistlist(props) {
    console.log({...props, fungsi:"whistlist"});
};

function Colors() {
    return (
        <div className='text-2xl py-5'>
            Colors :
            <div className='flex gap-x-4 pt-2'>
                <RadioColors warna="bg-red-400" id="red" value="red"  name="lala"/>
                <RadioColors warna="bg-blue-400" id="blue" value="blue"  name="lala" onClick={() => console.log("blue")}/>
                <RadioColors warna="bg-green-400" id="green" value="green"  name="lala" onClick={() => console.log("green")}/>
                <RadioColors warna="bg-violet-400" id="violet" value="violet"  name="lala" onClick={() => console.log("violet")}/>
            </div>
        </div>
    );
};



function Description() {
  return (
    <section>
        <h1 className='text-6xl'>Jeslin Sofa Corner</h1>
        <h4 className='text-2xl text-neutral-500'>Sofa Corner</h4>
        <div className='pt-10 text-3xl'>
        <table>
            <tbody>
                <tr>
                    <td>Merk</td>
                    <td>:</td>
                    <td>Ladiva</td>
                </tr>
                <tr>
                    <td>Bahan</td>
                    <td>:</td>
                    <td>Katun</td>
                </tr>
            </tbody>
        </table>
        </div>
        <div className='pt-5 text-xl max-w-96'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos dolorem deserunt eius recusandae ullam? Natus id animi aperiam nisi quae? Placeat nemo asperiores quis molestiae. Nemo ex libero blanditiis veritatis.
        </div>
    </section>
  );
};


export default ProductCard;