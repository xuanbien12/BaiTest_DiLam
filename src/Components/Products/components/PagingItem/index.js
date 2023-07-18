import React, { useState } from 'react'

const PagingItem = (props) => {
    const { title, active, onSetActive, onIcrementPaging } = props
    const handlePagingItem = () => {
        onSetActive(title)
        onIcrementPaging(title)
    }
    return (
        <li className={`page-numbers-item ${active}`} onClick={handlePagingItem}>{title + 1}</li>
    )
}
export default PagingItem