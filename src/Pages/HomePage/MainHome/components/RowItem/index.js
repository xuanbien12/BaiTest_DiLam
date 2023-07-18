import React from 'react'
import { Link } from 'react-router-dom'
const RowItem = (props) => {
    const { id, title, desc, link, width } = props.item
    return (
        <div className={`row-item row-item-${width}`}  >
            <div className={`row-item-inner pd bg-row-${id}`}>

                <Link to={link} className='row-item-ab'>
                    <div className='wpd-wrapper'>
                        <h2 className={`wpd-wrapper-title ${id == 3 ? "wpd-wrapper-bg" : ""}`}>{title}</h2>
                        <div className='wpd-text'>
                            {desc ? <p className='wpd-text-desc'>
                                {desc}
                            </p> : null}
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}
export default RowItem