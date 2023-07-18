import React from "react";
import { Link } from "react-router-dom";

const Woocommerce = () => {
    return (
        <div className="woocommerce">
            <p className="cart-empty">Chưa có sản phẩm nào trong giỏ hàng.</p>
            <Link to="/portfolio" className="wc-backward">Quay trở lại cửa hàng</Link>
        </div>
    )
}
export default Woocommerce