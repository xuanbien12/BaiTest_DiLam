import React from "react"
import MainRow from "./components/MainRow"
import './style.css'
const MainHome = () => {
    const dataRow = [
        {
            id: 1,
            link: "/portfolio",
            width: "1",
            title: "Toàn bộ sản phẩm",
            desc: "Hàng trăm mẫu giày chạy bộ, giày thể thao chính hãng Nike, Adidas, Asics, Puma… hàng có sẵn, sales liên tục tới 80%"

        },
        {
            id: 2,
            link: "/adidas",
            width: "2",
            title: "ADIDAS",
            desc: "Giày thể thao Adidas chính hãng, giày chạy bộ Adidas, giày running Adidas, những đôi giày mới nhất và đẹp nhất!"

        }
        ,
        {
            id: 3,
            link: "/nike",
            width: "1",
            title: "NIKE",
            desc: "Giày thể thao Nike, giày chạy bộ Nike, giày running Nike, hàng chính hãng, giày nike chính hãng, giày Nike nam, giày Nike nữ…"

        }
        ,
        {
            id: 4,
            link: "/adidas",
            width: "2",
            title: "ADIDAS boost",
            desc: "Những dòng giày huyền thoại, công nghệ Boost đỉnh cao nhất của Adidas"

        }
        ,
        {
            id: 5,
            link: "/nike",
            width: "1",
            title: "nike pegasus",
            desc: "Giày chạy bộ Nike Pegasus chính hãng, giày Nike Pegasus chính hãng, giày Nike Pegasus mới nhất, ship toàn quốc, hàng về liên tục, sales hàng tháng 30-50%"

        }
        ,
        {
            id: 6,
            link: "/adidas",
            width: "1",
            title: "running",
            desc: "Giày chạy bộ chính hãng, giày running nike, giày running adidas chính hãng, Chuyên cung cấp giày chạy bộ chính hãng, địa chỉ bán giày running chính hãng, uy tín nhất"

        }
        ,
        {
            id: 7,
            width: "2",
            title: "training",
            link: "/portfolio",

        }
        ,
        {
            id: 8,
            width: "2",
            title: "giày nam",
            link: "/adidas",

        }
        ,
        {
            id: 9,
            width: "2",
            title: "Giày nữ",
            link: "/adidas",
        }
        ,
        {
            id: 10,
            width: "2",
            title: "sale",
            link: "/adidas",

        }
    ]
    return (
        <div className="main-page">
            <div className="container">
                <MainRow data={dataRow} />
            </div>
        </div>
    )
}
export default MainHome