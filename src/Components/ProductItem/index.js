import React from 'react'
import { Link, useHistory } from 'react-router-dom'
const ProductItem = (props) => {
    const { brand, del, img, name, price, id } = props.item
    const { handleToSrollTop } = props
    const newDel = +del
    const newPrice = +price
    const history = useHistory()
    // console.log(newDel)
    // console.log(newPrice)

    return (
        <div className='product-item'>
            <Link to={`/detail/${id}`} onClick={handleToSrollTop}>
                <span className='product-brand'>{brand}</span>
                <img className='product-img' src={img} alt="" />
                <h2 className='product-title'>{name}</h2>
                <div className='product-price'>
                    <del>{newDel.toLocaleString()} đ</del>
                    <span className='price'>{newPrice.toLocaleString()} đ</span>
                </div>
                <div className='product-sale'>sale</div>
            </Link>
        </div>
    )
}
export default ProductItem