import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./index.scss"

function ProductDetail() {
    const { productId } = useParams();
    const [product, setProduct] = useState([]);

    async function getProductDetails() {
        const data = await fetch(`http://localhost:3000/products/${productId}`);
        const res = await data.json();
        setProduct(res);
    }

    useEffect(() => {
        getProductDetails();
    }, []);

    return (
        <div className='detailCard'>
            <h1>Detail page</h1>
            <p> product ID  --{productId}</p>
            <p> Poduct caterhrgory --{product.category}</p>
            <p> clolr -- {product.color}</p>
            <p> size --{product.size}</p>
        </div>

    );
}

export default ProductDetail;
