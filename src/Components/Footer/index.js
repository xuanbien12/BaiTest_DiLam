import React from 'react'
import './style.css'
import './responsive.css'
import Logo from '../logo'
import FooterList from './components/FooterList'
import Input from '../Input'

const Footer = () => {

    const dataFtLogo = [
        {
            id: 1,
            title: <i className="fa-brands fa-square-facebook"></i>
        },
        {
            id: 2,
            title: <i className="fa-brands fa-google-plus"></i>
        }
        ,
        {
            id: 3,
            title: <i className="fa-brands fa-square-twitter"></i>
        }
        ,
        {
            id: 4,
            title: <i className="fa-brands fa-pinterest"></i>
        }

    ]
    const dataFt2 = [
        {
            id: 1,
            title: "Trang chủ"
        },
        {
            id: 2,
            title: "Blog"
        }
        ,
        {
            id: 3,
            title: "Facebook Page"
        }
        ,
        {
            id: 4,
            title: "Chính sách bán hàng"
        }
    ]
    const dataFt3 = [
        {
            id: 1,
            title: "Giày Lifestyle"
        },
        {
            id: 2,
            title: "Giày Running"
        }
        ,
        {
            id: 3,
            title: "Facebook Page"
        }
        ,
        {
            id: 4,
            title: "Giày Training"
        }
        ,
        {
            id: 5,
            title: "Giày thể thao nam"
        }
        ,
        {
            id: 6,
            title: "Giày thể thao nữ"
        }

    ]
    const dataFt4 = [
        {
            id: 1,
            title: "Nike Free"
        },
        {
            id: 2,
            title: "Nike Pegasus"
        }
        ,
        {
            id: 3,
            title: "Nike Air Zoom"
        }
        ,
        {
            id: 4,
            title: "Giày Training"
        }

    ]
    return (
        <footer id="footer">
            <div className='container'>
                <div className='footer'>
                    <div className='textwidget'>
                        <div className='ft-logo'>
                            <Logo img="https://runningstore.vn/wp-content/uploads/2016/02/Running-store-logo_final_white_footer-1.png" />
                            <h3 className='site-namemg-b mg-b '>r u n n i n g s tore.vn</h3>
                            <p className='mg-b '>HOTLINE: 0923.833.666</p>
                            <p className='mg-b '>EMAIL: Runningstore.vn@gmail.com</p>
                            <FooterList className="rs-icons" data={dataFtLogo} />
                            <div className='input-gmail dl-fl'>
                                <Input className="input-gmail-i" type="text" placeholder="Đăng ký email nhận voucher giảm giá 25%" />
                                <i className="fa-solid fa-envelope"></i>
                            </div>
                        </div>

                    </div>

                    <div className='nav-menu1'>
                        <FooterList className="menu-ft" data={dataFt2} />
                    </div>
                    <div className='nav-menu1'>
                        <FooterList className="menu-ft" data={dataFt3} />
                    </div>
                    <div className='nav-menu1'>
                        <FooterList className="menu-ft" data={dataFt4} />
                    </div>
                    <div className='textwidget'>
                        <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Frunningstore.vn&amp;tabs=timeline&amp;width=350&amp;height=350&amp;small_header=false&amp;adapt_container_width=true&amp;hide_cover=false&amp;show_facepile=true&amp;appId=490866727757684" frameBorder="0"></iframe>
                    </div>
                </div>

            </div>
            <hr className='ft-hr' />
            <div className='container'>
                <div className='footer-inner-b'>
                    <p>Copyright © 2014-2023 RUNNINGSTORE.VN</p>
                    <p>
                        Runningstore.vn | Giày thể thao, chạy bộ chính hãng <br />
                        ĐC: Số 2 – ngõ 121 Thái Hà – Đống Đa – Hà Nội <br />
                        Hotline: 0923.833.666 – 078.246.5555
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer