import React from 'react';
import withStore from '~/hocs/withStore';

function saveEdit(props) {
  let {active, completed, save, activate} = props;
  let ICONS = props.stores.icons;
  let TEXT = props.stores.textsStore;
  
  let btn;

  if (active) {
    btn = <button className="btn btn-success" onClick={() => save()} title={TEXT.btn_save}>{ICONS.iconSave}</button>
  } else if (completed) {
    btn =  <button className="btn btn-secondary" title={TEXT.btn_edit} disabled>{ICONS.iconEdit}</button>
  } else {
    btn =  <button className="btn btn-secondary" onClick={() => activate()} title={TEXT.btn_edit}>{ICONS.iconEdit}</button>
  }

  return btn;

}

export default withStore(saveEdit);