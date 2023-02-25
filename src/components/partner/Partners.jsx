import React from 'react'
import Carousel from "react-elastic-carousel";
import Item from "./Item";

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
];

const Partners = () => {

    return (
        <div className='carus'>
            <h1 style={{ textAlign: "center" }}>Наши спонсоры</h1>
            <div className="carus2">
                <Carousel breakPoints={breakPoints}>
                    <Item className='partner1'></Item>
                    <Item className='partner2'></Item>
                    <Item className='partner3'></Item>
                    <Item className='partner4'></Item>
                    <Item className='partner5'></Item>
                    <Item className='partner6'></Item>
                    <Item className='partner7'></Item>
                    <Item className='partner8'></Item>
                </Carousel>
            </div>
        </div>
    );
}

export default Partners