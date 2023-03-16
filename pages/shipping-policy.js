import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function privacy() {
  return (
    <>
      <Header />
      <div className='dynamic-wrapper container'>
        <h2>Shipping Policy</h2>
        <p>All orders are processed within 3 to 5 business days (excluding weekends and holidays) after receiving your order confirmation email. You will receive another notification when your order has shipped. </p>

        <h3>Domestic Shipping Rates and Estimates</h3>
        <p>We offer  ₹100 flat rate shipping to india. </p>
        <p><em>free shipping for orders over  ₹3000</em></p>


        <h3>How do I check the status of my order?</h3>
        <p>When your order has shipped, you will receive an email notification from us which will include a tracking number you can use to check its status. Please allow 48 hours for the tracking information to become available. </p>
        <p>If you haven’t received your order within 10 days of receiving your shipping confirmation email, please contact us at traderschoudhary2507@gmail.com with your name and order number, and we will look into it for you.</p>

        <h3>Refunds, returns, and exchanges</h3>
        <p>For refunds returns & Exchange Please refer to our refund policy - <a href='https://www.eday-winshop.online/refund-policy'>https://www.eday-winshop.online/refund-policy</a></p>
      </div>
      <Footer />
    </>
  )
}
