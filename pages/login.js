import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function login() {
    return (
        <>
            <Header />
            <div className='container'>
                <div className='login-wrapper'>
                    <h3>Amuse<span className='text-orange'>Box</span></h3>
                    <hr></hr>
                    <input type='text' className='mt-4' placeholder='Mobile Number'></input>
                    <input type='password' placeholder='Password'></input>
                    <input type='submit' value="LOGIN"></input>
                    <div className='reset'>
                        <p>FORGOT PASSWORD?</p>
                        <p>REGISTER</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
