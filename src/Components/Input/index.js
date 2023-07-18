import React from 'react'
import './style.css'

const Input = (props) => {
    const { value, name, type, placeholder, className, onChangeInput } = props
    return (
        <input value={value} name={name} type={type} placeholder={placeholder} className={className} onChange={onChangeInput} autoComplete="on" />
    )
}
export default Input