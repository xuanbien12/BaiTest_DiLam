import React from 'react'
import WidgetCategorieItem from '../WidgetItem'

const WidgetCategorie = (props) => {
    const { dataWidgetList } = props
    return (
        <ul className='product-categorie toggle1-perform'>
            {dataWidgetList.map(item => <WidgetCategorieItem key={item.id} title={item.title} to={item.to} />)}
        </ul>
    )
}
export default WidgetCategorie