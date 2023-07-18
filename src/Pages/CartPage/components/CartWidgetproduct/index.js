import React from 'react'
import { Link, useHistory } from 'react-router-dom'

const CartWidgetproduct = (props) => {
    const { name, img, price, del, id
    } = props.item
    const newdel = +del
    const newPrice = +price

    return (
        <li className='product_item_widget' >
            <Link to={`/detail/${id}`}  >
                <img src={img} />
            </Link>
            <div className='product_ct_widget'>
                <h4>
                    <Link to={`/detail/${id}`} >
                        {name}
                    </Link>
                </h4>
                <span className='ct_widget-price'>
                    <del>{newdel.toLocaleString()} đ</del>
                    <span>{newPrice.toLocaleString()} đ</span>
                </span>
            </div>

        </li>

    )
}
export default CartWidgetproduct