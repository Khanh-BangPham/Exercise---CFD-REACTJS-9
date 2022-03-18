import React from 'react'

export default function Label({title, erorr, mustHave, ...prop}) {
 return (
    <label>
        <p>{title} {mustHave?<span>*</span>:<span></span>}</p>
        <input type="text" {...prop}/>
        {erorr && <span className='text-erorr' style={{color:'red'}}>{erorr}</span>}
    </label>
  )
}
