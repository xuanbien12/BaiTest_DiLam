import React, { useEffect, useContext, useState } from 'react'
import { ProviderApp } from '../../ProviderGlobal'
import WidgetMain from '../../Components/WidgetMain'
import Products from '../../Components/Products'
import _chunk from 'lodash/chunk'
import './../assets/css/responsive.css'
const AsicsHome = () => {
    const data = useContext(ProviderApp)
    const { dataProducts } = data
    const newdataProducts = dataProducts.filter(item => item.brand === "asics")
    const newData = _chunk(newdataProducts, 20)
    return (
        <div className='home-page'>
            <div className='container'>
                <div className='home-page-inner'>
                    <div className='category col-lr-1'>
                        <WidgetMain />
                    </div>

                    <Products dataProducts={newData}

                    />
                </div>
            </div>
        </div>
    )
}
export default AsicsHome