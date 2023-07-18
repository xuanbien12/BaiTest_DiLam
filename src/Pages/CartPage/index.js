import React, { useState, useEffect, useContext } from 'react'
import './style.css'
import ListCartProducts from './components/ListCartProducts'
import CartWidget from './components/CartWidget'
import { ProviderApp } from '../../ProviderGlobal'
import Woocommerce from './components/Woocommerce/Woocommerce'

const CartPage = () => {
    const providerContext = useContext(ProviderApp)
    const { cartProducts } = providerContext

    return (
        <div className='cart'>
            <div className='container'>
                <div className='cart-inner'>
                    {cartProducts.length > 0 ? <ListCartProducts /> : <Woocommerce />}
                    <CartWidget />
                </div>
            </div>
        </div>

    )
}
export default CartPage