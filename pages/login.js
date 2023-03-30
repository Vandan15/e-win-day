import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useRouter } from 'next/router';

export default function login() {
    const router = useRouter();
    return (
        <>
            <Header />
            <div className='container'>
                <div className='login-wrapper'>
                    <h3>Amuse<span className='text-orange'>Box</span></h3>
                    <hr></hr>
                    <input type='text' className='mt-4' placeholder='Mobile Number' value={'admin'}></input>
                    <input type='password' placeholder='Password' value={'admin'}></input>
                    <input type='submit' value="LOGIN" onClick={() => {localStorage.setItem('isLogged',true); router.push('/game')}}></input>
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
