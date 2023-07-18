import React, { useState } from "react";
import axios from 'axios'
import './../../assets/css/responsive.css'
import './style.css'
import SocialLogin from "../../Components/SocialLogin";
import { Link, useHistory } from "react-router-dom";
import Input from "../../Components/Input";
import Button from "../../Components/Button";


const SigUpPage = () => {
    const [valueInput, setValueInput] = useState({
        name: "",
        phone: "",
        password: "",
        passwordAgain: ""
    })
    const history = useHistory()
    const [success, setSuccess] = useState(false)
    const handleGetSigUp = (e) => {
        e.preventDefault()
        const newUser = {
            ...valueInput,
            permission: "user"
        }
        if (valueInput.name && valueInput.phone && valueInput.password && valueInput.passwordAgain) {
            if (valueInput.phone.length === 10) {
                if (valueInput.password == valueInput.passwordAgain) {
                    axios.post("https://64a41a3cc3b509573b571155.mockapi.io/api/product/user", newUser)
                    setSuccess(true)
                    setTimeout(() => {
                        history.push({
                            pathname: "/login"
                        })
                    }, 2000)
                } else {
                    alert("Mật khẩu phải trùng nhau :")
                }
            } else {
                alert("Số điện thoại không hợp lệ (10 kí tự) :")
            }
        } else {
            alert("Vui lòng nhập đủ thông tin :")
        }

    }
    const handleChangeInputSigup = (e) => {
        const { name, value } = e.target

        setValueInput({
            ...valueInput,
            [name]: value
        })
    }
    return (
        <div className="sigup">
            <div className="container-login">
                <div className="sigup-inner">
                    <form className="sigup-from" onSubmit={handleGetSigUp}  >
                        <h2 className="title-form-login">Đăng ký</h2>
                        <Input className="login-input" placeholder="Tên đăng nhập" name="name" type="text" value={valueInput.name} onChangeInput={handleChangeInputSigup} />
                        <Input className="login-input" placeholder="Số điện thoại" name="phone" type="number" value={valueInput.phone} onChangeInput={handleChangeInputSigup} />
                        <Input className="login-input" placeholder="Mật khẩu" name="password" type="password" value={valueInput.password} onChangeInput={handleChangeInputSigup} />
                        <Input className="login-input" placeholder="Nhập lại mật khẩu" name="passwordAgain" type="password" value={valueInput.passwordAgain} onChangeInput={handleChangeInputSigup} />
                        <Button className="btn-login" type="submit" onClick={handleGetSigUp}  >Đăng ký</Button>
                        {success && <h5 >Đăng ký tài khoản thành công <i className="fa-solid fa-circle-check"></i></h5>}

                        <Link className="link-forgot" to="/forgot">Quên mật khẩu</Link>
                        <SocialLogin />
                        <div className="login-to-register">
                            <span className="text-register">
                                Bạn đã có tài khoản ?
                            </span>
                            <Link to="/login">Đăng nhập</Link>

                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}
export default SigUpPage