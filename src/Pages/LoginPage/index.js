import React, { useEffect, useState } from "react";
import './style.css'
import axios from 'axios'
import SocialLogin from "../../Components/SocialLogin";
import { Link, useHistory } from "react-router-dom";
import Input from "../../Components/Input";
import Button from "../../Components/Button";

const LoginPage = () => {
    const [valueLogin, setValueLogin] = useState({
        name: "",
        password: ""
    })
    const [success, setSuccess] = useState(false)
    const handleChangInputLogin = (e) => {
        const { name, value } = e.target
        setValueLogin({
            ...valueLogin,
            [name]: value
        })
    }
    const history = useHistory()
    const handleLogin = (e) => {
        e.preventDefault()
        if (valueLogin.name && valueLogin.password) {
            axios.get("https://64a41a3cc3b509573b571155.mockapi.io/api/product/user")
                .then(function (respons) {
                    return respons.data
                })
                .then(function (users) {
                    const checkUser = users.find(user => user.name == valueLogin.name && user.password == valueLogin.password)
                    if (checkUser) {
                        localStorage.setItem("login", JSON.stringify(checkUser))
                        setSuccess(true)
                        setTimeout(() => {
                            history.push("/")
                        }, 2000)
                    } else {
                        alert("Tài khoản không tồn tại")
                    }
                })
        } else {
            alert("Vui lòng nhập đầy đủ thông tin")
        }

    }
    return (
        <div className="login">
            <div className="container-login">
                <div className="login-inner">
                    <form className="form form-login" onSubmit={handleLogin}>
                        <h2 className="title-form-login">Đăng nhập</h2>
                        <Input className="login-input" placeholder="Tên đăng nhập" type="text" name="name" value={valueLogin.name} onChangeInput={handleChangInputLogin} />
                        <Input className="login-input" placeholder="Mật khẩu" type="password" name="password" value={valueLogin.password} onChangeInput={handleChangInputLogin} />
                        <Button className="btn-login"  >Đăng nhập</Button>
                        {success && <h5 >Đăng ký tài khoản thành công <i className="fa-solid fa-circle-check"></i></h5>}
                        <Link to='/forgot' className="link-forgot">Quên mật khẩu</Link>
                        <SocialLogin />

                        <div className="login-to-register">
                            <span className="text-register">
                                Bạn mới đến RunningStore ?
                            </span>
                            <Link to="/sigup">Đăng ký </Link>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default LoginPage