import React from 'react';

export default function(props) {
  let {order, textSave, iconSave, textCancel, iconCancel, item, save, cancel, ...others} = props;

  return (
    <div className="item">
      <div className="item__wrap">
        <span>{order}.</span>
        <input ref={item}/>
      </div>
      <button className="btn" onClick={() => save()} title={textSave}>{iconSave}</button>
      <button className="btn" onClick={() => cancel()} title={textCancel}>{iconCancel}</button>
    </div>
  );


}