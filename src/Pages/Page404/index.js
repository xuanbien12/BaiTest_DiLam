import React from 'react'

import './style.css'
import { Link } from 'react-router-dom'

const Page404 = () => {
    return (
        <div className='page-404'>

            <h2 className='page-404-title'> Thứ bạn tìm kiếm có thể không tồn tại</h2>
            <Link to="/" className='page-404-link'>Quay lại trang chủ</Link>
        </div>
    )
}
export default Page404