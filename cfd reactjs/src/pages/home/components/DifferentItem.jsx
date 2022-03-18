import React from 'react';

const DifferentItem = ({title, content}) => {
    return (
        <>
            <div className="item">
                <h4>{title}</h4>
                <p>{content}
                </p>
            </div>
        </>
    );
}

export default DifferentItem;
