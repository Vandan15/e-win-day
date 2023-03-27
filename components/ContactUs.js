import Link from 'next/link'
import React from 'react'
import Footer from '../components/Header'
import Header from '../components/Footer'

export default function ContactUs() {
    return (
        <>
            <div className='container'>
                <div className='login-wrapper'>
                    <h3>Contact Us</h3>
                    <hr></hr>
                    <input type='text' className='mt-4' placeholder='Name'></input>
                    <input type='email' placeholder='Email'></input>
                    <input type='number' placeholder='Phone'></input>
                    <input type='submit' value="SEND MESSAGE"></input>
                    <hr></hr>
                    <div className='reset'>
                        <p className='address'><b>ADDRESS</b><br></br>
                            Plot no 1, Lane 4, Dheeraj Nagar, Aitmadpur, Faridabad, Haryana
                            <br></br>Phone - 7217886990
                        </p>

                        <p className='address'><b>SUPPORT EMAIL</b><br></br>
                            <a href='mailto:traderschoudhary2507@gmail.com'>traderschoudhary2507@gmail.com</a>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
