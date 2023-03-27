import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <>
    <div className='footer-wrapper container'>
        <ul className='list'>
            <li><Link href='/'><a target={'_self'} className='active'>Home</a></Link></li>
            <li><Link href='/about-us'><a target={'_self'}>About Us</a></Link></li>
            {/* <li><Link href='/'><a target={'_self'}>Category</a></Link></li> */}
            <li><Link href='/contact-us'><a target={'_self'}>Contact Us</a></Link></li>
        </ul>
    </div>
    <div className='sub-footer container'>
      <div className='link-wrapper'>
      <Link href='/privacy-policy'><a target={'_blank'}>Privacy Policy</a></Link>
      <Link href='/refund-policy'><a target={'_blank'}>Refund Policy</a></Link>
      <Link href='/shipping-policy'><a target={'_blank'}>Shipping Policy</a></Link>
      <Link href='/terms-and-conditions'><a target={'_blank'}>Terms & Conditions</a></Link>
      </div>
    </div>
    </>
  )
}
