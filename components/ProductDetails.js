import React from 'react'
const img1 = '/card/card-1.png';
const rating = '/card/rating.png';
export default function ProductDetails() {
    return (
        <div className='product-wrapper'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-lg-4 d-flex justify-content-start justify-content-lg-center'>
                        <div className='img-wrapper'>
                            <img src={img1}></img>
                        </div>
                    </div>
                    <div className='col-12 col-lg-8 d-flex justify-content-start'>
                        <div className='product-description'>
                            <h1>Little Star Kids' Gold Earrings</h1>
                            <hr></hr>
                            <img src={rating}></img>
                            <p className='description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                            <p>Effective Price : <span className='text-price'>₹19000</span></p>
                            <p>Quantity : 1</p>

                            <button>Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
