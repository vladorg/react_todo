import React from 'react';

export default function(props) {
  let {order, textSave, iconSave, textCancel, iconCancel, item, save, cancel, ...others} = props;

  return (
    <div className="item item--active">
      <div className="item__wrap">
        <span>{order}.</span>
        <input ref={item} className="form-control" />
      </div>
      <button className="btn btn-success" onClick={() => save()} title={textSave}>{iconSave}</button>
      <button className="btn btn-secondary" onClick={() => cancel()} title={textCancel}>{iconCancel}</button>
    </div>
  );


}