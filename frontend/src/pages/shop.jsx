import React from 'react';
import Star from '../components/Star/star';
import Popular from '../components/popular/popular';
import Offer from '../components/offers/offers';
import NewCollections from '../components/newCollections/newCollections';
import NewsLetter from '../components/NewsLetter/NewsLetter';


const Shop= () =>{
return (
    <div>
       <Star /> 
       <Popular />
       <Offer />
       <NewCollections />
       <NewsLetter />
       
    </div>
)
}
export default Shop;