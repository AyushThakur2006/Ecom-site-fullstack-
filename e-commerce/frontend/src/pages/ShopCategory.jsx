import React, { useContext } from 'react'
import './css/ShopCategory.css'
import { ShopContext } from '../context/ShopContext'
import drop_down_icon from '../components/assets/dropdown_icon.png'
import Item from '../components/items/Item'
const ShopCategory = (props) => {
  const {all_products}=useContext(ShopContext)
  return (
    <div className='shop-category'>
<img className='shopcategory-banner' src={props.banner}/>
<div className="shopCategory-indexSort">
  <p>
    <span>Showing 1-12</span> out of 36 products
  </p>
  <div className="shopCategory-sort">
    Sort By <img src={drop_down_icon} />
  </div>
</div>
<div className="shopCategory-products">
  {all_products.map((item,i)=>
  {
    if(props.category===item.category)
      return<Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
      else
      return null;
  }
  )}
  
</div>
    </div>
  )
}

export default ShopCategory