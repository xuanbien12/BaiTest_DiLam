import React, { useState, useEffect, useContext } from 'react'
import Input from '../../../../Components/Input'
import { Link, useHistory, useParams } from 'react-router-dom'
import { ProviderApp } from '../../../../ProviderGlobal'

const CartProductItem = (props) => {
    const provider = useContext(ProviderApp)
    const { setCartProducts } = provider
    const {
        name, img, price, quantity, size, id
    } = props.item
    const [cartQuantity, setCartQuantity] = useState(quantity)
    const [totalProductCart, setTotalProdcutCart] = useState(0)
    const handleChangCartQuantity = (e) => {
        const value = +e.target.value
        setCartQuantity(value)
    }

    const newPrice = +price
    useEffect(() => {
        // mỗi lần  người dùng thay đổi số lượng thì cập nhật lại số lượng trong context APi rồi render lại
        setCartProducts((prev) => {
            const newProducts = prev.filter(item => {
                if (item.id === id && item.size === size) {
                    item.quantity = cartQuantity
                    return item
                }
                return item
            })
            return newProducts
        })
        setTotalProdcutCart(newPrice * cartQuantity)

    }, [cartQuantity])
    const handleDeleteProducCart = (product) => {
        setCartProducts((prev) => {
            const newProducts = prev.filter(item => item !== product)
            return newProducts
        })
    }


    // const handleTodetail = () => {
    //     history.push({
    //         pathname: `/detail`,
    //     })

    // }
    return (
        <tr>
            <td className='cart-product-remove'><span className='cart-product-delete' onClick={() => handleDeleteProducCart(props.item)} >X</span></td>
            <td className='cart-product-thumbnail'>
                <img src={img} />
            </td>
            <td className='cart-product-name'>
                <Link to={`detail/${id}`}>
                    {name}
                </Link>
                <p>Size: {size}</p>
            </td>
            <td className='cart-product-price'>{newPrice.toLocaleString()} đ</td>
            <td className='cart-product-quantity'>
                <Input value={cartQuantity} type="number" onChangeInput={handleChangCartQuantity} />
                <span className='cart-change-sl'>
                    <span className='cart-product-up' onClick={() => setCartQuantity(cartQuantity + 1)}> <i className="fa-solid fa-caret-up"></i></span>
                    <span className='cart-product-down'
                        onClick={() => setCartQuantity((prev) => {
                            if (prev > 1) {
                                return prev - 1
                            }
                        })}
                    >
                        <i className="fa-solid fa-caret-down"></i>
                    </span>
                </span>
            </td>
            <td className='cart-product-subtotal'>
                <span className='cart-total-price'> {totalProductCart.toLocaleString()} đ </span>
            </td>
        </tr>
    )
}
export default CartProductItem