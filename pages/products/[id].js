import React from 'react'
import CardWrapper from '../../components/CardWrapper'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import ProductDetails from '../../components/ProductDetails'
import RelatedProducts from '../../components/RelatedProducts'
import Title from '../../components/Title'

export default function product() {
    return (
        <>
            <Header />
            <ProductDetails />
            <Title text="Related Products"/>
            <RelatedProducts/>
            <Footer />
        </>
    )
}
