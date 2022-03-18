import React from 'react';

const Label = ({title, isMandatory = true, placeholder = '', isTextarea = false, col = 0, row = 0}) => {
    return (
        <label>
            <p> {title} <span> {isMandatory ? '*' : '' } </span></p>
            {isTextarea ? <textarea name id cols={col} rows={row} defaultValue={""} /> : <input type="text" placeholder={placeholder} />}
        </label>
    );
}

export default Label;
