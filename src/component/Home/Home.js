import React, { useState } from 'react';
import fakeData  from '../../fakeData';
import Item from '../Item/item';
import ItemDetails from '../ItemDetails/ItemDetails';
import './Home.css';


const Home = () => {

   const [item, setItem] = useState(fakeData)
   const [itemDetails, setItemDetails] = useState({})
   const addHandler = (key) =>{
       console.log("clicked", key)
       setItemDetails(key);
   }

   


    return (
        <div className="home-container">
            <div className="details">
                <ItemDetails itemDetails={itemDetails} ></ItemDetails>
                <img src='' alt=""/>
            </div>
            <div className="imege">
                
                {
                    item.map(item => <Item 
                        className="image-single" 
                        item={item} 
                        addHandler ={addHandler}
 
                        ></Item> )
                }
            
            </div>
        </div>
    );
};

export default Home;