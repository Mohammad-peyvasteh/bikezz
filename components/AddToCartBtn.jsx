'use client'

import { useToast } from '@/hooks/use-toast'
import React from 'react'
import { useShoppingCart } from 'use-shopping-cart'

const AddToCartBtn = ({btnStyles,text,icon,currency,description,images,price,name, price_id,id}) => {
  const {addItem} =useShoppingCart()
  const {toast} =useToast()
  const bike={
    id:id,
    currency:currency,
    name:name,
    description:description,
    images:images,
    price:price,
    price_id:price_id
  }
  
  
  return (
   <button className={btnStyles} onClick={()=>{
    addItem(bike)
    toast({
      title:`${name} has been added to the cart`
    })
   }}>
    <div>{text}</div>
    <div>{icon}</div>

   </button>
  )
}

export default AddToCartBtn