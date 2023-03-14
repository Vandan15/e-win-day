import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <>
    <div className='footer-wrapper container'>
        <ul className='list'>
            <li className='active'>Home</li>
            <li>Win</li>
            <li>Aviator</li>
            <li>Luck Hit</li>
            <li>Mine</li>
        </ul>
    </div>
    <div className='sub-footer container'>
      <div className='link-wrapper'>
      <Link href='/privacy-policy'><a target={'_blank'}>Privacy Policy</a></Link>
      <Link href='/refund-policy'><a target={'_blank'}>Refund Policy</a></Link>
      <Link href='/terms-and-conditions'><a target={'_blank'}>Terms & Conditions</a></Link>
      </div>
    </div>
    </>
  )
}
