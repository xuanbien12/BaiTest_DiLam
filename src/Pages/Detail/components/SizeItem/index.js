import React, { useState, useEffect } from 'react'

const SizeItem = (props) => {

    const { setSizeActive, sizeActive, className } = props
    const { size } = props.item
    useEffect(() => {
        // if (isSizeActive) {
        //     setSizeActive(size)
        // } else {
        //     // setSizeActive((prev) => {
        //     //     const newPrev = prev.filter(item => item !== size)
        //     //     return [...newPrev]
        //     // })
        // }

    }, [sizeActive])

    const handleActiveSize = () => {
        setSizeActive(size)



    }

    return (
        <li onClick={handleActiveSize} className={`detail-size-item ${className ? "size-active" : ""} `}>{size}</li>
    )
}
export default SizeItem