import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function game() {
    return (
        <>
            <Header />
            <div className='container'>
                <div className='game-wrapper'>
                    <div className='row bg-wallet'>
                        <h2>Wallet Information</h2>
                        <hr></hr>

                        <p className='balance-text'>Available Balance</p>
                        <p className='price-text'>₹ 500.00</p>

                        <div className='btn-group'>
                            <button className='green'>WITHDRAW</button>
                            <button className='purple'>ADD MONEY</button>
                            <button className='orange'>READ RULES</button>
                        </div>
                    </div>
                    <div className='bg-number'>
                        <div className='row'>
                            <div className='col-12 col-md-5'>
                                <div className='btn-wrapper'>
                                    <div className='input-wrapper'>
                                        <label>Join Green</label>
                                        <button className='green'>Place Bid</button>
                                    </div>
                                    <div className='input-wrapper'>
                                        <label>Join Green</label>
                                        <button className='purple'>Place Bid</button>
                                    </div>
                                    <div className='input-wrapper'>
                                        <label>Join Green</label>
                                        <button className='red'>Place Bid</button>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 col-md-7'>
                                <div className='digit-wrapper'>
                                    <label>Choose Number</label>
                                    <div className='d-flex flex-wrap'>
                                        <button>0</button>
                                        <button>1</button>
                                        <button>2</button>
                                        <button>3</button>
                                        <button>4</button>
                                        <button>5</button>
                                        <button>6</button>
                                        <button>7</button>
                                        <button>8</button>
                                        <button>9</button>
                                    </div>
                                    <p className='timer'>Time Left: 00 : 05</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='parity-wrapper'>
                        <h2>Parity Record</h2>
                        <hr></hr>
                        <div className='table-wrapper'>
                            <table>
                                <thead>
                                    <th>Period</th>
                                    <th>Price</th>
                                    <th>Number</th>
                                    <th>Result</th>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>2</td>
                                        <td>3</td>
                                        <td>4</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
