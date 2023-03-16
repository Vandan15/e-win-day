import Link from 'next/link'
import React from 'react'

export default function AboutUs() {
  return (
    <div className='about-us-wrapper container'>
        <h2 className='text-header'>About Us</h2>
        <p className='para-text'>We are a trading company who buys products at cheaper prices of all categories and puts up on the store at sale prices. We are an E-commerce brand what will focus on new products range everyday with a unique USP of putting up sales daily to attract new customers everyday and to retain Old Customers.</p>

        <h2 className='text-sub'>Jewellery</h2>
        <p className='para-sub'>Add a touch of glamour to your look with our stylish jewellery sets for women</p>

        <div className='btn-wrapper'>
            <div className='btn'>
            <Link href='/'><button>SHOP TODAY</button></Link>
            <Link href='/'><button>Browse our collection</button></Link>
            </div>
        </div>

        <h2 className='text-sub'>Fashion</h2>
        <p className='para-sub'>Online Shopping Site for Designer Clothes, Accessories & Lifestyle Products in India. Shop at Best Prices & Attractive Offers from India's best brands.</p>

        <div className='btn-wrapper'>
            <div className='btn'>
            <Link href='/'><button>SHOP ONLINE</button></Link>
            </div>
        </div>

        <h2 className='text-sub'>Online Shop</h2>
        <p className='para-sub'>Shop online for latest Apparel, Beauty, Home decor, Fragrances, Accessories & Luxury Watches at great prices. Express Delivery for all Prepaid orders.</p>

        {/* <div className='btn-wrapper'>
            <div className='btn'>
            <Link href='/'><button>SHOP ONLINE</button></Link>
            </div>
        </div> */}
    </div>
  )
}
