import { useEffect, useState } from "react";
import SingleProduct from "../SingleProduct/SingleProduct";

const AllProducts = ({handleSelectedProduct}) => {

    const [allProducts, setAllProducts] = useState([]);

    useEffect(()=>
    {
        fetch('./product.json')
        .then(res => res.json())
        .then(data => setAllProducts(data))
    }
    , [])

    

    return (
        <div>
            <h1 className="text-3xl font-semibold">AllPtoducts.jsx</h1>
            {
                allProducts.map(p=><SingleProduct handleSelectedProduct={handleSelectedProduct} allProducts={p} key={p.id}></SingleProduct>)
            }
        </div>
    );
};

export default AllProducts;