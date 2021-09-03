import React from 'react';

export default function(props) {
  let {order, textSave, item, save, ...others} = props;

  return (
    <div className="item">
      <div className="item__wrap">
        <span>{order}.</span>
        <input ref={item}/>
      </div>
      <button className="btn" onClick={() => save()}>{textSave}</button>
    </div>
  );


}