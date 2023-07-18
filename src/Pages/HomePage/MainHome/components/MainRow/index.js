import React from 'react'
import RowItem from '../RowItem'
const MainRow = ({ data }) => {
    return (
        <div className='main-row'>
            {
                data.map(item => <RowItem key={item.id} item={item} />)
            }

        </div>
    )
}
export default MainRow