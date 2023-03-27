import Link from 'next/link'
import React from 'react'

export default function Header() {
    return (
        <div className='header-wrapper'>
            <div className='bg-grey'>
                <Link href='/'>
                    <div className='text-wrapper container'>
                        <span className='text-white'>winEday</span><span className='text-orange'>Shop</span>
                    </div>
                </Link>
            </div>
            {/* <div className='bg-black'>
                <div className='container wrapper'>
                    <span className='text-sale'>SALE ENDS in 02:30 Hrs</span>
                </div>
            </div> */}
        </div>
    )
}
