import React from 'react';
import withStore from '~/hocs/withStore';

function completed(props) {
  let {disabled, callback} = props;
  let ICONS = props.stores.icons;
  let TEXT = props.stores.textsStore;
  
  return (
    <button 
      className="btn btn-success"
      onClick={() => callback()} 
      disabled={disabled} 
      title={TEXT.btn_comp}
    >
        {ICONS.iconCompleted}
    </button>
  );

}

export default withStore(completed);