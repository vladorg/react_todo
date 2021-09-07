import React from 'react';
import withStore from '~/hocs/withStore';

function delCancel(props) {
  let {active, cancel, remove} = props;
  let ICONS = props.stores.icons;
  let TEXT = props.stores.textsStore;
  
  let btn;

  if (active) {
    btn = <button className="btn" onClick={() => cancel()} title={TEXT.btn_cancel}>{ICONS.iconCancel}</button>;
  } else {
    btn =  <button className="btn" onClick={() => remove()} title={TEXT.btn_remove}>{ICONS.iconRemove}</button>;
  }

  return btn;

}

export default withStore(delCancel);