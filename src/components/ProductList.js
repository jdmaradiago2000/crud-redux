import React from 'react';
import { useSelector } from 'react-redux';

const ProductList = () => {

    const products = useSelector(state => state.products);

    console.log(products)

    return (
        <ul>
            {
                products.map(product => (
                    <li key={product.id}>
                        <h3>{product.name}</h3>
                        <div><b>price: </b> {product.price}</div>
                    </li>
                ))
            }
            
        </ul>
    );
};

export default ProductList;