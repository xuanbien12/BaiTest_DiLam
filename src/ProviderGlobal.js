import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'
import _chunk from 'lodash/chunk'
export const ProviderApp = createContext()

const AppProvider = ({ children }) => {
    const [dataProducts, setDataProduct] = useState([])
    const [cartProducts, setCartProducts] = useState([])

    useEffect(() => {
        axios.get("https://64a41a3cc3b509573b571155.mockapi.io/api/product/products")
            .then(function (respons) {
                const products = respons.data
                setDataProduct(products)
            })
    }, [])
    const stateProvider = {
        dataProducts,
        setCartProducts,
        cartProducts,

    }

    return (
        <ProviderApp.Provider value={stateProvider}>{children}</ProviderApp.Provider>
    )
}
export default AppProvider