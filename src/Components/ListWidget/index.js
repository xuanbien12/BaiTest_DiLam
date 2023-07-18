import React, { useState } from 'react'
import WidgetCategorie from './components/WidgetCategorie'
import './style.css'

const ListWidget = (props) => {
    const [isShowWidget, setIsShowWidget] = useState(true)
    const { title, dataWidgetList } = props.item

    const handleShowWidget = () => {
        setIsShowWidget(!isShowWidget)
    }
    return (
        <div className='widget'>
            <h2 className='widget-title'>
                {title}
                <span className='widget-title-sp' onClick={handleShowWidget}></span>
            </h2>
            {isShowWidget ? <WidgetCategorie dataWidgetList={dataWidgetList} /> : null}

        </div>

    )
}
export default ListWidget