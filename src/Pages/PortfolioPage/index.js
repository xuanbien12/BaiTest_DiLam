import React, { useState, useEffect, useContext } from 'react'

import './style.css'
import Products from '../../Components/Products'
import { ProviderApp } from '../../ProviderGlobal'
import WidgetMain from '../../Components/WidgetMain'

import _chunk from 'lodash/chunk'

const PortfolioPage = () => {
    const data = useContext(ProviderApp)
    const { dataProducts } = data
    const newData = _chunk(dataProducts, 20)

    return (

        <div className='home-page'>
            <div className='container'>
                <div className='home-page-inner'>
                    <div className='category col-lr-1'>
                        <WidgetMain />
                    </div>
                    <Products dataProducts={newData} />
                </div>
            </div>
        </div>

    )
}
export default PortfolioPage