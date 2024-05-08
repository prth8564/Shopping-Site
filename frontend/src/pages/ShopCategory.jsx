import React, { useContext } from 'react';
import './CSS/shopCategory.css';
import { ShopContext } from '../Context/ShopContent';
import dropdown_icon from '../components/assets/dropdown_icon.png';
import Item from '../components/items/item';
const ShopCategory= (props) =>{
    const {allProducts} = useContext(ShopContext);
    console.log(allProducts);
return (
    <div classsName='shop-category'>
        <img src="" alt={props.banner} className="shopcategory-banner" />
        <img src={props.banner} alt="" />
        <div className="shopcategory-indexSort">
            <p>
               <span>Showing 1-12</span> out of 36 products
            </p>
            <div className="shopcategory-sort">
                Sort by <img src={dropdown_icon} alt="" />
            </div>
        </div>
        <div className="shopcategory-products">
            {allProducts.map((item , index) => {
                if(props.category === item.category){
                    return <Item key={index} id={item.id} name={item.name} image={item.image} new_price = {item.new_price} old_price={item.old_price} />
                }
                else{
                    return null;
                }

            })}
        </div>
        <div className="shopcategory-loadmore">
            Explore More
        </div>
    </div>
)
}
export default ShopCategory;