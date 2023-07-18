import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
const Logo = (props) => {
    const { img } = props
    return (
        <Link to="/" >
            <img src={img} alt="" />
        </Link>
    )
}
export default Logo