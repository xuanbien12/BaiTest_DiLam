import React, { useState, useContext, useEffect } from 'react'

import './style.css'
import './responsive.css'
import zalo from './img/zalo.png'
import facebook from './img/facebook.png'
import Input from '../Input'
import NavbarList from './components/NavbarList'
import Button from '../Button'
import { Link, useHistory } from 'react-router-dom'
import Logo from '../logo'
import { ProviderApp } from '../../ProviderGlobal'
const Header = () => {
    // const [user, SetUser] = useState()
    const [isShowList, setIsShowList] = useState(true)
    const [isShowInput, setIsShowInput] = useState(true)
    const [isShowSetting, setIsShowSetting] = useState(true)
    const [isfixNav, setIsFixNav] = useState(false)

    const providerContext = useContext(ProviderApp)
    const { cartProducts } = providerContext
    const user = JSON.parse(localStorage.getItem("login"))




    window.addEventListener("scroll", function () {
        var scrollPosition = window.scrollY;
        if (scrollPosition > 100) {
            setIsFixNav(true)
            setIsShowInput(false)

        } else {
            setIsFixNav(false)
            setIsShowInput(true)
        }
    });
    const dataNav = [
        {
            id: 1,
            to: "/",
            title: <i className="fa-solid fa-house"></i>
        },
        {
            id: 2,
            to: "/portfolio",
            title: "Sản Phẩm"
        },
        {
            id: 3,
            to: "/adidas",
            title: "adidas"
        },
        {
            id: 4,
            to: "/nike",
            title: "nike"
        },
        {
            id: 5,
            to: "/asics",
            title: "asics"
        },
        {
            id: 6,
            to: "/blog",
            title: "blog"
        },
        {
            id: 7,
            to: "/outle",
            title: "outlet"
        },

    ]
    const handleShowNav = () => {
        setIsShowList(!isShowList)
    }
    const handleShowSetting = () => {
        setIsShowSetting(!isShowSetting)
    }
    const history = useHistory()
    const handleDeleteUser = () => {
        localStorage.setItem("login", JSON.stringify(""))
        history.push({
            pathname: "/login"
        })
        setIsShowSetting(!isShowSetting)
    }
    return (
        <header className={`header ${isfixNav ? "site-header" : ""}`}>

            <div className='header-topbr'>
                <div className='container'>
                    <div className='row-h dl-fl-between'>
                        <div className='rs-logo col-lr-1'>
                            <Link to="/login" className='rp-bars-st rp-hdr'><i className="fa-solid fa-user hover-i"></i></Link>
                            <Logo img="https://runningstore.vn/wp-content/uploads/2016/02/Running-store-logo_final_black_-180x60.png" />
                            <Link to='/cart' className='rp-cart-shopping rp-hdr'>

                                <i className="fa-solid fa-cart-shopping hover-i"></i>
                                {cartProducts ? <span className='cart-count'>{cartProducts.length}</span> : null}
                            </Link>

                        </div>
                        <div className='rs-contact col-lr-1'>
                            <ul className='dl-fl'>
                                <li className='dl-fl'>
                                    <span className='contact-name'> Steven Biên: </span>
                                    <a href='' className='skype mg-l-1'>
                                        <img src={zalo} />
                                    </a>
                                    <span className='mobile mg-l-1'>0362953021</span>
                                </li>
                                <li className='dl-fl mg-l-2'>
                                    <span className='contact-name'>Facebook Biên: </span>
                                    <a className='skype-fb' href='https://www.facebook.com/profile.php?id=100011393505734'>
                                        <img src={facebook} />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        {
                            isShowInput
                                ?
                                <div className='nav-navbar1'>
                                    <Input type="text" name="input" className="search" placeholder="TÌM KIẾM" />
                                </div>
                                :
                                null
                        }


                    </div>
                </div>
            </div>
            <div className='rs-navbar'>
                <div className='container'>
                    <div className='rs-navbar-inner dl-fl-between'>
                        <div className='navbar-list'>
                            <NavbarList data={dataNav} />
                            <h3 className='rp-navbar-list'>
                                Danh mục
                                <span onClick={handleShowNav} className='rp-bars-st rp-hdr'>
                                    <i className="fa-solid fa-bars"></i>
                                </span>

                            </h3>
                            <div className={`list-rp show-list ${isShowList ? "show-list-hide " : "show-list-show "}`}>
                                <div className='list-rp-main'>
                                    <div className='list-rp-main-l'>
                                        <h2 className='sty-navbar-a'>Menu</h2>
                                        <NavbarList data={dataNav} />
                                    </div>
                                    <span className='xmark'>
                                        <Button onClick={() => { setIsShowList(!isShowList) }} className="btn-rs-navbar"  ><i className="fa-solid fa-xmark"></i></Button>
                                    </span>
                                </div>
                            </div>

                        </div>
                        <div className='nav-navbar'>
                            <ul className='dl-fl'>
                                {user && <li>
                                    <div className='st-user' onClick={handleShowSetting}>
                                        <span className='show-name'>{user ? user.name : null}</span>
                                        <span ><i className="fa-solid fa-caret-down user-setting" ></i></span>
                                        <div className={`setting ${isShowSetting ? "hide-setting" : "show-setting"}`}>
                                            <ul>
                                                <li className='show-user'>{user ? user.name : null}</li>
                                                <li className='set-setting'>
                                                    <i className="fa-solid fa-gear"></i>
                                                    <span>Thay đổi mật khẩu</span>
                                                </li>
                                                <li className='set-logout' onClick={handleDeleteUser}>
                                                    <a>
                                                        <i className="fa-solid fa-right-from-bracket"></i>
                                                        <span > đăng xuất </span>
                                                    </a>
                                                </li>

                                            </ul>
                                        </div>


                                    </div>
                                </li>}
                                <li>
                                    <Link to="/login">

                                        <i className="fa-solid fa-user hover-i"></i>
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/cart" className='icon-cart'>
                                        <i className="fa-solid fa-cart-shopping hover-i"></i>
                                        {cartProducts ? <span className='cart-count'>{cartProducts.length}</span> : null}

                                    </Link>
                                </li>
                                <li>
                                    <Input type="text" name="input" className="search" placeholder="tìm kiếm" />
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </header>
    )
}
export default Header