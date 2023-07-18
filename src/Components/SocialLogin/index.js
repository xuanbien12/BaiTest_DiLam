import React from "react";
import './style.css'

const SocialLogin = () => {
    return (
        <div className="social">
            <div className="line">
                <span className="login-hr"></span>
                <span className="login-hr-text">Or</span>
                <span className="login-hr"></span>
            </div>
            <div className="social-inner">
                <div className="social-item">
                    <img src="https://xuanbien12.github.io/DATN-NGUYENXUANBIEN/login/login/Facebook_Logo_(2019).png" />
                    Facebook
                </div>
                <div className="social-item">
                    <img src="https://xuanbien12.github.io/DATN-NGUYENXUANBIEN/login/login/Google__G__Logo.svg.webp" />
                    Google
                </div>
            </div>

        </div>

    )
}
export default SocialLogin