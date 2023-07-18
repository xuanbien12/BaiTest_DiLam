import React from 'react'
import { Link } from 'react-router-dom'
const WidgetItem = (props) => {
    const { title, to } = props
    return (
        <li>
            <Link to={to}>
                {title}
            </Link>

        </li>
    )
}
export default WidgetItem