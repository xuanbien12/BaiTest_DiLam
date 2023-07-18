import React from "react";
import './style.css'

const Button = (props) => {
    const { children, className, onClick, type, onSubmit } = props
    return (
        <button className={`btn ${className}`} onClick={onClick} type={type} >{children}</button>
    )
}
export default Button