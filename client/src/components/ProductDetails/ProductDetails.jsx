import './productDetails.css'

import React from 'react'
import { useParams } from 'react-router-dom'


const ProductDetails = () => {
    const { id } = useParams()
  return (
    <div className='ProductDetails'>
        <p>Details for Product {id}</p>
    </div>
  )
}

export default ProductDetails