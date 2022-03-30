import React from 'react';

const ReviewItems = ({product}) => {

    const {name} = product;

    return (
        <div>
            <h1>
                {name}
            </h1>
        </div>
    );
};

export default ReviewItems;