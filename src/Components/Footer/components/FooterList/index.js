import React from 'react'
import FooterItem from '../FooterItem'

const FooterList = (props) => {
    const { className, data } = props
    return (
        <ul className={className}>
            {data.map(item => <FooterItem key={item.id} item={item} />)}
        </ul>
    )
}
export default FooterList