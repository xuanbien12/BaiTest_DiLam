import React from 'react'
import NavBarItem from '../NavBarItem'
const NavbarList = (props) => {
    const { data } = props
    return (
        <ul className='dl-fl navbar-list-inner'>
            {
                data.map(item => <NavBarItem key={item.id} item={item} />)
            }
        </ul>
    )
}
export default NavbarList