import React from "react";
import ListProducts from "../components/ListProducts";
import MainSlogan from "../layouts/MainSlogan";

function Homepage() {
    return (
        <div>
            <MainSlogan />
            <ListProducts />
        </div>
    );
}

export default Homepage;
