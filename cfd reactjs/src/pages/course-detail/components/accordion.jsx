import React from 'react';

const Accordion = ({date, title, content}) => {
    return (
        <>
            <div className="accordion">
                <div className="accordion__title">
                    <div className="date">{`Ngày ${date}`}</div>
                    <h3>{title}</h3>
                </div>
                <div className="content">
                    {content}
                </div>
            </div>
        </>
    );
}

export default Accordion;
