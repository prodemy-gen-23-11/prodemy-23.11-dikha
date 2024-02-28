import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import ProductCard from "../components/ProductCard";
import ProdukDetail from "../components/ProdukDetail";

function ProductPage() {
    const params = useParams();

    const getProducts = (url) =>
        axios.get(url).then((res) => res.data);
    const { data: allData } = useSWR(
        `http://localhost:3000/products`,
        getProducts,
    );

    const dataProductCard2 = [];
    allData?.forEach((element) => {
        if (params.id != parseInt(element.id)) {
            dataProductCard2.push(element);
        }
    });

    return (
        <div>
            <div>
                <ProdukDetail id={params.id} />
            </div>
            <div className="p-5 text-3xl">Produk Kami:</div>
            <div className="flex place-content-center flex-row items-center gap-x-5 py-5">
                {dataProductCard2?.map((dataProduk) => (
                    <div key={dataProduk.id}>
                        <ProductCard
                            title={dataProduk.nama}
                            src={dataProduk.gambar[0]}
                            price={`$${dataProduk.harga}`}
                            id={dataProduk.id}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductPage;
