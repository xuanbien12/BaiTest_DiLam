import React, { useEffect, useState, useContext } from 'react'
import { useLocation, useHistory, Link, useParams } from 'react-router-dom'
import Slider from "react-slick";
import _isObject from 'lodash/isObject'
import axios from 'axios'
import './style.css'
import './responsive.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import _sample from 'lodash/sample'
import _get from 'lodash/get'
import ListSize from './components/ListSize'
import Button from '../../Components/Button'
import WpCaption from './components/WpCaption'
import { ProviderApp } from '../../ProviderGlobal'
import ProductItem from '../../Components/ProductItem';
const Detail = () => {
    const [sizeActive, setSizeActive] = useState()
    const [productSlider, setProductSlider] = useState([])
    const [productRender, setProductRender] = useState()
    const history = useHistory()
    const products = useContext(ProviderApp)
    const { setCartProducts } = products
    const { id } = useParams()
    // check xem có sản phẩm hay ko không thì đưa về {}
    const checkProduct = productRender || {}
    // đổi qua number để sử dụng toLocaleString
    const newDel = +checkProduct.del
    const newPrice = +checkProduct.price
    const checkObject = _isObject(productRender)
    useEffect(() => {
        axios.get("https://64a41a3cc3b509573b571155.mockapi.io/api/product/products")
            .then(function (respons) {
                const products = respons.data
                const newProduct = products.find((item) => item.id == id)
                // có sản phẩm thì render không có đưa ra trang 404
                if (newProduct) {

                    setProductRender(newProduct)
                } else {
                    history.push({
                        pathname: "/404 "
                    })
                }
                // ramdom 7 sản phẩm ngẫu nhiên để  render slick slider
                setProductSlider([_sample(products), _sample(products), _sample(products), _sample(products), _sample(products), _sample(products), _sample(products)])

            })

    }, [id])
    const handleToCart = (product) => {
        // tạo 1 sản phẩm để thêm vào cart
        const newProduct = {
            ...product,
            quantity: 1,
            size: sizeActive

        }
        if (sizeActive) {
            setCartProducts((prev) => {

                const check = prev.find(item => item.id === product.id && item.size === sizeActive)
                if (check) {
                    // kiểm tra xem trong cart có sản phẩm  với size đấy chưa 
                    //  có rồi thì cộng thêm số lượng quantity
                    const newProductCart = prev.filter(item => {
                        if (item.name === product.name && item.size === sizeActive) {
                            item.quantity += 1
                            return item
                        }
                        return item
                    })
                    return [...newProductCart]

                } else {
                    // chưa có trong cart thì thêm mới
                    return [...prev, newProduct]
                }
            })
        } else {
            alert("vui lòng chọn size")
            return
        }
        alert("đặt hàng thành công")

    }
    const settings = {

        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        infinite: true,
        speed: 500,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,

                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                    infinite: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            }
        ]
    };
    const dataSize = [
        {
            id: 1,
            size: 37.5
        },
        {
            id: 2,
            size: 38
        },
        {
            id: 3,
            size: 38.5
        },
        {
            id: 4,
            size: 39
        },
    ]
    const handleToSrollTop = () => {
        window.scroll({
            top: 0
        })
    }
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", right: "10px", zIndex: "2" }}
                onClick={onClick}
            />
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", left: "10px", zIndex: "2", }}
                onClick={onClick}
            />
        );
    }

    return (
        <>
            {

                checkObject === true
                    ?
                    <div className='page-detail'>
                        < div className='rs-navbar-b' >
                            <div className='container'>
                                <div className='navbar-b-inner'>
                                    <Link to="/">Trang chủ</Link>
                                    <span className='delimiter'>
                                        <i className="fa-solid fa-caret-right"></i>
                                    </span>
                                    <span>Sản phẩm</span>
                                    <span className='delimiter'>
                                        <i className="fa-solid fa-caret-right"></i>
                                    </span>
                                    <span className='name-tab'>
                                        {checkProduct.name}
                                    </span>
                                </div>
                            </div>

                            <div className='container'>
                                <div className='product-detail'>
                                    <div className='product-detail-img'>
                                        <img src={checkProduct.img}></img>
                                    </div>
                                    <div className='product-detail-summary'>
                                        <h2 className='summary-title'>{checkProduct.name}</h2>
                                        <div className='pr-price-main'>
                                            <strong>Giá :</strong>
                                            <del>{newDel.toLocaleString()}</del>
                                            <span className='pr-price mg-l-1'>
                                                <span className='car-price'>{newPrice.toLocaleString()} đ</span>
                                            </span>

                                        </div>
                                        <p className='rs-pr'>
                                            <strong>Mã SP : </strong>
                                            #FY4080
                                        </p>
                                        <p className='rs-pr'>
                                            <strong>Hãng SX :</strong>
                                            <Link to="/nike">nike</Link>
                                        </p>
                                        <p className='rs-pr'>
                                            <strong>Tình Trạng : </strong>
                                            Còn hàng
                                        </p>
                                        <p className='rs-pr'>
                                            <strong>chọn size : </strong>
                                        </p>
                                        <div className='Product-list-Size'>
                                            <ListSize dataSize={dataSize} setSizeActive={setSizeActive} sizeActive={sizeActive} />
                                        </div>
                                        <div className='rs-pr-contact'>
                                            <h3>Hỗ trợ đặt hàng</h3>
                                            <div className='rs-pr-contact-inner dl-fl'>
                                                <div className='phones dl-fl'>
                                                    <span className='icon'>
                                                        <i className="fa-solid fa-mobile-screen-button"></i>
                                                    </span>
                                                    <span className='info-phone'>
                                                        <span className='info'> Biên: <a href=''>0326953021</a></span>
                                                        <span className='info'> Biên: <a href=''>0326953021</a></span>
                                                    </span>

                                                </div>
                                                <div className='skypes'>
                                                    <span className='info-phone'>
                                                        <span className='info'> Biên: <a href=''>0326953021</a></span>
                                                        <span className='info'> Biên: <a href=''>0326953021</a></span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <Button className="add-to-cart" onClick={() => handleToCart(checkProduct)} >Đặt hàng</Button>
                                    </div>
                                </div>
                            </div>
                            <div className='info-product'>
                                <div className='container'>
                                    <div className='info-product-inner'>
                                        <h3 className='info-product-title'>
                                            Thông tin sản phẩm
                                        </h3>
                                        <p>
                                            <Link className='hv' to="/adidas">Giày thể thao {checkProduct.brand}</Link>
                                            Giày {checkProduct.name} mã sản phẩm FY0306. Hoàn toàn yên tâm “Cân” tất cả các hoạt động hàng ngày với đôi giày Adidas Ultra Boost , đôi giày duy nhất mang lại sự ổn định tuyệt đối và cảm giác thoải mái, vừa vặn không thể nhầm lẫn đi đâu được..
                                        </p>
                                        <p>
                                            <Link className='hv' to="/adidas">Giày thể thao {checkProduct.brand}</Link>
                                            Giày {checkProduct.name} mã sản phẩm FY0306. Hoàn toàn yên tâm “Cân” tất cả các hoạt động hàng ngày với đôi giày Adidas Ultra Boost , đôi giày duy nhất mang lại sự ổn định tuyệt đối và cảm giác thoải mái, vừa vặn không thể nhầm lẫn đi đâu được..
                                        </p>
                                        <p>
                                            <b>CÔNG NGHỆ NỔI BẬT: </b>
                                        </p>
                                        <p>ADIDAS LEP</p>
                                        <p>Công nghệ Torsion System mới giúp độ chịu uốn của mũi giày tăng thêm 15%, cho sải bước thêm đàn hồi.</p>
                                        <p>HOÀN TRẢ NĂNG LƯỢNG TUYỆT VỜI</p>
                                        <p>6% hạt Boost tăng cường sẵn sàng bùng nổ năng lượng trong từng bước chân.</p>
                                        <p>PRIMEBLUE</p>
                                        <p>Sản phẩm này may bằng vải công nghệ Primeblue, chất liệu tái chế hiệu năng cao có sử dụng sợi Parley Ocean Plastic. 50% thân giày làm bằng vải dệt, 75% vải dệt bằng sợi Primeblue. Không sử dụng polyester nguyên sinh.</p>

                                        {checkProduct.listImg ? <WpCaption dataWpCaption={checkProduct.listImg} name={checkProduct.name} /> : null}
                                    </div>
                                </div>
                            </div>
                            <div className='pro-slider '>
                                <div className='container'>
                                    <div className='pro-slider-inner '>
                                        <div className='carousel-inner'>
                                            <h3 className='info-product-title'>
                                                RELATED PRODUCTS
                                            </h3>
                                            <Slider
                                                {...settings}
                                            >
                                                {
                                                    productSlider.map(item => <ProductItem key={item.id} item={item} handleToSrollTop={handleToSrollTop} />)
                                                }
                                            </Slider>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div >
                    </div >
                    :
                    <div className='loadding'>

                        <div className='loader-inner'>
                            <img src="https://img.idesign.vn/2018/10/23/id-loading-1.gif"></img>
                        </div>


                    </div>
            }
        </>





    )
}
export default Detail