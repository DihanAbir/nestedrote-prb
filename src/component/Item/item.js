import React from 'react';
import './item.css'

const Item = (props) => {
    // console.log(props)
    const{img, addHandler,key} = props.item;
    return (
        <div onClick={() => props.addHandler(key)}>
            <div onClick={addHandler}>
                <img className='img' src={img} alt=""/>
            </div>  
        </div>
    );
};

export default Item;