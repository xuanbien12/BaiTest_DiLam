import React, { useEffect, useState } from 'react'
import './style.css'
import _orderBy from 'lodash/orderBy'
import PagingItem from './components/PagingItem'
import ProductItem from '../ProductItem'


const Products = (props) => {

    const { dataProducts } = props

    const [products, setProducts] = useState([])
    const [numberRender, setNumberRender] = useState(0);
    const [productsRender, setProductsRender] = useState([])
    const [isActivepaging, setIsActivepaging] = useState(0)
    // console.log("a", dataProducts)
    // console.log("d", products)
    // console.log("C", productsRender)
    useEffect(() => {
        setProducts(dataProducts)

    }, [dataProducts])
    useEffect(() => {
        setProductsRender(products[numberRender])
    }, [products])
    const handleIcrementPaging = (index) => {
        setNumberRender(index)
        setProductsRender(products[index])
    }
    const handleSortProduct = (e) => {
        const value = e.target.value
        if (value === "hight-to-low") {
            const newProducts = _orderBy(productsRender, ["price"], ['asc', 'desc'])
            setProductsRender(newProducts)
        } else if (value === "low-to-hight") {
            const newProducts = _orderBy(productsRender, ["price"], ['desc', 'asc'])
            setProductsRender(newProducts)
        } else {
            setProductsRender(products[numberRender])
        }
    }
    return (
        <div className='products col-lr-1'>
            <div className='products-t dl-fl-between'>
                <div className='products-sort'>
                    <span> Sắp xếp theo </span>
                    <select className='orderby' id="sort" onChange={handleSortProduct}>
                        <option value="Latest">Mới nhất</option>
                        <option value="hight-to-low">Thứ tự : theo giá từ thấp đến cao</option>
                        <option value="low-to-hight">Thự tự : theo giá từ cao đến thấp</option>
                    </select>
                </div>
                <div className='paging'>
                    <ul className='page-numbers dl-fl'>
                        {
                            products.map((item, index) =>
                                <PagingItem key={index} title={index} active={isActivepaging == index ? "current" : ""} onSetActive={setIsActivepaging} onIcrementPaging={handleIcrementPaging}
                                />)
                        }


                    </ul>

                </div>
            </div>
            <div className='list-product'>
                {
                    productsRender ? productsRender.map(item => <ProductItem key={item.id} item={item} />) : []

                }

            </div>

        </div>
    )
}
export default Products