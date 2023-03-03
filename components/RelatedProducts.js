import React from 'react'
import Link from 'next/link';
const card1 = '../card/card-1.png';
export default function RelatedProducts() {
  const Card = (props) => {
    return (
      <Link href='/products/1'>
        <div className='box'>
          <img src={props.src}></img>
          <h3>{props.title}</h3>
          <div className='price-wrapper'>
            <h2>{props.salePrice}</h2>
            <p><strike>{props.originalPrice}</strike></p>
          </div>
          <button>ADD TO CART</button>
        </div>
      </Link>
    )
  }
  return (
    <div className='card-wrapper container'>
      <div className='row gy-5 gx-5'>
        <div className='col-12 col-md-4'>
          <Card title="Rosy Haze Heart Pendant Necklace in Rose Gold Plated 925 Silver" src={card1} salePrice="₹19000" originalPrice="₹21000" />
        </div>
        <div className='col-12 col-md-4'>
          <Card title="Rosy Haze Heart Pendant Necklace in Rose Gold Plated 925 Silver" src={card1} salePrice="₹19000" originalPrice="₹21000" />
        </div>
        <div className='col-12 col-md-4'>
          <Card title="Rosy Haze Heart Pendant Necklace in Rose Gold Plated 925 Silver" src={card1} salePrice="₹19000" originalPrice="₹21000" />
        </div>
      </div>
    </div>
  )
}
