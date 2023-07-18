import React from 'react'

const WpCaption = (props) => {
    const { dataWpCaption, name } = props

    return (
        <div className='wp-caption'>
            <div className='wp-caption-inner'>
                <img src={dataWpCaption.img1} />

                <h4 className='wp-caption-text'>{name}</h4>
            </div>
            <div className='wp-caption-inner'>
                <img src={dataWpCaption.img2} />

                <h4 className='wp-caption-text'>{name}</h4>
            </div>
            <div className='wp-caption-inner'>
                <img src={dataWpCaption.img3} />

                <h4 className='wp-caption-text'>{name}</h4>
            </div>
            <div className='wp-caption-inner'>
                <img src={dataWpCaption.img4} />

                <h4 className='wp-caption-text'>{name}</h4>
            </div>
        </div>

    )
}
export default WpCaption