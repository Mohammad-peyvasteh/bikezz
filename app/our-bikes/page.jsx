import React from 'react'
import { client } from '../lib/sanity'
import BikeCategorise from '@/components/BikeCategorise'

const getData=async()=>{
    const query=`*[_type == 'product' ]{
    _id,
    images,
    price,
    price_id,
    name,
    description,
    "slug":slug.current,
    "categories":categories[]->{name}

    }`
    const data=await client.fetch(query)
    return data
}
const OurBikes =async () => {
    const bikes=await getData()
    
    
  return (
    <div><BikeCategorise bikes={bikes}/></div>
  )
}

export default OurBikes