import React from 'react'
import { Link } from 'react-router-dom'
const NavBarItem = (props) => {
    const { to, title } = props.item
    return (
        <li>
            <Link to={to} className='sty-navbar-a'>
                {title}
            </Link>
        </li>
    )
}
export default NavBarItem