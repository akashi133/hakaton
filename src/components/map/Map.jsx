import React from 'react'
import './Map.scss'

const Map = () => {
    return (
        <div className='map'>
            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Aa650f7e571064419df8acc1dba267d8fe044fa714509269175d8b06d04802e01&amp;source=constructor" width="900" height="500" frameborder="0"></iframe>
        </div>
    )
}

export default Map