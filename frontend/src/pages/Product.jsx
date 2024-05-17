import React, { useContext } from 'react';
import {ShopContext} from '../Context/ShopContent';
import { useParams } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumbs/BreadCrum';
import ProductDisplay from '../components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../components/RelatedProducts/RelatedProducts';

const Product= () =>{
    const {allProducts} = useContext(ShopContext);
    const {productId} = useParams();
    const product = allProducts.find((e) => e.id === Number(productId))
return (
    <div>
        <BreadCrumb product={product} />
        <ProductDisplay product = {product}></ProductDisplay>
        <DescriptionBox />
        <RelatedProducts />
    </div>
)
}
export default Product;