import React from 'react'

const FooterItem = (props) => {
    const { title } = props.item
    return (
        <li>
            <a>
                {title}
            </a>
        </li>
    )
}
export default FooterItem