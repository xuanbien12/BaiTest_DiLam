import React, { useState } from 'react'
import SizeItem from '../SizeItem'

const ListSize = (props) => {

    const { dataSize, setSizeActive, sizeActive } = props
    return (
        <ul className='detail-list-size'>
            {
                dataSize.map(item => <SizeItem key={item.id} item={item} setSizeActive={setSizeActive} className={sizeActive === item.size ? "active" : ""} />)
            }
        </ul>
    )
}
export default ListSize