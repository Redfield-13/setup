import React, { useState } from 'react';

const Tour = (props) => {

  const [more,setMore] = useState(false)
  const readMore = ()=>{
    setMore(!more)
  }

  return <div className='card'>
    <img src={props.image} alt=""/>
    <div className="info">
      <span className='name'>{props.name}</span>
      <span className='price'>$ {props.price}</span>
    </div>
    <div className="detail">
      {more?props.info:props.info.slice(0,199)+'...'}
      <button id='read' className='read' onClick={readMore}>{more?'Show Less':'Read More'}</button>
    </div>
    {props.children}
  </div>


};

export default Tour;
