import React from 'react';
import { useState } from 'react';
const Demo = () => {
    let [count, setCount] = useState({
        value: 0
    });
    let tang = () => {
        count.value += 1;
        setCount({...count});
    }
    let giam = () => {
        count.value -= 1;
        setCount({...count});
    }

    return (
        <div>
            <div>{count.value} count</div>
            <button onClick={tang}>tăng</button>
            <button onClick={giam}>giảm</button> 
        </div>
    );
}

export default Demo;
