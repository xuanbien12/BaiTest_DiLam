import React, { useEffect, useState } from 'react'
import _sample from 'lodash/sample'
import axios from 'axios'
import CartWidgetproduct from '../CartWidgetproduct'
import { Link } from 'react-router-dom'
const CartWidget = () => {
    const [cartWidgetProducts, setCartWidgetProducts] = useState([])
    useEffect(() => {
        axios.get("https://64a41a3cc3b509573b571155.mockapi.io/api/product/products")
            .then(function (respons) {
                const products = respons.data
                setCartWidgetProducts([_sample(products), _sample(products), _sample(products), _sample(products), _sample(products)])

            })
    }, [])
    return (
        <div className='widget-area'>
            <div className='widget-area-products mg-bt'>
                <h2 className='widget-area-title '>
                    product
                </h2>
                <ul className='product_list_widget'>
                    {
                        cartWidgetProducts.map((item, index) => <CartWidgetproduct key={index} item={item} />)
                    }
                </ul>
            </div>
            <div className='widget-mt mg-bt'>
                <h2 className='widget-area-title '>Danh mục</h2>
                <ul>
                    <li>
                        <Link to="/adidas">
                            Adidas
                        </Link>

                    </li>
                    <li >
                        <Link to="/nike">Nike</Link>
                    </li>
                    <li>
                        <Link to="/portfolio">Danh mục</Link>
                    </li>
                    <li >
                        <Link to="/asics">asics</Link>
                    </li>
                    <li >
                        <Link to="">Tin tức</Link>
                    </li>
                </ul>
            </div>
        </div>
    )

}
export default CartWidget