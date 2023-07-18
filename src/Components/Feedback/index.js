import React, { useState } from 'react'
import './style.css'

const Feedback = () => {
    const [isShowMessge, setIsShowMessge] = useState(true)
    return (
        <div className="feedback">
            {isShowMessge ? <div onClick={() => { setIsShowMessge(false) }} className="feedback-img"></div> : <div className="feedback-message">
                <div className="feedback-header">
                    <div className="feedback-avatar">
                        <img src="https://vcdn.subiz-cdn.com/file/firpkanobvczjvieytne_acosdlceoddbzrk84606" alt="" />
                    </div>
                    <div className="feedback-content">
                        <div className="feedback-title">Chào Anh em !</div>
                        <p>Hãy để lại số điện thoại để được phản hồi một cách nhanh nhất </p>
                    </div>
                    <div className="feedback-delete" onClick={() => {
                        setIsShowMessge(true)
                    }}></div>
                </div>
                <div className="feedback-body">
                    <div className="fback-inner ">
                        <div className="feedback-body-img">

                        </div>
                        <p>Tiếp nhận mọi phản hồi của khách hàng để web càng ngày càng phát triển hơn </p>
                    </div>
                    <div className="message-input">

                        <textarea className="feedback-input" name="" id="" cols="30" rows="10" placeholder="Nhập tin nhắn ...."></textarea>
                        <div className="send-message">  <i className="fa-solid fa-paper-plane"></i></div>
                    </div>
                </div>
            </div>}

        </div>
    )
}
export default Feedback