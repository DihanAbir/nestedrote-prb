import React from 'react';
import fakeData from '../../fakeData';

const ItemDetails = (props) => {
    const{itemDetails} = props;
    console.log(itemDetails);
    const itemdetails = (fakeData.find(pd => pd.key === itemDetails))
    console.log(itemdetails);
    return (
        <div>
            {/* <h1>item details{itemdetails}</h1> */}
        </div>
    );
};

export default ItemDetails;