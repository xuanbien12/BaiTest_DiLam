import React from 'react'
import ListWidget from '../ListWidget'

const WidgetMain = () => {
    const dataCategory = [
        {
            id: 1,
            title: "Danh mục",
            dataWidgetList: [
                {
                    id: 1,
                    title: "Đai chạy bộ",
                    to: "/portfolio"
                },
                {
                    id: 2,
                    title: "Giày Nam",
                    to: "/portfolio"
                },
                {
                    id: 3,
                    title: "Giày Nữ",
                    to: "/portfolio"
                },
                {
                    id: 4,
                    title: "Outlet",
                    to: "/portfolio"
                },
            ]
        },
        {
            id: 2,
            title: "Dòng giày",
            dataWidgetList: [
                {
                    id: 1,
                    title: "Nike Zoomx",
                    to: "/nike"
                },
                {
                    id: 2,
                    title: "Nike React",
                    to: "/nike"
                },
                {
                    id: 3,
                    title: "Nike Pegasus",
                    to: "/nike"
                },
                {
                    id: 4,
                    title: "Nike Air Zoom",
                    to: "/nike"
                },
                {
                    id: 5,
                    title: "Flyte Foam",
                    to: "/nike"
                },
                {
                    id: 6,
                    title: "Asics Gel",
                    to: "/asics"
                },
                {
                    id: 7,
                    title: "Adidas Lightstrike",
                    to: "/adidas"
                },
                {
                    id: 8,
                    title: "Adidas Duramo",
                    to: "/adidas"
                },
                {
                    id: 9,
                    title: "Adidas Bounce ",
                    to: "/adidas"
                },
                {
                    id: 10,
                    title: "Adidas Boost",
                    to: "/adidas"
                },
            ]
        }
        ,
        {
            id: 3,
            title: "Loại giày",
            dataWidgetList: [
                {
                    id: 1,
                    title: "Running",
                    to: "/portfolio"
                },
                {
                    id: 2,
                    title: "Sneaker",
                    to: "/Giày Nữ"
                },
                {
                    id: 3,
                    title: "Giày Nữ",
                    to: "/portfolio"
                },
                {
                    id: 4,
                    title: "Training",
                    to: "/portfolio"
                },
            ]
        }

    ]
    return (

        dataCategory.map(item => <ListWidget key={item.id} item={item} />)

    )
}
export default WidgetMain