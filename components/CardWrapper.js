import React from 'react'
import Link from 'next/link';
const card1 = '../card/card-1.png';
const card2 = '../card/card-2.png';
const card3 = '../card/card-3.png';
const card4 = '../card/card-4.png';
const card5 = '../card/card-5.png';
const card6 = '../card/card-6.png';
const card7 = '../card/card-7.png';
export default function CardWrapper() {
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
          <Card title="Oxidised Owning My Perfectionist Tendencies Necklace" src={card2} salePrice="₹9999" originalPrice="₹11000" />
        </div>
        <div className='col-12 col-md-4'>
          <Card title="Little Star Kids' Gold Earrings" src={card3} salePrice="₹33990" originalPrice="₹35000" />
        </div>
        <div className='col-12 col-md-4'>
          <Card title="Glitzy Wild Fern Necklace " src={card4} salePrice="₹11990" originalPrice="₹13000" />
        </div>
        <div className='col-12 col-md-4'>
          <Card title="Falling Star Diamond Pendant" src={card5} salePrice="₹16999" originalPrice="₹18000" />
        </div>
        <div className='col-12 col-md-4'>
          <Card title="Celine Miracle Plate Diamond Ring" src={card6} salePrice="₹25999" originalPrice="₹27000" />
        </div>
        <div className='col-12 col-md-4'>
          <Card title="Amanda Diamond Pendant" src={card7} salePrice="₹7399" originalPrice="₹9000" />
        </div>
      </div>
    </div>
  )
}
