import React, { useContext, useEffect, useState } from 'react'
import CartProductItem from '../CartProductItem'
import Button from '../../../../Components/Button'
import { ProviderApp } from '../../../../ProviderGlobal'

const ListCartProducts = () => {
    const ListProductCart = useContext(ProviderApp)
    const [totalPriceAllCart, setTotalPriceAllCart] = useState(0)
    const { cartProducts } = ListProductCart
    useEffect(() => {
        let Total = 0
        cartProducts.forEach(item => {
            let totalProduct = +item.price * item.quantity
            Total += totalProduct
        })

        setTotalPriceAllCart(Total)
    }, [cartProducts])
    return (
        <div className='cart-content'>
            <table className='Cart-table'>
                <thead>
                    <tr>
                        <td className='cart-product-remove'></td>
                        <td className='cart-product-thumbnail'></td>
                        <td className='cart-product-name'>
                            Sản phẩm
                        </td>
                        <td className='cart-product-price'>
                            Giá
                        </td>
                        <td className='cart-product-quantity'>
                            Số Lượng
                        </td>
                        <td className='cart-product-subtotal'>
                            Tổng

                        </td>
                    </tr>
                </thead>
                <tbody>
                    {
                        cartProducts.map((item, index) => <CartProductItem key={item.id} item={item} />)
                    }

                </tbody>

            </table>
            <div className='cart_totals'>
                <h3>Tổng số lượng</h3>
                <table className='shop_table'>
                    <tbody>
                        <tr>
                            <th>Tổng phụ </th>
                            <td>
                                <span className='totals-price'>{totalPriceAllCart.toLocaleString()} đ</span>
                            </td>
                        </tr>
                        <tr>
                            <th>Tổng  </th>
                            <td>
                                <span className='totals-price w-b'>{totalPriceAllCart.toLocaleString()} đ</span>
                            </td>
                        </tr>

                    </tbody>
                </table>
                <Button className="checkout-btn" > Tiến hành đặt hàng </Button>
            </div>
        </div>

    )
}
export default ListCartProducts